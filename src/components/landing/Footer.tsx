export default function Footer() {
  return (
    <footer className="gradient-bg text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-5">
              <img src="/logo.svg" alt="DH Financial" className="w-11 h-11 object-contain drop-shadow-lg" />
              <div>
                <h3 className="text-lg font-extrabold font-heading">DH Financial</h3>
                <p className="text-[11px] text-gray-400 tracking-wider uppercase">Services</p>
              </div>
            </div>
            <p className="text-gray-300/80 text-sm leading-relaxed">
              Your trusted financial partner providing hassle-free loan
              and insurance solutions across India.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-5 font-heading">Our Services</h4>
            <ul className="space-y-3 text-gray-300/80 text-sm">
              <li className="hover:text-accent-400 transition-colors cursor-default">Bike Loan</li>
              <li className="hover:text-accent-400 transition-colors cursor-default">Tractor Loan</li>
              <li className="hover:text-accent-400 transition-colors cursor-default">Personal Loan</li>
              <li className="hover:text-accent-400 transition-colors cursor-default">Insurance</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-5 font-heading">Quick Links</h4>
            <ul className="space-y-3 text-gray-300/80 text-sm">
              <li><a href="#home" className="hover:text-accent-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-accent-400 transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-accent-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-accent-400 transition-colors">Contact</a></li>
              <li><a href="/login" className="hover:text-accent-400 transition-colors">Admin Panel</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-400/80 text-sm">
            © {new Date().getFullYear()} DH Financial Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
