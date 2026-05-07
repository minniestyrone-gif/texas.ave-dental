import { motion, useScroll, useTransform } from 'motion/react';
import { Phone } from 'lucide-react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(scrollY, [0, 50], ["rgba(253, 248, 243, 0)", "rgba(253, 248, 243, 0.9)"]);
  const borderOpacity = useTransform(scrollY, [0, 50], ["0", "0.1"]);

  return (
    <motion.nav 
      id="main-nav"
      style={{ 
        backgroundColor,
        borderBottom: `1px solid rgba(37, 99, 235, ${borderOpacity})`
      }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-shadow"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div id="logo-container" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-blue-100 flex items-center justify-center bg-white">
            <img 
              src="https://img.freepik.com/premium-vector/dental-logo-template_1948-3818.jpg" 
              alt="Texas.Ave Dental logo" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-2xl font-bold tracking-tighter text-gray-900">Texas.Ave Dental</span>
        </div>

        <div id="nav-links" className="hidden md:flex items-center gap-10">
          <a href="#services" className="text-sm font-bold text-gray-500 hover:text-blue-600 transition-colors uppercase tracking-widest">Services</a>
          <a href="#trust" className="text-sm font-bold text-gray-500 hover:text-blue-600 transition-colors uppercase tracking-widest">Testimonials</a>
          <a href="#booking" className="text-sm font-bold text-gray-500 hover:text-blue-600 transition-colors uppercase tracking-widest">Contact</a>
        </div>

        <div id="nav-actions" className="flex items-center gap-4">
          <a href="tel:+19796935130" className="hidden sm:flex items-center gap-2 text-sm font-bold text-gray-900">
            <Phone className="w-4 h-4 text-blue-600" />
            +1 979-693-5130
          </a>
          <button 
            id="nav-cta"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md active:scale-95"
          >
            Schedule Today
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
