'use client';

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
              <button className="inline-flex items-center justify-center rounded-xl bg-zinc-950 px-9 py-5 text-xl font-semibold text-white transition hover:bg-zinc-800">
                Start Free Trial
                <ArrowRight className="ml-3 h-6 w-6" />
              </button>

              <button className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-9 py-5 text-xl font-semibold text-zinc-900 transition hover:bg-zinc-50">
                <Play className="mr-3 h-6 w-6" />
                Watch Demo
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
          <div className="relative flex items-center justify-center">
            
            <div className="relative w-full max-w-xl rounded-3xl border border-zinc-800 bg-[#0B1020] p-6 shadow-2xl">
              
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-zinc-400">
                    Learning Analytics
                  </p>
                  <h3 className="mt-1 text-3xl font-semibold text-white">
                    Team Performance
                  </h3>
                </div>

                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400"></div>
              </div>

              <div className="space-y-5">
                
                <div>
                  <div className="mb-2 flex justify-between text-sm text-zinc-300">
                    <span>Completion Rate</span>
                    <span>87%</span>
                  </div>

                  <div className="h-2 rounded-full bg-zinc-800">
                    <div className="h-2 w-[87%] rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"></div>
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex justify-between text-sm text-zinc-300">
                    <span>Employee Growth</span>
                    <span>72%</span>
                  </div>

                  <div className="h-2 rounded-full bg-zinc-800">
                    <div className="h-2 w-[72%] rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500"></div>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
                  <p className="text-sm text-zinc-400">
                    Certification Rate
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-white">
                    94%
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
                  <p className="text-sm text-zinc-400">
                    Learners
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-white">
                    12K
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
                  <p className="text-sm text-zinc-400">
                    Avg Completion
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-white">
                    4.2h
                  </p>
                </div>
              </div>
            </div>

            {/* FLOATING CARD */}
            <div className="absolute -bottom-10 -left-10 rounded-2xl border border-zinc-200 bg-white p-5 shadow-2xl">
              <p className="text-sm text-zinc-500">
                Certification Rate
              </p>

              <p className="mt-1 text-5xl font-bold text-zinc-950">
                94%
              </p>

              <p className="mt-1 text-sm font-medium text-emerald-500">
                ↑ 18% this month
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}