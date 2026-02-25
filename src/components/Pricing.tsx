import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section className="py-32 relative border-t border-claw-border/30 bg-claw-void">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="font-geist-mono text-claw-red text-[0.65rem] uppercase tracking-[0.2em] mb-4 flex items-center gap-2 justify-center">
          <span className="text-claw-red/60">⟩</span> Pricing
        </div>
        
        <h2 className="font-geist font-extrabold text-4xl md:text-5xl tracking-tight mb-6 text-center text-white">
          Start free. Scale when you're ready.
        </h2>
        
        <p className="font-instrument text-claw-text-secondary text-lg text-center max-w-2xl mx-auto mb-20">
          Open source forever. Managed service for when you don't want to deal with Twilio.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          
          {/* Tier 1 */}
          <div className="bg-claw-surface border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-colors">
            <h3 className="font-geist font-bold text-2xl text-white mb-2">Hacker</h3>
            <div className="font-geist-mono text-claw-text-secondary text-sm mb-6 uppercase tracking-wider">Free</div>
            
            <ul className="space-y-4 mb-8 font-instrument text-claw-text-secondary">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-claw-text-tertiary shrink-0 mt-0.5" />
                <span>Self-host everything</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-claw-text-tertiary shrink-0 mt-0.5" />
                <span>Bring your own keys</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-claw-text-tertiary shrink-0 mt-0.5" />
                <span>Community support</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-claw-text-tertiary shrink-0 mt-0.5" />
                <span>Unlimited calls (you pay providers directly)</span>
              </li>
            </ul>
            
            <button className="magnetic-btn w-full bg-transparent border border-claw-border hover:border-claw-text-tertiary text-claw-text-primary font-geist-mono text-sm uppercase tracking-wider py-4 rounded-full font-semibold transition-colors">
              View on GitHub
            </button>
          </div>

          {/* Tier 2 (Pro) */}
          <div className="relative bg-[#121215] border border-claw-red/30 rounded-[2rem] p-10 shadow-2xl shadow-claw-red/10 transform md:-translate-y-4">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-claw-red text-white font-geist-mono text-[0.65rem] uppercase tracking-widest px-4 py-1.5 rounded-full font-bold shadow-lg shadow-claw-red/30">
              Most Popular
            </div>
            
            <div className="absolute inset-0 rounded-[2rem] border border-claw-red/20 pointer-events-none" />
            <div className="absolute inset-0 rounded-[2rem] glow-radial pointer-events-none opacity-50" />
            
            <h3 className="font-geist font-bold text-3xl text-white mb-2 relative z-10">Pro</h3>
            <div className="font-geist-mono text-claw-red text-lg mb-8 uppercase tracking-wider relative z-10">$19/mo</div>
            
            <ul className="space-y-5 mb-10 font-instrument text-claw-text-primary relative z-10">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-claw-red shrink-0 mt-0.5" />
                <span>Dedicated phone number</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-claw-red shrink-0 mt-0.5" />
                <span>500 minutes/month included</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-claw-red shrink-0 mt-0.5" />
                <span>Premium voices (ElevenLabs)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-claw-red shrink-0 mt-0.5" />
                <span>Call recording + transcription</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-claw-red shrink-0 mt-0.5" />
                <span>Priority support</span>
              </li>
            </ul>
            
            <button className="magnetic-btn w-full bg-claw-red hover:bg-claw-red-bright text-white font-geist-mono text-sm uppercase tracking-wider py-4 rounded-full font-bold transition-colors shadow-lg shadow-claw-red/20 relative z-10">
              Get Started
            </button>
          </div>

          {/* Tier 3 */}
          <div className="bg-claw-surface border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-colors">
            <h3 className="font-geist font-bold text-2xl text-white mb-2">Team</h3>
            <div className="font-geist-mono text-claw-text-secondary text-sm mb-6 uppercase tracking-wider">$49/mo</div>
            
            <ul className="space-y-4 mb-8 font-instrument text-claw-text-secondary">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-claw-text-tertiary shrink-0 mt-0.5" />
                <span>Everything in Pro</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-claw-text-tertiary shrink-0 mt-0.5" />
                <span>5 phone numbers</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-claw-text-tertiary shrink-0 mt-0.5" />
                <span>2,000 minutes/month</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-claw-text-tertiary shrink-0 mt-0.5" />
                <span>Multiple OpenClaw instances</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-claw-text-tertiary shrink-0 mt-0.5" />
                <span>Webhook integrations</span>
              </li>
            </ul>
            
            <button className="magnetic-btn w-full bg-transparent border border-claw-border hover:border-claw-text-tertiary text-claw-text-primary font-geist-mono text-sm uppercase tracking-wider py-4 rounded-full font-semibold transition-colors">
              Contact Us
            </button>
          </div>

        </div>

        <div className="mt-16 text-center font-geist-mono text-[0.65rem] text-claw-text-tertiary uppercase tracking-wider">
          Need more? Custom plans available for teams running 10+ claws.
        </div>

      </div>
    </section>
  );
}
