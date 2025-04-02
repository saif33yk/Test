"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, Trophy, AlertTriangle, ChevronRight, ChevronLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Sample events data
const events = [
  {
    id: 1,
    title: "Street Racing Championship",
    date: "April 15, 2025",
    time: "8:00 PM EST",
    location: "Los Santos Highway",
    description:
      "Compete in the biggest street racing event of the year. Multiple race categories with cash prizes for winners.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Racing",
    participants: 32,
    prize: "$100,000",
    isUpcoming: true,
  },
  {
    id: 2,
    title: "Casino Grand Opening",
    date: "April 20, 2025",
    time: "7:00 PM EST",
    location: "Vinewood Casino",
    description:
      "Join us for the grand opening of the new Vinewood Casino. Free chips for early attendees and special high-stakes games.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Social",
    participants: 100,
    prize: "Exclusive Items",
    isUpcoming: true,
  },
  {
    id: 3,
    title: "Heist Challenge",
    date: "April 25, 2025",
    time: "9:00 PM EST",
    location: "Secret Location",
    description:
      "Form a team and compete to complete a complex heist scenario faster than other teams. Limited spots available.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Criminal",
    participants: 20,
    prize: "$250,000",
    isUpcoming: true,
  },
  {
    id: 4,
    title: "Police vs Criminals",
    date: "May 1, 2025",
    time: "8:30 PM EST",
    location: "Downtown Los Santos",
    description: "A server-wide event where police and criminals engage in an epic battle for control of the city.",
    image: "/placeholder.svg?height=400&width=600",
    category: "PvP",
    participants: 64,
    prize: "Special Weapons",
    isUpcoming: true,
  },
  {
    id: 5,
    title: "Car Show & Auction",
    date: "May 5, 2025",
    time: "7:00 PM EST",
    location: "Los Santos Customs",
    description:
      "Show off your custom vehicles and bid on rare cars. Prizes for best customization in various categories.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Social",
    participants: 50,
    prize: "Rare Vehicle",
    isUpcoming: true,
  },
  {
    id: 6,
    title: "Survival Challenge",
    date: "March 15, 2025",
    time: "9:00 PM EST",
    location: "Mount Chiliad",
    description: "Survive in the wilderness with limited resources. Last player standing wins.",
    image: "/placeholder.svg?height=400&width=600",
    category: "PvP",
    participants: 30,
    prize: "$50,000",
    isUpcoming: false,
  },
  {
    id: 7,
    title: "Talent Show",
    date: "March 10, 2025",
    time: "8:00 PM EST",
    location: "Vinewood Bowl",
    description: "Show off your talents and creativity. Categories include music, comedy, stunts, and more.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Social",
    participants: 25,
    prize: "$25,000",
    isUpcoming: false,
  },
  {
    id: 8,
    title: "Fight Club Tournament",
    date: "March 5, 2025",
    time: "10:00 PM EST",
    location: "Underground Arena",
    description: "Compete in a hand-to-hand combat tournament. No weapons allowed.",
    image: "/placeholder.svg?height=400&width=600",
    category: "PvP",
    participants: 16,
    prize: "$75,000",
    isUpcoming: false,
  },
]

export default function EventsPage() {
  const eventsRef = useRef<HTMLDivElement>(null)
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const maxSlides = Math.ceil(events.filter((e) => e.isUpcoming).length / 3)

  const nextSlide = () => {
    if (currentSlide < maxSlides - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  useEffect(() => {
    // Animate events on scroll
    if (eventsRef.current) {
      gsap.from(".event-card", {
        scrollTrigger: {
          trigger: eventsRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
      })
    }

    // Countdown timer animation
    const countdownEl = document.querySelector(".countdown-timer")
    if (countdownEl) {
      gsap.to(".countdown-number", {
        scale: 1.1,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
      })
    }

    // Carousel animation
    gsap.to(".carousel-container", {
      x: -currentSlide * 100 + "%",
      duration: 0.7,
      ease: "power2.out",
    })
  }, [currentSlide])

  return (
    <div className="pt-20 min-h-screen bg-black">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2 neon-glow text-center">Server Events</h1>
        <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
          Join our exciting community events with prizes, challenges, and unforgettable roleplay experiences.
        </p>

        {/* Featured Event with Countdown */}
        <div className="glassmorphism rounded-lg border border-yellow-500/20 overflow-hidden mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <Image src={events[0].image || "/placeholder.svg"} alt={events[0].title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
            </div>

            <div className="p-6 md:p-8">
              <Badge className="mb-2 bg-yellow-500/20 text-yellow-500 border border-yellow-500/50">
                Featured Event
              </Badge>

              <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-2 neon-glow">{events[0].title}</h2>

              <p className="text-gray-300 mb-4">{events[0].description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-300">
                  <Calendar size={16} className="text-yellow-500 mr-2" />
                  <span>{events[0].date}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock size={16} className="text-yellow-500 mr-2" />
                  <span>{events[0].time}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin size={16} className="text-yellow-500 mr-2" />
                  <span>{events[0].location}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Trophy size={16} className="text-yellow-500 mr-2" />
                  <span>{events[0].prize}</span>
                </div>
              </div>

              <div className="countdown-timer flex justify-between items-center mb-6 p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                <div className="text-sm text-gray-300">Event starts in:</div>
                <div className="flex space-x-2">
                  {[3, 12, 45, 30].map((num, i) => (
                    <div key={i} className="countdown-number flex flex-col items-center">
                      <span className="text-xl font-bold text-yellow-500">{num}</span>
                      <span className="text-xs text-gray-400">
                        {i === 0 ? "Days" : i === 1 ? "Hours" : i === 2 ? "Mins" : "Secs"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold animate-pulse-slow hover:animate-none transition-all duration-300 hover:scale-105 neon-border">
                Register Now
              </Button>
            </div>
          </div>
        </div>

        {/* Upcoming Events Carousel */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-yellow-500 neon-glow">Upcoming Events</h2>

            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/10 disabled:opacity-50"
                onClick={prevSlide}
                disabled={currentSlide === 0}
              >
                <ChevronLeft size={18} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/10 disabled:opacity-50"
                onClick={nextSlide}
                disabled={currentSlide === maxSlides - 1}
              >
                <ChevronRight size={18} />
              </Button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              className="carousel-container flex transition-transform duration-500"
              style={{ width: `${maxSlides * 100}%` }}
            >
              {Array.from({ length: maxSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="flex-shrink-0 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {events
                    .filter((event) => event.isUpcoming)
                    .slice(slideIndex * 3, slideIndex * 3 + 3)
                    .map((event) => (
                      <div
                        key={event.id}
                        className="event-card glassmorphism rounded-lg border border-yellow-500/20 overflow-hidden transition-all duration-300 hover:border-yellow-500/50 hover:scale-[1.02]"
                        onClick={() => setSelectedEvent(event.id === selectedEvent ? null : event.id)}
                      >
                        <div className="relative h-48">
                          <Image
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-2 left-2">
                            <Badge className="bg-yellow-500/80 text-black">{event.category}</Badge>
                          </div>
                        </div>

                        <div className="p-4">
                          <h3 className="text-lg font-bold text-yellow-500 mb-2">{event.title}</h3>

                          <div className="flex justify-between text-sm text-gray-300 mb-3">
                            <div className="flex items-center">
                              <Calendar size={14} className="mr-1" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center">
                              <Users size={14} className="mr-1" />
                              <span>{event.participants} slots</span>
                            </div>
                          </div>

                          {selectedEvent === event.id && (
                            <div className="mt-3 pt-3 border-t border-yellow-500/20 animate-fadeIn">
                              <p className="text-gray-300 text-sm mb-3">{event.description}</p>
                              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                                Register
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Past Events */}
        <div ref={eventsRef}>
          <h2 className="text-2xl font-bold text-yellow-500 mb-8 neon-glow">Past Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events
              .filter((event) => !event.isUpcoming)
              .map((event) => (
                <div
                  key={event.id}
                  className="event-card glassmorphism rounded-lg border border-yellow-500/20 overflow-hidden transition-all duration-300 hover:border-yellow-500/50 opacity-80 hover:opacity-100"
                >
                  <div className="relative h-48">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-gray-700 text-gray-300">{event.category}</Badge>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Badge className="bg-black/70 text-white px-3 py-1 text-sm">Completed</Badge>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-300 mb-2">{event.title}</h3>

                    <div className="flex justify-between text-sm text-gray-400 mb-3">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Trophy size={14} className="mr-1" />
                        <span>{event.prize}</span>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full border-gray-500 text-gray-300 hover:bg-gray-700">
                      View Results
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Event Rules */}
        <div className="mt-16 glassmorphism rounded-lg p-6 border border-yellow-500/20">
          <div className="flex items-start mb-4">
            <AlertTriangle className="text-yellow-500 mr-3 flex-shrink-0 mt-1" size={20} />
            <h2 className="text-2xl font-bold text-yellow-500 neon-glow">Event Rules & Guidelines</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Registration</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                <li>Register for events through our Discord or in-game.</li>
                <li>Some events have limited slots and require early registration.</li>
                <li>Registration closes 1 hour before the event starts.</li>
                <li>No-shows may be penalized for future event registrations.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">Participation</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                <li>Be online at least 15 minutes before the event starts.</li>
                <li>Follow staff instructions during the event.</li>
                <li>Maintain roleplay standards during events.</li>
                <li>Cheating or exploiting will result in disqualification and possible ban.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">Prizes</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                <li>Prizes are awarded at the end of each event.</li>
                <li>Some prizes may be delivered within 24 hours after the event.</li>
                <li>Prize distribution is final and determined by event staff.</li>
                <li>Unclaimed prizes expire after 7 days.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">Streaming</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                <li>Streaming events is allowed and encouraged.</li>
                <li>Use the hashtag #GTA5RP when streaming our events.</li>
                <li>Some events may have special streaming rules.</li>
                <li>Featured streamers may receive additional perks.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

