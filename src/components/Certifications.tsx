import { certificationsData } from '../data/certifications';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-white/50 backdrop-blur-sm border-y border-white/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-violet mx-auto rounded-full mb-6"></div>
          <p className="text-secondary">
            Professional certifications and credentials demonstrating my commitment to continuous learning.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div 
              key={cert.id} 
              className="bg-white/80 backdrop-blur-sm border border-white/40 rounded-2xl p-6 hover:shadow-md transition-shadow flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-deepPurple mb-5">
                <Award size={24} />
              </div>
              
              <h3 className="text-lg font-bold text-primary mb-2 leading-tight">
                {cert.title}
              </h3>
              
              <p className="text-deepPurple font-medium text-sm mb-4">
                {cert.issuer}
              </p>
              
              <div className="mt-auto pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-secondary font-medium">{cert.date}</span>
                  {cert.credentialId && (
                    <span className="text-secondary text-xs bg-white px-2 py-1 rounded">
                      ID: {cert.credentialId}
                    </span>
                  )}
                </div>
                
                {cert.link && cert.link !== '#' && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center gap-2 text-sm font-medium text-deepPurple hover:text-violet transition-colors"
                  >
                    View Credential <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
