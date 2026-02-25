import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Terminal, Check, Play } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered fade up for text elements
      gsap.fromTo(
        '.hero-el',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
      );

      // Terminal animation
      const tl = gsap.timeline({ delay: 1.2 });
      
      tl.fromTo(
        terminalRef.current,
        { y: 40, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.2)' }
      );

      // Typewriter effect for terminal lines
      const lines = gsap.utils.toArray('.term-line');
      lines.forEach((line: any, i) => {
        tl.fromTo(
          line,
          { opacity: 0, x: -10 },
          { opacity: 1, x: 0, duration: 0.1, ease: 'none' },
          `+=${i === 0 ? 0.2 : i === 1 ? 0.8 : i === 2 ? 1.5 : 0.5}`
        );
      });

      // Checkmark bounce
      tl.fromTo(
        '.term-check',
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)' },
        '+=0.2'
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] flex items-center pt-24 pb-12 overflow-hidden">
      {/* Radial Glow */}
      <div className="absolute inset-0 glow-radial pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Content */}
        <div className="max-w-2xl">
          <div className="hero-el font-geist-mono text-claw-red text-[0.65rem] uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
            <span className="text-claw-red/60">⟩</span> voice-skill-for-openclaw
          </div>
          
          <h1 className="hero-el font-geist font-black text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] tracking-tight mb-6">
            <span className="text-white block">Your AI</span>
            <span className="text-claw-red block">learned to dial.</span>
          </h1>
          
          <p className="hero-el font-instrument text-claw-text-secondary text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Give your OpenClaw a phone number. Schedule calls, receive inbound, and let your lobster handle the conversation. Three lines of config. Zero phone trees.
          </p>
          
          <div className="hero-el flex flex-wrap items-center gap-4 mb-6">
            <button className="magnetic-btn bg-claw-red hover:bg-claw-red-bright text-white font-geist-mono text-sm uppercase tracking-wider px-8 py-4 rounded-full font-semibold transition-colors flex items-center gap-2 group">
              Get Started — Free
              <Play className="w-4 h-4 fill-current transition-transform group-hover:translate-x-1" />
            </button>
            <button className="magnetic-btn bg-claw-surface border border-claw-border hover:border-claw-text-tertiary text-claw-text-primary font-geist-mono text-sm uppercase tracking-wider px-8 py-4 rounded-full font-semibold transition-colors">
              View on GitHub
            </button>
          </div>
          
          <div className="hero-el font-geist-mono text-[0.6rem] text-claw-text-tertiary uppercase tracking-wider">
            Powered by ElevenLabs + Recall
          </div>
        </div>

        {/* Right Content - Terminal */}
        <div className="relative w-full max-w-lg mx-auto lg:ml-auto perspective-1000">
          <div 
            ref={terminalRef}
            className="bg-[#0D0D10] border border-claw-border/50 rounded-2xl p-6 shadow-2xl shadow-claw-red/5 relative overflow-hidden"
            style={{ opacity: 0 }}
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-claw-border/30">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-claw-border"></div>
                <div className="w-3 h-3 rounded-full bg-claw-border"></div>
                <div className="w-3 h-3 rounded-full bg-claw-border"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-claw-red animate-pulse"></div>
                <span className="font-geist-mono text-[0.6rem] text-claw-text-tertiary uppercase tracking-widest">Live</span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="font-geist-mono text-sm leading-relaxed space-y-4">
              <div className="term-line text-claw-text-secondary">
                <span className="text-white">You (via Telegram):</span> "Hey Molty, call the dentist and reschedule to Friday afternoon"
              </div>
              
              <div className="term-line text-claw-text-tertiary mt-6">
                <span className="text-claw-red">ClawPhone: ⟩</span> Dialing Dr. Chen's office...
              </div>
              
              <div className="term-line text-claw-text-tertiary">
                <span className="text-claw-amber">ClawPhone: ⟩</span> Connected — negotiating time slot
              </div>
              
              <div className="term-line text-white flex items-start gap-2">
                <span className="text-claw-green mt-0.5 term-check"><Check className="w-4 h-4" /></span>
                <span><span className="text-claw-text-secondary">ClawPhone:</span> Rescheduled to Fri 2:30 PM</span>
              </div>
            </div>
            
            {/* Blinking Cursor */}
            <div className="w-2 h-4 bg-claw-text-tertiary animate-pulse mt-4 ml-6 opacity-50"></div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-claw-red/10 to-transparent blur-2xl -z-10 rounded-full opacity-30"></div>
        </div>
        
      </div>
    </section>
  );
}
