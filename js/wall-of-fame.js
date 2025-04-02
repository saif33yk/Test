document.addEventListener("DOMContentLoaded", () => {
  // Import GSAP (if not already imported) or declare it
  if (typeof gsap === "undefined") {
    console.error("GSAP is not defined. Please include GSAP in your project.")
    return // Exit the function if GSAP is not available
  }

  // Animate top 3 players
  if (typeof gsap !== "undefined") {
    gsap.from(".top-player", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    })

    // Animate leaderboard players
    gsap.from(".player-card", {
      scrollTrigger: {
        trigger: ".leaderboard-section",
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.6,
      ease: "power3.out",
    })

    // Neon name animation for top players
    gsap.to(".neon-name", {
      textShadow: "0 0 10px rgba(255, 255, 0, 0.7), 0 0 20px rgba(255, 255, 0, 0.5), 0 0 30px rgba(255, 255, 0, 0.3)",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    })
  }

  // Player card expansion
  const playerCards = document.querySelectorAll(".player-card")

  playerCards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("expanded")
    })
  })
})

