"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Circle, ExternalLink, Download, MessageSquare, Users, Settings } from "lucide-react"
import Image from "next/image"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Sample steps data
const joinSteps = [
  {
    id: 1,
    title: "Join Our Discord",
    description: "Connect with our community and get the latest server updates.",
    icon: <MessageSquare className="text-yellow-500" size={24} />,
    action: {
      text: "Join Discord",
      url: "#",
    },
  },
  {
    id: 2,
    title: "Download FiveM",
    description: "FiveM is required to connect to our roleplay server.",
    icon: <Download className="text-yellow-500" size={24} />,
    action: {
      text: "Download FiveM",
      url: "https://fivem.net/",
    },
  },
  {
    id: 3,
    title: "Create a Character",
    description: "Fill out our character application form on Discord.",
    icon: <Users className="text-yellow-500" size={24} />,
    action: {
      text: "Character Form",
      url: "#",
    },
  },
  {
    id: 4,
    title: "Server Configuration",
    description: "Set up your game with our recommended settings.",
    icon: <Settings className="text-yellow-500" size={24} />,
    action: {
      text: "View Settings",
      url: "#",
    },
  },
  {
    id: 5,
    title: "Connect to Server",
    description: "Use our server code or find us in the FiveM server browser.",
    icon: <ExternalLink className="text-yellow-500" size={24} />,
    action: {
      text: "Server Info",
      url: "#",
    },
  },
]

export default function JoinPage() {
  const joinRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  const toggleStepCompletion = (stepId: number) => {
    if (completedSteps.includes(stepId)) {
      setCompletedSteps(completedSteps.filter((id) => id !== stepId))
    } else {
      setCompletedSteps([...completedSteps, stepId])
    }
  }

  useEffect(() => {
    // Animate steps on scroll
    if (joinRef.current) {
      gsap.from(".join-step", {
        scrollTrigger: {
          trigger: joinRef.current,
          start: "top 80%",
        },
        opacity: 0,
        x: -50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      })
    }

    // Animate checkmarks when completed
    completedSteps.forEach((stepId) => {
      gsap.from(`.checkmark-${stepId}`, {
        scale: 0,
        rotation: -45,
        duration: 0.5,
        ease: "back.out(1.7)",
      })
    })
  }, [completedSteps])

  return (
    <div className="pt-20 min-h-screen bg-black">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2 neon-glow text-center">How to Join</h1>
        <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
          Follow these simple steps to join our GTA 5 roleplay server and start your adventure.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Steps */}
          <div ref={joinRef} className="order-2 lg:order-1">
            {joinSteps.map((step) => (
              <div
                key={step.id}
                className="join-step flex items-start mb-8 glassmorphism rounded-lg p-6 border border-yellow-500/20 transition-all duration-300 hover:border-yellow-500/50 cursor-pointer"
                onClick={() => toggleStepCompletion(step.id)}
              >
                <div className="mr-4 mt-1">
                  {completedSteps.includes(step.id) ? (
                    <CheckCircle2 className={`text-yellow-500 checkmark-${step.id}`} size={24} />
                  ) : (
                    <Circle className="text-gray-500" size={24} />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <div className="mr-3">{step.icon}</div>
                    <h3
                      className={`text-xl font-bold ${completedSteps.includes(step.id) ? "text-yellow-500 neon-glow" : "text-white"}`}
                    >
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 mb-4">{step.description}</p>

                  <Button
                    variant="outline"
                    className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(step.action.url, "_blank")
                    }}
                  >
                    {step.action.text} <ExternalLink size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Video/Image Section */}
          <div className="order-1 lg:order-2">
            <div className="sticky top-24 glassmorphism rounded-lg p-4 border border-yellow-500/20 overflow-hidden">
              <div className="aspect-video relative rounded overflow-hidden">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="GTA 5 Roleplay Gameplay"
                  width={1280}
                  height={720}
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
                    onClick={() => {
                      if (videoRef.current) {
                        videoRef.current.play()
                      }
                    }}
                  >
                    Watch Trailer
                  </Button>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-bold text-yellow-500 mb-2">Server Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-black/50 p-3 rounded border border-yellow-500/20">
                    <p className="text-sm text-gray-400">Server Name</p>
                    <p className="text-white font-medium">GTA5RP Official</p>
                  </div>
                  <div className="bg-black/50 p-3 rounded border border-yellow-500/20">
                    <p className="text-sm text-gray-400">Server Code</p>
                    <p className="text-white font-medium">gta5rp</p>
                  </div>
                  <div className="bg-black/50 p-3 rounded border border-yellow-500/20">
                    <p className="text-sm text-gray-400">Player Slots</p>
                    <p className="text-white font-medium">128</p>
                  </div>
                  <div className="bg-black/50 p-3 rounded border border-yellow-500/20">
                    <p className="text-sm text-gray-400">Discord Members</p>
                    <p className="text-white font-medium">10,000+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-yellow-500 mb-8 neon-glow text-center">Frequently Asked Questions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "Do I need to own GTA 5 to play?",
                answer: "Yes, you need a legitimate copy of GTA 5 for PC to play on our FiveM server.",
              },
              {
                question: "Is there an age requirement?",
                answer: "Players must be 18+ to join our server due to mature content and roleplay scenarios.",
              },
              {
                question: "Do I need a microphone?",
                answer: "Yes, a working microphone is required for proper roleplay communication.",
              },
              {
                question: "How do I apply for whitelisted jobs?",
                answer: "After joining, you can apply for whitelisted jobs through our Discord server.",
              },
              {
                question: "Are there custom vehicles and items?",
                answer: "Yes, our server features many custom vehicles, weapons, and items not found in the base game.",
              },
              {
                question: "How often are server updates?",
                answer: "We update the server weekly with new content and bug fixes.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="glassmorphism rounded-lg p-6 border border-yellow-500/20 transition-all duration-300 hover:border-yellow-500/50"
              >
                <h3 className="text-lg font-bold text-yellow-500 mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

