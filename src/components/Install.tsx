import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

export default function Install() {
  const [activeTab, setActiveTab] = useState<'install' | 'byok'>('install');
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    install: `# Install the skill\n$ openclaw skill install clawphone\n\n# Pick a voice, pick a number, make your first call\n$ openclaw clawphone setup`,
    byok: `# Bring your own keys\n$ openclaw skill install clawphone\n\n# Configure your own providers\n$ openclaw clawphone setup --provider twilio \\\n    --voice elevenlabs \\\n    --key-file ~/.clawphone/keys.json`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 relative border-t border-claw-border/30">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        
        <div className="font-geist-mono text-claw-red text-[0.65rem] uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
          <span className="text-claw-red/60">⟩</span> Quick Start
        </div>

        <div className="bg-claw-void border border-claw-border rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
          {/* Tabs */}
          <div className="flex items-center justify-between bg-claw-surface border-b border-claw-border px-4 py-3">
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab('install')}
                className={`font-geist-mono text-xs uppercase tracking-wider transition-colors ${
                  activeTab === 'install' ? 'text-white' : 'text-claw-text-tertiary hover:text-claw-text-secondary'
                }`}
              >
                Install
              </button>
              <button
                onClick={() => setActiveTab('byok')}
                className={`font-geist-mono text-xs uppercase tracking-wider transition-colors ${
                  activeTab === 'byok' ? 'text-white' : 'text-claw-text-tertiary hover:text-claw-text-secondary'
                }`}
              >
                BYOK (Self-Host)
              </button>
            </div>
            <button
              onClick={handleCopy}
              className="text-claw-text-tertiary hover:text-white transition-colors p-1"
              aria-label="Copy code"
            >
              {copied ? <Check className="w-4 h-4 text-claw-green" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Code Area */}
          <div className="p-6 overflow-x-auto">
            <pre className="font-geist-mono text-sm leading-relaxed text-claw-text-secondary">
              <code>
                {codeSnippets[activeTab].split('\n').map((line, i) => (
                  <div key={i} className={line.startsWith('#') ? 'text-claw-text-tertiary' : 'text-white'}>
                    {line}
                  </div>
                ))}
              </code>
            </pre>
          </div>
        </div>

        <div className="mt-6 font-geist-mono text-[0.65rem] text-claw-text-tertiary uppercase tracking-wider text-center">
          Works on macOS, Linux, Windows (WSL). Requires OpenClaw v2.1+
        </div>
      </div>
    </section>
  );
}
