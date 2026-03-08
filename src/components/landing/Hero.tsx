export default function Hero() {
  return (
    <section id="home" className="gradient-bg min-h-screen flex items-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-primary-300/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-500/15 backdrop-blur-sm border border-accent-400/20 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse"></span>
              <span className="text-accent-300 font-medium text-sm tracking-wide">
                Trusted Financial Partner
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6 font-heading">
              Your Dreams,
              <br />
              <span className="gradient-accent bg-clip-text text-transparent">Our Finance</span>
              <br />
              Solutions
            </h1>

            <p className="text-lg text-gray-300/90 mb-10 max-w-lg leading-relaxed">
              DH Financial Services provides hassle-free loan and insurance
              solutions. We make your financial journey smooth and simple.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-accent text-center text-lg px-8 py-4 rounded-brand-lg">
                Apply Now
              </a>
              <a href="#services" className="border-2 border-white/30 text-white hover:bg-white hover:text-primary-500 text-center text-lg px-8 py-4 rounded-brand-lg font-semibold transition-all duration-200 backdrop-blur-sm">
                Our Services
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-14">
              <div>
                <h3 className="text-3xl font-extrabold text-accent-400 font-heading">500+</h3>
                <p className="text-gray-400/80 text-sm mt-1">Happy Clients</p>
              </div>
              <div className="border-l border-white/10 pl-10">
                <h3 className="text-3xl font-extrabold text-accent-400 font-heading">₹5Cr+</h3>
                <p className="text-gray-400/80 text-sm mt-1">Loans Disbursed</p>
              </div>
              <div className="border-l border-white/10 pl-10">
                <h3 className="text-3xl font-extrabold text-accent-400 font-heading">98%</h3>
                <p className="text-gray-400/80 text-sm mt-1">Approval Rate</p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-accent-500/10 rounded-full flex items-center justify-center border border-accent-400/10">
                <div className="w-60 h-60 bg-accent-500/15 rounded-full flex items-center justify-center border border-accent-400/10">
                  <img
                    src="/logo.svg"
                    alt="DH Financial Services"
                    className="w-44 h-44 object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
              {/* Floating cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-brand p-4 shadow-brand-lg">
                <p className="text-xs text-gray-500">Quick Processing</p>
                <p className="text-lg font-bold text-primary-500 font-heading">24 Hours</p>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-brand p-4 shadow-brand-lg">
                <p className="text-xs text-gray-500">Interest Rate</p>
                <p className="text-lg font-bold text-accent-600 font-heading">From 8.5%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
