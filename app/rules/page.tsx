"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AlertTriangle, Info, Shield } from "lucide-react"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Sample rules data
const ruleCategories = [
  {
    id: "general",
    title: "General Rules",
    icon: <Info className="text-yellow-500 mr-2" size={20} />,
    rules: [
      {
        id: "g1",
        title: "Respect All Players",
        description:
          "Treat all players with respect. Harassment, discrimination, or bullying of any kind will not be tolerated.",
      },
      {
        id: "g2",
        title: "No Cheating or Exploiting",
        description:
          "Using cheats, hacks, or exploiting bugs is strictly prohibited and will result in an immediate ban.",
      },
      {
        id: "g3",
        title: "Follow Staff Instructions",
        description: "Staff members are here to help. Follow their instructions and treat them with respect.",
      },
      {
        id: "g4",
        title: "No Metagaming",
        description:
          "Using information your character wouldn't know in-game is prohibited (e.g., information from Discord or streams).",
      },
      {
        id: "g5",
        title: "No Powergaming",
        description: "Forcing scenarios on other players or performing unrealistic actions is not allowed.",
      },
    ],
  },
  {
    id: "roleplay",
    title: "Roleplay Rules",
    icon: <Shield className="text-yellow-500 mr-2" size={20} />,
    rules: [
      {
        id: "r1",
        title: "Stay In Character",
        description:
          "Maintain your character's persona at all times while in-game. Use appropriate channels for OOC (Out of Character) communication.",
      },
      {
        id: "r2",
        title: "Value Your Life",
        description:
          "Act as if your character values their life. Don't make unrealistic decisions in dangerous situations.",
      },
      {
        id: "r3",
        title: "No Random Death Match (RDM)",
        description: "Killing players without valid roleplay reason is prohibited.",
      },
      {
        id: "r4",
        title: "No Vehicle Death Match (VDM)",
        description: "Using vehicles as weapons without roleplay context is not allowed.",
      },
      {
        id: "r5",
        title: "Realistic Roleplay",
        description:
          "Keep your actions realistic. If you wouldn't do it in real life, your character probably shouldn't either.",
      },
    ],
  },
  {
    id: "criminal",
    title: "Criminal Activity Rules",
    icon: <AlertTriangle className="text-yellow-500 mr-2" size={20} />,
    rules: [
      {
        id: "c1",
        title: "Robbery Cooldowns",
        description: "After participating in a robbery, you must wait 1 hour before participating in another.",
      },
      {
        id: "c2",
        title: "No Cop Baiting",
        description: "Intentionally provoking police officers without a roleplay reason is prohibited.",
      },
      {
        id: "c3",
        title: "Hostage Rules",
        description: "You may not take more than 5 hostages at once. Hostage situations should not exceed 30 minutes.",
      },
      {
        id: "c4",
        title: "Gang Territory",
        description:
          "Respect established gang territories. Conflicts over territory must have proper roleplay context.",
      },
      {
        id: "c5",
        title: "Illegal Business",
        description:
          "All illegal businesses must maintain secrecy and proper roleplay. No advertising illegal services in public.",
      },
    ],
  },
]

export default function RulesPage() {
  const rulesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Star Wars style scrolling text effect
    gsap.to(".scrolling-text", {
      y: "-100%",
      ease: "power1.inOut",
      duration: 30,
      repeat: -1,
      repeatDelay: 5,
    })

    // Animate rule categories on scroll
    if (rulesRef.current) {
      gsap.from(".rule-category", {
        scrollTrigger: {
          trigger: rulesRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      })
    }
  }, [])

  return (
    <div className="pt-20 min-h-screen bg-black">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2 neon-glow text-center">Server Rules</h1>
        <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
          To ensure a fair and enjoyable experience for everyone, please follow these rules while playing on our server.
        </p>

        {/* Star Wars style intro */}
        <div className="relative h-64 mb-16 overflow-hidden glassmorphism rounded-lg border border-yellow-500/20">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="scrolling-text text-center text-yellow-500 px-8 py-4 w-full">
              <h2 className="text-2xl font-bold mb-4">WELCOME TO GTA5RP</h2>
              <p className="mb-4">
                Our server is dedicated to providing the most immersive roleplay experience possible. The rules listed
                below are designed to ensure that all players can enjoy their time on the server.
              </p>
              <p className="mb-4">
                Remember that the primary goal is to have fun while creating interesting stories and scenarios with
                other players. Respect the roleplay experience of others, and they will respect yours.
              </p>
              <p>
                Breaking these rules may result in warnings, temporary bans, or permanent bans depending on the severity
                and frequency of the violations. If you have any questions about the rules, please contact a staff
                member for clarification.
              </p>
            </div>
          </div>
        </div>

        <div ref={rulesRef} className="max-w-4xl mx-auto">
          {ruleCategories.map((category) => (
            <div
              key={category.id}
              className="rule-category glassmorphism rounded-lg p-6 border border-yellow-500/20 mb-8"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h2 className="text-2xl font-bold text-yellow-500 neon-glow">{category.title}</h2>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {category.rules.map((rule) => (
                  <AccordionItem key={rule.id} value={rule.id} className="border-b border-yellow-500/20 last:border-0">
                    <AccordionTrigger className="hover:text-yellow-500 transition-colors py-4">
                      {rule.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 pb-4">{rule.description}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          <div className="glassmorphism rounded-lg p-6 border border-yellow-500/20 mt-12">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4 neon-glow">Rule Enforcement</h2>
            <p className="text-gray-300 mb-4">
              Our staff team enforces these rules to ensure a fair and enjoyable experience for all players.
              Consequences for breaking rules may include:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Verbal warnings</li>
              <li>Temporary mute or jail</li>
              <li>Temporary ban (1-30 days)</li>
              <li>Permanent ban for severe or repeated violations</li>
            </ul>
            <p className="text-gray-300 mt-4">
              If you believe a rule has been enforced unfairly, you may appeal through our Discord server.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

