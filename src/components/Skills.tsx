import { skillsCategories } from '../data/skills';
import { ScrollStack, ScrollStackItem } from './ScrollStack';

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-center mb-16 relative z-10 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#17172B] mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-[#4338CA] mx-auto rounded-full mb-6"></div>
          <p className="text-[#4B4B63] text-base md:text-lg leading-relaxed">
            A comprehensive overview of my foundational knowledge and hands-on experience across multiple areas of Information Technology and software engineering.
          </p>
        </div>

        {/* React Bits: ScrollStack component */}
        <ScrollStack className="pb-32">
          {skillsCategories.map((category, index) => (
            <ScrollStackItem key={category.id} index={index}>
              <div
                className="bg-white/65 backdrop-blur-md rounded-3xl shadow-xl shadow-indigo-950/5 hover:shadow-2xl transition-all duration-300 border border-white/50 relative overflow-hidden flex flex-col group"
              >
                {/* Code Window Header Bar */}
                <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-[#E0E0F0]/60 bg-white/40">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]/90 border border-[#E0443E]/30"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/90 border border-[#DEA123]/30"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]/90 border border-[#1AAB29]/30"></div>
                  </div>
                  <div className="text-xs font-mono font-semibold text-[#5F6075] tracking-wide flex items-center gap-1.5">
                    <span className="text-[#4338CA]">skills.json</span>
                  </div>
                  <div className="w-12"></div>
                </div>

                {/* Card Content Body */}
                <div className="p-7 sm:p-9">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 mb-6">
                    {/* Subtle Large Number */}
                    <div className="text-4xl sm:text-5xl md:text-6xl font-black text-[#4338CA]/20 select-none tracking-tight font-mono shrink-0 sm:w-16">
                      {category.id}
                    </div>

                    {/* Title & Description */}
                    <div className="flex-1 mt-0.5">
                      <h3 className="text-lg md:text-xl font-bold text-[#17172B] uppercase tracking-wide mb-2">
                        {category.title}
                      </h3>
                      <p className="text-[#4B4B63] text-sm md:text-base leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 sm:gap-2.5 sm:pl-24">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3.5 py-1.5 bg-white/80 hover:bg-white text-[#4338CA] hover:text-[#3730A3] text-xs md:text-sm font-semibold rounded-full border border-[#4338CA]/15 hover:border-[#4338CA]/40 shadow-2xs hover:shadow-xs hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
};

export default Skills;
