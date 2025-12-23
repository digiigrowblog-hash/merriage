// Add these imports at the top with the other Lucide icons
import { Users, Heart, Rose, Crown } from "lucide-react"; // Add Users and Crown
import { motion } from "framer-motion";

// Add this FeatureCard component after the other components (before the closing of the main component)
function FeatureCard({ 
  icon: Icon, 
  title, 
  desc, 
  color 
}: { 
  icon: any; 
  title: string; 
  desc: string; 
  color: string; 
}) {
  return (
    <motion.div 
      whileHover={{ y: -8, scale: 1.02 }}
      className="group bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl hover:border-rose-200/50 transition-all cursor-pointer relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      {/* Icon */}
      <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-transparent via-white/20 to-transparent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all mb-6 shadow-lg">
        <Icon className={`w-10 h-10 text-transparent bg-clip-text bg-gradient-to-r ${color} drop-shadow-lg group-hover:scale-110 transition-all`} />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-rose-600 transition-colors drop-shadow-lg">
          {title}
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-800 transition-colors">
          {desc}
        </p>
      </div>
      
      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}
 export default FeatureCard;