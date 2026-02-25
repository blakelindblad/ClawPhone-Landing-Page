/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Install from './components/Install';
import Features from './components/Features';
import Demo from './components/Demo';
import Pricing from './components/Pricing';
import Marquee from './components/Marquee';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-claw-void text-claw-text-primary overflow-x-hidden relative">
      <div className="noise-bg fixed inset-0 pointer-events-none z-0" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Install />
        <Features />
        <Demo />
        <Pricing />
        <Marquee />
        <Footer />
      </div>
    </main>
  );
}
