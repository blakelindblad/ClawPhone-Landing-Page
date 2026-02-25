export default function Marquee() {
  const testimonials = [
    {
      quote: "My @openclaw just called my phone and spoke to me with an aussie accent. This is ridiculous.",
      handle: "@mirthtime",
      avatar: "https://unavatar.io/x/mirthtime"
    },
    {
      quote: "Had ClawPhone reschedule 3 appointments while I was in the shower. The future is waterproof.",
      handle: "@tech_nomad",
      avatar: "https://unavatar.io/x/tech_nomad"
    },
    {
      quote: "I asked my lobster to call Comcast and negotiate my bill. It saved me $40/month. I'm never making a phone call again.",
      handle: "@dev_sarah",
      avatar: "https://unavatar.io/x/dev_sarah"
    },
    {
      quote: "3 lines of config and my AI has a phone number. What a time to be alive.",
      handle: "@jason_codes",
      avatar: "https://unavatar.io/x/jason_codes"
    },
    {
      quote: "ClawPhone + ElevenLabs voice clone = my AI sounds exactly like me. My mom couldn't tell the difference.",
      handle: "@ai_builder",
      avatar: "https://unavatar.io/x/ai_builder"
    }
  ];

  // Duplicate for seamless scroll
  const row1 = [...testimonials, ...testimonials];
  const reversed = [...testimonials].reverse();
  const row2 = [...reversed, ...reversed];

  return (
    <section className="py-24 relative border-t border-claw-border/30 bg-claw-void overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 mb-12">
        <div className="font-geist-mono text-claw-red text-[0.65rem] uppercase tracking-[0.2em] mb-4 flex items-center gap-2 justify-center">
          <span className="text-claw-red/60">⟩</span> What People Say
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {/* Row 1 */}
        <div className="marquee-container">
          <div className="marquee-content">
            {row1.map((t, i) => (
              <div key={i} className="bg-claw-surface border border-white/5 rounded-2xl p-6 w-[350px] shrink-0 hover:border-claw-red/20 transition-colors">
                <p className="font-instrument text-claw-text-primary text-sm leading-relaxed mb-6">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.handle} className="w-8 h-8 rounded-full bg-claw-border" onError={(e) => { e.currentTarget.src = 'https://picsum.photos/32/32?blur=2' }} />
                  <span className="font-geist-mono text-xs text-claw-text-secondary">{t.handle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="marquee-container">
          <div className="marquee-content reverse">
            {row2.map((t, i) => (
              <div key={i} className="bg-claw-surface border border-white/5 rounded-2xl p-6 w-[350px] shrink-0 hover:border-claw-red/20 transition-colors">
                <p className="font-instrument text-claw-text-primary text-sm leading-relaxed mb-6">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.handle} className="w-8 h-8 rounded-full bg-claw-border" onError={(e) => { e.currentTarget.src = 'https://picsum.photos/32/32?blur=2' }} />
                  <span className="font-geist-mono text-xs text-claw-text-secondary">{t.handle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
