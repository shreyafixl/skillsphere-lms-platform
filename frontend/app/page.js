import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ArrowRight,
  Play,
  Check,
  Star,
  BarChart3,
  Users,
  TrendingUp,
  Award,
  Zap,
  Bot,
  Shield,
  Smartphone,
  MessageSquare,
  Clock,
  Layers,
  Settings,
  BookOpen,
  Target,
  Twitter,
  Github,
  Mail,
  Building2,
  Rocket,
  Globe,
  Lock,
  PieChart,
} from "lucide-react"
import Link from "next/link"

export default function SkillSpherePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 via-fuchsia-50 to-amber-50 relative">
      {/* Global animated gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-20">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-300/40 to-pink-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-300/35 to-blue-300/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] bg-gradient-to-br from-amber-300/30 to-orange-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-rose-300/35 to-fuchsia-300/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 shadow-lg shadow-purple-500/5">
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-400 opacity-60"></div>
        <div className="container max-w-6xl mx-auto px-6 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
              S
            </div>
            <span className="font-bold text-lg">SkillSphere</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How it works
            </Link>
            <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="#resources" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Resources
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">Sign In</Button>
            <Button size="sm" className="bg-slate-900 hover:bg-slate-800">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Bold gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-300/80 via-purple-200/70 to-amber-200/80 -z-10"></div>
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-400/60 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-orange-400/50 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-300/40 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-pink-400/40 rounded-full blur-3xl -z-10"></div>
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="text-xs px-3 py-1">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500 inline-block"></span>
                Enterprise LMS Platform
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="italic">Transform Learning,</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 italic">
                  Empower Growth
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                The complete enterprise learning platform for employee onboarding, AI-powered training, and measurable skill development.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground pt-2">
                <span className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-green-500" />
                  14 days free trial
                </span>
                <span className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-green-500" />
                  No credit card required
                </span>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Analytics Card */}
                <Card className="bg-slate-900 text-white border-0 w-full max-w-sm shadow-2xl">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-medium">Learning Analytics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-300">Completion</span>
                        <span>87%</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" style={{ width: "87%" }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm py-1">
                      <span className="text-slate-300">Active Learners</span>
                      <span className="text-cyan-400 font-medium">2,847</span>
                    </div>
                    <div className="flex justify-between text-sm py-1">
                      <span className="text-slate-300">Avg. Completion Time</span>
                      <span className="font-medium">4.2 hrs</span>
                    </div>
                    <div className="flex justify-between text-sm py-1">
                      <span className="text-slate-300">Certification Rate</span>
                      <span className="text-green-400 font-medium">91%</span>
                    </div>
                  </CardContent>
                </Card>
                {/* Floating Stats Card - Top Right */}
                <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 border">
                  <div className="text-xs text-muted-foreground">Avg. Completion</div>
                  <div className="text-xl font-bold">4.2 hrs</div>
                  <div className="text-xs text-green-500">↑ 12% this month</div>
                </div>
                {/* Floating Stats Card - Bottom Left */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 border">
                  <div className="text-xs text-muted-foreground">Certification</div>
                  <div className="text-xl font-bold">94%</div>
                  <div className="text-xs text-green-500">↑ 8% this month</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Features Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        {/* Bold blue-purple gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-300/80 via-indigo-300/70 to-purple-300/80 -z-10"></div>
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-400/50 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-400/40 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute top-1/2 right-10 w-72 h-72 bg-indigo-400/35 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-cyan-400/40 rounded-full blur-3xl -z-10"></div>
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold italic mb-4">
              Powerful Dashboards for Every Role
            </h2>
            <p className="text-muted-foreground">
              Multi-role dashboards tailored for administrators, trainers, and learners with real-time insights.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Admin Dashboard */}
            <Card className="border shadow-sm bg-white/80 backdrop-blur-sm overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-indigo-500"></div>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-base">Admin Dashboard</CardTitle>
                    <p className="text-sm text-muted-foreground">Organization insights</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Total Learners</span>
                    <span className="font-medium">12.8K</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full" style={{ width: "85%" }}></div>
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
                <div className="pt-2 border-t">
                  <div className="text-sm font-medium mb-2">Learning Paths</div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Onboarding</span>
                    <span>2,341</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Advanced Skills</span>
                    <span>1,847</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trainer Dashboard */}
            <Card className="border shadow-sm bg-white/80 backdrop-blur-sm overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-amber-500"></div>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-orange-100 flex items-center justify-center">
                    <Users className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <CardTitle className="text-base">Trainer Dashboard</CardTitle>
                    <p className="text-sm text-muted-foreground">Course management</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>My Learners</span>
                    <span className="font-medium">342</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" style={{ width: "70%" }}></div>
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
                <div className="pt-2 border-t">
                  <div className="text-sm font-medium mb-2">Recent Activity</div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Assignments Graded</span>
                    <span>28</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Messages Sent</span>
                    <span>15</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Learner Dashboard */}
            <Card className="border shadow-sm bg-white/80 backdrop-blur-sm overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-teal-500"></div>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-cyan-100 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <CardTitle className="text-base">Learner Dashboard</CardTitle>
                    <p className="text-sm text-muted-foreground">Learning journey</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span className="font-medium">68%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-400 to-cyan-500 rounded-full" style={{ width: "68%" }}></div>
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
                <div className="pt-2 border-t">
                  <div className="text-sm font-medium mb-2">Learning Path</div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Advanced Python</span>
                    <span>45%</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Data Analytics</span>
                    <span>82%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Assistant */}
            <Card className="border shadow-sm bg-white/80 backdrop-blur-sm overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-rose-500"></div>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center">
                    <Bot className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <CardTitle className="text-base">AI Assistant</CardTitle>
                    <p className="text-sm text-muted-foreground">Learning support</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Smart Features</span>
                  <span className="font-medium">∞</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Support</span>
                  <span className="font-medium">24/7</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Status</span>
                  <span className="font-medium text-green-500">Active</span>
                </div>
                <div className="pt-2 border-t">
                  <div className="text-sm font-medium mb-2">Capabilities</div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Recommendations</span>
                    <Check className="h-4 w-4" />
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Skill Analysis</span>
                    <Check className="h-4 w-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Vibrant cyan-blue gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/80 via-blue-300/70 to-indigo-300/80 -z-10"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-cyan-400/60 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-400/50 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-400/45 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 left-10 w-56 h-56 bg-teal-400/40 rounded-full blur-3xl -z-10"></div>
        <div className="container max-w-6xl mx-auto px-6">
          <p className="text-center text-sm text-cyan-700 uppercase tracking-wider mb-8 font-medium">
            Trusted by Leading Organizations
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center italic mb-8">
            Join thousands of companies transforming their learning culture
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-12">
            {[
              { name: "TechCorp", icon: Building2 },
              { name: "InnovateLabs", icon: Rocket },
              { name: "DataFlow", icon: PieChart },
              { name: "CloudSync", icon: Globe },
              { name: "SecureNet", icon: Lock },
              { name: "GlobalTech", icon: Globe },
            ].map((company) => (
              <div key={company.name} className="flex flex-col items-center gap-2 text-slate-600 hover:text-cyan-600 transition-colors">
                <company.icon className="h-8 w-8" />
                <span className="text-sm font-medium">{company.name}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4 rounded-xl bg-white/60 backdrop-blur-sm shadow-sm">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">500+</div>
              <div className="text-sm text-slate-600">Enterprise Clients</div>
            </div>
            <div className="p-4 rounded-xl bg-white/60 backdrop-blur-sm shadow-sm">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">2M+</div>
              <div className="text-sm text-slate-600">Active Learners</div>
            </div>
            <div className="p-4 rounded-xl bg-white/60 backdrop-blur-sm shadow-sm">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">98%</div>
              <div className="text-sm text-slate-600">Satisfaction</div>
            </div>
            <div className="p-4 rounded-xl bg-white/60 backdrop-blur-sm shadow-sm">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">4.9★</div>
              <div className="text-sm text-slate-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Features */}
      <section className="py-16 md:py-20 relative overflow-hidden" id="features">
        {/* Warm orange-pink gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-300/80 via-rose-300/70 to-pink-300/80 -z-10"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-orange-400/60 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-rose-400/50 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-400/45 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1.1s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-amber-400/40 rounded-full blur-3xl -z-10"></div>
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Features</h2>
            <p className="text-muted-foreground">
              Everything you need to build, manage, and scale enterprise learning programs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "Employee Onboarding", description: "Streamlined workflows with automated learning paths.", color: "bg-blue-100 text-blue-600" },
              { icon: Bot, title: "AI Learning Assistant", description: "Intelligent recommendations and adaptive learning.", color: "bg-purple-100 text-purple-600" },
              { icon: BarChart3, title: "Advanced Analytics", description: "Real-time dashboards with comprehensive metrics.", color: "bg-orange-100 text-orange-600" },
              { icon: Award, title: "Certification Management", description: "Create and track professional certifications.", color: "bg-amber-100 text-amber-600" },
              { icon: Users, title: "Trainer Management", description: "Tools for course creation and learner management.", color: "bg-pink-100 text-pink-600" },
              { icon: Target, title: "Learning Paths", description: "Structured journeys with milestones and progression.", color: "bg-green-100 text-green-600" },
              { icon: Shield, title: "Enterprise Security", description: "SSO, RBAC, encryption, and compliance.", color: "bg-red-100 text-red-600" },
              { icon: Smartphone, title: "Mobile Learning", description: "Seamless learning on any device.", color: "bg-cyan-100 text-cyan-600" },
              { icon: MessageSquare, title: "Collaboration Tools", description: "Forums, peer learning, and messaging.", color: "bg-indigo-100 text-indigo-600" },
              { icon: Clock, title: "Flexible Scheduling", description: "Self-paced and instructor-led courses.", color: "bg-rose-100 text-rose-600" },
              { icon: Layers, title: "Multi-Tenant Architecture", description: "Scalable platform with data isolation.", color: "bg-violet-100 text-violet-600" },
              { icon: Settings, title: "Customization", description: "White-label solutions with custom branding.", color: "bg-slate-100 text-slate-600" },
            ].map((feature, index) => (
              <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className={`h-10 w-10 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Insights Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        {/* Warm gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-300/80 via-orange-300/70 to-rose-300/80 -z-10"></div>
        <div className="absolute top-10 left-10 w-80 h-80 bg-amber-400/60 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400/50 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-yellow-400/45 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1.3s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-56 h-56 bg-red-400/35 rounded-full blur-3xl -z-10"></div>
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <Button variant="outline" size="sm" className="mb-4 bg-white/80 border-orange-200 text-orange-600 hover:bg-orange-50">Schedule a Demo</Button>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Deep Insights, Real Impact</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive analytics to measure learning effectiveness and drive organizational growth.
            </p>
          </div>

          {/* Analytics Dashboard Preview */}
          <Card className="border shadow-lg mb-8">
            <CardHeader className="border-b">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Learning Performance</CardTitle>
                  <p className="text-sm text-muted-foreground">Real-time metrics and KPIs</p>
                </div>
                <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-purple-600" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Completion Rate</span>
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="text-3xl font-bold">87%</div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden mt-2">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: "87%" }}></div>
                  </div>
                  <div className="text-xs text-green-500 mt-1">↑ 12% from last quarter</div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Avg. Completion</span>
                    <Clock className="h-4 w-4 text-blue-500" />
                  </div>
                  <div className="text-3xl font-bold">4.2 hrs</div>
                  <div className="text-xs text-muted-foreground mt-1">Target: 5 hrs</div>
                  <div className="text-xs text-green-500">↓ 16% faster</div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Certification</span>
                    <Award className="h-4 w-4 text-amber-500" />
                  </div>
                  <div className="text-3xl font-bold">94%</div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden mt-2">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: "94%" }}></div>
                  </div>
                  <div className="text-xs text-green-500 mt-1">↑ 8% from last quarter</div>
                </div>
              </div>

              {/* Chart Placeholder */}
              <div className="mb-6">
                <div className="text-sm font-medium mb-3">Learning Trend (Last 12 Months)</div>
                <div className="flex items-end gap-2 h-24">
                  {[40, 55, 45, 60, 50, 70, 65, 75, 70, 80, 75, 85].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-purple-500 to-purple-300 rounded-t"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-sm font-medium mb-3">Engagement Metrics</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Active Learners</span>
                      <span className="font-medium">12.8K</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Courses Completed</span>
                      <span className="font-medium">48.3K</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Avg. Session</span>
                      <span className="font-medium">42 min</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Satisfaction</span>
                      <span className="font-medium">4.7★</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium mb-3">ROI Indicators</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Skills Improved</span>
                      <span className="font-medium text-green-500">+340%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Productivity Gain</span>
                      <span className="font-medium text-green-500">+28%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Employee Retention</span>
                      <span className="font-medium text-green-500">+15%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Cost per Learner</span>
                      <span className="font-medium text-green-500">-42%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Simple Workflow Section */}
        <section className="py-16 md:py-20 relative overflow-hidden" id="how-it-works">
        {/* Rich blue-cyan gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-300/80 via-cyan-300/70 to-teal-300/80 -z-10"></div>
        <div className="absolute top-0 left-10 w-80 h-80 bg-sky-400/60 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-cyan-400/50 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '0.9s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-teal-400/45 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1.4s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-400/40 rounded-full blur-3xl -z-10"></div>
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold italic mb-4">Simple, Powerful Workflow</h2>
            <p className="text-muted-foreground">
              Get started in minutes with our intuitive platform designed for enterprise learning.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", icon: BookOpen, title: "Create Learning Paths", description: "Design structured learning journeys with courses and assessments." },
              { step: "02", icon: Users, title: "Enroll Learners", description: "Automatically enroll employees in personalized learning paths." },
              { step: "03", icon: PieChart, title: "Track Progress", description: "Monitor real-time progress with comprehensive dashboards." },
              { step: "04", icon: Target, title: "Measure Impact", description: "Analyze learning outcomes and organizational impact." },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-muted/20 mb-4">{item.step}</div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-8 w-8 rounded-lg bg-purple-100 flex items-center justify-center">
                    <item.icon className="h-4 w-4 text-purple-600" />
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:flex items-center justify-center h-6 w-6 rounded-full bg-orange-500 text-white ml-auto">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  )}
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Everything You Need Section */}
        <section className="py-16 md:py-20 relative overflow-hidden">
        {/* Rich green-teal gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-300/80 via-teal-300/70 to-cyan-300/80 -z-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/60 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-400/50 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-green-400/45 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute top-1/4 left-1/4 w-56 h-56 bg-lime-400/35 rounded-full blur-3xl -z-10"></div>
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-slate-800">Everything You Need</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-3">
            {[
              "Drag-and-drop course builder",
              "Pre-built course templates",
              "Video hosting and streaming",
              "Interactive quizzes",
              "Automated certification",
              "Mobile app for learners",
              "API for integrations",
              "SSO and SCIM support",
              "Advanced reporting",
              "White-label options",
              "Multi-language support",
              "24/7 customer support",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-2 py-1">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
        <section className="py-16 md:py-20 relative overflow-hidden" id="pricing">
        {/* Rich purple-indigo gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-300/80 via-purple-300/70 to-violet-300/80 -z-10"></div>
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-indigo-400/60 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-purple-400/50 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
        <div className="absolute top-1/2 left-10 w-72 h-72 bg-violet-400/45 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1.1s' }}></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-fuchsia-400/40 rounded-full blur-3xl -z-10"></div>
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold italic mb-4">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground mb-6">
              Choose the perfect plan. All plans include a 14-day free trial.
            </p>
            <div className="inline-flex items-center gap-2 bg-background rounded-full p-1 border">
              <Button variant="ghost" size="sm" className="rounded-full">Monthly</Button>
              <Button size="sm" className="rounded-full bg-slate-900">Annual</Button>
              <Badge variant="secondary" className="text-xs text-orange-500">Save 20%</Badge>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Starter Plan */}
            <Card className="border shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Starter</CardTitle>
                <p className="text-sm text-muted-foreground">Perfect for small teams</p>
                <div className="pt-4">
                  <span className="text-4xl font-bold">299</span>
                  <span className="text-muted-foreground">/year</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-cyan-500 hover:bg-cyan-600">Get Started</Button>
                <ul className="space-y-2">
                  {[
                    "Up to 100 learners",
                    "5 courses",
                    "Basic analytics",
                    "Email support",
                    "Mobile app access",
                    "Standard templates",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-cyan-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="border-2 border-purple-500 shadow-lg relative bg-gradient-to-b from-purple-600 to-violet-700 text-white">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-orange-500 text-white">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Professional</CardTitle>
                <p className="text-sm text-purple-200">For growing organizations</p>
                <div className="pt-4">
                  <span className="text-4xl font-bold">999</span>
                  <span className="text-purple-200">/year</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-white text-purple-700 hover:bg-purple-50">Get Started</Button>
                <ul className="space-y-2">
                  {[
                    "Up to 1,000 learners",
                    "Unlimited courses",
                    "Advanced analytics",
                    "Priority support",
                    "Mobile app access",
                    "Custom branding",
                    "API access",
                    "SSO integration",
                    "Trainer management",
                    "Certification system",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-purple-200" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Enterprise</CardTitle>
                <p className="text-sm text-muted-foreground">For large-scale deployments</p>
                <div className="pt-4">
                  <span className="text-4xl font-bold">Custom</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-green-500 hover:bg-green-600">Get Started</Button>
                <ul className="space-y-2">
                  {[
                    "Unlimited learners",
                    "Unlimited courses",
                    "Custom analytics",
                    "24/7 dedicated support",
                    "Mobile app access",
                    "White-label solution",
                    "API access",
                    "SSO & SCIM",
                    "Advanced trainer tools",
                    "AI learning assistant",
                    "Custom integrations",
                    "SLA guarantee",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
        <section className="py-16 md:py-20 relative overflow-hidden">
        {/* Rich purple-pink gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-300/80 via-fuchsia-300/70 to-pink-300/80 -z-10"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-purple-400/60 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-pink-400/50 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-fuchsia-400/45 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1.3s' }}></div>
        <div className="absolute top-1/4 left-1/4 w-56 h-56 bg-rose-400/40 rounded-full blur-3xl -z-10"></div>
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-slate-800">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "Can I change plans anytime?",
                answer: "Yes, upgrade or downgrade at any time. Changes take effect at the next billing cycle.",
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, bank transfers, and purchase orders.",
              },
              {
                question: "Is there a setup fee?",
                answer: "No setup fees. Start using SkillSphere immediately after signing up.",
              },
              {
                question: "Do you offer annual discounts?",
                answer: "Yes, annual billing saves you 20% compared to monthly billing.",
              },
            ].map((faq, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
        <section className="py-16 md:py-20 relative overflow-hidden">
        {/* Rich warm gradient for trust/social proof */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-300/80 via-yellow-300/70 to-orange-300/80 -z-10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-400/60 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-yellow-400/50 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute top-1/2 right-10 w-72 h-72 bg-orange-400/45 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-red-400/35 rounded-full blur-3xl -z-10"></div>
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold italic mb-4">Loved by Learning Leaders</h2>
            <p className="text-muted-foreground">
              See what enterprise customers are saying about SkillSphere.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote: "SkillSphere transformed our onboarding. We reduced time-to-productivity by 40%.",
                name: "Sarah Johnson",
                role: "Head of L&D",
                company: "TechCorp",
              },
              {
                quote: "The AI assistant provides personalized recommendations that resonate with learners.",
                name: "Michael Chen",
                role: "Chief HR Officer",
                company: "InnovateLabs",
              },
              {
                quote: "The analytics dashboard gives us insights we never had before.",
                name: "Emily Rodriguez",
                role: "Training Manager",
                company: "DataFlow",
              },
              {
                quote: "Implementation was seamless. SkillSphere is now central to our strategy.",
                name: "David Park",
                role: "VP of Talent",
                company: "CloudSync",
              },
              {
                quote: "The multi-tenant architecture lets us manage all subsidiaries in one platform.",
                name: "Lisa Thompson",
                role: "Learning Ops Manager",
                company: "SecureNet",
              },
              {
                quote: "Best investment in our learning infrastructure. ROI evident in Q1.",
                name: "James Wilson",
                role: "Director of Training",
                company: "GlobalTech",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm mb-4">{testimonial.quote}</p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-medium text-sm">
                      {testimonial.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <div className="font-medium text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-12 pt-12 border-t">
            <div>
              <div className="text-4xl font-bold">4.9★</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold">500+</div>
              <div className="text-sm text-muted-foreground">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold">2M+</div>
              <div className="text-sm text-muted-foreground">Active Learners</div>
            </div>
            <div>
              <div className="text-4xl font-bold">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute top-0 left-10 w-72 h-72 bg-white/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-white/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl"></div>
        <div className="container max-w-6xl mx-auto px-6 text-center relative z-10">
          <Badge className="bg-white/20 text-white border-0 mb-4">
            <Zap className="h-3 w-3 mr-1" />
            Limited Time Offer
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold italic mb-4">
            Ready to Transform Your<br />Learning Culture?
          </h2>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto mb-8">
            Join leading organizations using SkillSphere to build engaged, skilled, and productive teams.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule Demo
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-purple-200">
            <span className="flex items-center gap-1">
              <Check className="h-4 w-4" />
              14 days free
            </span>
            <span className="flex items-center gap-1">
              <Check className="h-4 w-4" />
              No credit card
            </span>
            <span className="flex items-center gap-1">
              <Check className="h-4 w-4" />
              Cancel anytime
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/20 bg-gradient-to-br from-slate-300/90 via-purple-200/80 to-indigo-200/90 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500"></div>
        <div className="absolute top-20 left-10 w-80 h-80 bg-purple-300/50 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300/40 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-300/35 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1.1s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-pink-300/30 rounded-full blur-3xl -z-10"></div>
        <div className="container max-w-6xl mx-auto px-6 py-12 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Logo and Social */}
            <div className="md:w-64 shrink-0">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                  S
                </div>
                <span className="font-bold text-lg">SkillSphere</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Enterprise learning platform for modern organizations.
              </p>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
            {/* Links - Always horizontal on md+ */}
            <div className="flex flex-1 flex-wrap gap-8 md:gap-12 md:justify-end">
              <div>
                <h4 className="font-semibold mb-3">Product</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link href="#" className="hover:text-foreground">Features</Link></li>
                  <li><Link href="#" className="hover:text-foreground">Pricing</Link></li>
                  <li><Link href="#" className="hover:text-foreground">Security</Link></li>
                  <li><Link href="#" className="hover:text-foreground">Roadmap</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Company</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link href="#" className="hover:text-foreground">About</Link></li>
                  <li><Link href="#" className="hover:text-foreground">Blog</Link></li>
                  <li><Link href="#" className="hover:text-foreground">Careers</Link></li>
                  <li><Link href="#" className="hover:text-foreground">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Resources</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link href="#" className="hover:text-foreground">Documentation</Link></li>
                  <li><Link href="#" className="hover:text-foreground">API Reference</Link></li>
                  <li><Link href="#" className="hover:text-foreground">Community</Link></li>
                  <li><Link href="#" className="hover:text-foreground">Support</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Legal</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link href="#" className="hover:text-foreground">Privacy Policy</Link></li>
                  <li><Link href="#" className="hover:text-foreground">Terms of Service</Link></li>
                  <li><Link href="#" className="hover:text-foreground">Cookie Policy</Link></li>
                  <li><Link href="#" className="hover:text-foreground">Compliance</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 SkillSphere. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground">Status</Link>
              <Link href="#" className="hover:text-foreground">Changelog</Link>
              <Link href="#" className="hover:text-foreground">Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
