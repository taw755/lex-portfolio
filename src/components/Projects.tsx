import { useState } from 'react';
import { projectsData } from '../data/projects';
import { ExternalLink, Sparkles, Calendar, FileCode, ChevronDown, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [activeProjectId, setActiveProjectId] = useState<number>(projectsData[0].id);
  const [showTakeaways, setShowTakeaways] = useState<boolean>(false);

  const currentIndex = projectsData.findIndex(p => p.id === activeProjectId);
  const activeProject = projectsData[currentIndex] || projectsData[0];

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + projectsData.length) % projectsData.length;
    setActiveProjectId(projectsData[prevIndex].id);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % projectsData.length;
    setActiveProjectId(projectsData[nextIndex].id);
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =========================================
            SECTION HEADER
        ========================================== */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#17172B] mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-[#4338CA] mx-auto rounded-full mb-6"></div>
          <p className="text-[#4B4B63] text-base md:text-lg">
            An interactive code workspace showcasing my engineering projects across cybersecurity, full-stack systems, and e-commerce.
          </p>
        </div>

        {/* =========================================
            MAIN IDE WORKSPACE CONTAINER
        ========================================== */}
        <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl shadow-indigo-950/10 border border-white/60 overflow-hidden flex flex-col">

          {/* Top Window Bar with Window Controls & VS Code Style Tabs & Arrow Nav */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between border-b border-[#E0E0F0]/80 bg-white/50">

            {/* Window Controls & Prev/Next Arrows (Left) */}
            <div className="flex items-center justify-between sm:justify-start gap-3 px-4 sm:px-5 py-3 border-b sm:border-b-0 sm:border-r border-[#E0E0F0]/60 shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]/90 border border-[#E0443E]/30"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/90 border border-[#DEA123]/30"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]/90 border border-[#1AAB29]/30"></div>
              </div>

              {/* Prev / Next Arrows */}
              <div className="flex items-center gap-1.5 ml-2">
                <button
                  onClick={handlePrev}
                  type="button"
                  aria-label="Previous project"
                  className="w-8 h-8 rounded-lg bg-white/80 hover:bg-white text-[#17172B] hover:text-[#4338CA] border border-[#E0E0F0] flex items-center justify-center transition-all shadow-2xs hover:shadow-xs active:scale-95 cursor-pointer"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={handleNext}
                  type="button"
                  aria-label="Next project"
                  className="w-8 h-8 rounded-lg bg-white/80 hover:bg-white text-[#17172B] hover:text-[#4338CA] border border-[#E0E0F0] flex items-center justify-center transition-all shadow-2xs hover:shadow-xs active:scale-95 cursor-pointer"
                >
                  <ChevronRight size={16} />
                </button>
                <span className="text-xs font-mono text-[#5F6075] ml-1 sm:hidden font-semibold">
                  {currentIndex + 1}/{projectsData.length}
                </span>
              </div>
            </div>

            {/* File Tabs (Interactive) */}
            <div className="flex items-center overflow-x-auto no-scrollbar py-1 px-2 flex-1">
              {projectsData.map((project) => {
                const isActive = project.id === activeProjectId;

                return (
                  <button
                    key={project.id}
                    onClick={() => setActiveProjectId(project.id)}
                    type="button"
                    className={`
                      relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all whitespace-nowrap cursor-pointer shrink-0 mx-1
                      ${isActive
                        ? 'bg-white text-[#4338CA] shadow-sm border border-[#E0E0F0]/80'
                        : 'text-[#5F6075] hover:text-[#17172B] hover:bg-white/40'
                      }
                    `}
                  >
                    <FileCode size={14} className={isActive ? 'text-[#4338CA]' : 'text-[#8B5CF6]'} />
                    <span>{project.filename}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4338CA]"></span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Quick Status / Total Projects */}
            <div className="hidden lg:flex items-center px-5 py-3 border-l border-[#E0E0F0]/60 shrink-0 text-xs font-mono text-[#5F6075]">
              <span className="text-[#4338CA] font-bold mr-1">{currentIndex + 1} of {projectsData.length}</span>
            </div>
          </div>

          {/* =========================================
              ACTIVE PROJECT SHOWCASE BODY
          ========================================== */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="p-6 sm:p-8 lg:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                {/* Left Column: Project Screenshot Preview & Live Demo Action */}
                <div className="lg:col-span-5 flex flex-col space-y-4">
                  <div className="group relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden border border-white/60 shadow-lg bg-gray-100">
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#17172B]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                    {/* Floating Category Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[11px] font-bold tracking-wider uppercase text-[#4338CA] rounded-full shadow-sm border border-white/60">
                        {activeProject.category}
                      </span>
                    </div>
                  </div>

                  {/* Actions: Live Demo + Mobile Prev/Next helper */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    {activeProject.demoLink && (
                      <a
                        href={activeProject.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 px-5 rounded-2xl bg-[#4338CA] hover:bg-[#3730A3] text-white font-semibold text-xs sm:text-sm transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
                      >
                        <span>Explore Live Application</span>
                        <ExternalLink size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Project Details, Full Description, Tech Stack & Collapsible Takeaways */}
                <div className="lg:col-span-7 flex flex-col">

                  {/* Date Badge & Navigation Buttons on Desktop */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4338CA] bg-[#4338CA]/10 px-3 py-1 rounded-full border border-[#4338CA]/15">
                        <Calendar size={13} className="text-[#4338CA]" />
                        {activeProject.date}
                      </span>
                      <span className="text-xs font-mono text-[#5F6075]">
                        // {activeProject.filename}
                      </span>
                    </div>

                    {/* Compact Arrow Switcher */}
                    <div className="hidden sm:flex items-center gap-1 text-xs font-medium text-[#5F6075]">
                      <button
                        onClick={handlePrev}
                        type="button"
                        className="px-2.5 py-1 rounded-lg bg-white/70 hover:bg-white text-[#17172B] hover:text-[#4338CA] border border-[#E0E0F0] flex items-center gap-1 transition-all cursor-pointer"
                      >
                        <ChevronLeft size={13} /> Prev
                      </button>
                      <button
                        onClick={handleNext}
                        type="button"
                        className="px-2.5 py-1 rounded-lg bg-white/70 hover:bg-white text-[#17172B] hover:text-[#4338CA] border border-[#E0E0F0] flex items-center gap-1 transition-all cursor-pointer"
                      >
                        Next <ChevronRight size={13} />
                      </button>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#17172B] mb-4 leading-snug">
                    {activeProject.title}
                  </h3>

                  {/* Full Description */}
                  <p className="text-[#4B4B63] text-sm sm:text-base leading-relaxed mb-6 font-medium">
                    {activeProject.description}
                  </p>

                  {/* Technologies Pills */}
                  <div className="mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#5F6075] mb-2.5">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/80 text-[#4338CA] text-xs font-semibold rounded-lg border border-[#4338CA]/15 shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* =========================================
                      COLLAPSIBLE KEY TAKEAWAYS BUTTON & DRAWER
                  ========================================== */}
                  <div className="pt-2">
                    <button
                      onClick={() => setShowTakeaways(prev => !prev)}
                      type="button"
                      aria-expanded={showTakeaways}
                      className={`
                        inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer
                        ${showTakeaways
                          ? 'bg-[#4338CA] text-white shadow-md'
                          : 'bg-[#4338CA]/10 text-[#4338CA] hover:bg-[#4338CA]/20 border border-[#4338CA]/20'
                        }
                      `}
                    >
                      <Sparkles size={14} className={showTakeaways ? 'text-white' : 'text-[#8B5CF6]'} />
                      <span>{showTakeaways ? 'Hide Key Takeaways' : 'Show Key Takeaways'}</span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${showTakeaways ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {/* Expandable Content Box */}
                    <AnimatePresence>
                      {showTakeaways && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="p-5 rounded-2xl bg-white/85 border border-[#4338CA]/25 shadow-sm">
                            <div className="flex items-center gap-2 mb-2">
                              <Sparkles size={14} className="text-[#8B5CF6]" />
                              <h4 className="text-xs font-bold text-[#17172B] uppercase tracking-wider">
                                Key Takeaways & Learned Concepts
                              </h4>
                            </div>
                            <p className="text-xs sm:text-sm text-[#4B4B63] leading-relaxed">
                              {activeProject.whatILearned}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* =========================================
              BOTTOM QUICK SWITCHER CAROUSEL / THUMBNAILS
          ========================================== */}
          <div className="border-t border-[#E0E0F0]/80 bg-white/40 p-4 sm:p-6">
            <div className="flex items-center justify-between mb-3 px-1">
              <p className="text-xs font-bold text-[#5F6075] uppercase tracking-wider">
                All Projects in Workspace
              </p>
              <div className="flex items-center gap-1.5 sm:hidden">
                <button
                  onClick={handlePrev}
                  type="button"
                  className="px-2.5 py-1 rounded-lg bg-white/80 text-xs font-semibold text-[#17172B] border border-[#E0E0F0] flex items-center gap-0.5"
                >
                  <ChevronLeft size={13} /> Prev
                </button>
                <button
                  onClick={handleNext}
                  type="button"
                  className="px-2.5 py-1 rounded-lg bg-white/80 text-xs font-semibold text-[#17172B] border border-[#E0E0F0] flex items-center gap-0.5"
                >
                  Next <ChevronRight size={13} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {projectsData.map((project) => {
                const isActive = project.id === activeProjectId;

                return (
                  <button
                    key={project.id}
                    onClick={() => setActiveProjectId(project.id)}
                    type="button"
                    className={`
                      text-left p-3 rounded-2xl transition-all border flex flex-col justify-between cursor-pointer group
                      ${isActive
                        ? 'bg-white shadow-md border-[#4338CA] ring-2 ring-[#4338CA]/20'
                        : 'bg-white/50 border-white/70 hover:bg-white/80 hover:border-[#4338CA]/30'
                      }
                    `}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-mono font-semibold text-[#4338CA] truncate">
                        {project.filename}
                      </span>
                      {isActive && <CheckCircle2 size={13} className="text-[#4338CA] shrink-0 ml-1" />}
                    </div>
                    <p className="text-xs font-bold text-[#17172B] line-clamp-1 group-hover:text-[#4338CA] transition-colors">
                      {project.title.split(':')[0]}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;
