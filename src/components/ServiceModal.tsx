import { motion, AnimatePresence } from 'motion/react';
import type { ReactNode } from 'react';
import { 
  X, 
  Sparkles, 
  Stethoscope, 
  Activity, 
  ShieldCheck, 
  Calendar,
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

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  return (
    <AnimatePresence>
      {service && (
        <div id="service-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <motion.div
            id="service-modal-content"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl relative overflow-hidden"
          >
            <button 
              id="close-modal-btn"
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>

            <div id="modal-header" className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                {service.icon}
              </div>
              <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
            </div>

            <div id="modal-body" className="space-y-6">
              <div id="problem-section">
                <h3 className="text-sm font-bold uppercase tracking-wider text-red-500 mb-2">The Problem</h3>
                <p className="text-gray-600 leading-relaxed">{service.problem}</p>
              </div>

              <div id="solution-section">
                <h3 className="text-sm font-bold uppercase tracking-wider text-green-500 mb-2">Our Solution</h3>
                <p className="text-gray-600 leading-relaxed">{service.solution}</p>
              </div>

              <div id="benefits-section">
                <h3 className="text-sm font-bold uppercase tracking-wider text-blue-500 mb-2">Key Benefits</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <ShieldCheck className="w-4 h-4 text-blue-500" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button 
              id="modal-cta-btn"
              onClick={() => {
                onClose();
                document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-8 w-full py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              Schedule Consultation
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
