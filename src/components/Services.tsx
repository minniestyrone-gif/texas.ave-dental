import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { 
  Sparkles, 
  Activity, 
  Stethoscope, 
  AlertCircle, 
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  benefits: string[];
  icon: ReactNode;
}

const services: Service[] = [
  {
    id: 'whitening',
    title: 'Teeth Whitening',
    description: 'Professional grade whitening for a brighter, more confident smile.',
    problem: 'Daily coffee, wine, and aging can dull your natural radiance, leaving teeth stained and yellowed.',
    solution: 'Our advanced whitening technology uses medical-grade agents to penetrate tooth enamel Safely and effectively removing deep-set stains.',
    benefits: ['Up to 8 shades whiter', 'Safe for sensitive teeth', 'Instant visible results', 'Long-lasting brilliance'],
    icon: <Sparkles className="w-8 h-8" />
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    description: 'Permanent, natural-looking solution for missing teeth.',
    problem: 'Missing teeth cause structural issues, bone loss, and a lack of self-confidence when smiling or eating.',
    solution: 'We offer state-of-the-art titanium implants that fuse with your bone, providing a foundation for life-like crowns.',
    benefits: ['Looks and feels natural', 'Prevents bone loss', 'Permanent solution', 'Improves facial structure'],
    icon: <Activity className="w-8 h-8" />
  },
  {
    id: 'root-canal',
    title: 'Root Canal Therapy',
    description: 'Painless procedures to save your natural teeth from infection.',
    problem: 'Deep decay or trauma can infect the tooth pulp, causing severe pain and potential tooth loss.',
    solution: 'DR D. Rodriguez specializes in gentle endodontics, removing infection and sealing the tooth to preserve its function.',
    benefits: ['Relieves acute pain', 'Saves natural teeth', 'Fast recovery', 'Stops further infection'],
    icon: <AlertCircle className="w-8 h-8" />
  },
  {
    id: 'emergency',
    title: 'Emergency Dentistry',
    description: 'Rapid care for sudden pain or injuries, available 24/7.',
    problem: 'Sudden toothaches, broken teeth, or lost fillings can happen anytime, causing intense discomfort.',
    solution: 'Our dedicated emergency team is on standby to provide immediate relief and stabilization for any dental crisis.',
    benefits: ['Same-day appointments', 'Immediate pain relief', 'Trauma management', 'Expert triage'],
    icon: <Stethoscope className="w-8 h-8" />
  },
  {
    id: 'general',
    title: 'Check-ups & Cleaning',
    description: 'Comprehensive preventive care for lifelong oral health.',
    problem: 'Plaque and tartar buildup leads to gum disease, cavities, and bad breath if not managed professionaly.',
    solution: 'Routine exams and ultrasonic scaling ensure your gums are healthy and your teeth are polished and protected.',
    benefits: ['Prevents cavities', 'Fresh breath', 'Oral cancer screening', 'Professional cleaning'],
    icon: <CheckCircle2 className="w-8 h-8" />
  }
];

interface ServicesProps {
  onSelectService: (service: Service) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  return (
    <section id="services" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div id="services-header" className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-blue-600 font-bold tracking-widest uppercase text-sm"
            >
              Our Specialties
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight"
            >
              Comprehensive care for every unique smile
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-sm"
          >
            We combine high-tech equipment with a gentle touch to provide the best dental experience in town.
          </motion.p>
        </div>

        <div id="services-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={() => onSelectService(service)}
              className="group p-8 bg-purple-600 rounded-[2.5rem] border border-transparent hover:bg-purple-500 hover:shadow-2xl transition-all cursor-pointer relative"
            >
              <div id="service-icon" className="mb-8 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white shadow-sm group-hover:scale-110 group-hover:bg-white group-hover:text-purple-600 transition-all">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-purple-50 mb-8 leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-white/90 font-bold group-hover:gap-4 transition-all">
                View Details
                <ChevronRight className="w-5 h-5" />
              </div>
            </motion.div>
          ))}
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="p-8 bg-purple-900 rounded-[2.5rem] flex flex-col justify-between text-white shadow-xl shadow-purple-200"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Unsure what you need?</h3>
              <p className="opacity-80">Book a general check-up and we'll help you chart your path to oral health.</p>
            </div>
            <button 
              id="request-callback-btn"
              className="mt-8 py-4 bg-white text-purple-900 rounded-2xl font-bold hover:bg-purple-50 transition-colors"
            >
              Request Call Back
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
