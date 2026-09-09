import { useState } from 'react';
import { ArrowRight, Download, Mail, X, CheckCircle2, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TextType from './TextType';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const triggerDownload = () => {
    const link = document.createElement('a');
    link.href = '/Calleja_JohnLexer-Resume.pdf';
    link.download = 'Calleja_JohnLexer-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Auto-close modal after 2 seconds
    setTimeout(() => {
      setIsModalOpen(false);
      setSubmitStatus('idle');
      setFormData({ name: '', email: '' });
    }, 2000);
  };

  const handleDownloadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const accessKey = import.meta.env.VITE_CONTACT_FORM_KEY;

    if (!accessKey || accessKey === 'your_web3forms_access_key_here') {
      // Fallback: allow download even if email fails
      setSubmitStatus('success');
      triggerDownload();
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: '🔔 Resume Download Alert',
          message: `Your resume has been downloaded by ${formData.name} (${formData.email}).`,
        })
      });

      if (response.status === 200) {
        setSubmitStatus('success');
        triggerDownload();
      } else {
        const result = await response.json();
        setSubmitStatus('error');
        setErrorMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Network error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-transparent">

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center h-full mt-8 md:mt-16">

        {/* Main Content Area: Centered Single Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
        </motion.div>

        <motion.h1
          className="font-[800] tracking-tight mb-6 leading-none"
          style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-[#17172B]">Hi, I'm</span>{' '}
          <span className="bg-gradient-to-r from-[#4338CA] via-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
            John Lexer
          </span>
        </motion.h1>

        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-[700] mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-[#25253D]">Full Stack Developer</span> <span className="text-[#5F6075]">&</span> <span className="text-[#3730A3]">Data Engineer</span>
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto text-base sm:text-lg text-[#4B4B63] mb-10 leading-relaxed font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Junior Software Engineer specializing in Java, PHP, and SQL. Experienced in full-stack development and database design, with a foundation in network security and IT support.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-12 w-full flex justify-center"
        >
          <div className="text-lg sm:text-xl font-bold text-[#3730A3] h-[28px]">
            <TextType
              text={["LEX // BUILDING WHAT'S NEXT", "LEX // EXPLORE THINGS", "LEX // TURN IDEAS TO REALITY"]}
              typingSpeed={60}
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter="|"
            />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold hover:bg-white/20 transition-all shadow-lg flex items-center justify-center gap-2 group w-full sm:w-auto"
          >
            Explore My Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-all shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer"
          >
            <Download size={18} />
            Download Resume ↗
          </button>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 text-white font-semibold hover:bg-black/40 hover:border-white/30 transition-all shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto sm:mt-0"
          >
            <Mail size={18} />
            Send Me an Email
          </a>
        </motion.div>
      </div>

      {/* Download Modal overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#17172B]/60 backdrop-blur-sm"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsModalOpen(false);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 p-8 w-full max-w-md relative overflow-hidden text-left"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-[#5F6075] hover:text-[#17172B] transition-colors bg-black/5 hover:bg-black/10 rounded-full cursor-pointer"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <h3 className="text-2xl font-bold text-[#17172B] mb-2">Download Resume</h3>
              <p className="text-[#4B4B63] text-sm mb-6">Please provide your name and email to download.</p>

              {submitStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-2xl p-6 flex flex-col items-center text-center"
                >
                  <CheckCircle2 size={40} className="text-green-600 mb-3" />
                  <h4 className="text-lg font-bold text-green-800 mb-1">Downloading...</h4>
                  <p className="text-green-700 text-sm">Your download will start automatically.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleDownloadSubmit} className="space-y-4">
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-start gap-3 text-sm">
                      <XCircle size={18} className="shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <label htmlFor="download-name" className="text-xs font-bold uppercase tracking-wider text-[#17172B]">Your Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id="download-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#E0E0F0] focus:outline-none focus:ring-2 focus:ring-[#4338CA]/30 focus:border-[#4338CA] transition-all bg-white text-sm"
                      placeholder="Your Name"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="download-email" className="text-xs font-bold uppercase tracking-wider text-[#17172B]">Your Email <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      id="download-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#E0E0F0] focus:outline-none focus:ring-2 focus:ring-[#4338CA]/30 focus:border-[#4338CA] transition-all bg-white text-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-[#4338CA] hover:bg-[#3730A3] disabled:opacity-70 disabled:cursor-not-allowed text-white px-6 py-3.5 rounded-xl font-semibold text-base transition-all shadow-md hover:shadow-lg cursor-pointer mt-6"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <>
                        <Download size={18} />
                        Get Resume
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;

