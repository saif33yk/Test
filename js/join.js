document.addEventListener("DOMContentLoaded", () => {
  // Step completion toggle
  const joinSteps = document.querySelectorAll(".join-step")

  joinSteps.forEach((step) => {
    step.addEventListener("click", () => {
      step.classList.toggle("completed")

      // Animate checkmark when completed
      if (step.classList.contains("completed") && typeof gsap !== "undefined") {
        const checkmark = step.querySelector(".checked")
        gsap.from(checkmark, {
          scale: 0,
          rotation: -45,
          duration: 0.5,
          ease: "back.out(1.7)",
        })
      }
    })
  })

  // Video play button
  const playBtn = document.querySelector(".play-btn")
  if (playBtn) {
    playBtn.addEventListener("click", () => {
      const videoContainer = document.querySelector(".video-container")
      const placeholder = videoContainer.querySelector(".video-placeholder")

      // Create video element
      const video = document.createElement("video")
      video.src = "video/gameplay.mp4" // Replace with actual video path
      video.controls = true
      video.autoplay = true
      video.className = "video-player"
      video.style.width = "100%"
      video.style.height = "100%"
      video.style.objectFit = "cover"

      // Replace placeholder with video
      videoContainer.removeChild(placeholder)
      videoContainer.removeChild(playBtn)
      videoContainer.appendChild(video)
    })
  }

  // Animate steps on scroll
  if (typeof gsap !== "undefined") {
    gsap.from(".join-step", {
      scrollTrigger: {
        trigger: ".join-section",
        start: "top 80%",
      },
      opacity: 0,
      x: -50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
    })

    gsap.from(".info-card", {
      scrollTrigger: {
        trigger: ".info-column",
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
    })

    gsap.from(".faq-item", {
      scrollTrigger: {
        trigger: ".faq-section",
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.6,
      ease: "power3.out",
    })
  }
})

