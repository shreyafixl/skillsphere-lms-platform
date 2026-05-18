'use client';

import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-14 lg:py-16">
      {/* Subtle decorative elements */}
      <div className="absolute top-24 right-1/3 w-56 h-56 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-15 -z-10" />
      <div className="absolute -bottom-20 left-1/4 w-56 h-56 bg-gradient-to-tr from-purple-100 to-blue-100 rounded-full blur-3xl opacity-15 -z-10" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-5">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-blue-50 border border-blue-200 rounded-full w-fit">
              <span className="w-1 h-1 bg-blue-600 rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-blue-700">Enterprise LMS Platform</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                Transform Learning,
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Empower Growth
                </span>
              </h1>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-md">
                The complete enterprise learning platform for employee onboarding, AI-powered training, and measurable skill development.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
              <button className="group px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                Start Free Trial
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-5 py-2.5 border-2 border-gray-300 text-gray-900 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all flex items-center justify-center gap-2 text-sm">
                <Play size={16} />
                Watch Demo
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1 text-xs text-gray-600">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-gray-900">14</span>
                <span>days free trial</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-gray-900">No</span>
                <span>credit card required</span>
              </div>
            </div>
          </div>

          {/* Right - Dashboard Preview */}
          <div className="relative h-72 sm:h-80 lg:h-96 flex items-center justify-center">
            {/* Main dashboard card */}
            <div className="absolute w-64 sm:w-72 h-52 sm:h-60 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl p-5 border border-gray-700 transform -rotate-6 hover:rotate-0 transition-transform duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-white font-semibold text-xs">Learning Analytics</h3>
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                </div>
                <div className="space-y-2.5">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Completion Rate</span>
                    <span>87%</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full w-[87%] bg-gradient-to-r from-blue-500 to-purple-500" />
                  </div>
                </div>
                <div className="space-y-2.5">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Active Learners</span>
                    <span>2,847</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full w-[72%] bg-gradient-to-r from-purple-500 to-pink-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat card 1 */}
            <div className="absolute top-4 right-0 w-40 bg-white rounded-lg shadow-lg p-3 border border-gray-200 transform rotate-12 hover:rotate-0 transition-transform duration-500 hover:shadow-xl">
              <div className="text-xs text-gray-600 mb-1 font-medium">Avg. Completion</div>
              <div className="text-xl font-bold text-gray-900">4.2 hrs</div>
              <div className="text-xs text-green-600 mt-1.5">↑ 12%</div>
            </div>

            {/* Floating stat card 2 */}
            <div className="absolute bottom-4 left-0 w-40 bg-white rounded-lg shadow-lg p-3 border border-gray-200 transform -rotate-12 hover:rotate-0 transition-transform duration-500 hover:shadow-xl">
              <div className="text-xs text-gray-600 mb-1 font-medium">Certification</div>
              <div className="text-xl font-bold text-gray-900">94%</div>
              <div className="text-xs text-green-600 mt-1.5">↑ 8%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
