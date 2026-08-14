import { useState } from 'react';
import { Mail, Send, CheckCircle2, XCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const email = "johnlexercrisostomo@gmail.com";

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const accessKey = import.meta.env.VITE_CONTACT_FORM_KEY;

    if (!accessKey || accessKey === 'your_web3forms_access_key_here') {
      setSubmitStatus('error');
      setErrorMessage('Form configuration is missing. Please set up the Web3Forms access key.');
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
          subject: formData.subject || 'New message from portfolio',
          message: formData.message,
        })
      });

      const result = await response.json();

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
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
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#17172B] mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-[#4338CA] mx-auto rounded-full mb-6"></div>
          <p className="text-[#4B4B63] text-base md:text-lg leading-relaxed">
            Have an opportunity or want to get in touch? I'd love to hear from you.
          </p>
        </div>

        <div className="bg-white/65 backdrop-blur-md rounded-3xl shadow-xl shadow-indigo-950/5 border border-white/50 p-8 md:p-14 text-center overflow-hidden">

          <AnimatePresence mode="wait">
            {!isFormOpen ? (
              <motion.div
                key="default-view"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#4338CA]/10 text-[#4338CA] flex items-center justify-center mb-6">
                  <Mail size={32} />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#17172B] mb-3">
                  Start a Conversation
                </h3>

                <p className="text-sm md:text-base text-[#4B4B63] mb-8 max-w-lg mx-auto leading-relaxed">
                  Feel free to send a direct message or connect through any of my professional channels.
                </p>

                <button
                  onClick={() => setIsFormOpen(true)}
                  className="inline-flex items-center gap-3 bg-[#4338CA] hover:bg-[#3730A3] text-white px-8 py-4 rounded-full font-semibold text-base transition-all shadow-lg shadow-indigo-900/20 hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
                >
                  <Mail size={18} />
                  Send Me a Message
                </button>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-8 border-t border-[#E0E0F0]/60 w-full">
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-2.5 text-[#4B4B63] hover:text-[#4338CA] transition-colors group text-sm font-medium"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#4338CA]/10 flex items-center justify-center text-[#4338CA] group-hover:bg-[#4338CA] group-hover:text-white transition-colors">
                      <Mail size={16} />
                    </div>
                    <span>{email}</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/john-lexer-calleja-b378ba366/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-[#4B4B63] hover:text-[#4338CA] transition-colors group text-sm font-medium"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#4338CA]/10 flex items-center justify-center text-[#4338CA] group-hover:bg-[#4338CA] group-hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </div>
                    <span>linkedin.com/in/john-lexer-calleja</span>
                  </a>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="form-view"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0, transition: { duration: 0.2 } }}
                className="relative text-left"
              >
                <button
                  onClick={() => {
                    setIsFormOpen(false);
                    setSubmitStatus('idle');
                  }}
                  className="absolute -top-2 -right-2 p-2 text-[#5F6075] hover:text-[#17172B] transition-colors bg-white/80 hover:bg-white rounded-full shadow-sm border border-[#E0E0F0]/60 cursor-pointer"
                  aria-label="Close form"
                >
                  <X size={20} />
                </button>

                <h3 className="text-2xl font-bold text-[#17172B] mb-2">Send a Message</h3>
                <p className="text-[#4B4B63] text-sm mb-8">Fill out the form below and I'll get back to you as soon as possible.</p>

                {submitStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50/80 border border-green-200 rounded-2xl p-8 flex flex-col items-center justify-center py-12"
                  >
                    <CheckCircle2 size={48} className="text-green-600 mb-4" />
                    <h4 className="text-xl font-bold text-green-800 mb-2">Message Sent Successfully!</h4>
                    <p className="text-green-700 text-sm mb-6">Thank you for reaching out. I'll get back to you soon.</p>
                    <button
                      onClick={() => setIsFormOpen(false)}
                      className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium transition-colors cursor-pointer text-sm"
                    >
                      Close Form
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">

                    {submitStatus === 'error' && (
                      <div className="bg-red-50/90 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-start gap-3 text-sm">
                        <XCircle size={18} className="shrink-0 mt-0.5" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-[#17172B]">Your Name <span className="text-red-500">*</span></label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-[#E0E0F0] focus:outline-none focus:ring-2 focus:ring-[#4338CA]/30 focus:border-[#4338CA] transition-all bg-white/90 text-sm"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-[#17172B]">Your Email <span className="text-red-500">*</span></label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-[#E0E0F0] focus:outline-none focus:ring-2 focus:ring-[#4338CA]/30 focus:border-[#4338CA] transition-all bg-white/90 text-sm"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-[#17172B]">Subject <span className="text-[#5F6075]/70 font-normal capitalize">(Optional)</span></label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#E0E0F0] focus:outline-none focus:ring-2 focus:ring-[#4338CA]/30 focus:border-[#4338CA] transition-all bg-white/90 text-sm"
                        placeholder="Project Inquiry / Job Opportunity"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-[#17172B]">Your Message <span className="text-red-500">*</span></label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#E0E0F0] focus:outline-none focus:ring-2 focus:ring-[#4338CA]/30 focus:border-[#4338CA] transition-all resize-none bg-white/90 text-sm"
                        placeholder="Hello, I'd like to discuss..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 bg-[#4338CA] hover:bg-[#3730A3] disabled:opacity-70 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-semibold text-base transition-all shadow-md hover:shadow-lg cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};

export default Contact;
