import { Github, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full px-6 py-3 flex items-center justify-between w-[90%] max-w-5xl ${
        scrolled
          ? 'bg-claw-surface/80 backdrop-blur-md border border-claw-border shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center gap-2">
        <div className="relative flex items-center justify-center w-8 h-8 text-claw-red">
          <Phone className="w-5 h-5 absolute" />
          <svg className="w-6 h-6 absolute -right-1 -top-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L14 8M16 4L15 9M20 6L17 10" strokeLinecap="round" />
          </svg>
        </div>
        <span className="font-geist font-bold text-lg tracking-tight">
          <span className="text-white">Claw</span>
          <span className="text-claw-red">Phone</span>
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 font-geist-mono text-[0.7rem] uppercase tracking-wider font-medium text-claw-text-secondary">
        <a href="#docs" className="hover:text-white transition-colors relative group">
          Docs
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-claw-red transition-all group-hover:w-full"></span>
        </a>
        <a href="#pricing" className="hover:text-white transition-colors relative group">
          Pricing
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-claw-red transition-all group-hover:w-full"></span>
        </a>
        <a href="#github" className="flex items-center gap-2 hover:text-white transition-colors relative group">
          <Github className="w-4 h-4" />
          GitHub
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-claw-red transition-all group-hover:w-full"></span>
        </a>
      </div>

      <button className="magnetic-btn relative overflow-hidden bg-claw-red text-white font-geist-mono text-[0.7rem] uppercase tracking-wider px-5 py-2.5 rounded-full font-semibold group">
        <span className="absolute inset-0 w-full h-full bg-claw-red-bright -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
        <span className="relative z-10">Get Started</span>
      </button>
    </nav>
  );
}
