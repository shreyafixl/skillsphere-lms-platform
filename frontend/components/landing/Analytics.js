'use client';

import { TrendingUp, PieChart, LineChart, Activity } from 'lucide-react';

export default function Analytics() {
  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-gray-50 relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-16 right-1/3 w-48 h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-10 -z-10" />
      <div className="absolute -bottom-16 left-1/4 w-48 h-48 bg-gradient-to-tr from-purple-100 to-blue-100 rounded-full blur-3xl opacity-10 -z-10" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Deep Insights, Real Impact
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Comprehensive analytics to measure learning effectiveness and drive organizational growth.
          </p>
        </div>

        {/* Main Analytics Card */}
        <div className="bg-white rounded-lg p-4 sm:p-5 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 mb-4 sm:mb-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
            <div>
              <h3 className="text-base font-bold text-gray-900">Learning Performance</h3>
              <p className="text-xs text-gray-600">Real-time metrics and KPIs</p>
            </div>
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <Activity size={18} className="text-white" />
            </div>
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Chart 1 */}
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-gray-600">Completion Rate</span>
                <TrendingUp size={14} className="text-green-500" />
              </div>
              <div className="text-lg font-bold text-gray-900 mb-2">87%</div>
              <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full w-[87%] bg-gradient-to-r from-green-500 to-emerald-500" />
              </div>
              <p className="text-xs text-gray-500 mt-1.5">↑ 12% from last quarter</p>
            </div>

            {/* Chart 2 */}
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-gray-600">Avg. Completion</span>
                <LineChart size={14} className="text-blue-500" />
              </div>
              <div className="text-lg font-bold text-gray-900 mb-2">4.2 hrs</div>
              <div className="space-y-0.5 text-xs text-gray-500">
                <p>Target: 5 hrs</p>
                <p>↓ 16% faster</p>
              </div>
            </div>

            {/* Chart 3 */}
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-gray-600">Certification</span>
                <PieChart size={14} className="text-purple-500" />
              </div>
              <div className="text-lg font-bold text-gray-900 mb-2">94%</div>
              <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full w-[94%] bg-gradient-to-r from-purple-500 to-pink-500" />
              </div>
              <p className="text-xs text-gray-500 mt-1.5">↑ 8% from last quarter</p>
            </div>
          </div>

          {/* Mini Chart */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs font-medium text-gray-600 mb-2">Learning Trend (Last 12 Months)</p>
            <div className="flex items-end justify-between h-14 gap-0.5 overflow-x-auto">
              {[65, 72, 68, 75, 82, 78, 85, 88, 87, 90, 92, 94].map((value, i) => (
                <div
                  key={i}
                  className="flex-1 min-w-[12px] bg-gradient-to-t from-blue-500 to-purple-500 rounded-t opacity-70 hover:opacity-100 transition-opacity"
                  style={{ height: `${(value / 100) * 100}%` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stat Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div className="bg-white rounded-lg p-4 sm:p-5 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300">
            <h3 className="text-sm font-bold text-gray-900 mb-3">Engagement Metrics</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg border border-gray-100">
                <span className="text-xs text-gray-600">Active Learners</span>
                <span className="text-base font-bold text-gray-900">12.8K</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg border border-gray-100">
                <span className="text-xs text-gray-600">Courses Completed</span>
                <span className="text-base font-bold text-gray-900">48.3K</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg border border-gray-100">
                <span className="text-xs text-gray-600">Avg. Session</span>
                <span className="text-base font-bold text-gray-900">42 min</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg border border-gray-100">
                <span className="text-xs text-gray-600">Satisfaction</span>
                <span className="text-base font-bold text-gray-900">4.7★</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 sm:p-5 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300">
            <h3 className="text-sm font-bold text-gray-900 mb-3">ROI Indicators</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg border border-gray-100">
                <span className="text-xs text-gray-600">Skills Improved</span>
                <span className="text-base font-bold text-gray-900">+340%</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg border border-gray-100">
                <span className="text-xs text-gray-600">Productivity Gain</span>
                <span className="text-base font-bold text-gray-900">+28%</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg border border-gray-100">
                <span className="text-xs text-gray-600">Employee Retention</span>
                <span className="text-base font-bold text-gray-900">+15%</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg border border-gray-100">
                <span className="text-xs text-gray-600">Cost per Learner</span>
                <span className="text-base font-bold text-gray-900">-42%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
