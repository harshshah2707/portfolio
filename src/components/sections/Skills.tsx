import { motion } from 'framer-motion';

const Skills = () => {
  const categories = [
    {
      title: "Programming",
      items: ["C", "C++", "Python", "TypeScript", "React"],
      colSpan: "md:col-span-4",
      gradient: "from-primary/20",
    },
    {
      title: "Embedded & IoT",
      items: ["Arduino", "ESP32", "NodeMCU", "Raspberry Pi", "Sensor Integration", "I2C/SPI"],
      colSpan: "md:col-span-8",
      gradient: "from-secondary/20",
    },
    {
      title: "AI & Automation",
      items: ["AI API Integrations", "Agentic Systems", "Browser Automation", "Computer Vision (OpenCV)"],
      colSpan: "md:col-span-8",
      gradient: "from-primary/20",
    },
    {
      title: "Robotics & Hardware",
      items: ["Motor Drivers", "LiDAR", "Depth Cameras", "FlySky Receivers", "Mech Design/CAD", "3D Printing", "ROS", "Jetson", "Gantry Kinematics"],
      colSpan: "md:col-span-4",
      gradient: "from-secondary/20",
    },
    {
      title: "System Design",
      items: ["Sensor Fusion", "End-to-End Architectures", "Control Theory Basics"],
      colSpan: "md:col-span-6",
      gradient: "from-primary/20",
    },
    {
      title: "Backend & Data",
      items: ["Supabase", "SQL", "ER Diagrams", "REST APIs"],
      colSpan: "md:col-span-6",
      gradient: "from-secondary/20",
    },
  ];

  return (
    <section id="skills" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Arsenal</span>
          </h2>
          <p className="text-textMuted text-lg max-w-2xl mx-auto">
            A comprehensive stack built for engineering real-world solutions. From low-level memory management to high-level intelligent agents.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[minmax(180px,auto)] gap-4">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.2, rotateY: 90, z: -200 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0, z: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ type: 'spring', stiffness: 100, damping: 12, mass: 1.5, delay: idx * 0.15 }}
              className={`glass-panel p-8 flex flex-col justify-between glow-border relative overflow-hidden ${cat.colSpan} group hover:z-50 hover:scale-[1.05] transition-transform duration-300 transform-gpu perspective-1000`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${cat.gradient} to-transparent rounded-bl-full opacity-50 blur-2xl transition-opacity group-hover:opacity-100`}></div>

              <h3 className="text-2xl font-display font-bold text-white mb-6 relative z-10">{cat.title}</h3>

              <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                {cat.items.map((item, idj) => (
                  <span
                    key={idj}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-sm text-textMain hover:bg-white/10 hover:border-white/20 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
