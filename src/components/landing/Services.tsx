import { HiOutlineTruck, HiOutlineShieldCheck } from 'react-icons/hi';
import { FaCar, FaHardHat, FaMotorcycle, FaTractor, FaHome } from 'react-icons/fa';

const services = [
  {
    icon: <FaCar className="w-10 h-10" />,
    title: 'Car Loan',
    description:
      'Get your dream car with our easy and affordable car loan options for new and used vehicles.',
    features: ['New & Used Cars', 'Low Interest Rate', 'Quick Disbursal'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: <HiOutlineTruck className="w-10 h-10" />,
    title: 'Heavy Commercial Vehicle Loan',
    description:
      'Finance your heavy commercial vehicles with competitive rates and hassle-free processing.',
    features: ['Trucks & Buses', 'Flexible EMI', 'Fast Approval'],
    color: 'from-green-600 to-green-700',
  },
  {
    icon: <HiOutlineTruck className="w-10 h-10" />,
    title: 'Light Commercial Vehicle Loan',
    description:
      'Easy financing for light commercial vehicles — pickups, mini trucks, and more.',
    features: ['Pickups & Tempos', 'Low Documentation', 'Quick Processing'],
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: <FaHardHat className="w-10 h-10" />,
    title: 'Construction Equipment Loan',
    description:
      'Expand your construction business with easy financing for all types of equipment and machinery.',
    features: ['JCB & Excavators', 'Cranes & Loaders', 'Earth Movers'],
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    icon: <FaTractor className="w-10 h-10" />,
    title: 'Tractor Loan',
    description:
      'Affordable tractor financing to empower your farming needs with easy repayment options.',
    features: ['All Tractor Brands', 'Low Interest', 'Flexible Tenure'],
    color: 'from-lime-600 to-lime-700',
  },
  {
    icon: <FaHome className="w-10 h-10" />,
    title: 'Home Loan',
    description:
      'Make your dream home a reality with our affordable home loan solutions.',
    features: ['Low Interest Rate', 'Long Tenure', 'Quick Sanction'],
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: <FaMotorcycle className="w-10 h-10" />,
    title: 'Two Wheeler Loan',
    description:
      'Ride your dream bike or scooter with easy two wheeler loan options.',
    features: ['Bikes & Scooters', 'Low EMI', 'Instant Approval'],
    color: 'from-red-500 to-red-600',
  },
  {
    icon: <HiOutlineShieldCheck className="w-10 h-10" />,
    title: 'Vehicle Insurance',
    description:
      'Comprehensive vehicle insurance to protect your asset on the road.',
    features: ['Car Insurance', 'Bike Insurance', 'Commercial Vehicle'],
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
            सस्ते लोन के साथ कुछ भी चुनें — कम ब्याज दर, कम कागजी कार्यवाही, और अतिशीघ्र लोन सुविधा।
          </p>
        </div>

        {/* Service Cards */}        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
