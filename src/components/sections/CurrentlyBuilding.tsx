import { motion } from 'framer-motion';
import { Wrench, CircleDot } from 'lucide-react';
import { useState } from 'react';

// In a real scenario, this would fetch from Supabase.
// Since we might not have environment variables setup, we mock the initial load with a realistic visual structure.
const CurrentlyBuilding = () => {
  const [items] = useState<any[]>([
    { title: "Browser Operator Agents", status: "Active Development", desc: "Refining DOM navigation heuristics and robust element localization for web automation." },
    { title: "KAIRO Visual SLAM", status: "Testing", desc: "Integrating V-SLAM pipelines for better internal mapping of potholes and road cracks." },
    { title: "Local RAG Documentation", status: "Planning", desc: "Personal knowledge base querying system running entirely on local edge devices." },
  ]);

  return (
    <section id="building" className="relative py-24 px-6 bg-black/40">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-primary/10 rounded-xl">
            <Wrench className="text-primary" size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Currently <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Building</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 100, rotateY: -30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 120, damping: 10, delay: idx * 0.2 }}
              whileHover={{ scale: 1.05, y: -10, rotateZ: 1 }}
              className="glass-panel p-6 border-l-4 border-l-primary hover:bg-white/5 transition-colors group z-10 hover:z-50"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold font-display text-white group-hover:text-primary transition-colors">{item.title}</h3>
                <span className="flex items-center gap-2 text-xs font-bold px-2 py-1 rounded bg-secondary/20 text-secondary border border-secondary/30">
                  <CircleDot size={12} className="animate-spin" />
                  {item.status}
                </span>
              </div>
              <p className="text-textMuted text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CurrentlyBuilding;
