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
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 space-y-4">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900">
            Loved by Learning Leaders
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto font-light">
            See what enterprise customers are saying about SkillSphere.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed text-lg flex-1">{testimonial.text}</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="text-3xl">{testimonial.image}</div>
                <div className="min-w-0">
                  <p className="font-semibold text-gray-900 text-base truncate">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 truncate">{testimonial.role}</p>
                  <p className="text-sm text-gray-500 truncate">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="pt-12 sm:pt-16 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">4.9★</div>
              <p className="text-sm text-gray-600">Average Rating</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">500+</div>
              <p className="text-sm text-gray-600">Enterprise Clients</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">2M+</div>
              <p className="text-sm text-gray-600">Active Learners</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">98%</div>
              <p className="text-sm text-gray-600">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
