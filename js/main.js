document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const mobileNav = document.querySelector(".mobile-nav")

  menuToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("active")

    // Change icon
    const icon = menuToggle.querySelector("i")
    if (mobileNav.classList.contains("active")) {
      icon.classList.remove("fa-bars")
      icon.classList.add("fa-times")
    } else {
      icon.classList.remove("fa-times")
      icon.classList.add("fa-bars")
    }
  })

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })

  // Initialize GSAP animations
  let gsap // Declare gsap variable
  if (typeof gsap !== "undefined") {
    // Hero animations
    if (document.querySelector(".hero")) {
      gsap.from(".hero-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
      })

      gsap.from(".hero-button", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.6,
      })

      // Animated elements
      gsap.to(".palm-tree", {
        y: -15,
        rotation: 2,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      })

      gsap.to(".car", {
        x: 20,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      })

      // Particle effect
      createParticles()
    }

    // Features section animations
    if (document.querySelector(".features")) {
      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: ".features",
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      })
    }

    // Stats section animations
    if (document.querySelector(".stats")) {
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: ".stats",
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      })
    }

    // Updates preview animations
    if (document.querySelector(".updates-preview")) {
      gsap.from(".update-card", {
        scrollTrigger: {
          trigger: ".updates-preview",
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      })
    }

    // CTA section animations
    if (document.querySelector(".cta")) {
      gsap.from(".cta-content", {
        scrollTrigger: {
          trigger: ".cta",
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      })
    }
  }

  // Create particle effect for hero section
  function createParticles() {
    const hero = document.querySelector(".hero")
    if (!hero) return

    const createParticle = () => {
      const particle = document.createElement("div")
      particle.className = "particle"
      particle.style.position = "absolute"
      particle.style.width = "2px"
      particle.style.height = "2px"
      particle.style.backgroundColor = "rgba(255, 255, 0, 0.5)"
      particle.style.borderRadius = "50%"

      // Random position
      const x = Math.random() * hero.offsetWidth
      const y = Math.random() * hero.offsetHeight

      particle.style.left = `${x}px`
      particle.style.top = `${y}px`

      hero.appendChild(particle)

      // Animate particle
      gsap.to(particle, {
        opacity: 0,
        y: -20 - Math.random() * 30,
        x: (Math.random() - 0.5) * 20,
        duration: 3 + Math.random() * 5,
        ease: "power1.out",
        onComplete: () => {
          if (particle.parentNode) {
            particle.parentNode.removeChild(particle)
          }
        },
      })
    }

    // Create particles at intervals
    setInterval(createParticle, 200)
  }
})

