import { motion } from 'framer-motion';

const Timeline = () => {
  const events = [
    {
      title: "Early Exploration in Electronics & Programming",
      desc: "Started building a foundation in embedded systems, experimenting with basic circuits, microcontrollers, and programming concepts."
    },
    {
      title: "IoT & Sensor-Based Systems",
      desc: "Developed real-world projects using Arduino and ESP32, creating sensor-driven systems and exploring connected devices."
    },
    {
      title: "Robotics & Hands-On Engineering",
      desc: "Designed and built robotic systems, gaining experience in mechanical design, control systems, and hardware-software integration."
    },
    {
      title: "Transition into Computer Science",
      desc: "Expanded into software engineering, focusing on data structures, system design, and building scalable applications."
    },
    {
      title: "AI-Driven Applications",
      desc: "Built intelligent systems like PsychSupport and sociogram analysis tools, combining AI with human-centered problem solving."
    },
    {
      title: "Autonomous Systems & Edge AI",
      desc: "Currently developing advanced systems involving robotics, sensor fusion, and edge AI for real-world applications like infrastructure automation."
    }
  ];

  return (
    <section id="timeline" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-display font-bold mb-16 text-center">
          Trajectory
        </h2>

        <div className="relative border-l-2 border-primary/20 pl-8 space-y-12">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -300, scale: 0.5 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ type: "spring", stiffness: 150, damping: 10, delay: idx * 0.1 }}
              className="relative group hover:translate-x-4 transition-transform duration-300"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-black glow-border"></div>

              <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
                <h3 className="text-2xl font-semibold text-white">{event.title}</h3>
              </div>
              <p className="text-textMuted text-lg max-w-2xl">{event.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
