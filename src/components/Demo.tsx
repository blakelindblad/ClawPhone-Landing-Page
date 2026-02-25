import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PhoneOff, UserRound, MicOff } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Demo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
        }
      });

      // Typewriter effect for transcript
      const lines = gsap.utils.toArray('.transcript-line');
      lines.forEach((line: any, i) => {
        tl.fromTo(
          line,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.2, ease: 'none' },
          `+=${i === 0 ? 0.5 : 1.2}`
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 relative bg-[#08080A] border-t border-claw-border/30 overflow-hidden">
      {/* Subtle charcoal texture/gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-claw-void/50 pointer-events-none" />
      <div className="noise-bg absolute inset-0 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="font-geist-mono text-claw-red text-[0.65rem] uppercase tracking-[0.2em] mb-4 flex items-center gap-2 justify-center">
          <span className="text-claw-red/60">⟩</span> Demo
        </div>
        
        <h2 className="font-geist font-extrabold text-4xl md:text-5xl tracking-tight mb-16 text-center text-white">
          The lobster's on the line.
        </h2>

        <div className="max-w-3xl mx-auto bg-claw-surface border border-claw-border rounded-3xl overflow-hidden shadow-2xl shadow-black/80">
          
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-claw-border/50 bg-[#121215]">
            <div className="font-geist-mono text-xs text-claw-text-secondary tracking-widest uppercase">
              ClawPhone → Dr. Chen's Office
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-claw-green animate-pulse"></div>
              <span className="font-geist-mono text-[0.65rem] text-claw-green uppercase tracking-widest">Connected</span>
            </div>
          </div>

          {/* Waveform Area */}
          <div className="h-48 flex items-center justify-center gap-1 bg-gradient-to-b from-[#121215] to-claw-surface border-b border-claw-border/30">
            {Array.from({ length: 40 }).map((_, i) => (
              <div
                key={i}
                className="w-1.5 rounded-full bg-gradient-to-t from-claw-red to-claw-coral waveform-bar"
                style={{
                  height: `${Math.max(10, Math.random() * 80)}px`,
                  animationDelay: `${Math.random() * -2}s`,
                  animationDuration: `${0.5 + Math.random() * 0.8}s`
                }}
              />
            ))}
          </div>

          {/* Transcript Area */}
          <div className="p-8 h-64 overflow-y-auto font-geist-mono text-sm leading-relaxed space-y-6 flex flex-col justify-end relative">
            {/* Fade overlay at top */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-claw-surface to-transparent pointer-events-none" />
            
            <div className="transcript-line text-claw-text-secondary">
              <span className="text-claw-red">Agent:</span> "Hi, I'm calling on behalf of Alex to reschedule their Friday appointment."
            </div>
            <div className="transcript-line text-claw-text-tertiary">
              <span className="text-white">Receptionist:</span> "Sure, let me check availability..."
            </div>
            <div className="transcript-line text-claw-text-secondary">
              <span className="text-claw-red">Agent:</span> "Ideally Friday afternoon, after 2 PM."
            </div>
            <div className="transcript-line text-claw-text-tertiary">
              <span className="text-white">Receptionist:</span> "We have 2:30 or 4:15."
            </div>
            <div className="transcript-line text-claw-text-secondary">
              <span className="text-claw-red">Agent:</span> "2:30 works perfectly. Thank you."
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="px-8 py-6 border-t border-claw-border/50 bg-[#121215] flex items-center justify-center gap-4">
            <button className="magnetic-btn w-14 h-14 rounded-full bg-claw-red hover:bg-claw-red-bright flex items-center justify-center text-white transition-colors shadow-lg shadow-claw-red/20">
              <PhoneOff className="w-6 h-6" />
            </button>
            <button className="magnetic-btn w-14 h-14 rounded-full border border-claw-border hover:border-claw-text-tertiary hover:bg-white/5 flex items-center justify-center text-claw-text-secondary transition-colors">
              <UserRound className="w-6 h-6" />
            </button>
            <button className="magnetic-btn w-14 h-14 rounded-full border border-claw-border hover:border-claw-text-tertiary hover:bg-white/5 flex items-center justify-center text-claw-text-secondary transition-colors">
              <MicOff className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
