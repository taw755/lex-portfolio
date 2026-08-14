import { ArrowRight, Download, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import TextType from './TextType';

const Hero = () => {
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
          <a
            href="/Calleja-JohnLexer_Resume.pdf"
            download="Calleja-JohnLexer_Resume.pdf"
            className="px-8 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-all shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <Download size={18} />
            Download Resume ↗
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 text-white font-semibold hover:bg-black/40 hover:border-white/30 transition-all shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto sm:mt-0"
          >
            <Mail size={18} />
            Send Me an Email
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
