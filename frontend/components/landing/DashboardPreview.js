'use client';

import { BarChart3, TrendingUp, Users, Award } from 'lucide-react';

export default function DashboardPreview() {
  const dashboards = [
    {
      id: 1,
      title: 'Admin Dashboard',
      subtitle: 'Organization insights',
      icon: BarChart3,
      iconBg: 'from-blue-600 to-blue-700',
      borderHover: 'hover:border-blue-300',
      stats: [
        { label: 'Total Learners', value: '12.8K', bar: 85 },
        { label: 'Active Courses', value: '48', bar: null },
        { label: 'Completion', value: '87%', bar: null },
      ],
      details: [
        { label: 'Learning Paths', items: [{ name: 'Onboarding', count: '2,341' }, { name: 'Advanced Skills', count: '1,847' }] },
      ],
    },
    {
      id: 2,
      title: 'Trainer Dashboard',
      subtitle: 'Course management',
      icon: Users,
      iconBg: 'from-purple-600 to-purple-700',
      borderHover: 'hover:border-purple-300',
      stats: [
        { label: 'My Learners', value: '342', bar: 72 },
        { label: 'Courses', value: '12', bar: null },
        { label: 'Rating', value: '4.8★', bar: null },
      ],
      details: [
        { label: 'Recent Activity', items: [{ name: 'Assignments Graded', count: '28' }, { name: 'Messages Sent', count: '15' }] },
      ],
    },
    {
      id: 3,
      title: 'Learner Dashboard',
      subtitle: 'Learning journey',
      icon: TrendingUp,
      iconBg: 'from-green-600 to-green-700',
      borderHover: 'hover:border-green-300',
      stats: [
        { label: 'Progress', value: '68%', bar: 68 },
        { label: 'Enrolled', value: '8', bar: null },
        { label: 'Certificates', value: '3', bar: null },
      ],
      details: [
        { label: 'Learning Path', items: [{ name: 'Advanced Python', count: '45%' }, { name: 'Data Analytics', count: '82%' }] },
      ],
    },
    {
      id: 4,
      title: 'AI Assistant',
      subtitle: 'Learning support',
      icon: Award,
      iconBg: 'from-amber-600 to-amber-700',
      borderHover: 'hover:border-amber-300',
      stats: [
        { label: 'Smart Features', value: '∞', bar: null },
        { label: 'Support', value: '24/7', bar: null },
        { label: 'Status', value: 'Active', bar: null },
      ],
      details: [
        { label: 'Capabilities', items: [{ name: 'Recommendations', count: '✓' }, { name: 'Skill Analysis', count: '✓' }] },
      ],
    },
  ];

  return (
    <section className="py-24 sm:py-28 lg:py-32 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 sm:mb-24 space-y-5">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900">
            Powerful Dashboards for Every Role
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto font-light">
            Multi-role dashboards tailored for administrators, trainers, and learners with real-time insights.
          </p>
        </div>

        {/* Dashboard Grid - 2 columns on desktop, 1 on tablet/mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {dashboards.map((dashboard) => {
            const Icon = dashboard.icon;

            return (
              <div
                key={dashboard.id}
                className={`bg-white rounded-2xl p-10 border border-gray-200 ${dashboard.borderHover} hover:shadow-lg transition-all duration-300 h-full flex flex-col`}
              >
                {/* Header */}
                <div className="flex items-start gap-5 mb-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${dashboard.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{dashboard.title}</h3>
                    <p className="text-lg text-gray-600">{dashboard.subtitle}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-5 flex-1">
                  {dashboard.stats.map((stat, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-lg font-semibold text-gray-700">{stat.label}</span>
                        <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
                      </div>
                      {stat.bar && (
                        <div className="w-full h-2.5 bg-gray-300 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                            style={{ width: `${stat.bar}%` }}
                          />
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Details Section */}
                  {dashboard.details.map((detail, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                      <div className="text-lg font-bold text-gray-900 mb-4">{detail.label}</div>
                      <div className="space-y-3">
                        {detail.items.map((item, itemIdx) => (
                          <div key={itemIdx} className="flex items-center justify-between">
                            <span className="text-lg text-gray-700">{item.name}</span>
                            <span className="text-lg font-bold text-gray-900">{item.count}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
