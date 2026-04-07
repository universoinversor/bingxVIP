"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Ticker } from "@/components/sections/Ticker";
import { TrustSection } from "@/components/sections/TrustSection";
import { Founder } from "@/components/sections/Founder";
import { Elite } from "@/components/sections/Elite";
import { RacingSection } from "@/components/sections/Racing";
import { Cockpit } from "@/components/sections/Cockpit";
import { ValueProps } from "@/components/sections/ValueProps";
import { Tutorial } from "@/components/sections/Tutorial";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { StickyMobileFooter } from "@/components/ui/StickyMobileFooter";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import dynamic from "next/dynamic";
import { Results } from "@/components/sections/Results";
import { BingXFeatures } from "@/components/sections/BingXFeatures";

const Scene = dynamic(() => import("@/components/ui/Scene").then(mod => mod.Scene), { ssr: false });

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#06080d] overflow-x-hidden selection:bg-[#00e5ff] selection:text-black">
      {/* 3D Background Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Scene />
      </div>

      {/* Global Tech Overlays */}
      <div className="fixed inset-0 pointer-events-none z-[100] scanline opacity-[0.05]" />
      <div className="fixed inset-0 pointer-events-none z-[101] opacity-[0.02] mix-blend-overlay" 
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

      <Navbar />

      <div className="relative z-10">
        <Hero />
        <Ticker />
        <TrustSection /> {/* Quick Social Proof logos */}
        <BingXFeatures /> {/* Deep info about BingX requested by user */}
        <Results /> {/* Trading ROI and Performance stats */}
        <Elite />
        <Founder />
        <RacingSection />
        <Tutorial /> {/* Step-by-step guide upgraded */}
        <Cockpit /> {/* Final conversion section */}
        <ValueProps />
        <FAQ />
        <Footer />
      </div>

      <StickyMobileFooter />
      <WhatsAppButton />
    </main>
  );
}
