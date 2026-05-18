'use client';

import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function Workflow() {
  const steps = [
    {
      number: '01',
      title: 'Create Learning Paths',
      description: 'Design structured learning journeys with courses and assessments.',
      icon: '📚',
    },
    {
      number: '02',
      title: 'Enroll Learners',
      description: 'Automatically enroll employees in personalized learning paths.',
      icon: '👥',
    },
    {
      number: '03',
      title: 'Track Progress',
      description: 'Monitor real-time progress with comprehensive dashboards.',
      icon: '📊',
    },
    {
      number: '04',
      title: 'Measure Impact',
      description: 'Analyze learning outcomes and organizational impact.',
      icon: '🎯',
    },
  ];

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12 space-y-2 sm:space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Simple, Powerful Workflow
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
            Get started in minutes with our intuitive platform designed for enterprise learning.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-10">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Card */}
              <div className="bg-white rounded-lg p-5 sm:p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                {/* Number */}
                <div className="text-3xl sm:text-4xl font-bold text-gray-200 mb-2">{step.number}</div>

                {/* Icon */}
                <div className="text-2xl sm:text-3xl mb-3">{step.icon}</div>

                {/* Content */}
                <h3 className="text-sm font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed flex-grow">{step.description}</p>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <ArrowRight size={14} className="text-white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Features List */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-5 sm:p-6 lg:p-8 border border-blue-200">
          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-5 sm:mb-6">Everything You Need</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {[
              'Drag-and-drop course builder',
              'Pre-built course templates',
              'Video hosting and streaming',
              'Interactive quizzes',
              'Automated certification',
              'Mobile app for learners',
              'API for integrations',
              'SSO and SCIM support',
              'Advanced reporting',
              'White-label options',
              'Multi-language support',
              '24/7 customer support',
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
