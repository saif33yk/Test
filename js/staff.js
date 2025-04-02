document.addEventListener("DOMContentLoaded", () => {
  // Staff card expansion
  const staffCards = document.querySelectorAll(".staff-card")

  staffCards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("expanded")
    })
  })

  // High-ranking staff glow effect
  if (typeof gsap !== "undefined") {
    try {
      gsap.to(".high-ranking", {
        boxShadow: "0 0 15px rgba(255, 215, 0, 0.7), 0 0 30px rgba(255, 215, 0, 0.4), 0 0 45px rgba(255, 215, 0, 0.2)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })

      // Animate staff cards on scroll
      gsap.from(".staff-card", {
        scrollTrigger: {
          trigger: ".staff-section",
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      })
    } catch (error) {
      console.error("GSAP is not loaded or an error occurred:", error)
    }
  } else {
    console.warn("GSAP is not loaded. Animations will not run.")
  }
})

