import { motion } from 'framer-motion';

const Vision = () => {
  return (
    <section id="vision" className="relative py-32 px-6 overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-full max-h-[500px] pointer-events-none opacity-20">
        <div className="w-full h-full bg-gradient-to-tr from-primary to-secondary rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-display font-extrabold mb-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            The Vision
          </h2>
          
          <div className="text-xl md:text-2xl text-textMuted font-light leading-relaxed space-y-6">
            <p>
              I believe the future of software isn't trapped behind screens. It's <strong className="text-white font-medium">embodied</strong>.
            </p>
            <p>
              We are entering an era where AI-driven automation and intelligent robotics systems will directly manipulate and optimize the physical world.
            </p>
            <p className="text-primary italic">
              "Building the intelligent layer between software and reality."
            </p>
          </div>
          
          <div className="mt-16 inline-flex gap-4">
            <a href="mailto:contact@example.com" className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all duration-300">
              Let's Build It
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
