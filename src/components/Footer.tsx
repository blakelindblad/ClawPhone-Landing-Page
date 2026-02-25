import { Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#08080A] rounded-t-[3rem] pt-24 pb-12 px-6 lg:px-12 border-t border-claw-border/30 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          
          {/* Column 1 */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
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
            <p className="font-instrument text-claw-text-secondary text-sm">
              Voice for OpenClaw. 🦞
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-geist-mono text-xs text-white uppercase tracking-widest mb-6">Product</h4>
            <ul className="space-y-4 font-instrument text-sm text-claw-text-secondary">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Docs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-geist-mono text-xs text-white uppercase tracking-widest mb-6">Community</h4>
            <ul className="space-y-4 font-instrument text-sm text-claw-text-secondary">
              <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ClawHub</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-geist-mono text-xs text-white uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-4 font-instrument text-sm text-claw-text-secondary">
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-claw-border/50 gap-4">
          <div className="font-instrument text-sm text-claw-text-tertiary">
            Built with 🦞 by the ClawPhone team
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-claw-green animate-pulse"></div>
            <span className="font-geist-mono text-[0.65rem] text-claw-text-secondary uppercase tracking-widest">System Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
