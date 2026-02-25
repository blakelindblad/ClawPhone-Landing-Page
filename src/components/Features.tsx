import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PhoneOutgoing, PhoneIncoming, Mic, FileText, Calendar, Key } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: PhoneOutgoing,
    title: "Outbound Calls",
    description: "Tell your lobster to call anyone. It dials, talks, negotiates, and reports back. You stay in Telegram."
  },
  {
    icon: PhoneIncoming,
    title: "Inbound Calls",
    description: "Give your OpenClaw a real phone number. It picks up, handles the conversation, and messages you a summary."
  },
  {
    icon: Mic,
    title: "Voice Cloning",
    description: "Use ElevenLabs to give your agent a natural voice. Pick from presets or clone your own."
  },
  {
    icon: FileText,
    title: "Call Recording & Transcripts",
    description: "Every call is recorded, transcribed, and searchable. Powered by Recall."
  },
  {
    icon: Calendar,
    title: "Scheduling",
    description: "Have your agent make calls on a schedule. 'Call the pharmacy every Monday at 9am to check on my prescription.'"
  },
  {
    icon: Key,
    title: "BYOK / Self-Host",
    description: "Open source. Bring your own Twilio, ElevenLabs, and Recall keys. Or use our managed service and skip the config."
  }
];

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.feature-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 relative border-t border-claw-border/30 bg-claw-void">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="font-geist-mono text-claw-red text-[0.65rem] uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
          <span className="text-claw-red/60">⟩</span> Features
        </div>
        
        <h2 className="font-geist font-extrabold text-4xl md:text-5xl tracking-tight mb-16 text-white">
          Not a phone app. A phone skill.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div 
              key={i}
              className="feature-card bg-claw-surface border border-white/5 rounded-2xl p-8 hover:border-claw-red/20 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-6">
                <feature.icon className="w-6 h-6 text-claw-red group-hover:text-claw-red-bright transition-colors" />
                <span className="font-geist-mono text-claw-red text-xs uppercase tracking-widest font-semibold">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-geist font-bold text-xl mb-3 text-white">
                {feature.title}
              </h3>
              <p className="font-instrument text-claw-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
