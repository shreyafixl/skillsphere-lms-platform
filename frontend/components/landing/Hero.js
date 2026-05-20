'use client';

import Link from 'next/link';
import { ArrowRight, Play, Check } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-28 lg:pt-32 lg:pb-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          
          {/* LEFT */}
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm">
              <div className="mr-2 h-2 w-2 rounded-full bg-violet-500"></div>
              AI Powered LMS Platform
            </div>

            <div className="max-w-[700px]">
              <h1 className="text-8xl font-bold tracking-tight text-zinc-950 sm:text-9xl lg:text-[110px] lg:leading-[0.9]">
                Transform
                <br />
                Workplace
                <br />
                Learning
                <br />
                <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
                  with AI
                </span>
              </h1>
            </div>

            <p className="mt-12 max-w-3xl text-2xl sm:text-3xl leading-relaxed text-zinc-600 font-light">
              SkillSphere helps enterprises onboard, train, and upskill teams
              with modern AI-powered learning experiences and advanced analytics.
            </p>

            <div className="mt-14 flex flex-col gap-5 sm:flex-row">
              <Link href="/signup" className="inline-flex items-center justify-center rounded-xl bg-zinc-950 px-9 py-5 text-xl font-semibold text-white transition hover:bg-zinc-800">
                Start Free Trial
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>

              <button className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-9 py-5 text-xl font-semibold text-violet-600 transition hover:bg-zinc-50">
                <Play className="mr-3 h-6 w-6" />
                Schedule Demo
              </button>
            </div>

            <div className="mt-10 flex flex-col gap-5 text-lg text-zinc-600 sm:flex-row sm:items-center sm:gap-10">
              <div className="flex items-center">
                <Check className="mr-3 h-5 w-5 text-emerald-500" />
                14-day free trial
              </div>

              <div className="flex items-center">
                <Check className="mr-3 h-5 w-5 text-emerald-500" />
                No credit card required
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative overflow-visible" style={{ height: '550px', perspective: '1000px' }}>
            
            {/* MAIN DARK ANALYTICS CARD */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full rounded-3xl border border-zinc-800 bg-[#0B1020] p-12 shadow-2xl z-20" style={{ maxWidth: '520px', maxHeight: '480px' }}>
                
                {/* Header */}
                <div className="mb-10">
                  <h3 className="text-4xl font-bold text-white">
                    Learning Analytics
                  </h3>
                </div>

                {/* Content - Metrics */}
                <div className="space-y-8">
                  
                  {/* Completion */}
                  <div>
                    <div className="mb-3 flex justify-between items-center">
                      <span className="text-lg text-white font-medium">Completion</span>
                      <span className="text-lg text-white font-semibold">87%</span>
                    </div>
                    <div className="h-2 rounded-full bg-zinc-700/50">
                      <div className="h-2 w-[87%] rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"></div>
                    </div>
                  </div>

                  {/* Active Learners */}
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-white font-medium">Active Learners</span>
                    <span className="text-lg text-cyan-400 font-semibold">2,847</span>
                  </div>

                  {/* Certification Rate */}
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-white font-medium">Certification Rate</span>
                    <span className="text-lg text-emerald-400 font-semibold">91%</span>
                  </div>

                  {/* Average Learning Time */}
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-white font-medium">Average Learning Time</span>
                    <span className="text-lg text-white font-semibold">4.2 hrs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING CARD - TOP RIGHT */}
            <div className="absolute z-30" style={{ top: '60px', right: '-40px', width: '280px' }}>
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <p className="text-base font-bold text-zinc-900">
                      Team Progress
                    </p>
                  </div>
                  <p className="text-lg font-bold text-emerald-500 flex-shrink-0">
                    +18%
                  </p>
                </div>
                <div className="h-2 rounded-full bg-zinc-200 mb-3">
                  <div className="h-2 w-[70%] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
                </div>
                <p className="text-sm text-zinc-600">
                  Weekly learning performance increased.
                </p>
              </div>
            </div>

            {/* FLOATING CARD - BOTTOM LEFT */}
            <div className="absolute z-30" style={{ bottom: '-30px', left: '-20px', width: '280px' }}>
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl">
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex-shrink-0 h-12 w-12 rounded-2xl bg-gradient-to-br from-pink-200 to-rose-200 flex items-center justify-center">
                    <svg className="w-6 h-6 text-rose-600" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="2" />
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-base font-bold text-zinc-900">
                      Skill Goals
                    </p>
                    <p className="text-sm text-zinc-500">
                      12 Goals Completed
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm text-zinc-700 font-medium">Progress</p>
                  <p className="text-sm font-bold text-zinc-900">82%</p>
                </div>
                <div className="h-2 rounded-full bg-zinc-200">
                  <div className="h-2 w-[82%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}