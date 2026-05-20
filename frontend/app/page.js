"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  Star,
  BarChart3,
  Users,
  TrendingUp,
  Bot,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function Home() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-violet-100 via-fuchsia-50 to-amber-50">

      {/* BACKGROUND ORBS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-300/30 rounded-full blur-3xl"></div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/70 backdrop-blur-xl">

        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-2">

            <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
              S
            </div>

            <span className="font-bold text-lg">
              SkillSphere
            </span>

          </div>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-8">

            <Link href="#" className="text-sm hover:text-purple-600">
              Features
            </Link>

            <Link href="#" className="text-sm hover:text-purple-600">
              Pricing
            </Link>

            <Link href="#" className="text-sm hover:text-purple-600">
              Contact
            </Link>

          </nav>

          {/* BUTTONS */}
          <div className="flex items-center gap-3">

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setOpen(true)}
            >
              Sign In
            </Button>

            <Button
              size="sm"
              className="bg-slate-900 hover:bg-slate-800"
              onClick={() => setOpen(true)}
            >
              Get Started
            </Button>

          </div>

        </div>

      </header>

    {/* HERO SECTION */}
<section className="relative py-24 overflow-visible">

  <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center overflow-visible">

    {/* LEFT */}
    <div>

      <div className="inline-flex items-center rounded-full bg-white/70 border px-4 py-2 text-sm mb-6 backdrop-blur">
        <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
        Enterprise Learning Platform
      </div>

      <h1 className="text-5xl md:text-6xl font-black leading-tight">

        Transform Learning
        <br />

        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">
          Empower Growth
        </span>

      </h1>

      <p className="mt-6 text-lg text-gray-600 max-w-xl">
        Build smarter teams with AI-powered learning,
        onboarding, analytics and certifications.
      </p>

      <div className="flex flex-wrap gap-4 mt-8">

        <Button
          size="lg"
          className="bg-orange-500 hover:bg-orange-600"
          onClick={() => setOpen(true)}
        >
          Start Free Trial
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        <Button
          size="lg"
          variant="outline"
        >
          Watch Demo
        </Button>

      </div>

      <div className="flex gap-6 mt-8 text-sm text-gray-600">

        <div className="flex items-center gap-2">
          <Check className="h-4 w-4 text-green-500" />
          14 days free
        </div>

        <div className="flex items-center gap-2">
          <Check className="h-4 w-4 text-green-500" />
          No credit card
        </div>

      </div>

    </div>

    {/* RIGHT SIDE ANALYTICS */}
    <div className="relative flex justify-center overflow-visible">

      {/* MAIN CARD */}
      <div className="relative z-10 bg-[#071133] text-white rounded-[32px] p-12 w-[650px] min-h-[460px] shadow-2xl">

        <h2 className="text-4xl font-bold mb-12">
          Learning Analytics
        </h2>

        {/* COMPLETION */}
        <div className="mb-10">

          <div className="flex justify-between mb-3 text-lg">
            <span>Completion</span>
            <span>87%</span>
          </div>

          <div className="w-full bg-slate-700 rounded-full h-3">
            <div className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 h-3 rounded-full w-[87%]"></div>
          </div>

        </div>

        {/* STATS */}
        <div className="space-y-8 text-xl">

          <div className="flex justify-between">
            <span>Active Learners</span>

            <span className="text-cyan-400 font-semibold">
              2,847
            </span>
          </div>

          <div className="flex justify-between">
            <span>Certification Rate</span>

            <span className="text-green-400 font-semibold">
              91%
            </span>
          </div>

          <div className="flex justify-between">
            <span>Completion Time</span>

            <span>
              4.2 hrs
            </span>
          </div>

        </div>

      </div>

      {/* FLOATING CARD 1 */}
      <div className="absolute -top-10 -right-8 bg-white rounded-3xl shadow-2xl p-6 w-64 border border-gray-100 z-20">

        <div className="flex justify-between items-center mb-4">

          <h4 className="font-semibold text-base">
            Team Progress
          </h4>

          <span className="text-green-500 font-bold text-base">
            +18%
          </span>

        </div>

        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">

          <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-[78%]"></div>

        </div>

        <p className="text-sm text-gray-500 leading-relaxed">
          Weekly learning performance increased.
        </p>

      </div>

      {/* FLOATING CARD 2 */}
      <div className="absolute -bottom-10 -left-8 bg-white rounded-3xl shadow-2xl p-6 w-64 border border-gray-100 z-20">

        <div className="flex items-center gap-4 mb-5">

          <div className="h-14 w-14 rounded-2xl bg-purple-100 flex items-center justify-center text-2xl">
            🎯
          </div>

          <div>

            <h4 className="font-semibold text-base">
              Skill Goals
            </h4>

            <p className="text-sm text-gray-500">
              12 Goals Completed
            </p>

          </div>

        </div>

        <div className="flex justify-between text-sm mb-3">

          <span>Progress</span>

          <span className="font-semibold">
            82%
          </span>

        </div>

        <div className="w-full bg-gray-200 rounded-full h-2">

          <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full w-[82%]"></div>

        </div>

      </div>

    </div>

  </div>

</section>

    

      
      {/* DASHBOARD FEATURES SECTION */}
<section className="py-16 md:py-20 relative overflow-hidden">

  <div className="absolute inset-0 bg-gradient-to-br from-blue-300/80 via-indigo-300/70 to-purple-300/80 -z-10"></div>

  <div className="container max-w-6xl mx-auto px-6">

    <div className="text-center mb-12 max-w-2xl mx-auto">

      <h2 className="text-3xl md:text-4xl font-bold italic mb-4">
        Powerful Dashboards for Every Role
      </h2>

      <p className="text-muted-foreground">
        Multi-role dashboards tailored for administrators,
        trainers, and learners with real-time insights.
      </p>

    </div>

    <div className="grid md:grid-cols-2 gap-6">

      {/* ADMIN */}
      <Card className="border shadow-sm bg-white/80 backdrop-blur-sm overflow-hidden relative">

        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-indigo-500"></div>

        <CardContent className="p-6">

          <div className="flex items-center gap-3 mb-5">

            <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center">
              <BarChart3 className="h-5 w-5 text-purple-600" />
            </div>

            <div>
              <h3 className="font-semibold">
                Admin Dashboard
              </h3>

              <p className="text-sm text-muted-foreground">
                Organization insights
              </p>
            </div>

          </div>

          <div className="space-y-4">

            <div>

              <div className="flex justify-between text-sm mb-1">
                <span>Total Learners</span>
                <span className="font-medium">12.8K</span>
              </div>

              <div className="h-2 bg-muted rounded-full overflow-hidden">

                <div
                  className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
                  style={{ width: "85%" }}
                ></div>

              </div>

            </div>

            <div className="flex justify-between text-sm">
              <span>Active Courses</span>
              <span className="font-medium">48</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Completion</span>
              <span className="font-medium">87%</span>
            </div>

          </div>

        </CardContent>

      </Card>

      {/* TRAINER */}
      <Card className="border shadow-sm bg-white/80 backdrop-blur-sm overflow-hidden relative">

        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-amber-500"></div>

        <CardContent className="p-6">

          <div className="flex items-center gap-3 mb-5">

            <div className="h-10 w-10 rounded-lg bg-orange-100 flex items-center justify-center">
              <Users className="h-5 w-5 text-orange-600" />
            </div>

            <div>
              <h3 className="font-semibold">
                Trainer Dashboard
              </h3>

              <p className="text-sm text-muted-foreground">
                Course management
              </p>
            </div>

          </div>

          <div className="space-y-4">

            <div>

              <div className="flex justify-between text-sm mb-1">
                <span>My Learners</span>
                <span className="font-medium">342</span>
              </div>

              <div className="h-2 bg-muted rounded-full overflow-hidden">

                <div
                  className="h-full bg-gradient-to-r from-blue-400 to-blue-600"
                  style={{ width: "70%" }}
                ></div>

              </div>

            </div>

            <div className="flex justify-between text-sm">
              <span>Courses</span>
              <span className="font-medium">12</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Rating</span>
              <span className="font-medium">4.8★</span>
            </div>

          </div>

        </CardContent>

      </Card>

      {/* LEARNER */}
      <Card className="border shadow-sm bg-white/80 backdrop-blur-sm overflow-hidden relative">

        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-teal-500"></div>

        <CardContent className="p-6">

          <div className="flex items-center gap-3 mb-5">

            <div className="h-10 w-10 rounded-lg bg-cyan-100 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-cyan-600" />
            </div>

            <div>
              <h3 className="font-semibold">
                Learner Dashboard
              </h3>

              <p className="text-sm text-muted-foreground">
                Learning journey
              </p>
            </div>

          </div>

          <div className="space-y-4">

            <div>

              <div className="flex justify-between text-sm mb-1">
                <span>Progress</span>
                <span className="font-medium">68%</span>
              </div>

              <div className="h-2 bg-muted rounded-full overflow-hidden">

                <div
                  className="h-full bg-gradient-to-r from-green-400 to-cyan-500"
                  style={{ width: "68%" }}
                ></div>

              </div>

            </div>

            <div className="flex justify-between text-sm">
              <span>Enrolled</span>
              <span className="font-medium">8</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Certificates</span>
              <span className="font-medium">3</span>
            </div>

          </div>

        </CardContent>

      </Card>

      {/* AI */}
      <Card className="border shadow-sm bg-white/80 backdrop-blur-sm overflow-hidden relative">

        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-rose-500"></div>

        <CardContent className="p-6">

          <div className="flex items-center gap-3 mb-5">

            <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center">
              <Bot className="h-5 w-5 text-amber-600" />
            </div>

            <div>
              <h3 className="font-semibold">
                AI Assistant
              </h3>

              <p className="text-sm text-muted-foreground">
                Learning support
              </p>
            </div>

          </div>

          <div className="space-y-4">

            <div className="flex justify-between text-sm">
              <span>Support</span>
              <span className="font-medium">24/7</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Status</span>
              <span className="font-medium text-green-500">
                Active
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Recommendations</span>
              <Check className="h-4 w-4" />
            </div>

          </div>

        </CardContent>

      </Card>

    </div>

  </div>

</section>
      {/* FEATURES SECTION */}
<section className="py-24 px-6">

  <div className="max-w-7xl mx-auto">

    {/* HEADING */}
    <div className="text-center mb-16">

      <h2 className="text-5xl font-bold mb-4">
        Powerful Features
      </h2>

      <p className="text-gray-600 text-lg">
        Everything you need to manage enterprise learning.
      </p>

    </div>

    {/* FEATURE GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* CARD 1 */}
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
        <div className="h-16 w-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 text-3xl">
          📊
        </div>

        <h3 className="text-2xl font-bold mb-3">
          Analytics
        </h3>

        <p className="text-gray-600">
          Real-time dashboards and insights for smarter learning decisions.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
        <div className="h-16 w-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 text-3xl">
          👥
        </div>

        <h3 className="text-2xl font-bold mb-3">
          Team Training
        </h3>

        <p className="text-gray-600">
          Manage learners and trainers easily with collaborative tools.
        </p>
      </div>

      {/* CARD 3 */}
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
        <div className="h-16 w-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 text-3xl">
          📈
        </div>

        <h3 className="text-2xl font-bold mb-3">
          Growth Tracking
        </h3>

        <p className="text-gray-600">
          Measure skill progression with visual performance tracking.
        </p>
      </div>

      {/* CARD 4 */}
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
        <div className="h-16 w-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 text-3xl">
          🤖
        </div>

        <h3 className="text-2xl font-bold mb-3">
          AI Assistant
        </h3>

        <p className="text-gray-600">
          Personalized AI learning support and recommendations.
        </p>
      </div>

      {/* CARD 5 */}
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
        <div className="h-16 w-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 text-3xl">
          🎯
        </div>

        <h3 className="text-2xl font-bold mb-3">
          Smart Goals
        </h3>

        <p className="text-gray-600">
          Set milestones and track achievements with intelligent goals.
        </p>
      </div>

      {/* CARD 6 */}
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
        <div className="h-16 w-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 text-3xl">
          🔒
        </div>

        <h3 className="text-2xl font-bold mb-3">
          Secure Platform
        </h3>

        <p className="text-gray-600">
          Enterprise-grade security and protected cloud infrastructure.
        </p>
      </div>
      {/* CARD 7 */}
<div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
  <div className="h-16 w-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 text-3xl">
    🌐
  </div>

  <h3 className="text-2xl font-bold mb-3">
    Global Access
  </h3>

  <p className="text-gray-600">
    Access learning resources anytime from anywhere in the world.
  </p>
</div>

{/* CARD 8 */}
<div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
  <div className="h-16 w-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 text-3xl">
    ⚡
  </div>

  <h3 className="text-2xl font-bold mb-3">
    Fast Performance
  </h3>

  <p className="text-gray-600">
    Optimized platform experience with lightning fast loading speed.
  </p>
</div>

{/* CARD 9 */}
<div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
  <div className="h-16 w-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 text-3xl">
    🏆
  </div>

  <h3 className="text-2xl font-bold mb-3">
    Certifications
  </h3>

  <p className="text-gray-600">
    Award certificates and achievements to learners automatically.
  </p>
</div>

    </div>

  </div>

</section>
{/* TESTIMONIALS SECTION */}
<section className="py-24 px-6">

  <div className="max-w-7xl mx-auto">

    {/* HEADING */}
    <div className="text-center mb-16">

      <h2 className="text-5xl font-bold mb-4">
        What Our Users Say
      </h2>

      <p className="text-gray-600 text-lg">
        Trusted by learners and teams worldwide.
      </p>

    </div>

    {/* TESTIMONIAL GRID */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* TESTIMONIAL 1 */}
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">

        <div className="text-4xl mb-4">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="text-gray-600 mb-6">
          “SkillSphere transformed the way our company trains employees.”
        </p>

        <div>
          <h4 className="font-bold text-lg">
            Sarah Johnson
          </h4>

          <p className="text-sm text-gray-500">
            HR Manager
          </p>
        </div>

      </div>

      {/* TESTIMONIAL 2 */}
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">

        <div className="text-4xl mb-4">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="text-gray-600 mb-6">
          “The AI assistant helped me learn faster and stay motivated.”
        </p>

        <div>
          <h4 className="font-bold text-lg">
            David Lee
          </h4>

          <p className="text-sm text-gray-500">
            Software Engineer
          </p>
        </div>

      </div>

      {/* TESTIMONIAL 3 */}
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">

        <div className="text-4xl mb-4">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="text-gray-600 mb-6">
          “Clean dashboard, excellent analytics, and super easy to use.”
        </p>

        <div>
          <h4 className="font-bold text-lg">
            Emily Carter
          </h4>

          <p className="text-sm text-gray-500">
            Team Lead
          </p>
        </div>

      </div>

    </div>

  </div>

</section>

{/* PRICING SECTION */}
<section className="py-16 px-4">

  <div className="max-w-7xl mx-auto">

    {/* HEADING */}
    <div className="text-center mb-16">

      <h2 className="text-5xl font-bold mb-4">
        Simple Pricing
      </h2>

      <p className="text-gray-600 text-lg">
        Choose the perfect plan for your learning journey.
      </p>

    </div>

    {/* PRICING GRID */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* BASIC PLAN */}
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-7 shadow-lg border border-white/20">
        <h3 className="text-2xl font-bold mb-4">
          Basic
        </h3>

        <h1 className="text-5xl font-bold mb-6">
          $19
          <span className="text-lg text-gray-500">
            /month
          </span>
        </h1>

        <ul className="space-y-4 text-gray-600 mb-8">

          <li>✔ Access to core courses</li>
          <li>✔ Basic analytics</li>
          <li>✔ Community support</li>

        </ul>

        <button className="w-full bg-black text-white py-3 rounded-xl font-semibold">
          Choose Plan
        </button>

      </div>

      {/* PRO PLAN */}
      <div className="bg-gradient-to-br from-purple-600 to-violet-700 text-white rounded-2xl p-7 shadow-xl">

        <div className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm mb-4">
          Most Popular
        </div>

        <h3 className="text-2xl font-bold mb-4">
          Pro
        </h3>

        <h1 className="text-5xl font-bold mb-6">
          $49
          <span className="text-lg text-white/70">
            /month
          </span>
        </h1>

        <ul className="space-y-4 mb-8">

          <li>✔ Everything in Basic</li>
          <li>✔ AI Assistant</li>
          <li>✔ Advanced analytics</li>
          <li>✔ Team collaboration</li>

        </ul>

        <button className="w-full bg-white text-black py-3 rounded-xl font-semibold">
          Get Started
        </button>

      </div>

      {/* ENTERPRISE PLAN */}
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-7 shadow-lg border border-white/20">

        <h3 className="text-2xl font-bold mb-4">
          Enterprise
        </h3>

        <h1 className="text-5xl font-bold mb-6">
          $99
          <span className="text-lg text-gray-500">
            /month
          </span>
        </h1>

        <ul className="space-y-4 text-gray-600 mb-8">

          <li>✔ Unlimited users</li>
          <li>✔ Dedicated support</li>
          <li>✔ Enterprise security</li>
          <li>✔ Custom integrations</li>

        </ul>

        <button className="w-full bg-black text-white py-3 rounded-xl font-semibold">
          Contact Sales
        </button>

      </div>

    </div>

  </div>

</section>
{/* FINAL CTA SECTION */}
<section className="py-24 px-6 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-700 text-white relative overflow-hidden">

  {/* GLOW EFFECTS */}
  <div className="absolute top-0 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

  <div className="absolute bottom-0 right-10 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl"></div>

  <div className="max-w-5xl mx-auto text-center relative z-10">

    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      Ready to Transform Your
      <br />
      Learning Culture?
    </h2>

    <p className="text-lg text-purple-100 max-w-2xl mx-auto mb-10">
      Join thousands of organizations using SkillSphere to build smarter,
      faster, and more engaged teams.
    </p>

    {/* BUTTONS */}
<div className="flex flex-wrap justify-center gap-4 mb-8">

  <Button
    size="lg"
    className="bg-white text-purple-700 hover:bg-purple-100"
  >
    Start Free Trial
  </Button>

  <Button
    size="lg"
    variant="outline"
    className="border-white text-purple-700 bg-white hover:bg-purple-100"
  >
    Schedule Demo
  </Button>

</div>
    {/* SMALL POINTS */}
    <div className="flex flex-wrap justify-center gap-6 text-sm text-purple-200">

      <div className="flex items-center gap-2">
        ✓ 14 Days Free Trial
      </div>

      <div className="flex items-center gap-2">
        ✓ No Credit Card Required
      </div>

      <div className="flex items-center gap-2">
        ✓ Cancel Anytime
      </div>

    </div>

  </div>

</section>

{/* FOOTER */}
<footer className="bg-slate-950 text-white py-16 px-6">

  <div className="max-w-6xl mx-auto">

    {/* TOP AREA */}
    <div className="grid md:grid-cols-5 gap-10 border-b border-white/10 pb-10">

      {/* BRAND */}
      <div className="md:col-span-2">

        <div className="flex items-center gap-2 mb-4">

          <div className="h-9 w-9 rounded-lg bg-purple-600 flex items-center justify-center font-bold">
            S
          </div>

          <span className="text-xl font-bold">
            SkillSphere
          </span>

        </div>

        <p className="text-gray-400 max-w-sm">
          Modern enterprise learning platform designed to help teams
          learn faster and grow smarter.
        </p>

      </div>

      {/* PRODUCT */}
      <div>

        <h3 className="font-semibold mb-4">
          Product
        </h3>

        <ul className="space-y-3 text-gray-400 text-sm">

          <li>Features</li>
          <li>Pricing</li>
          <li>Analytics</li>
          <li>Integrations</li>

        </ul>

      </div>

      {/* COMPANY */}
      <div>

        <h3 className="font-semibold mb-4">
          Company
        </h3>

        <ul className="space-y-3 text-gray-400 text-sm">

          <li>About</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>Contact</li>

        </ul>

      </div>

      {/* SUPPORT */}
      <div>

        <h3 className="font-semibold mb-4">
          Support
        </h3>

        <ul className="space-y-3 text-gray-400 text-sm">

          <li>Help Center</li>
          <li>Documentation</li>
          <li>Status</li>
          <li>Community</li>

        </ul>

      </div>

    </div>

    {/* BOTTOM */}
    <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4 text-sm text-gray-400">

      <p>
        © 2026 SkillSphere. All rights reserved.
      </p>

      <div className="flex gap-6">

        <span>Privacy</span>
        <span>Terms</span>
        <span>Cookies</span>

      </div>

    </div>

  </div>

</footer>  

      
        {/* MODAL */}
      {open && (

        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">

          <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl relative">

            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            <h1 className="text-3xl font-bold mb-2">
              Create Workspace 🚀
            </h1>

            <p className="text-gray-500 mb-6">
              Build smarter learning experiences for your team
            </p>

            {/* INPUTS */}
            <div className="space-y-4">

              <Input
                type="text"
                placeholder="Full Name"
                className="h-12 rounded-xl"
              />

              <Input
                type="email"
                placeholder="Work Email"
                className="h-12 rounded-xl"
              />

              <Input
                type="text"
                placeholder="Company Name"
                className="h-12 rounded-xl"
              />

              <Input
                type="password"
                placeholder="Password"
                className="h-12 rounded-xl"
              />

              <Input
                type="password"
                placeholder="Confirm Password"
                className="h-12 rounded-xl"
              />

            </div>

            {/* TERMS */}
            <div className="flex items-center gap-2 text-sm text-gray-600 mt-4">
              <input type="checkbox" />
              <p>I agree to Terms & Privacy Policy</p>
            </div>

            {/* GOOGLE BUTTON */}
            <Button
              variant="outline"
              className="w-full h-12 rounded-xl mt-6"
            >
              Continue with Google
            </Button>

            {/* MAIN BUTTON */}
            <Button
              className="w-full h-12 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:scale-[1.02] transition-all duration-300 shadow-lg text-white font-semibold mt-4"
            >
              Create Workspace
            </Button>

            {/* FOOTER */}
            <p className="text-center text-sm text-gray-600 mt-5">
              Already have an account?{" "}
              <span className="text-violet-600 font-medium cursor-pointer hover:underline">
                Sign In
              </span>
            </p>

          </div>

        </div>

      )}

    </div>
  )
}            
                  

     

              


      