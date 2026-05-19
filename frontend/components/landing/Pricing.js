'use client';

import { Check } from 'lucide-react';
import { useState } from 'react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('annual');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small teams',
      price: billingCycle === 'annual' ? 299 : 35,
      period: billingCycle === 'annual' ? '/year' : '/month',
      highlight: false,
      features: [
        'Up to 100 learners',
        '5 courses',
        'Basic analytics',
        'Email support',
        'Mobile app access',
        'Standard templates',
      ],
    },
    {
      name: 'Professional',
      description: 'For growing organizations',
      price: billingCycle === 'annual' ? 999 : 119,
      period: billingCycle === 'annual' ? '/year' : '/month',
      highlight: true,
      features: [
        'Up to 1,000 learners',
        'Unlimited courses',
        'Advanced analytics',
        'Priority support',
        'Mobile app access',
        'Custom branding',
        'API access',
        'SSO integration',
        'Trainer management',
        'Certification system',
      ],
    },
    {
      name: 'Enterprise',
      description: 'For large-scale deployments',
      price: 'Custom',
      period: '',
      highlight: false,
      features: [
        'Unlimited learners',
        'Unlimited courses',
        'Custom analytics',
        '24/7 dedicated support',
        'Mobile app access',
        'White-label solution',
        'API access',
        'SSO & SCIM',
        'Advanced trainer tools',
        'AI learning assistant',
        'Custom integrations',
        'SLA guarantee',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 space-y-4">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto font-light">
            Choose the perfect plan. All plans include a 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-2 bg-white rounded-lg p-1.5 border border-gray-200 mt-6">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-md font-medium transition-all text-sm ${
                billingCycle === 'monthly'
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 rounded-md font-medium transition-all text-sm flex items-center gap-2 ${
                billingCycle === 'annual'
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Annual
              {billingCycle === 'annual' && (
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  Save 20%
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl transition-all duration-300 overflow-hidden ${
                plan.highlight
                  ? 'bg-gradient-to-br from-indigo-600 to-purple-600 shadow-xl md:scale-105'
                  : 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg'
              }`}
            >
              {/* Highlight Badge */}
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="bg-gradient-to-r from-amber-400 to-orange-400 text-gray-900 px-4 py-1.5 rounded-full text-xs font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`p-8 sm:p-10 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                {/* Plan Name */}
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-lg mb-6 ${plan.highlight ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-5xl font-bold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                      {plan.price}
                    </span>
                    <span className={plan.highlight ? 'text-blue-100' : 'text-gray-600'}>
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 rounded-lg font-bold mb-8 transition-all text-lg ${
                    plan.highlight
                      ? 'bg-white text-indigo-600 hover:bg-gray-50'
                      : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:shadow-indigo-500/30'
                  }`}
                >
                  Get Started
                </button>

                {/* Features */}
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check
                        size={20}
                        className={`flex-shrink-0 mt-1 ${
                          plan.highlight ? 'text-blue-100' : 'text-green-600'
                        }`}
                      />
                      <span className={`text-lg ${plan.highlight ? 'text-blue-50' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {[
              {
                q: 'Can I change plans anytime?',
                a: 'Yes, upgrade or downgrade at any time. Changes take effect at the next billing cycle.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, bank transfers, and purchase orders.',
              },
              {
                q: 'Is there a setup fee?',
                a: 'No setup fees. Start using SkillSphere immediately after signing up.',
              },
              {
                q: 'Do you offer annual discounts?',
                a: 'Yes, annual billing saves you 20% compared to monthly billing.',
              },
            ].map((faq, index) => (
              <div key={index}>
                <h4 className="font-semibold text-gray-900 mb-2 text-base">{faq.q}</h4>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
