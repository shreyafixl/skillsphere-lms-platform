'use client';

import {
  Zap,
  Users,
  BarChart3,
  Award,
  Brain,
  Lock,
  Smartphone,
  Settings,
  GitBranch,
  MessageSquare,
  Clock,
  Layers,
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Employee Onboarding',
      description: 'Streamlined workflows with automated learning paths.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Brain,
      title: 'AI Learning Assistant',
      description: 'Intelligent recommendations and adaptive learning.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Real-time dashboards with comprehensive metrics.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Award,
      title: 'Certification Management',
      description: 'Create and track professional certifications.',
      color: 'from-amber-500 to-amber-600',
    },
    {
      icon: Users,
      title: 'Trainer Management',
      description: 'Tools for course creation and learner management.',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: GitBranch,
      title: 'Learning Paths',
      description: 'Structured journeys with milestones and progression.',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'SSO, RBAC, encryption, and compliance.',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Smartphone,
      title: 'Mobile Learning',
      description: 'Seamless learning on any device.',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: MessageSquare,
      title: 'Collaboration Tools',
      description: 'Forums, peer learning, and messaging.',
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Self-paced and instructor-led courses.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Layers,
      title: 'Multi-Tenant Architecture',
      description: 'Scalable platform with data isolation.',
      color: 'from-violet-500 to-violet-600',
    },
    {
      icon: Settings,
      title: 'Customization',
      description: 'White-label solutions with custom branding.',
      color: 'from-slate-500 to-slate-600',
    },
  ];

  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 space-y-4">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900">
            Comprehensive Features
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto font-light">
            Everything you need to build, manage, and scale enterprise learning programs.
          </p>
        </div>

        {/* Features Grid - 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  <Icon size={24} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{feature.description}</p>

                {/* Hover accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300 -z-10`} />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-bold hover:shadow-lg hover:shadow-indigo-500/30 transition-all text-lg">
            Schedule a Demo
          </button>
        </div>
      </div>
    </section>
  );
}
