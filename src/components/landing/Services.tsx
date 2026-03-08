import { HiOutlineTruck, HiOutlineUser, HiOutlineShieldCheck } from 'react-icons/hi';
import { MdOutlineDirectionsBike } from 'react-icons/md';

const services = [
  {
    icon: <MdOutlineDirectionsBike className="w-10 h-10" />,
    title: 'Bike Loan',
    description: 'Get your dream bike with easy EMI options. Quick approval with minimal documentation.',
    features: ['Low Interest Rate', 'Flexible EMI', 'Quick Disbursal'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: <HiOutlineTruck className="w-10 h-10" />,
    title: 'Tractor Loan',
    description: 'Empowering farmers with affordable tractor financing. Grow your productivity.',
    features: ['Agriculture Friendly', 'Low Processing Fee', 'Long Tenure'],
    color: 'from-green-500 to-green-600',
  },
  {
    icon: <HiOutlineUser className="w-10 h-10" />,
    title: 'Personal Loan',
    description: 'Quick personal loans for all your needs. No collateral required, instant approval.',
    features: ['No Collateral', 'Instant Approval', 'Minimal Documents'],
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: <HiOutlineShieldCheck className="w-10 h-10" />,
    title: 'Insurance',
    description: 'Protect your family and assets with our comprehensive insurance solutions.',
    features: ['Life Insurance', 'Vehicle Insurance', 'Health Insurance'],
    color: 'from-orange-500 to-orange-600',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-500/10 rounded-full text-accent-600 font-semibold text-sm uppercase tracking-wider mb-3">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4 font-heading">
            Our Financial Services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We provide a range of financial services designed to meet your needs.
            Simple process, quick approval, and competitive rates.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-brand-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 group hover:-translate-y-2 border border-gray-100/80"
            >
              <div
                className={`w-16 h-16 rounded-brand bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-md`}
              >
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                {service.title}
              </h3>

              <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2.5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-400 to-accent-600 mr-2.5 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
