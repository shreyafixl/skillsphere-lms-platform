'use client';

import { BarChart3, TrendingUp, Users, Award } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Powerful Dashboards for Every Role
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Multi-role dashboards tailored for administrators, trainers, and learners with real-time insights.
          </p>
        </div>

        {/* Dashboard Preview Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {/* Admin Dashboard */}
          <div className="group relative bg-white rounded-lg p-4 sm:p-5 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 overflow-hidden h-full flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 space-y-3 flex-1 flex flex-col">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Admin Dashboard</h3>
                  <p className="text-xs text-gray-600">Organization insights</p>
                </div>
              </div>

              <div className="space-y-2.5 flex-1">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-3 border border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-gray-700">Total Learners</span>
                    <span className="text-lg font-bold text-gray-900">12.8K</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-300 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-gradient-to-r from-blue-500 to-blue-600" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-2.5 border border-gray-200">
                    <div className="text-xs text-gray-600 mb-1">Active Courses</div>
                    <div className="text-base font-bold text-gray-900">48</div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-2.5 border border-gray-200">
                    <div className="text-xs text-gray-600 mb-1">Completion</div>
                    <div className="text-base font-bold text-gray-900">87%</div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-3 border border-gray-200">
                  <div className="text-xs font-semibold text-gray-900 mb-2">Learning Paths</div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-700">Onboarding</span>
                      <span className="text-xs font-semibold text-gray-900">2,341</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-700">Advanced Skills</span>
                      <span className="text-xs font-semibold text-gray-900">1,847</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trainer Dashboard */}
          <div className="group relative bg-white rounded-lg p-4 sm:p-5 border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-300 overflow-hidden h-full flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 space-y-3 flex-1 flex flex-col">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Trainer Dashboard</h3>
                  <p className="text-xs text-gray-600">Course management</p>
                </div>
              </div>

              <div className="space-y-2.5 flex-1">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-3 border border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-gray-700">My Learners</span>
                    <span className="text-lg font-bold text-gray-900">342</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-300 rounded-full overflow-hidden">
                    <div className="h-full w-[72%] bg-gradient-to-r from-purple-500 to-purple-600" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-2.5 border border-gray-200">
                    <div className="text-xs text-gray-600 mb-1">Courses</div>
                    <div className="text-base font-bold text-gray-900">12</div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-2.5 border border-gray-200">
                    <div className="text-xs text-gray-600 mb-1">Rating</div>
                    <div className="text-base font-bold text-gray-900">4.8★</div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-3 border border-gray-200">
                  <div className="text-xs font-semibold text-gray-900 mb-2">Recent Activity</div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-700">Assignments Graded</span>
                      <span className="text-xs font-semibold text-gray-900">28</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-700">Messages Sent</span>
                      <span className="text-xs font-semibold text-gray-900">15</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Learner Dashboard */}
          <div className="group relative bg-white rounded-lg p-4 sm:p-5 border border-gray-200 hover:border-green-300 hover:shadow-md transition-all duration-300 overflow-hidden h-full flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 space-y-3 flex-1 flex flex-col">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Learner Dashboard</h3>
                  <p className="text-xs text-gray-600">Learning journey</p>
                </div>
              </div>

              <div className="space-y-2.5 flex-1">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-3 border border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-gray-700">Progress</span>
                    <span className="text-lg font-bold text-gray-900">68%</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-300 rounded-full overflow-hidden">
                    <div className="h-full w-[68%] bg-gradient-to-r from-green-500 to-green-600" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-2.5 border border-gray-200">
                    <div className="text-xs text-gray-600 mb-1">Enrolled</div>
                    <div className="text-base font-bold text-gray-900">8</div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-2.5 border border-gray-200">
                    <div className="text-xs text-gray-600 mb-1">Certificates</div>
                    <div className="text-base font-bold text-gray-900">3</div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-3 border border-gray-200">
                  <div className="text-xs font-semibold text-gray-900 mb-2">Learning Path</div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-700">Advanced Python</span>
                      <span className="text-xs font-semibold text-gray-900">45%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-700">Data Analytics</span>
                      <span className="text-xs font-semibold text-gray-900">82%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Assistant */}
          <div className="group relative bg-white rounded-lg p-4 sm:p-5 border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all duration-300 overflow-hidden h-full flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 space-y-3 flex-1 flex flex-col">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">AI Assistant</h3>
                  <p className="text-xs text-gray-600">Learning support</p>
                </div>
              </div>

              <div className="space-y-2.5 flex-1">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-3 border border-gray-200">
                  <div className="text-xs font-semibold text-gray-900 mb-2">Smart Features</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0" />
                      <span className="text-xs text-gray-700">Recommendations</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0" />
                      <span className="text-xs text-gray-700">Skill gap analysis</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-3 border border-gray-200">
                  <div className="text-xs font-semibold text-gray-900 mb-1">24/7 Support</div>
                  <p className="text-xs text-gray-600">Instant learning answers</p>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-3 border border-amber-200">
                  <div className="text-xs font-semibold text-amber-900 mb-1">AI-Powered</div>
                  <div className="text-xs text-amber-800">Adaptive paths & personalized feedback</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
