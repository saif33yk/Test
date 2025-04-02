"use client"

import React from "react"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, Gavel, HelpCircle, Github, Twitter, Instagram } from "lucide-react"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Sample staff data
const staffMembers = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Server Owner",
    avatar: "/placeholder.svg?height=200&width=200",
    description: "Founder and lead developer of the server with 5 years of experience in GTA RP.",
    badges: ["Founder", "Developer"],
    socials: {
      twitter: "#",
      github: "#",
      instagram: "#",
    },
    isHighRanking: true,
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Lead Administrator",
    avatar: "/placeholder.svg?height=200&width=200",
    description: "Manages the admin team and oversees server operations.",
    badges: ["Admin", "Support"],
    socials: {
      twitter: "#",
      instagram: "#",
    },
    isHighRanking: true,
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Lead Developer",
    avatar: "/placeholder.svg?height=200&width=200",
    description: "Responsible for custom scripts and technical improvements.",
    badges: ["Developer", "Scripter"],
    socials: {
      github: "#",
      twitter: "#",
    },
    isHighRanking: true,
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "Community Manager",
    avatar: "/placeholder.svg?height=200&width=200",
    description: "Handles community events and player relations.",
    badges: ["Events", "Support"],
    socials: {
      instagram: "#",
      twitter: "#",
    },
    isHighRanking: false,
  },
  {
    id: 5,
    name: "David Kim",
    role: "Moderator",
    avatar: "/placeholder.svg?height=200&width=200",
    description: "Ensures server rules are followed and helps resolve conflicts.",
    badges: ["Moderator"],
    socials: {
      twitter: "#",
    },
    isHighRanking: false,
  },
  {
    id: 6,
    name: "Jessica Taylor",
    role: "Support Specialist",
    avatar: "/placeholder.svg?height=200&width=200",
    description: "Assists new players and provides technical support.",
    badges: ["Support"],
    socials: {
      instagram: "#",
    },
    isHighRanking: false,
  },
  {
    id: 7,
    name: "Robert Wilson",
    role: "Event Coordinator",
    avatar: "/placeholder.svg?height=200&width=200",
    description: "Plans and executes special server events and activities.",
    badges: ["Events"],
    socials: {
      twitter: "#",
    },
    isHighRanking: false,
  },
  {
    id: 8,
    name: "Lisa Martinez",
    role: "Content Creator",
    avatar: "/placeholder.svg?height=200&width=200",
    description: "Creates promotional materials and in-game content.",
    badges: ["Content"],
    socials: {
      instagram: "#",
      twitter: "#",
    },
    isHighRanking: false,
  },
]

export default function StaffPage() {
  const staffRef = useRef<HTMLDivElement>(null)
  const [expandedStaff, setExpandedStaff] = React.useState<number | null>(null)

  useEffect(() => {
    // Animate staff cards on scroll
    if (staffRef.current) {
      gsap.from(".staff-card", {
        scrollTrigger: {
          trigger: staffRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      })
    }

    // Golden shimmer effect for high-ranking staff
    gsap.to(".high-ranking", {
      boxShadow: "0 0 15px rgba(255, 215, 0, 0.7), 0 0 30px rgba(255, 215, 0, 0.4), 0 0 45px rgba(255, 215, 0, 0.2)",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    })
  }, [])

  const toggleExpand = (id: number) => {
    if (expandedStaff === id) {
      setExpandedStaff(null)
    } else {
      setExpandedStaff(id)
    }
  }

  return (
    <div className="pt-20 min-h-screen bg-black">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2 neon-glow text-center">Our Staff Team</h1>
        <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
          Meet the dedicated team that keeps our server running smoothly and ensures an amazing experience for all
          players.
        </p>

        <div ref={staffRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {staffMembers.map((member) => (
            <div
              key={member.id}
              className={`staff-card glassmorphism rounded-lg p-6 border border-yellow-500/20 transition-all duration-300 hover:border-yellow-500/50 ${
                member.isHighRanking ? "high-ranking" : ""
              } ${expandedStaff === member.id ? "scale-105 z-10" : "hover:scale-[1.02]"}`}
              onClick={() => toggleExpand(member.id)}
            >
              <div className="relative mb-4 mx-auto w-32 h-32 overflow-hidden rounded-full border-2 border-yellow-500/50">
                <Image
                  src={member.avatar || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <h3 className="text-xl font-bold text-yellow-500 mb-1 text-center neon-glow">{member.name}</h3>

              <p className="text-gray-400 text-center mb-3">{member.role}</p>

              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {member.badges.map((badge, index) => (
                  <Badge
                    key={index}
                    className="bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30 border border-yellow-500/50"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>

              {expandedStaff === member.id && (
                <div className="mt-4 animate-fadeIn">
                  <p className="text-gray-300 text-sm mb-4">{member.description}</p>

                  <div className="flex justify-center space-x-3">
                    {member.socials.github && (
                      <a href={member.socials.github} className="text-gray-400 hover:text-yellow-500 transition-colors">
                        <Github size={18} />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a
                        href={member.socials.twitter}
                        className="text-gray-400 hover:text-yellow-500 transition-colors"
                      >
                        <Twitter size={18} />
                      </a>
                    )}
                    {member.socials.instagram && (
                      <a
                        href={member.socials.instagram}
                        className="text-gray-400 hover:text-yellow-500 transition-colors"
                      >
                        <Instagram size={18} />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto glassmorphism rounded-lg p-8 border border-yellow-500/20">
          <h2 className="text-2xl font-bold text-yellow-500 mb-4 neon-glow">Join Our Team</h2>
          <p className="text-gray-300 mb-6">
            We're always looking for dedicated individuals to join our staff team. If you're passionate about GTA RP and
            want to help make our server even better, consider applying for a staff position.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <Shield className="text-yellow-500 mr-3 mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="font-medium text-white">Moderator</h3>
                <p className="text-sm text-gray-400">Help enforce server rules and assist players</p>
              </div>
            </div>
            <div className="flex items-start">
              <HelpCircle className="text-yellow-500 mr-3 mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="font-medium text-white">Support Staff</h3>
                <p className="text-sm text-gray-400">Provide assistance to new and existing players</p>
              </div>
            </div>
            <div className="flex items-start">
              <Users className="text-yellow-500 mr-3 mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="font-medium text-white">Event Coordinator</h3>
                <p className="text-sm text-gray-400">Plan and run exciting server events</p>
              </div>
            </div>
            <div className="flex items-start">
              <Gavel className="text-yellow-500 mr-3 mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="font-medium text-white">Administrator</h3>
                <p className="text-sm text-gray-400">Experienced staff can apply for admin positions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

