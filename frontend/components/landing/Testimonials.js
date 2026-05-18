'use client';

import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Head of L&D',
      company: 'TechCorp',
      image: '👩‍💼',
      rating: 5,
      text: 'SkillSphere transformed our onboarding. We reduced time-to-productivity by 40%.',
    },
    {
      name: 'Michael Chen',
      role: 'Chief HR Officer',
      company: 'InnovateLabs',
      image: '👨‍💼',
      rating: 5,
      text: 'The AI assistant provides personalized recommendations that resonate with learners.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Training Manager',
      company: 'DataFlow',
      image: '👩‍🏫',
      rating: 5,
      text: 'The analytics dashboard gives us insights we never had before.',
    },
    {
      name: 'David Park',
      role: 'VP of Talent',
      company: 'CloudSync',
      image: '👨‍💻',
      rating: 5,
      text: 'Implementation was seamless. SkillSphere is now central to our strategy.',
    },
    {
      name: 'Lisa Thompson',
      role: 'Learning Ops Manager',
      company: 'SecureNet',
      image: '👩‍💻',
      rating: 5,
      text: 'The multi-tenant architecture lets us manage all subsidiaries in one platform.',
    },
    {
      name: 'James Wilson',
      role: 'Director of Training',
      company: 'GlobalTech',
      image: '👨‍🎓',
      rating: 5,
      text: 'Best investment in our learning infrastructure. ROI evident in Q1.',
    },
  ];

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12 space-y-2 sm:space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Loved by Learning Leaders
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
            See what enterprise customers are saying about SkillSphere.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-5 sm:p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-4 leading-relaxed text-xs">{testimonial.text}</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="text-2xl">{testimonial.image}</div>
                <div className="min-w-0">
                  <p className="font-semibold text-gray-900 text-xs truncate">{testimonial.name}</p>
                  <p className="text-xs text-gray-600 truncate">{testimonial.role}</p>
                  <p className="text-xs text-gray-500 truncate">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="pt-8 sm:pt-10 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">4.9★</div>
              <p className="text-xs sm:text-sm text-gray-600">Average Rating</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">500+</div>
              <p className="text-xs sm:text-sm text-gray-600">Enterprise Clients</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">2M+</div>
              <p className="text-xs sm:text-sm text-gray-600">Active Learners</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">98%</div>
              <p className="text-xs sm:text-sm text-gray-600">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
