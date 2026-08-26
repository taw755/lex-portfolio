import { certificationsData } from '../data/certifications';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#17172B] mb-4">
            Certifications & Credentials
          </h2>
          <div className="w-20 h-1 bg-[#4338CA] mx-auto rounded-full mb-6"></div>
          <p className="text-[#4B4B63] text-base md:text-lg">
            Industry-recognized certifications validating my expertise in cybersecurity, networking, and emerging technologies.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group relative bg-white/70 backdrop-blur-md rounded-3xl border border-white/60 shadow-lg shadow-indigo-950/5 overflow-hidden flex flex-col hover:shadow-xl hover:shadow-indigo-950/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Badge Image Section */}
              <div className="relative flex items-center justify-center pt-8 pb-4 px-6">
                {/* Subtle background glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#4338CA]/[0.03] to-transparent pointer-events-none"></div>
                
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300 group-hover:scale-105 transform transition-transform">
                  <img
                    src={cert.badgeImage}
                    alt={`${cert.title} badge`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 flex flex-col px-6 pb-6">
                {/* Issuer Badge */}
                <div className="flex items-center gap-1.5 mb-2">
                  <ShieldCheck size={14} className="text-[#4338CA]" />
                  <span className="text-xs font-bold text-[#4338CA] uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#17172B] mb-2 leading-tight group-hover:text-[#4338CA] transition-colors">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#4B4B63] leading-relaxed mb-4 flex-1">
                  {cert.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-[#E0E0F0]/60">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    {cert.date}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#4338CA] group-hover:gap-2 transition-all">
                    View Credential <ExternalLink size={12} />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
