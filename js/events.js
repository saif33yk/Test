document.addEventListener("DOMContentLoaded", () => {
  // Event card expansion
  const eventCards = document.querySelectorAll(".event-card")

  eventCards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("expanded")
    })
  })

  // Carousel functionality
  const prevBtn = document.querySelector(".prev-btn")
  const nextBtn = document.querySelector(".next-btn")
  const carousel = document.querySelector(".carousel-container")

  if (carousel && prevBtn && nextBtn) {
    let currentSlide = 0
    const maxSlides = document.querySelectorAll(".carousel-slide").length

    nextBtn.addEventListener("click", () => {
      if (currentSlide < maxSlides - 1) {
        currentSlide++
        updateCarousel()
      }
    })

    prevBtn.addEventListener("click", () => {
      if (currentSlide > 0) {
        currentSlide--
        updateCarousel()
      }
    })

    function updateCarousel() {
      // Update button states
      prevBtn.disabled = currentSlide === 0
      nextBtn.disabled = currentSlide === maxSlides - 1

      // Move carousel
      if (typeof gsap !== "undefined") {
        gsap.to(carousel, {
          x: -currentSlide * 100 + "%",
          duration: 0.7,
          ease: "power2.out",
        })
      } else {
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`
      }
    }

    // Initial button state
    updateCarousel()
  }

  // GSAP (GreenSock Animation Platform) is used for animations.
  // Ensure GSAP is properly imported or included in your project.
  // For example, you can include it via CDN:
  // <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
  let gsap // Declare gsap variable

  if (typeof gsap !== "undefined") {
    // Animate events on scroll
    gsap.from(".event-card", {
      scrollTrigger: {
        trigger: ".events-section",
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.6,
      ease: "power3.out",
    })

    // Countdown timer animation
    gsap.to(".countdown-number", {
      scale: 1.1,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.2,
    })
  }

  // Countdown timer functionality
  function updateCountdown() {
    const now = new Date()
    const eventDate = new Date(now)
    eventDate.setDate(eventDate.getDate() + 3) // Example: event is 3 days from now
    eventDate.setHours(eventDate.getHours() + 12) // Add 12 hours
    eventDate.setMinutes(eventDate.getMinutes() + 45) // Add 45 minutes

    const diff = eventDate - now

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)

    const countdownElements = document.querySelectorAll(".countdown-number")
    if (countdownElements.length >= 4) {
      countdownElements[0].querySelector("span:first-child").textContent = days
      countdownElements[1].querySelector("span:first-child").textContent = hours
      countdownElements[2].querySelector("span:first-child").textContent = minutes
      countdownElements[3].querySelector("span:first-child").textContent = seconds
    }
  }

  // Update countdown every second
  if (document.querySelector(".countdown-timer")) {
    updateCountdown()
    setInterval(updateCountdown, 1000)
  }
})

