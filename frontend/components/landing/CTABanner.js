'use client';

import { ArrowRight, Zap } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full">
            <Zap size={18} className="text-white" />
            <span className="text-sm font-medium text-white">Limited Time Offer</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Ready to Transform Your Learning Culture?
          </h2>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto">
            Join leading organizations using SkillSphere to build engaged, skilled, and productive teams.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="group px-8 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-white/20 transition-all duration-300 flex items-center justify-center gap-2 text-base">
              Start Free Trial
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-base">
              Schedule Demo
            </button>
          </div>

          {/* Trust indicators */}
          <div className="pt-4 border-t border-white/20 flex flex-col sm:flex-row gap-4 justify-center text-sm text-blue-100">
            <div className="flex items-center gap-2 justify-center">
              <span>✓</span>
              <span>14 days free</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <span>✓</span>
              <span>No credit card</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <span>✓</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
