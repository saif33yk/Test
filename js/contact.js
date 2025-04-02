document.addEventListener("DOMContentLoaded", () => {
  // Import gsap if not already available
  if (typeof gsap === "undefined") {
    console.error("GSAP is not defined. Please include GSAP in your project.")
    return // Exit the function if GSAP is not available
  }

  // Animate social media buttons
  if (typeof gsap !== "undefined") {
    gsap.from(".social-card", {
      scrollTrigger: {
        trigger: ".socials-section",
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
    })

    gsap.from(".form-element", {
      scrollTrigger: {
        trigger: ".contact-form",
        start: "top 80%",
      },
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.6,
      ease: "power3.out",
    })

    // Live notification animation
    gsap.to(".notification", {
      y: -10,
      opacity: 1,
      duration: 0.5,
      delay: 2,
      ease: "power3.out",
      onComplete: () => {
        gsap.to(".notification", {
          y: 0,
          opacity: 0,
          duration: 0.5,
          delay: 5,
          ease: "power3.in",
        })
      },
    })
  }

  // Form validation
  const contactForm = document.querySelector(".contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Simple validation
      let valid = true
      const inputs = contactForm.querySelectorAll("input, textarea")

      inputs.forEach((input) => {
        if (!input.value.trim()) {
          valid = false
          input.classList.add("error")
        } else {
          input.classList.remove("error")
        }
      })

      if (valid) {
        // Show success message
        const successMessage = document.createElement("div")
        successMessage.className = "success-message"
        successMessage.textContent = "Message sent successfully!"

        contactForm.appendChild(successMessage)

        // Reset form
        contactForm.reset()

        // Remove success message after 3 seconds
        setTimeout(() => {
          contactForm.removeChild(successMessage)
        }, 3000)
      }
    })
  }
})

