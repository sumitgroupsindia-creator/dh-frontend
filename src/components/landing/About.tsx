import { HiCheckCircle } from 'react-icons/hi';

const highlights = [
  'Transparent Process with No Hidden Charges',
  'Quick Loan Processing within 24 Hours',
  'Dedicated Relationship Manager',
  'Pan-India Service Coverage',
  'Digital-First Approach for Faster Processing',
  'Customer Support Available 6 Days a Week',
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Image / Visual */}
          <div className="relative">
            <div className="gradient-bg rounded-brand-xl p-10 text-white shadow-brand-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent-500/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <img
                src="/logo.svg"
                alt="DH Financial Services"
                className="w-32 h-32 object-contain mx-auto mb-6 drop-shadow-xl relative z-10"
              />
              <h3 className="text-2xl font-extrabold text-center mb-4 font-heading relative z-10">
                DH Financial Services
              </h3>
              <p className="text-center text-gray-200/80 mb-8 relative z-10">
                Building trust through transparent financial services since our founding.
              </p>

              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-brand p-4 border border-white/5">
                  <h4 className="text-3xl font-extrabold text-accent-400 font-heading">4+</h4>
                  <p className="text-sm text-gray-300/80">Services</p>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-brand p-4 border border-white/5">
                  <h4 className="text-3xl font-extrabold text-accent-400 font-heading">500+</h4>
                  <p className="text-sm text-gray-300/80">Clients</p>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-brand p-4 border border-white/5">
                  <h4 className="text-3xl font-extrabold text-accent-400 font-heading">₹5Cr+</h4>
                  <p className="text-sm text-gray-300/80">Disbursed</p>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-brand p-4 border border-white/5">
                  <h4 className="text-3xl font-extrabold text-accent-400 font-heading">98%</h4>
                  <p className="text-sm text-gray-300/80">Approval</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-500/10 rounded-full text-accent-600 font-semibold text-sm uppercase tracking-wider mb-3">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-6 font-heading">
              Trusted Financial Partner for Your{' '}
              <span className="gradient-accent bg-clip-text text-transparent">Growth</span>
            </h2>

            <p className="text-gray-500 mb-4 leading-relaxed">
              DH Financial Services is a leading financial services company
              committed to providing quick and hassle-free loan solutions.
              We understand the diverse financial needs of our clients and
              offer tailored solutions.
            </p>

            <p className="text-gray-500 mb-8 leading-relaxed">
              Whether you need a loan or insurance — we have got you covered
              with competitive rates and transparent processes.
            </p>

            <div className="space-y-3.5">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3 group">
                  <HiCheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
