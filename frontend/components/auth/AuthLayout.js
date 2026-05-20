'use client';

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      {/* Background gradient blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main container */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left side - Branding */}
        <div className="hidden lg:flex flex-col justify-center space-y-12">
          {/* Logo */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
                <span className="text-2xl font-bold text-white">S</span>
              </div>
              <span className="text-2xl font-bold text-white">SkillSphere</span>
            </div>
            <p className="text-lg text-slate-400 max-w-sm">
              Enterprise learning platform for modern teams
            </p>
          </div>

          {/* Features list */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-violet-600/20 border border-violet-500/30">
                  <svg className="h-6 w-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold">AI-Powered Learning</h3>
                <p className="text-slate-400 text-sm">Personalized learning paths for every team member</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-violet-600/20 border border-violet-500/30">
                  <svg className="h-6 w-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold">Real-Time Analytics</h3>
                <p className="text-slate-400 text-sm">Track progress and measure skill development</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-violet-600/20 border border-violet-500/30">
                  <svg className="h-6 w-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold">Enterprise Ready</h3>
                <p className="text-slate-400 text-sm">SSO, compliance, and advanced security</p>
              </div>
            </div>
          </div>

          {/* Floating dashboard preview cards */}
          <div className="relative h-64 mt-8">
            {/* Main card */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-2xl border border-slate-700/50 backdrop-blur-xl p-6 shadow-2xl shadow-violet-500/10">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-white">Learning Dashboard</h4>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-slate-700/50 rounded-full w-3/4"></div>
                  <div className="h-2 bg-slate-700/50 rounded-full w-1/2"></div>
                  <div className="h-2 bg-slate-700/50 rounded-full w-2/3"></div>
                </div>
              </div>
            </div>

            {/* Floating stat card 1 */}
            <div className="absolute -top-4 -right-8 bg-gradient-to-br from-violet-600/20 to-purple-600/20 rounded-xl border border-violet-500/30 backdrop-blur-xl p-4 shadow-lg shadow-violet-500/10 w-40">
              <p className="text-xs text-slate-400 mb-1">Active Learners</p>
              <p className="text-2xl font-bold text-white">2,847</p>
            </div>

            {/* Floating stat card 2 */}
            <div className="absolute -bottom-4 -left-8 bg-gradient-to-br from-fuchsia-600/20 to-pink-600/20 rounded-xl border border-fuchsia-500/30 backdrop-blur-xl p-4 shadow-lg shadow-fuchsia-500/10 w-40">
              <p className="text-xs text-slate-400 mb-1">Courses Completed</p>
              <p className="text-2xl font-bold text-white">12,394</p>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-2xl border border-slate-700/50 backdrop-blur-xl p-8 shadow-2xl shadow-violet-500/10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
