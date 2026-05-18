'use client';

import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import DashboardPreview from '@/components/landing/DashboardPreview';
import TrustedCompanies from '@/components/landing/TrustedCompanies';
import Features from '@/components/landing/Features';
import Analytics from '@/components/landing/Analytics';
import Workflow from '@/components/landing/Workflow';
import Pricing from '@/components/landing/Pricing';
import Testimonials from '@/components/landing/Testimonials';
import CTABanner from '@/components/landing/CTABanner';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <DashboardPreview />
      <TrustedCompanies />
      <Features />
      <Analytics />
      <Workflow />
      <Pricing />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  );
}
