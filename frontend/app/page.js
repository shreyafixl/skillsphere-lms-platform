"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  BarChart3,
  Users,
  TrendingUp,
  Bot,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import LoginModal from "@/components/auth/LoginModal"

import { Eye, EyeOff } from "lucide-react"
import { toast } from "sonner"
import {
  HeroStagger,
  HeroItem,
  HeroHeading,
  HeroHeadingLine,
  HeroCTA,
  AnalyticsCard,
  FloatingCard,
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  FeatureCard,
  PricingCard,
  MotionCTA,
  NavLink,
  DashboardCard,
  DashboardIcon,
  TestimonialCard,
  DashboardMockupWrap,
} from "@/components/landing/motion"
import {
  featureItems,
  testimonialItems,
} from "@/components/landing/landing-data"

export default function Home() {
  const [open, setOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false)
  
  const [loading, setLoading] = useState(false)
  
  const [errors, setErrors] = useState({})
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] =
    useState("")
  const [role, setRole] = useState("")

  return (
    <div className="landing-light relative min-h-screen overflow-hidden bg-gradient-to-br from-violet-100 via-fuchsia-50 to-amber-50 text-slate-900">

      {/* BACKGROUND ORBS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-300/30 rounded-full blur-3xl"></div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 w-full border-b border-white/60 bg-white/75 shadow-sm shadow-slate-900/[0.04] backdrop-blur-xl">

        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-2">

            <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
              S
            </div>

            <span className="text-lg font-bold text-slate-900">
              SkillSphere
            </span>

          </div>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-8">

            <NavLink href="#">Features</NavLink>
            <NavLink href="#">Pricing</NavLink>
            <NavLink href="#">Contact</NavLink>

          </nav>

          {/* BUTTONS */}
          <div className="flex items-center gap-3">

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLoginOpen(true)}
            className="text-slate-700 transition-all duration-300 ease-out hover:bg-slate-100 hover:text-slate-900"
          >
            Sign In
          </Button>

            <MotionCTA variant="glow-violet">
              <Button
                size="sm"
                className="bg-slate-900 transition-all duration-300 ease-out hover:bg-slate-800"
                onClick={() => setOpen(true)}
              >
                Get Started
              </Button>
            </MotionCTA>

          </div>

        </div>

      </header>

    {/* HERO SECTION */}
<section className="relative overflow-visible py-24">

  <div className="mx-auto grid max-w-6xl items-center gap-20 overflow-visible px-6 lg:grid-cols-2">

    {/* LEFT */}
    <HeroStagger>

      <HeroItem>
        <div className="mb-6 inline-flex items-center rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 backdrop-blur">
          <span className="mr-2 h-2 w-2 rounded-full bg-green-500"></span>
          Enterprise Learning Platform
        </div>
      </HeroItem>

      <HeroHeading className="text-5xl font-black leading-tight text-slate-900 md:text-6xl">
        <HeroHeadingLine>Transform Learning</HeroHeadingLine>
        <HeroHeadingLine className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
          Empower Growth
        </HeroHeadingLine>
      </HeroHeading>

      <HeroItem>
        <p className="mt-6 max-w-xl text-lg text-slate-600">
          Build smarter teams with AI-powered learning,
          onboarding, analytics and certifications.
        </p>
      </HeroItem>

      <HeroItem>
        <div className="mt-8 flex flex-wrap gap-4">
          <HeroCTA variant="glow">
            <Button
              size="lg"
              className="bg-orange-500 transition-all duration-300 ease-out hover:bg-orange-600"
              onClick={() => setOpen(true)}
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
            </Button>
          </HeroCTA>
          <HeroCTA variant="outline-glow">
            <Button
              size="lg"
              variant="outline"
              className="border-slate-300 bg-white/80 text-slate-700 transition-all duration-300 ease-out hover:border-violet-200 hover:bg-white hover:text-slate-900 hover:shadow-sm"
            >
              Watch Demo
            </Button>
          </HeroCTA>
        </div>
      </HeroItem>

      <HeroItem>
        <div className="mt-8 flex gap-6 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-500" />
            14 days free
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-500" />
            No credit card
          </div>
        </div>
      </HeroItem>

    </HeroStagger>

    {/* RIGHT SIDE ANALYTICS */}
    <div className="relative flex justify-center overflow-visible">

      {/* MAIN CARD */}
      <DashboardMockupWrap className="relative z-10 w-full max-w-[650px]">
      <AnalyticsCard className="min-h-[460px] w-full rounded-[32px] bg-[#071133] p-12 text-white">

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

      </AnalyticsCard>
      </DashboardMockupWrap>

      {/* FLOATING CARD 1 */}
      <FloatingCard
        delay={0}
        className="absolute -right-8 -top-10 z-20 w-64 rounded-3xl border border-white/70 bg-white/85 p-6 shadow-xl shadow-violet-500/10 backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-violet-500/15"
      >

        <div className="flex justify-between items-center mb-4">

          <h4 className="text-base font-semibold text-slate-900">
            Team Progress
          </h4>

          <span className="text-green-500 font-bold text-base">
            +18%
          </span>

        </div>

        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">

          <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-[78%]"></div>

        </div>

        <p className="text-sm leading-relaxed text-slate-600">
          Weekly learning performance increased.
        </p>

      </FloatingCard>

      {/* FLOATING CARD 2 */}
      <FloatingCard
        delay={0.35}
        className="absolute -bottom-10 -left-8 z-20 w-64 rounded-3xl border border-white/70 bg-white/85 p-6 shadow-xl shadow-violet-500/10 backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-violet-500/15"
      >

        <div className="flex items-center gap-4 mb-5">

          <div className="h-14 w-14 rounded-2xl bg-purple-100 flex items-center justify-center text-2xl">
            🎯
          </div>

          <div>

            <h4 className="text-base font-semibold text-slate-900">
              Skill Goals
            </h4>

            <p className="text-sm text-slate-600">
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

        <div className="h-2 w-full rounded-full bg-gray-200">
          <div className="h-2 w-[82%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
        </div>

      </FloatingCard>

    </div>

  </div>

</section>

    

      
      {/* DASHBOARD FEATURES SECTION */}
<section className="relative overflow-hidden py-16 md:py-20">

  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-300/80 via-indigo-300/70 to-purple-300/80"></div>

  <div className="container mx-auto max-w-6xl px-6">

    <ScrollReveal className="mx-auto mb-12 max-w-2xl text-center">

      <h2 className="mb-4 text-3xl font-bold italic text-slate-900 md:text-4xl">
        Powerful Dashboards for Every Role
      </h2>

      <p className="text-slate-600">
        Multi-role dashboards tailored for administrators,
        trainers, and learners with real-time insights.
      </p>

    </ScrollReveal>

    <div className="grid gap-6 md:grid-cols-2">

      <DashboardCard
        delay={0}
        accentClassName="from-purple-400 to-indigo-500"
      >
        <div className="mb-5 flex items-center gap-3">
          <DashboardIcon className="bg-purple-100">
            <BarChart3 className="h-5 w-5 text-purple-600" />
          </DashboardIcon>
          <div>
            <h3 className="font-semibold text-slate-900">Admin Dashboard</h3>
            <p className="text-sm text-slate-600">Organization insights</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <div className="mb-1 flex justify-between text-sm text-slate-700">
              <span>Total Learners</span>
              <span className="font-medium text-slate-900">12.8K</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
                style={{ width: "85%" }}
              />
            </div>
          </div>
          <div className="flex justify-between text-sm text-slate-700">
            <span>Active Courses</span>
            <span className="font-medium text-slate-900">48</span>
          </div>
          <div className="flex justify-between text-sm text-slate-700">
            <span>Completion</span>
            <span className="font-medium text-slate-900">87%</span>
          </div>
        </div>
      </DashboardCard>

      <DashboardCard
        delay={0.08}
        accentClassName="from-orange-400 to-amber-500"
      >
        <div className="mb-5 flex items-center gap-3">
          <DashboardIcon className="bg-orange-100">
            <Users className="h-5 w-5 text-orange-600" />
          </DashboardIcon>
          <div>
            <h3 className="font-semibold text-slate-900">Trainer Dashboard</h3>
            <p className="text-sm text-slate-600">Course management</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <div className="mb-1 flex justify-between text-sm text-slate-700">
              <span>My Learners</span>
              <span className="font-medium text-slate-900">342</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full bg-gradient-to-r from-blue-400 to-blue-600"
                style={{ width: "70%" }}
              />
            </div>
          </div>
          <div className="flex justify-between text-sm text-slate-700">
            <span>Courses</span>
            <span className="font-medium text-slate-900">12</span>
          </div>
          <div className="flex justify-between text-sm text-slate-700">
            <span>Rating</span>
            <span className="font-medium text-slate-900">4.8★</span>
          </div>
        </div>
      </DashboardCard>

      <DashboardCard
        delay={0.16}
        accentClassName="from-cyan-400 to-teal-500"
      >
        <div className="mb-5 flex items-center gap-3">
          <DashboardIcon className="bg-cyan-100">
            <TrendingUp className="h-5 w-5 text-cyan-600" />
          </DashboardIcon>
          <div>
            <h3 className="font-semibold text-slate-900">Learner Dashboard</h3>
            <p className="text-sm text-slate-600">Learning journey</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <div className="mb-1 flex justify-between text-sm text-slate-700">
              <span>Progress</span>
              <span className="font-medium text-slate-900">68%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full bg-gradient-to-r from-green-400 to-cyan-500"
                style={{ width: "68%" }}
              />
            </div>
          </div>
          <div className="flex justify-between text-sm text-slate-700">
            <span>Enrolled</span>
            <span className="font-medium text-slate-900">8</span>
          </div>
          <div className="flex justify-between text-sm text-slate-700">
            <span>Certificates</span>
            <span className="font-medium text-slate-900">3</span>
          </div>
        </div>
      </DashboardCard>

      <DashboardCard
        delay={0.24}
        accentClassName="from-amber-400 to-rose-500"
      >
        <div className="mb-5 flex items-center gap-3">
          <DashboardIcon className="bg-amber-100">
            <Bot className="h-5 w-5 text-amber-600" />
          </DashboardIcon>
          <div>
            <h3 className="font-semibold text-slate-900">AI Assistant</h3>
            <p className="text-sm text-slate-600">Learning support</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between text-sm text-slate-700">
            <span>Support</span>
            <span className="font-medium text-slate-900">24/7</span>
          </div>
          <div className="flex justify-between text-sm text-slate-700">
            <span>Status</span>
            <span className="font-medium text-green-600">Active</span>
          </div>
          <div className="flex justify-between text-sm text-slate-700">
            <span>Recommendations</span>
            <Check className="h-4 w-4 text-green-600" />
          </div>
        </div>
      </DashboardCard>

    </div>

  </div>

</section>
      {/* FEATURES SECTION */}
<section className="px-6 py-24">

  <div className="mx-auto max-w-7xl">

    <ScrollReveal className="mb-16 text-center">

      <h2 className="mb-4 text-5xl font-bold text-slate-900">
        Powerful Features
      </h2>

      <p className="text-lg text-slate-600">
        Everything you need to manage enterprise learning.
      </p>

    </ScrollReveal>

    <StaggerContainer className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {featureItems.map((feature) => (
        <StaggerItem key={feature.title}>
          <FeatureCard
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        </StaggerItem>
      ))}
    </StaggerContainer>

  </div>

</section>
{/* TESTIMONIALS SECTION */}
<section className="px-6 py-24">

  <div className="mx-auto max-w-7xl">

    <ScrollReveal className="mb-16 text-center">

      <h2 className="mb-4 text-5xl font-bold text-slate-900">
        What Our Users Say
      </h2>

      <p className="text-lg text-slate-600">
        Trusted by learners and teams worldwide.
      </p>

    </ScrollReveal>

    <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {testimonialItems.map((item) => (
        <StaggerItem key={item.name}>
          <TestimonialCard
            quote={item.quote}
            name={item.name}
            role={item.role}
          />
        </StaggerItem>
      ))}
    </StaggerContainer>

  </div>

</section>

{/* PRICING SECTION */}
<section className="px-4 py-16">

  <div className="mx-auto max-w-7xl">

    <ScrollReveal className="mb-16 text-center">

      <h2 className="mb-4 text-5xl font-bold text-slate-900">
        Simple Pricing
      </h2>

      <p className="text-lg text-slate-600">
        Choose the perfect plan for your learning journey.
      </p>

    </ScrollReveal>

    <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-3">

      {/* BASIC PLAN */}
      <StaggerItem>
      <PricingCard>
        <h3 className="mb-4 text-2xl font-bold text-slate-900">
          Basic
        </h3>

        <h1 className="mb-6 text-5xl font-bold text-slate-900">
          $19
          <span className="text-lg text-slate-500">
            /month
          </span>
        </h1>

        <ul className="space-y-4 text-slate-600 mb-8">

          <li>✔ Access to core courses</li>
          <li>✔ Basic analytics</li>
          <li>✔ Community support</li>

        </ul>

        <MotionCTA variant="glow-violet" className="w-full">
          <button className="w-full rounded-xl bg-slate-900 py-3 font-semibold text-white transition-all duration-300 ease-out hover:bg-slate-800">
            Choose Plan
          </button>
        </MotionCTA>

      </PricingCard>
      </StaggerItem>

      {/* PRO PLAN */}
      <StaggerItem>
      <PricingCard featured>

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

        <MotionCTA variant="glow-light" className="w-full">
          <button className="w-full rounded-xl bg-white py-3 font-semibold text-violet-700 transition-all duration-300 ease-out hover:bg-violet-50">
            Get Started
          </button>
        </MotionCTA>

      </PricingCard>
      </StaggerItem>

      {/* ENTERPRISE PLAN */}
      <StaggerItem>
      <PricingCard>

        <h3 className="mb-4 text-2xl font-bold text-slate-900">
          Enterprise
        </h3>

        <h1 className="mb-6 text-5xl font-bold text-slate-900">
          $99
          <span className="text-lg text-slate-500">
            /month
          </span>
        </h1>

        <ul className="space-y-4 text-slate-600 mb-8">

          <li>✔ Unlimited users</li>
          <li>✔ Dedicated support</li>
          <li>✔ Enterprise security</li>
          <li>✔ Custom integrations</li>

        </ul>

        <MotionCTA variant="glow-violet" className="w-full">
          <button className="w-full rounded-xl bg-slate-900 py-3 font-semibold text-white transition-all duration-300 ease-out hover:bg-slate-800">
            Contact Sales
          </button>
        </MotionCTA>

      </PricingCard>
      </StaggerItem>

    </StaggerContainer>

  </div>

</section>
{/* FINAL CTA SECTION */}
<section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-700 px-6 py-24 text-white">

  {/* GLOW EFFECTS */}
  <div className="absolute top-0 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

  <div className="absolute bottom-0 right-10 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl"></div>

  <ScrollReveal className="relative z-10 mx-auto max-w-5xl text-center">

    <h2 className="mb-6 text-4xl font-bold md:text-5xl">
      Ready to Transform Your
      <br />
      Learning Culture?
    </h2>

    <p className="mx-auto mb-10 max-w-2xl text-lg text-purple-100">
      Join thousands of organizations using SkillSphere to build smarter,
      faster, and more engaged teams.
    </p>

    <div className="mb-8 flex flex-wrap justify-center gap-4">

      <MotionCTA variant="glow-light">
        <Button
          size="lg"
          className="bg-white text-purple-700 transition-all duration-300 ease-out hover:bg-violet-50"
          onClick={() => setOpen(true)}
        >
          Start Free Trial
        </Button>
      </MotionCTA>

      <MotionCTA variant="outline-glow">
        <Button
          size="lg"
          variant="outline"
          className="border border-white/30 bg-white/10 backdrop-blur-xl text-white hover:bg-white hover:text-slate-900 transition-all duration-300 rounded-xl px-6 py-3 shadow-lg hover:scale-105"
        >
          Schedule Demo
        </Button>
      </MotionCTA>

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

  </ScrollReveal>

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

  <div className="relative w-full max-w-md rounded-3xl bg-white p-8 text-slate-900 shadow-2xl">

    <button
      onClick={() => setOpen(false)}
      className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
    >
      ✕
    </button>

    <h1 className="mb-2 text-3xl font-bold text-slate-900">
      Create Workspace 🚀
    </h1>

    <p className="mb-6 text-slate-600">
      Build smarter learning experiences for your team
    </p>

    {/* INPUTS */}
    <div className="space-y-4">

      {/* FULL NAME */}
      <div>
        <Input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="h-12 rounded-xl"
        />

        {errors.name && (
          <p className="text-red-500 text-sm mt-1">
            {errors.name}
          </p>
        )}
      </div>

      {/* EMAIL */}
      <div>
        <Input
          type="email"
          placeholder="Work Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 rounded-xl"
        />

        {errors.email && (
          <p className="text-red-500 text-sm mt-1">
            {errors.email}
          </p>
        )}
      </div>

      {/* COMPANY */}
      <Input
        type="text"
        placeholder="Company Name"
        className="h-12 rounded-xl"
      />

      {/* ROLE */}
      <div>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full h-12 rounded-xl border border-gray-300 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
        >

          <option value="">
            Select Role
          </option>

          <option value="superadmin">
            Super Admin
          </option>

          <option value="tenantadmin">
            Tenant Admin
          </option>

          <option value="manager">
            Manager
          </option>

          <option value="trainer">
            Trainer
          </option>

          <option value="employee">
            Employee
          </option>

        </select>

        {errors.role && (
          <p className="text-red-500 text-sm mt-1">
            {errors.role}
          </p>
        )}

      </div>

      {/* PASSWORD */}
      <div>

        <div className="relative">

          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="h-12 rounded-xl pr-12"
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>

        </div>

        {errors.password && (
          <p className="text-red-500 text-sm mt-1">
            {errors.password}
          </p>
        )}

      </div>

      {/* CONFIRM PASSWORD */}
      <div>

        <div className="relative">

          <Input
            type={
              showConfirmPassword
                ? "text"
                : "password"
            }
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(
                e.target.value
              )
            }
            className="h-12 rounded-xl pr-12"
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(
                !showConfirmPassword
              )
            }
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showConfirmPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>

        </div>

        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">
            {errors.confirmPassword}
          </p>
        )}

      </div>

    </div>

    {/* TERMS */}
    <div className="flex items-center gap-2 text-sm text-slate-600 mt-4">
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
      disabled={loading}
      onClick={() => {

        let newErrors = {}

        if (!name) {
          newErrors.name =
            "Full name is required"
        }

        if (!email) {
          newErrors.email =
            "Email is required"
        }

        if (!role) {
          newErrors.role =
            "Please select a role"
        }

        if (!password) {
          newErrors.password =
            "Password is required"
        } else if (password.length < 8) {
          newErrors.password =
            "Password must be at least 8 characters"
        }

        if (!confirmPassword) {
          newErrors.confirmPassword =
            "Please confirm your password"
        }

        if (
          password !== confirmPassword
        ) {
          newErrors.confirmPassword =
            "Passwords do not match"
        }

        setErrors(newErrors)

        if (
          Object.keys(newErrors).length > 0
        ) {

          toast.error(
            "Please fix the form errors"
          )

          return
        }

        setLoading(true)

        setTimeout(() => {

          setLoading(false)

          toast.success(
            "Account created successfully!"
          )

        }, 2000)

      }}
      className="w-full h-12 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:scale-[1.02] transition-all duration-300 shadow-lg text-white font-semibold mt-6"
    >
      {loading
        ? "Creating Account..."
        : "Create Account"}
    </Button>

    {/* FOOTER */}
    <p className="text-center text-sm text-slate-600 mt-5">
      Already have an account?{" "}
      <span className="text-violet-600 font-medium cursor-pointer hover:underline">
        Sign In
      </span>
    </p>

  </div>

</div>

)}

<LoginModal
open={loginOpen}
setOpen={setLoginOpen}
/>
</div>
  )
}