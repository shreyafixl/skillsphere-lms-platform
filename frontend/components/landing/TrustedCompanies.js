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
    <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-gray-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 space-y-2">
          <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
            Trusted by Leading Organizations
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Join thousands of companies transforming their learning culture
          </h2>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-6 items-center mb-10 sm:mb-12">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-lg hover:bg-gray-50 transition-colors group cursor-pointer"
            >
              <div className="text-3xl sm:text-4xl mb-2 group-hover:scale-110 transition-transform">
                {company.logo}
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-600 text-center group-hover:text-gray-900 transition-colors">
                {company.name}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-10 sm:pt-12 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">500+</div>
            <p className="text-sm text-gray-600">Enterprise Clients</p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">2M+</div>
            <p className="text-sm text-gray-600">Active Learners</p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">98%</div>
            <p className="text-sm text-gray-600">Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
