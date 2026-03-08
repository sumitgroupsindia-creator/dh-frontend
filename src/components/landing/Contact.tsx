'use client';

import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaWhatsapp, FaUserTie, FaShieldAlt } from 'react-icons/fa';

export default function Contact() {
  const quickActions = [
    {
      icon: FaUserTie,
      title: 'Loan',
      description: 'Quick and hassle-free loan solutions with competitive interest rates.',
      whatsappMsg: 'Hi! I am interested in a Loan. Please share the details.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: FaShieldAlt,
      title: 'Insurance',
      description: 'Secure your future with our comprehensive insurance plans.',
      whatsappMsg: 'Hi! I am interested in Insurance. Please share the details.',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  const handleWhatsApp = (message: string) => {
    const text = encodeURIComponent(message);
    window.open(`https://wa.me/919783916343?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-500/10 rounded-full text-accent-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4 font-heading">
            Contact Us Today
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Ready to get started? Pick a service below and connect with us instantly on WhatsApp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Quick Action Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {quickActions.map((action) => (
              <button
                key={action.title}
                onClick={() => handleWhatsApp(action.whatsappMsg)}
                className="group bg-white rounded-brand-xl shadow-card hover:shadow-card-hover transition-all duration-300 p-6 text-left hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-brand bg-gradient-to-br ${action.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading">{action.title}</h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">{action.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 group-hover:text-green-700">
                  <FaWhatsapp className="w-4 h-4" />
                  Enquire Now
                </span>
              </button>
            ))}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-brand-xl shadow-card p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 font-heading">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-brand bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                    <HiPhone className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+91 97839 16343</p>
                
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-brand bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                    <HiMail className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">dhfin.office@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-brand bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                    <HiLocationMarker className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Office Address</h4>
                    <p className="text-gray-600">Shop No. 1, 2, N.H. 48, Bhumika Plaza, Paota, Dist - Kotputli-Behror</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="gradient-bg rounded-brand-xl p-8 text-white shadow-brand">
              <h3 className="text-xl font-bold mb-4 font-heading">Working Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-200">Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-200">Saturday</span>
                  <span className="font-semibold">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-200">Sunday</span>
                  <span className="font-semibold text-accent-400">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
