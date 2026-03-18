import { motion, useMotionValue } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const KairoArchitecture = () => (
  <div className="w-full h-48 bg-black/50 rounded-xl mt-6 border border-white/5 relative overflow-hidden flex items-center justify-center p-4">
    <svg viewBox="0 0 800 300" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="glowLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A855F7" stopOpacity="0" />
          <stop offset="50%" stopColor="#A855F7" stopOpacity="1" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Node 1: Sensing */}
      <rect x="50" y="100" width="150" height="80" rx="10" fill="#111" stroke="#A855F7" strokeWidth="2" />
      <text x="125" y="145" fill="#fff" textAnchor="middle" fontSize="16" fontFamily="Inter" fontWeight="600">Sensing Unit</text>
      <text x="125" y="165" fill="#9CA3AF" textAnchor="middle" fontSize="12" fontFamily="Inter">LiDAR + Depth Cam</text>

      {/* Node 2: Processing */}
      <rect x="325" y="100" width="150" height="80" rx="10" fill="#111" stroke="#3B82F6" strokeWidth="2" />
      <text x="400" y="145" fill="#fff" textAnchor="middle" fontSize="16" fontFamily="Inter" fontWeight="600">Edge Processing</text>
      <text x="400" y="165" fill="#9CA3AF" textAnchor="middle" fontSize="12" fontFamily="Inter">Jetson / Agentic AI</text>

      {/* Node 3: Actuation */}
      <rect x="600" y="100" width="150" height="80" rx="10" fill="#111" stroke="#A855F7" strokeWidth="2" />
      <text x="675" y="145" fill="#fff" textAnchor="middle" fontSize="16" fontFamily="Inter" fontWeight="600">Repair System</text>
      <text x="675" y="165" fill="#9CA3AF" textAnchor="middle" fontSize="12" fontFamily="Inter">Gantry Actuators</text>

      {/* Animated Connectors */}
      <line x1="200" y1="140" x2="325" y2="140" stroke="url(#glowLine)" strokeWidth="4" strokeDasharray="10 10">
        <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" fill="freeze" repeatCount="indefinite" />
      </line>
      <line x1="475" y1="140" x2="600" y2="140" stroke="url(#glowLine)" strokeWidth="4" strokeDasharray="10 10">
        <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" fill="freeze" repeatCount="indefinite" />
      </line>

      {/* Details underneath */}
      <path d="M 400 180 L 400 240" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 4" />
      <rect x="325" y="240" width="150" height="40" rx="5" fill="#222" />
      <text x="400" y="265" fill="#ccc" textAnchor="middle" fontSize="12" fontFamily="Inter">Decision Engine</text>
    </svg>
  </div>
);

const TiltCard = ({ project }: { project: any }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    mouseX.set(x * 35); // extreme tilt range
    mouseY.set(y * -35);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateX: 45 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 80, damping: 15 }}
      style={{
        rotateX: mouseY,
        rotateY: mouseX,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-2xl glass-panel p-8 transition-colors duration-500 hover:border-primary group flex flex-col items-start ${project.featured ? 'md:col-span-2' : ''} hover:z-50`}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(168,85,247,0.1), transparent 40%)'
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
          e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        }}
      />

      <div className="flex justify-between w-full mb-6 relative" style={{ transform: "translateZ(50px)" }}>
        <h3 className="text-2xl font-bold font-display text-white group-hover:neon-text-primary group-hover:glitch-text transition-all">{project.title}</h3>
        <div className="flex gap-3 text-textMuted">
          <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><ExternalLink size={20} /></a>
        </div>
      </div>

      <p className="text-textMuted leading-relaxed mb-6 flex-grow relative" style={{ transform: "translateZ(20px)" }}>
        {project.description}
      </p>

      {project.featured && <KairoArchitecture />}

      <div className="flex flex-wrap gap-2 mt-6 relative" style={{ transform: "translateZ(20px)" }}>
        {project.stack.map((tech: string) => (
          <span key={tech} className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-primary/80">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "KAIRO — Kinetic AI",
      description: "Autonomous robotic system for detecting and repairing road issues like potholes, cracks, and reflectors. Focuses on robust infrastructure optimization using LiDAR and agentic processing.",
      featured: true,
      stack: ["Python", "ROS", "Jetson", "OpenCV", "Gantry Kinematics"]
    },
    {
      title: "AI Browser Operator",
      description: "Multi-agent system that interacts with dynamic web applications to automate complex form filling, data scraping, and procedural workflows.",
      featured: false,
      stack: ["Python", "Playwright", "LLMs", "Agentic Workflows"]
    },
    {
      title: "Kinetic Combat Robot",
      description: "3lb vertical spinner combat robot. Engineered for high-impact durability, custom motor control systems, and mechanical resilience in enclosed arenas.",
      featured: false,
      stack: ["AutoCAD", "C++", "FlySky Rx", "L298N"]
    },
    {
      title: "IoT Weather API",
      description: "Environmental sensing unit utilizing MQ135 and DHT11 sensors to monitor localized air quality and climatic data.",
      featured: false,
      stack: ["ESP32", "Arduino", "Time-series DB"]
    },
    {
      title: "Sociometric Analysis Platform",
      description: "Full-stack research tool that collects relational data and visualizes it as interactive network graphs. Features advanced network analytics, role-based access, and dynamic survey instruments.",
      featured: false,
      stack: ["Next.js", "Firebase", "React Flow", "D3"]
    },
    {
      title: "Emotion-Aware AI Agent",
      description: "Intelligent conversational platform architected to provide accessible emotional support. Implements real-time NLP sentiment analysis pipelines, empathetic response generation, and automated ethical escalation triggers.",
      featured: false,
      stack: ["Python", "NLP", "JavaScript", "Sentiment Analysis"]
    },
    {
      title: "High-Speed RC Robo Race",
      description: "Designed and drove a high-speed RC-controlled robot built for navigating complex race tracks with sharp turns and obstacles, optimizing chassis stability, motor traction, and manual control precision.",
      featured: false,
      stack: ["RC Systems", "Motor Driving", "Chassis Design", "Real-Time Control"]
    },
    {
      title: "Competitive Robo Soccer",
      description: "Built and operated an RC-controlled robot designed for competitive robot soccer. Emphasized mechanical durability under high-impact collisions, ball-control mechanisms, and strategic positioning.",
      featured: false,
      stack: ["Remote Kinematics", "Mechanical Design", "Impact Resilience"]
    }
  ];

  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            System <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Case Studies</span>
          </h2>
          <p className="text-textMuted text-lg max-w-2xl">
            Deep dives into specific engineering problems I've solved.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8" style={{ perspective: "1000px" }}>
          {projects.map((proj, idx) => (
            <TiltCard key={idx} project={proj} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
