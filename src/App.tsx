/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, type ReactNode } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import SocialProof from './components/SocialProof';
import Booking from './components/Booking';
import ServiceModal from './components/ServiceModal';

interface Service {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  benefits: string[];
  icon: ReactNode;
}

export default function App() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <div className="min-h-screen bg-[#FDF8F3] font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      <main>
        <Hero />
        <Services onSelectService={setSelectedService} />
        <SocialProof />
        <Booking />
      </main>

      <ServiceModal 
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
      />
    </div>
  );
}
