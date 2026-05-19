'use client';

import { TrendingUp, PieChart, LineChart, Activity } from 'lucide-react';

export default function Analytics() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-1/3 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-10 -z-10" />
      <div className="absolute -bottom-20 left-1/4 w-64 h-64 bg-gradient-to-tr from-purple-100 to-blue-100 rounded-full blur-3xl opacity-10 -z-10" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-3">
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900">
            Deep Insights, Real Impact
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive analytics to measure learning effectiveness and drive organizational growth.
          </p>
        </div>

        {/* Main Analytics Card */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Learning Performance</h3>
              <p className="text-sm text-gray-600">Real-time metrics and KPIs</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <Activity size={24} className="text-white" />
            </div>
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {/* Chart 1 */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-600">Completion Rate</span>
                <TrendingUp size={16} className="text-green-500" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-3">87%</div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full w-[87%] bg-gradient-to-r from-green-500 to-emerald-500" />
              </div>
              <p className="text-xs text-gray-500 mt-2">↑ 12% from last quarter</p>
            </div>

            {/* Chart 2 */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-600">Avg. Completion</span>
                <LineChart size={16} className="text-blue-500" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-3">4.2 hrs</div>
              <div className="space-y-1 text-xs text-gray-500">
                <p>Target: 5 hrs</p>
                <p>↓ 16% faster</p>
              </div>
            </div>

            {/* Chart 3 */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-600">Certification</span>
                <PieChart size={16} className="text-purple-500" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-3">94%</div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full w-[94%] bg-gradient-to-r from-purple-500 to-pink-500" />
              </div>
              <p className="text-xs text-gray-500 mt-2">↑ 8% from last quarter</p>
            </div>
          </div>

          {/* Mini Chart */}
          <div className="pt-8 border-t border-gray-200">
            <p className="text-sm font-medium text-gray-600 mb-4">Learning Trend (Last 12 Months)</p>
            <div className="flex items-end justify-between h-16 gap-1 overflow-x-auto">
              {[65, 72, 68, 75, 82, 78, 85, 88, 87, 90, 92, 94].map((value, i) => (
                <div
                  key={i}
                  className="flex-1 min-w-[16px] bg-gradient-to-t from-blue-500 to-purple-500 rounded-t opacity-70 hover:opacity-100 transition-opacity"
                  style={{ height: `${(value / 100) * 100}%` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stat Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Engagement Metrics</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
                <span className="text-sm text-gray-600">Active Learners</span>
                <span className="text-lg font-bold text-gray-900">12.8K</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
                <span className="text-sm text-gray-600">Courses Completed</span>
                <span className="text-lg font-bold text-gray-900">48.3K</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
                <span className="text-sm text-gray-600">Avg. Session</span>
                <span className="text-lg font-bold text-gray-900">42 min</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
                <span className="text-sm text-gray-600">Satisfaction</span>
                <span className="text-lg font-bold text-gray-900">4.7★</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-bold text-gray-900 mb-6">ROI Indicators</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
                <span className="text-sm text-gray-600">Skills Improved</span>
                <span className="text-lg font-bold text-gray-900">+340%</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
                <span className="text-sm text-gray-600">Productivity Gain</span>
                <span className="text-lg font-bold text-gray-900">+28%</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
                <span className="text-sm text-gray-600">Employee Retention</span>
                <span className="text-lg font-bold text-gray-900">+15%</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
                <span className="text-sm text-gray-600">Cost per Learner</span>
                <span className="text-lg font-bold text-gray-900">-42%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
