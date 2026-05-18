'use client';

import { ArrowRight, Zap } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-3 sm:space-y-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full">
            <Zap size={16} className="text-white" />
            <span className="text-xs font-medium text-white">Limited Time Offer</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Ready to Transform Your Learning Culture?
          </h2>

          {/* Subheading */}
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto">
            Join leading organizations using SkillSphere to build engaged, skilled, and productive teams.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <button className="group px-6 py-2.5 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-white/20 transition-all duration-300 flex items-center justify-center gap-2 text-sm">
              Start Free Trial
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-6 py-2.5 border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-sm">
              Schedule Demo
            </button>
          </div>

          {/* Trust indicators */}
          <div className="pt-2 border-t border-white/20 flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center text-xs text-blue-100">
            <div className="flex items-center gap-1.5 justify-center">
              <span>✓</span>
              <span>14 days free</span>
            </div>
            <div className="flex items-center gap-1.5 justify-center">
              <span>✓</span>
              <span>No credit card</span>
            </div>
            <div className="flex items-center gap-1.5 justify-center">
              <span>✓</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
