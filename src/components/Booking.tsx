import { motion } from 'motion/react';
import { 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  MapPin,
  CalendarCheck
} from 'lucide-react';

export default function Booking() {
  const officeHours = [
    { day: "Mon - Thu", hours: "8:00 AM - 6:00 PM" },
    { day: "Friday", hours: "8:00 AM - 4:00 PM" },
    { day: "Saturday", hours: "By Appointment" },
    { day: "Sunday", hours: "Emergency Only" }
  ];

  return (
    <section id="booking" className="py-16 bg-[#FDF8F3]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Let's craft your best smile yet</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                Ready to take the next step towards dental wellness? Reach out through your preferred channel or visit us in person.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-blue-600 font-bold mb-2">
                  <MessageSquare className="w-5 h-5" />
                  Connect With Us
                </div>
                <a href="#" className="flex items-center gap-4 group">
                  <div className="p-3 bg-green-100 text-green-600 rounded-2xl group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase">WhatsApp</div>
                    <div className="text-gray-900 font-bold">+1 979-693-5130</div>
                  </div>
                </a>
                <a href="mailto:hello@texasavenuedental.co" className="flex items-center gap-4 group">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase">Email Us</div>
                    <div className="text-gray-900 font-bold">hello@texasavenuedental.co</div>
                  </div>
                </a>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-blue-600 font-bold mb-2">
                  <Clock className="w-5 h-5" />
                  Office Hours
                </div>
                <div className="space-y-2">
                  {officeHours.map((row, i) => (
                    <div key={i} className="flex justify-between text-sm group">
                      <span className="text-gray-500 font-medium">{row.day}</span>
                      <span className="text-gray-900 font-bold">{row.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-xl border border-blue-100/50"
          >
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="w-6 h-6 text-blue-500" />
              <h3 className="text-2xl font-bold text-gray-900">Visit Our Practice</h3>
            </div>
            {/* Simple Address/Map Placeholder */}
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                <p className="font-bold text-gray-900 italic">Smile HQ</p>
                <p className="text-gray-600">123 Smile Street</p>
                <p className="text-gray-600">Cape Town, 7441</p>
              </div>
              <div className="relative aspect-video rounded-3xl overflow-hidden bg-gray-200">
                 <img src="https://files.idyllic.app/files/static/2348961?width=1080&optimizer=image" alt="Map View" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-4 bg-white rounded-2xl shadow-xl flex items-center gap-3">
                       <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-white" />
                       </div>
                       <span className="font-bold text-gray-900">Texas.Ave Dental</span>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <footer className="mt-24 pt-12 border-t border-gray-100 text-center">
        <div className="flex justify-center items-center gap-3 mb-4">
           <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm flex items-center justify-center bg-white">
            <img 
              src="https://img.freepik.com/premium-vector/dental-logo-template_1948-3818.jpg" 
              alt="Texas.Ave Dental logo" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
           </div>
           <span className="text-xl font-bold tracking-tighter text-gray-900">Texas.Ave Dental</span>
        </div>
        <p className="text-xs text-gray-400">© 2024 Texas.Ave Dental Dental Care. All rights reserved.</p>
      </footer>
    </section>
  );
}
