import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Github, Linkedin, Mail, ExternalLink, Code,SquareActivity, Palette, Globe, Smartphone, Star, Zap, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
export default function Index() {
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.1 });
  const skillsInView = useInView(skillsRef, { once: true, amount: 0.3 });
  const contactInView = useInView(contactRef, { once: true, amount: 0.3 });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const skills = [
    { name: "React", icon: Code, color: "from-blue-500 to-cyan-500", delay: 0 },
    { name: "TypeScript", icon: Code, color: "from-blue-600 to-blue-800", delay: 0.1 },
    { name: "Next.js", icon: Globe, color: "from-gray-800 to-gray-900", delay: 0.2 },
    { name: "Tailwind CSS", icon: SquareActivity, color: "from-green-500 to-green-700", delay: 0.3 },
    { name: "Frontend Development", icon: Palette, color: "from-purple-500 to-pink-500", delay: 0.4 },
    { name: "Javascript", icon: Code, color: "from-orange-500 to-red-500", delay: 0.5 },
  ];

 const projects = [
  {
    title: "Morpheo Platform",
    description: "A data governance platform with graph visualizations, secure Auth0 authentication, and AI-powered chatbot integration.",
    tech: ["React", "Context API", "Auth0", "Chatbot","Cytoscape.js","D3.js","React Flow", "Python", "LLM", "Go"],
    image: "/placeholder.svg",
    demoLink: "#",
    codeLink: "#",
    gradient: "from-orange-600 via-red-600 to-pink-800"
  },
  {
    title: "Enterprise Website",
    description: "A modern, SEO-optimized company website built with dynamic routing, reusable components, and CMS integration.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React Flow"],
    image: "/placeholder.svg", // Replace with your actual image path if available
    demoLink: "https://your-enterprise-site-demo-link.com", // Replace with your real link or keep "#" if private
    codeLink: "#", // Keep private if needed
    gradient: "from-blue-600 via-purple-600 to-blue-800"
  },
  {
    title: "Internal Application Suite",
    description: "A suite of enterprise apps including LMS, IAM, and Payroll with single sign-on, RBAC, and real-time reporting dashboard.",
    tech: ["React","Javascript","CSS", "Python", "REST APIs", "Recharts"],
    image: "/placeholder.svg",
    demoLink: "#",
    codeLink: "#",
    gradient: "from-emerald-600 via-teal-600 to-cyan-800"
  },



];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-accent/20 to-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.a
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}

            >
              My Portfolio
            </motion.a>
            <div className="hidden md:flex items-center space-x-8">
              <motion.a
                href="#about"
                className="text-foreground/70 hover:text-foreground transition-colors"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                About
              </motion.a>
              <motion.a
                href="#projects"
                className="text-foreground/70 hover:text-foreground transition-colors"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Projects
              </motion.a>
              <motion.a
                href="#skills"
                className="text-foreground/70 hover:text-foreground transition-colors"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Skills
              </motion.a>
              <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400 }}>
                <Link to="/contact" className="text-foreground/70 hover:text-foreground transition-colors">Contact</Link>
              </motion.div>
            </div>
            <div className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.1, rotate: 180 }} transition={{ type: "spring", stiffness: 400 }}>
                <ThemeToggle />
              </motion.div>
             <motion.div whileHover={{ scale: 1.1, y: -2 }} transition={{ type: "spring", stiffness: 400 }}>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://github.com/Iramsaba-M" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, y: -2 }} transition={{ type: "spring", stiffness: 400 }}>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://www.linkedin.com/in/iramsaba-mirjankar-871841171/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="pt-24 pb-16 px-6 relative"
        style={{ y, opacity }}
      >
        <div className="container mx-auto text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <motion.p
              className="text-lg text-muted-foreground mb-4"
              variants={itemVariants}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Iramsaba Mirjankar
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl font-semibold mb-6 text-foreground/80"
              variants={itemVariants}
            >
              Frontend Developer
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Transforming ideas into responsive, user-centric web applications.
              Turning business needs into elegant digital experiences.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Button size="lg" className="text-lg px-8 py-3 relative overflow-hidden" asChild>
                  <a href="#projects">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    View My Work
                  </a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Button variant="outline" size="lg" className="text-lg px-8 py-3" asChild>
                  <Link to="/contact">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <Mail className="mr-2 h-5 w-5" />
                    </motion.div>
                    Get In Touch
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Floating Elements */}
            <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-primary/30"
              >
                <Star className="h-8 w-8" />
              </motion.div>
            </div>

            <div className="absolute top-1/3 right-1/4 transform -translate-y-1/2">
              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -10, 10, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="text-accent/30"
              >
                <Zap className="h-6 w-6" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        ref={aboutRef}
        id="about"
        className="py-16 px-6 bg-muted/30"
        initial={{ opacity: 0, y: 50 }}
        animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About Me
          </motion.h2>
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={aboutInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="p-8 backdrop-blur-sm bg-card/50 border-border/50">
                <CardContent className="p-0">
                  <motion.p
                    className="text-lg text-muted-foreground leading-relaxed mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    I'm a passionate Web Developer with over 3.5 years of experience building responsive, user-friendly web applications.
                    I specialize in frontend development using React, Next.js, TypeScript, and Tailwind CSS,
                    and I also have hands-on experience with backend technologies like Python, Java, and REST APIs.
                  </motion.p>
                  <motion.p
                    className="text-lg text-muted-foreground leading-relaxed"
                    initial={{ opacity: 0, x: 20 }}
                    animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    I enjoy transforming complex problems into intuitive, scalable digital solutions and thrive in agile team environments.<br></br>
                    I'm always eager to learn new technologies, collaborate with others, and contribute to products that make a real-world impact.
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        ref={projectsRef}
        id="projects"
        className="py-16 px-6"
        initial={{ opacity: 0 }}
        animate={projectsInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={projectVariants}
                initial="hidden"
                animate={projectsInView ? "visible" : "hidden"}
                custom={index}
                whileHover={{
                  y: -10,
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group backdrop-blur-sm bg-card/80 border-border/50">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`}
                      initial={{ scale: 1.2, rotate: -5 }}
                      whileHover={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6 }}
                    />
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover relative z-10 mix-blend-overlay"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <motion.h3
                      className="text-xl font-semibold mb-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p
                      className="text-muted-foreground mb-4 line-clamp-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      {project.description}
                    </motion.p>
                    <motion.div
                      className="flex flex-wrap gap-2 mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      {project.tech.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.6 + techIndex * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                    <motion.div
                      className="flex gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.7 }}
                    >
                      <motion.div
                        className="flex-1"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button variant="outline" size="sm" className="w-full">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Button>
                      </motion.div>
                      <motion.div
                        className="flex-1"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button variant="outline" size="sm" className="w-full">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                      </motion.div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        ref={skillsRef}
        id="skills"
        className="py-16 px-6 bg-muted/30"
        initial={{ opacity: 0 }}
        animate={skillsInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Skills & Technologies
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateY: -90 }}
                  animate={skillsInView ? {
                    opacity: 1,
                    y: 0,
                    rotateY: 0,
                    transition: { delay: skill.delay, duration: 0.8 }
                  } : { opacity: 0, y: 50, rotateY: -90 }}
                  whileHover={{
                    scale: 1.1,
                    rotateY: 5,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 group backdrop-blur-sm bg-card/80 border-border/50 relative overflow-hidden">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />
                    <CardContent className="p-0 relative z-10">
                      <motion.div
                        animate={{
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: skill.delay * 2
                        }}
                      >
                        <Icon className="h-8 w-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </motion.div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors duration-300">{skill.name}</h3>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        ref={contactRef}
        id="contact"
        className="py-16 px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
             Let's connect and create something impactful together.
             From startups to enterprise apps, I'm ready to jump in and contribute wherever I can.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={contactInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >


            <Button size="lg" className="text-lg px-8 py-3 relative overflow-hidden" asChild>
              <Link to="/contact">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  <Mail className="mr-2 h-5 w-5" />
                </motion.div>
                Contact Me
              </Link>
            </Button>
          </motion.div>

          {/* <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Button variant="outline" size="lg" className="text-lg px-8 py-3" asChild>
                  <a href="/resume.pdf" download="Your-Name-Resume.pdf">
                    <motion.div
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <Download className="mr-2 h-5 w-5" />
                    </motion.div>
                    Download Resume
                  </a>
                </Button>
              </motion.div> */}
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              className="text-muted-foreground mb-4 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              © 2025 Iramsaba Mirjankar. Built with React, TypeScript, Tailwind CSS & ❤️
            </motion.div>
            <div className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://github.com/Iramsaba-M" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, y: -3 }} transition={{ type: "spring", stiffness: 400 }}>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://www.linkedin.com/in/iramsaba-mirjankar-871841171/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400 }}>
                <Button variant="ghost" size="icon" asChild>
                  <a href="mailto:mirjankariramsaba@gmail.com">
                    <motion.div
                      animate={{
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 4
                      }}
                    >
                      <Mail className="h-5 w-5" />
                    </motion.div>
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
