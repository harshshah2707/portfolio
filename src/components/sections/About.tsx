import { motion } from 'framer-motion';
import { Target, Zap, Bot, Network } from 'lucide-react';

const About = () => {
  const cards = [
    { icon: <Bot size={24} className="text-primary" />, title: 'Systems Thinking', desc: 'Approaching problems from an end-to-end perspective, integrating software, hardware, and AI.' },
    { icon: <Zap size={24} className="text-secondary" />, title: 'Real-world Automation', desc: 'Building physical and digital agents that automate tedious workflows.' },
    { icon: <Target size={24} className="text-primary" />, title: 'Precision & Impact', desc: 'Focusing on reliable infrastructure repair and robust autonomous systems.' },
    { icon: <Network size={24} className="text-secondary" />, title: 'Intelligent IoT', desc: 'Connecting environmental sensors with cloud architectures for predictive insight.' },
  ];

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              The Journey: <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Diploma to Degree.</span>
            </h2>
            <div className="space-y-6 text-textMuted text-lg font-light leading-relaxed">
              <p>
                Hi, I'm <strong>Harsh Shah</strong>. My engineering journey began with a hands-on Diploma, instilling a deep appreciation for the physical mechanics of systems. Now, pursuing my B.Tech in Computer Science, I bridge the gap between tangible hardware and intelligent algorithms.
              </p>
              <p>
                I am deeply passionate about <strong>AI, Robotics, and IoT</strong>. I don't just write code; I build systems that perceive, decide, and act in the physical world. From high-impact combat robotics to autonomous road inspection systems, my focus remains on architecting end-to-end solutions.
              </p>
            </div>
          </motion.div>

          {/* Cards / Visuals */}
          <div className="grid sm:grid-cols-2 gap-4">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-6 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <p className="text-sm text-textMuted leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
