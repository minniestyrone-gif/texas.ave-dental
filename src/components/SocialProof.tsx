import { motion } from 'motion/react';
import { 
  Smile, 
  CheckCircle2, 
  Star, 
  Shield, 
  Users,
  Building2
} from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Patient for 3 years",
    content: "The best dental experience I've ever had. DR D. Rodriguez and the entire team are incredibly professional and gentle. My smile has never looked better!",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Michael Ross",
    role: "Implants Patient",
    content: "I was nervous about getting implants, but florist.co made me feel at ease. The result is life-changing. Highly recommend their services.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=michael"
  },
  {
    name: "Emily Davis",
    role: "Whitening Patient",
    content: "Quick, painless, and amazing results! The emergency team also helped me on a Sunday when I had a sudden toothache. Truly professional.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=emily"
  }
];

const insuranceProviders = [
  "Aetna", "BlueCross BlueShield", "Cigna", "Delta Dental", "MetLife", "United Healthcare"
];

export default function SocialProof() {
  return (
    <section id="trust" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div id="social-proof-header" className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-600 font-bold tracking-widest uppercase text-sm"
          >
            Trust & Excellence
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mt-4"
          >
            Smiles that speak for themselves
          </motion.h2>
        </div>

        {/* Before/After Placeholder */}
        <div id="gallery-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative rounded-3xl overflow-hidden aspect-video bg-gray-100 group"
          >
            <img 
              src="https://static.vecteezy.com/system/resources/thumbnails/070/913/160/small_2x/close-up-image-of-discolored-yellow-teeth-emphasizing-dental-hygiene-importance-photo.jpg" 
              alt="Before Whitenening" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-md text-white rounded-full text-xs font-bold">
              Before
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative rounded-3xl overflow-hidden aspect-video bg-gray-100 group"
          >
            <img 
              src="https://modburydentalpractice.com/wp-content/uploads/2022/06/2-610x397.png" 
              alt="After Whitening" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600/80 backdrop-blur-md text-white rounded-full text-xs font-bold">
              After
            </div>
          </motion.div>
        </div>

        {/* Testimonials */}
        <div id="testimonials-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team & Insurance */}
        <div id="team-insurance" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative rounded-3xl overflow-hidden aspect-[4/3]"
          >
            <img 
              src="https://infinitydentalclinic.co.uk/wp-content/uploads/2025/03/Untitled-1920-x-1080-px-3.png" 
              alt="Our Dental Team" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">The Texas.Ave Dental Team</h3>
                <p className="opacity-90">Expert care from dedicated professionals who love your smile.</p>
              </div>
            </div>
          </motion.div>

          <div id="insurance-list">
            <div className="flex items-center gap-2 mb-6">
              <Building2 className="w-6 h-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">Accepted Insurances</h3>
            </div>
            <p className="text-gray-600 mb-8">We work with major insurance providers to make your dental care accessible and stress-free.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {insuranceProviders.map((provider, i) => (
                <div key={i} className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl border border-gray-100 italic font-medium text-gray-500">
                  <Shield className="w-4 h-4 text-blue-400" />
                  {provider}
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-gray-400">Don't see yours? Contact us to verify coverage.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
