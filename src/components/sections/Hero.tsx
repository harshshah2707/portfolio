import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Terminal, Cpu } from 'lucide-react';

const Hero = () => {
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVars: Variants = {
    hidden: { y: 100, x: -50, rotateX: -90, opacity: 0, scale: 0.5 },
    show: { 
      y: 0, 
      x: 0,
      rotateX: 0,
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 200, damping: 12, mass: 1.5 }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute max-w-full overflow-hidden inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]"
        />
        <motion.div 
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 0.8, 1],
            x: [0, -100, 100, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-secondary/20 rounded-[30%] blur-[120px]"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          variants={containerVars}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6"
        >
          <motion.div variants={itemVars} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 w-fit backdrop-blur-sm">
            <Terminal size={14} className="text-primary" />
            <span className="text-xs uppercase tracking-widest text-primary font-semibold">Harsh Shah • Robotics & IS Engineer</span>
          </motion.div>

          <motion.h1 
            variants={itemVars}
            className="text-5xl md:text-7xl font-display font-extrabold leading-[1.1]"
          >
            <span className="glitch-text block mb-2" data-text="BUILDING">BUILDING</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary inline-block">
              INTELLIGENT SYSTEMS
            </span> <br/>
            THAT AUTOMATE <br/>
            REALITY.
          </motion.h1>

          <motion.p 
            variants={itemVars}
            className="text-lg text-textMuted max-w-xl font-mono leading-relaxed uppercase tracking-wide text-xs md:text-sm"
          >
            A builder of AI-powered, real-world automation systems combining robotics, IoT, and intelligent workflows. From 3lb kinetic combat robots to autonomous infrastructure repair.
          </motion.p>

          <motion.div variants={itemVars} className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300">
              Deploy View
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#about" className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/5 transition-all duration-300 font-medium hover:glow-border">
              Read Docs
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Visuals / 3D Element Space */}
        <motion.div 
          initial={{ opacity: 0, rotateY: 90, scale: 0.2, z: -500 }}
          animate={{ opacity: 1, rotateY: 0, scale: 1, z: 0 }}
          transition={{ type: 'spring', stiffness: 50, damping: 12, delay: 0.6 }}
          className="relative h-[400px] md:h-[600px] w-full hidden md:block perspective-1000"
        >
          {/* Futuristic abstract component representation */}
          <div className="absolute inset-0 flex items-center justify-center animate-float">
            <div className="relative w-72 h-72 md:w-96 md:h-96 box-border border border-primary/30 rounded-full flex items-center justify-center before:content-[''] before:absolute before:inset-[-10px] before:rounded-full before:border-2 before:border-dashed before:border-secondary/40 before:animate-[spin_10s_linear_reverse_infinite]">
               <div className="w-full h-full rounded-full border-t-4 border-l-4 border-primary animate-[spin_5s_linear_infinite] flex items-center justify-center shadow-[0_0_50px_rgba(255,42,42,0.4)]">
                 <div className="w-3/4 h-3/4 rounded-full border-b-4 border-r-4 border-secondary animate-[spin_3s_linear_reverse_infinite] flex items-center justify-center shadow-[0_0_50px_rgba(0,255,204,0.4)]">
                    <div className="w-2/3 h-2/3 bg-background rounded-full border border-white/20 flex items-center justify-center relative overflow-hidden group">
                       <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,204,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,204,0.1)_1px,transparent_1px)] bg-[size:10px_10px]" />
                       <Cpu size={64} className="text-white relative z-10 group-hover:text-primary transition-colors duration-200" />
                       <div className="absolute top-0 left-0 w-full h-1 bg-secondary opacity-50 animate-[scan_2s_linear_infinite]"></div>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
