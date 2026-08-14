import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import umakLogo from "../assets/umak.png";
import fcpiLogo from "../assets/fcpilogo.png";

const timelineItems = [
  {
    type: "education",
    category: "Education",
    date: "Aug 2022 – Aug 2026",
    title: "Bachelor of Science in Information Technology",
    organization: "University of Makati",
    location: "Makati City, Metro Manila",
    description: "Information & Network Security Elective Track",
    details: [
      "Magna Cum Laude | GWA: 1.28",
      "Consistent Dean's Lister — 1st Year to 4th Year",
      "Capstone Project: StegaVault — A Secured Multimedia Encryption and Steganography System integrating AES-256-CBC encryption and LSB steganographic watermarking for forensic tracing.",
    ],
    logo: umakLogo,
    icon: <GraduationCap size={22} className="text-[#4338CA]" />,
    filename: "education.json",
  },
  {
    type: "internship",
    category: "Internship Experience",
    date: "February 2026 – April 2026",
    title: "IT Intern / Web Developer Intern",
    organization: "Flag City Properties Inc.",
    location: "BGC, Taguig City, Metro Manila",
    description:
      "Provided comprehensive IT support and contributed to full-stack web development initiatives across departments.",
    details: [
      "Troubleshot technical issues and assisted with system-related concerns.",
      "Performed software setup, system maintenance, and user assistance.",
      "Helped develop and maintain the company website, contributing to front-end and back-end design.",
    ],
    logo: fcpiLogo,
    icon: <Briefcase size={22} className="text-[#4338CA]" />,
    filename: "experience.json",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =========================================
            SECTION HEADER
        ========================================== */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#17172B] mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-[#4338CA] mx-auto rounded-full mb-6"></div>
          <p className="text-[#4B4B63] text-base md:text-lg leading-relaxed">
            My academic journey, key achievements, and professional development experience.
          </p>
        </div>

        {/* =========================================
            LEFT-ALIGNED TIMELINE CONTAINER
        ========================================== */}
        <div className="relative pl-8 sm:pl-16 md:pl-20">

          {/* Continuous Left Vertical Timeline Line */}
          <div
            className="
              absolute
              left-[19px]
              sm:left-[27px]
              md:left-[31px]
              top-6
              bottom-6
              w-0.5
              bg-gradient-to-b
              from-[#4338CA]
              via-[#8B5CF6]/50
              to-[#4338CA]/30
            "
          ></div>

          <div className="space-y-12 sm:space-y-16">
            {timelineItems.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative group flex items-start"
                >

                  {/* =========================================
                      TIMELINE MARKER (Left-positioned organization logo)
                  ========================================== */}
                  <div
                    className="
                      absolute
                      -left-[32px]
                      sm:-left-[48px]
                      md:-left-[52px]
                      top-6
                      w-11
                      h-11
                      sm:w-13
                      sm:h-13
                      -translate-x-1/2
                      z-20
                      flex
                      items-center
                      justify-center
                      bg-white/95
                      backdrop-blur-md
                      border-2
                      border-[#4338CA]
                      rounded-full
                      shadow-md
                      shadow-indigo-950/15
                      p-2
                      group-hover:scale-110
                      group-hover:border-[#8B5CF6]
                      transition-all
                      duration-300
                    "
                  >
                    <img
                      src={item.logo}
                      alt={`${item.organization} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* =========================================
                      CONTENT CARD (All on the Right)
                  ========================================== */}
                  <div className="w-full">
                    <div
                      className="
                        bg-white/65
                        backdrop-blur-md
                        rounded-3xl
                        shadow-xl
                        shadow-indigo-950/5
                        hover:shadow-2xl
                        hover:-translate-y-1
                        transition-all
                        duration-300
                        border
                        border-white/50
                        overflow-hidden
                        flex
                        flex-col
                      "
                    >
                      {/* Code Window Header Bar */}
                      <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-[#E0E0F0]/60 bg-white/40">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-[#FF5F56]/90 border border-[#E0443E]/30"></div>
                          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/90 border border-[#DEA123]/30"></div>
                          <div className="w-3 h-3 rounded-full bg-[#27C93F]/90 border border-[#1AAB29]/30"></div>
                        </div>
                        <div className="text-xs font-mono font-semibold text-[#5F6075] tracking-wide flex items-center gap-1.5">
                          <span className="text-[#4338CA]">{item.filename}</span>
                        </div>
                        <div className="w-12"></div>
                      </div>

                      {/* Card Content Body */}
                      <div className="p-6 sm:p-8 md:p-9">

                        {/* Header: Badges & Date */}
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#4338CA] bg-[#4338CA]/10 px-3 py-1 rounded-full border border-[#4338CA]/15">
                              {item.category}
                            </span>
                            {item.location && (
                              <span className="inline-flex items-center gap-1 text-xs font-medium text-[#5F6075] bg-white/60 px-2.5 py-1 rounded-full border border-[#E0E0F0]/60">
                                <MapPin size={12} className="text-[#8B5CF6]" />
                                {item.location}
                              </span>
                            )}
                          </div>

                          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4338CA] bg-[#4338CA]/10 px-3 py-1 rounded-full border border-[#4338CA]/15">
                            <Calendar size={13} className="text-[#4338CA]" />
                            {item.date}
                          </span>
                        </div>

                        {/* Title & Organization with Category Icon */}
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-[#17172B] mb-1 leading-snug">
                              {item.title}
                            </h3>
                            <p className="text-[#4338CA] font-semibold text-base sm:text-lg">
                              {item.organization}
                            </p>
                          </div>

                          {/* Category Icon */}
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/90 p-2 border border-[#E0E0F0]/80 shadow-xs flex items-center justify-center shrink-0">
                            {item.icon}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-[#4B4B63] text-sm sm:text-base mb-5 font-medium leading-relaxed">
                          {item.description}
                        </p>

                        {/* Detail Bullet Points */}
                        {item.details && item.details.length > 0 && (
                          <div className="pt-4 border-t border-[#E0E0F0]/60">
                            <ul className="space-y-2.5">
                              {item.details.map((detail, idx) => (
                                <li
                                  key={idx}
                                  className="text-[#4B4B63] text-sm sm:text-base flex items-start gap-2.5 leading-relaxed"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#4338CA] mt-2 shrink-0"></span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;