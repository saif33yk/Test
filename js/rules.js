import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

document.addEventListener("DOMContentLoaded", () => {
  // Star Wars style scrolling text effect
  if (typeof gsap !== "undefined") {
    gsap.to(".scrolling-text", {
      y: "-100%",
      ease: "power1.inOut",
      duration: 30,
      repeat: -1,
      repeatDelay: 5,
    })

    // Animate rule categories on scroll
    gsap.from(".rule-category", {
      scrollTrigger: {
        trigger: ".rules-section",
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
    })
  }

  // Rules accordion functionality
  const ruleHeaders = document.querySelectorAll(".rule-header")

  ruleHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const ruleItem = header.parentElement

      // Close all other rule items
      document.querySelectorAll(".rule-item").forEach((item) => {
        if (item !== ruleItem) {
          item.classList.remove("active")
        }
      })

      // Toggle current rule item
      ruleItem.classList.toggle("active")
    })
  })
})

