"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { MessageSquare, Youtube, Instagram, Twitter, Twitch, Facebook, Mail, HelpCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Sample social media data
const socialLinks = [
  {
    id: "discord",
    name: "Discord",
    url: "#",
    icon: <MessageSquare size={24} />,
    color: "bg-[#5865F2]",
    members: "10,000+",
  },
  {
    id: "youtube",
    name: "YouTube",
    url: "#",
    icon: <Youtube size={24} />,
    color: "bg-[#FF0000]",
    members: "5,000+",
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "#",
    icon: <Instagram size={24} />,
    color: "bg-[#E1306C]",
    members: "3,500+",
  },
  {
    id: "twitter",
    name: "Twitter",
    url: "#",
    icon: <Twitter size={24} />,
    color: "bg-[#1DA1F2]",
    members: "2,800+",
  },
  {
    id: "twitch",
    name: "Twitch",
    url: "#",
    icon: <Twitch size={24} />,
    color: "bg-[#6441A4]",
    members: "1,200+",
  },
  {
    id: "facebook",
    name: "Facebook",
    url: "#",
    icon: <Facebook size={24} />,
    color: "bg-[#1877F2]",
    members: "4,500+",
  },
]

export default function ContactPage() {
  const socialsRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    // Animate social media buttons
    if (socialsRef.current) {
      gsap.from(".social-button", {
        scrollTrigger: {
          trigger: socialsRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      })
    }

    // Animate form elements
    if (formRef.current) {
      gsap.from(".form-element", {
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
      })
    }

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
  }, [])

  return (
    <div className="pt-20 min-h-screen bg-black">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2 neon-glow text-center">Connect With Us</h1>
        <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
          Join our community on social media or reach out to our support team for assistance.
        </p>

        {/* Social Media Section */}
        <div ref={socialsRef} className="max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-yellow-500 mb-8 neon-glow text-center">Social Media</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-button glassmorphism rounded-lg p-6 border border-yellow-500/20 transition-all duration-300 hover:border-yellow-500/50 hover:scale-105 group"
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`${social.color} p-3 rounded-full mr-4 text-white transition-transform duration-300 group-hover:scale-110`}
                  >
                    {social.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-500 transition-colors">
                      {social.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{social.members} followers</p>
                  </div>
                </div>

                <div className="relative">
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold">Follow Us</Button>

                  {social.id === "discord" && (
                    <div className="notification absolute -top-12 left-0 right-0 bg-yellow-500 text-black text-sm py-2 px-4 rounded opacity-0 translate-y-2">
                      <div className="flex items-center">
                        <span className="animate-pulse mr-2">●</span>
                        <span>New Event in Discord!</span>
                      </div>
                    </div>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-3xl mx-auto">
          <div className="glassmorphism rounded-lg p-8 border border-yellow-500/20">
            <h2 className="text-2xl font-bold text-yellow-500 mb-6 neon-glow">Contact Support</h2>

            <form ref={formRef} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-element">
                  <label htmlFor="name" className="block text-white mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-black/50 border-yellow-500/30 focus:border-yellow-500"
                  />
                </div>

                <div className="form-element">
                  <label htmlFor="email" className="block text-white mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="bg-black/50 border-yellow-500/30 focus:border-yellow-500"
                  />
                </div>
              </div>

              <div className="form-element">
                <label htmlFor="subject" className="block text-white mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="How can we help?"
                  className="bg-black/50 border-yellow-500/30 focus:border-yellow-500"
                />
              </div>

              <div className="form-element">
                <label htmlFor="message" className="block text-white mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Describe your issue or question..."
                  className="bg-black/50 border-yellow-500/30 focus:border-yellow-500 min-h-[150px]"
                />
              </div>

              <div className="form-element">
                <Button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-6 text-lg animate-pulse-slow hover:animate-none transition-all duration-300 hover:scale-105 neon-border"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          {/* Support Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glassmorphism rounded-lg p-6 border border-yellow-500/20">
              <div className="flex items-center mb-4">
                <Mail className="text-yellow-500 mr-3" size={24} />
                <h3 className="text-xl font-bold text-white">Email Support</h3>
              </div>
              <p className="text-gray-300 mb-2">For general inquiries:</p>
              <p className="text-yellow-500">support@gta5rp.com</p>
            </div>

            <div className="glassmorphism rounded-lg p-6 border border-yellow-500/20">
              <div className="flex items-center mb-4">
                <HelpCircle className="text-yellow-500 mr-3" size={24} />
                <h3 className="text-xl font-bold text-white">Help Center</h3>
              </div>
              <p className="text-gray-300 mb-2">Check our knowledge base:</p>
              <p className="text-yellow-500">help.gta5rp.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

