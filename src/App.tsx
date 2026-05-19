import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { VisionMission } from './components/VisionMission';
import { Programs } from './components/Programs';
import { CoreValues } from './components/CoreValues';
import { Impact } from './components/Impact';
import { Founder } from './components/Founder';
import { Scriptures } from './components/Scriptures';
import { GetInvolved } from './components/GetInvolved';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { ParticleField } from './components/ParticleField';
export function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-cosmic-900">
      <ParticleField />

      <Navbar />

      <main>
        <Hero />
        <About />
        <VisionMission />
        <Programs />
        <CoreValues />
        <Impact />
        <Founder />
        <Scriptures />
        <GetInvolved />
        <Gallery />
      </main>

      <Footer />
    </div>);

}