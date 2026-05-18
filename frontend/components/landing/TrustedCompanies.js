'use client';

export default function TrustedCompanies() {
  const companies = [
    { name: 'TechCorp', logo: '🏢' },
    { name: 'InnovateLabs', logo: '🚀' },
    { name: 'DataFlow', logo: '📊' },
    { name: 'CloudSync', logo: '☁️' },
    { name: 'SecureNet', logo: '🔒' },
    { name: 'GlobalTech', logo: '🌍' },
  ];

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-white border-b border-gray-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-7 sm:mb-8 space-y-1.5">
          <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
            Trusted by Leading Organizations
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Join thousands of companies transforming their learning culture
          </h2>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4 items-center mb-7 sm:mb-8">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex flex-col items-center justify-center p-1.5 sm:p-2 rounded-lg hover:bg-gray-50 transition-colors group cursor-pointer"
            >
              <div className="text-2xl sm:text-2.5xl mb-1 group-hover:scale-110 transition-transform">
                {company.logo}
              </div>
              <p className="text-xs font-medium text-gray-600 text-center group-hover:text-gray-900 transition-colors">
                {company.name}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-7 sm:pt-8 border-t border-gray-200">
          <div className="text-center">
            <div className="text-lg sm:text-2xl font-bold text-gray-900 mb-0.5">500+</div>
            <p className="text-xs text-gray-600">Enterprise Clients</p>
          </div>
          <div className="text-center">
            <div className="text-lg sm:text-2xl font-bold text-gray-900 mb-0.5">2M+</div>
            <p className="text-xs text-gray-600">Active Learners</p>
          </div>
          <div className="text-center">
            <div className="text-lg sm:text-2xl font-bold text-gray-900 mb-0.5">98%</div>
            <p className="text-xs text-gray-600">Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
