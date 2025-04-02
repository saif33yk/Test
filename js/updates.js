document.addEventListener("DOMContentLoaded", () => {
  // Hacker-style text animation
  const hackerTextElements = document.querySelectorAll(".hacker-text")

  hackerTextElements.forEach((element) => {
    const originalText = element.textContent
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    let interval = null
    let iteration = 0

    const startAnimation = () => {
      clearInterval(interval)

      interval = setInterval(() => {
        element.textContent = originalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index]
            }
            return letters[Math.floor(Math.random() * 26)]
          })
          .join("")

        if (iteration >= originalText.length) {
          clearInterval(interval)
          return
        }

        iteration += 1 / 3
      }, 30)
    }

    // Initial animation
    startAnimation()

    // Restart animation on hover
    element.addEventListener("mouseover", () => {
      iteration = 0
      startAnimation()
    })
  })

  // Animate updates on scroll
  if (typeof gsap !== "undefined") {
    gsap.registerPlugin(ScrollTrigger) // Ensure ScrollTrigger is registered

    gsap.from(".update-item", {
      scrollTrigger: {
        trigger: ".updates-section",
        start: "top 80%",
        // markers: true // For debugging purposes
      },
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
    })
  }
})

