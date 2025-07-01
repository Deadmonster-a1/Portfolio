"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Zap,
  Brain,
  Terminal,
  Cpu,
  Database,
  Smartphone,
  Monitor,
  ChevronDown,
  Send,
  User,
  Award,
  Target,
} from "lucide-react"

export default function FuturisticPortfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [glitchActive, setGlitchActive] = useState(false)
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    // Random glitch effect
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.1) {
        setGlitchActive(true)
        setTimeout(() => setGlitchActive(false), 200)
      }
    }, 3000)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      clearInterval(glitchInterval)
    }
  }, [])

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const projects = [
    {
      title: "Neural Network Visualizer",
      description: "Interactive 3D visualization of deep learning models with real-time training data",
      tech: ["React", "Three.js", "TensorFlow", "WebGL"],
      image: "/placeholder.svg?height=300&width=400",
      link: "#",
      github: "#",
    },
    {
      title: "Quantum Computing Simulator",
      description: "Browser-based quantum circuit simulator with advanced quantum algorithms",
      tech: ["TypeScript", "WebAssembly", "Quantum.js", "D3.js"],
      image: "/placeholder.svg?height=300&width=400",
      link: "#",
      github: "#",
    },
    {
      title: "Biometric Authentication System",
      description: "Next-gen security system using facial recognition and behavioral analysis",
      tech: ["Python", "OpenCV", "TensorFlow", "FastAPI"],
      image: "/placeholder.svg?height=300&width=400",
      link: "#",
      github: "#",
    },
    {
      title: "Holographic Data Interface",
      description: "AR/VR data visualization platform for immersive analytics",
      tech: ["Unity", "C#", "ARCore", "WebXR"],
      image: "/placeholder.svg?height=300&width=400",
      link: "#",
      github: "#",
    },
  ]

  const skills = [
    { name: "Artificial Intelligence", level: 95, icon: Brain },
    { name: "Full Stack Development", level: 92, icon: Code },
    { name: "Data Visualization", level: 88, icon: Monitor },
    { name: "Quantum Computing", level: 85, icon: Cpu },
    { name: "Cybersecurity", level: 90, icon: Terminal },
    { name: "Mobile Development", level: 87, icon: Smartphone },
    { name: "Database Architecture", level: 89, icon: Database },
    { name: "UI/UX Design", level: 84, icon: Palette },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-green-900/20" />
        <motion.div className="absolute inset-0 opacity-30" style={{ y: backgroundY }}>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
        </motion.div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {typeof window !== "undefined" &&
            [...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                initial={{
                  x: Math.random() * (window?.innerWidth || 1200),
                  y: Math.random() * (window?.innerHeight || 800),
                }}
                animate={{
                  x: Math.random() * (window?.innerWidth || 1200),
                  y: Math.random() * (window?.innerHeight || 800),
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            ))}
        </div>
      </div>

      {/* Cursor Glow Effect */}
      {isClient && (
        <div
          className="fixed w-96 h-96 pointer-events-none z-50 mix-blend-screen"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            background: "radial-gradient(circle, rgba(0, 255, 255, 0.1) 0%, transparent 70%)",
          }}
        />
      )}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-md border-b border-cyan-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className={`text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent ${glitchActive ? "animate-pulse" : ""}`}
              whileHover={{ scale: 1.05 }}
            >
              NEXUS.DEV
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {["home", "about", "projects", "skills", "contact"].map((section) => (
                <motion.a
                  key={section}
                  href={`#${section}`}
                  className={`relative px-4 py-2 text-sm uppercase tracking-wider transition-colors ${
                    activeSection === section ? "text-cyan-400" : "text-gray-400 hover:text-white"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section}
                  {activeSection === section && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"
                      layoutId="activeSection"
                    />
                  )}
                </motion.a>
              ))}
            </div>

            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative z-10">
        <div className="text-center space-y-8">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <h1 className={`text-6xl md:text-8xl font-bold mb-4 ${glitchActive ? "animate-pulse" : ""}`}>
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                DIGITAL
              </span>
              <br />
              <span className="text-white">ARCHITECT</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Crafting the future through code, AI, and quantum possibilities
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 px-8 py-3"
            >
              <Zap className="mr-2" size={20} />
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 bg-transparent"
            >
              <Mail className="mr-2" size={20} />
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="text-cyan-400" size={32} />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              NEURAL PROFILE
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-25"></div>
                <Card className="relative bg-black/50 border-cyan-500/30 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <User className="text-cyan-400 mr-3" size={24} />
                      <h3 className="text-xl font-semibold text-white">Identity Matrix</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      A digital architect specializing in the convergence of artificial intelligence, quantum computing,
                      and immersive technologies. I transform complex algorithms into elegant solutions that push the
                      boundaries of what's possible.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-black/30 border-green-500/30 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <Award className="text-green-400 mx-auto mb-2" size={32} />
                    <div className="text-2xl font-bold text-white">50+</div>
                    <div className="text-sm text-gray-400">Projects Deployed</div>
                  </CardContent>
                </Card>
                <Card className="bg-black/30 border-purple-500/30 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <Target className="text-purple-400 mx-auto mb-2" size={32} />
                    <div className="text-2xl font-bold text-white">99.9%</div>
                    <div className="text-sm text-gray-400">Uptime Rate</div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full h-96 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm"></div>
                <div className="absolute inset-4 border border-cyan-400/30 rounded-lg">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="w-32 h-32 mx-auto mb-4 border-2 border-cyan-400 rounded-full relative"
                      >
                        <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1"></div>
                        <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-purple-400 rounded-full transform -translate-x-1/2 translate-y-1"></div>
                      </motion.div>
                      <div className="text-cyan-400 font-mono text-sm">SYSTEM.STATUS: ONLINE</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              PROJECT MATRIX
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition-opacity"></div>
                  <Card className="relative bg-black/50 border-green-500/30 backdrop-blur-sm overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="border-cyan-400/50 text-cyan-400 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex space-x-4">
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white border-0"
                        >
                          <ExternalLink className="mr-2" size={16} />
                          Live Demo
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                        >
                          <Github className="mr-2" size={16} />
                          Code
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
              SKILL TREE
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <skill.icon className="text-purple-400 mr-3" size={20} />
                    <span className="text-white font-medium">{skill.name}</span>
                  </div>
                  <span className="text-cyan-400 font-mono text-sm">{skill.level}%</span>
                </div>
                <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              ESTABLISH CONNECTION
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg blur opacity-25"></div>
              <Card className="relative bg-black/50 border-cyan-500/30 backdrop-blur-sm">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                        <Input
                          className="bg-black/50 border-gray-600 text-white focus:border-cyan-400 focus:ring-cyan-400"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                        <Input
                          type="email"
                          className="bg-black/50 border-gray-600 text-white focus:border-cyan-400 focus:ring-cyan-400"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                      <Input
                        className="bg-black/50 border-gray-600 text-white focus:border-cyan-400 focus:ring-cyan-400"
                        placeholder="Enter subject"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                      <Textarea
                        className="bg-black/50 border-gray-600 text-white focus:border-cyan-400 focus:ring-cyan-400 min-h-32"
                        placeholder="Enter your message"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white border-0 py-3"
                    >
                      <Send className="mr-2" size={20} />
                      Transmit Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <div className="text-gray-400 mb-4">© 2024 NEXUS.DEV - Architecting the Digital Future</div>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
