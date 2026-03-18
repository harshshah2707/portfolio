import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-white/5 bg-background mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="flex flex-col items-center md:items-start">
          <span className="font-display font-bold text-2xl tracking-wide text-white mb-2">
            HARSH <span className="text-primary">SHAH</span>
          </span>
          <p className="text-textMuted text-sm font-light">
            Robotics & Intelligent Systems Engineer
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/070harshhh" className="text-textMuted hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/harsh-shah-40102b285/" className="text-textMuted hover:text-secondary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:hks292004@gmail.com" className="text-textMuted hover:text-primary transition-colors">
            <Mail size={20} />
          </a>
        </div>

      <div className="text-textMuted text-sm font-mono opacity-70">
        © {new Date().getFullYear()} Harsh Shah. All systems operational.
      </div>

      </div>
    </footer>
  );
};

export default Footer;
