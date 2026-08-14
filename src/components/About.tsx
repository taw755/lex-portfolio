import profileImage from "../assets/image.png";
import umakLogo from "../assets/umak.png";
import { MapPin, Sparkles } from "lucide-react";
import ProfileCard from "./ProfileCard";

const About = () => {
  const handleScrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="about"
      className="py-16 md:py-20 relative"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#17172B] mb-3">
            About Me
          </h2>
          <div className="w-16 h-1 bg-[#4338CA] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Profile Card - Left */}
          <div className="md:col-span-5 lg:col-span-4 flex justify-center">
            <ProfileCard
              name="John Lexer C. Calleja"
              title="Full Stack Developer · Data Engineering"
              handle="@johnlexercrisostomo"
              status="Online"
              contactText="Contact Me"
              avatarUrl={profileImage}
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={handleScrollToContact}
              behindGlowColor="rgba(125, 190, 255, 0.67)"
              behindGlowEnabled={true}
            />
          </div>

          {/* About Content - Right Code Window Container */}
          <div className="md:col-span-7 lg:col-span-8">
            <div className="bg-white/65 backdrop-blur-md rounded-3xl shadow-xl shadow-indigo-950/5 border border-white/50 relative overflow-hidden flex flex-col">
              {/* Code Window Header Bar */}
              <div className="flex items-center justify-between px-5 sm:px-6 py-3 border-b border-[#E0E0F0]/60 bg-white/40">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/90 border border-[#E0443E]/30"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/90 border border-[#DEA123]/30"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/90 border border-[#1AAB29]/30"></div>
                </div>
                <div className="text-xs font-mono font-semibold text-[#5F6075] tracking-wide flex items-center gap-1.5">
                  <span className="text-[#4338CA]">me.json</span>
                </div>
                <div className="w-12"></div>
              </div>

              {/* Code Window Body */}
              <div className="p-6 sm:p-7 space-y-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2.5">
                    <span className="text-[11px] font-bold text-[#4338CA] tracking-wider uppercase bg-[#4338CA]/10 px-2.5 py-0.5 rounded-full border border-[#4338CA]/15">
                      Biography
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#5F6075] bg-white/70 px-2.5 py-0.5 rounded-full border border-[#E0E0F0]/80">
                      <MapPin size={11} className="text-[#4338CA]" />
                      Taguig City, Metro Manila
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[#4338CA] via-[#6366F1] to-[#9333EA] bg-clip-text text-transparent flex items-center gap-2">
                    <span>One commit at a time</span>
                    <Sparkles size={20} className="text-[#8B5CF6] shrink-0 inline-block animate-pulse" />
                  </h3>
                </div>

                <div className="space-y-3 text-[#4B4B63] leading-relaxed text-xs sm:text-[13.5px]">
                  <p>
                    I am an IT graduate from the <strong className="text-[#17172B] font-semibold">University of Makati</strong> driven by a hunger for growth, with a track record of consistency to back it up — a <strong className="text-[#4338CA] font-semibold">Magna Cum Laude</strong> graduate and <strong className="text-[#17172B] font-semibold">Consistent Dean's Lister</strong> from the <strong className="text-[#17172B] font-semibold">Class of 2026</strong>. As a <strong className="text-[#17172B] font-semibold">Full Stack Developer</strong>, I bring experience in <strong className="text-[#17172B] font-semibold">database design</strong>, <strong className="text-[#17172B] font-semibold">data management</strong>, and <strong className="text-[#17172B] font-semibold">query optimization</strong>, alongside a background in <strong className="text-[#17172B] font-semibold">Network and Information Security</strong>, technical support, and system troubleshooting.
                  </p>

                  <p>
                    My hands-on experience spans full-stack development across four end-to-end projects — from user authentication and payment gateway integration to database structuring and query optimization — giving me the ability to build reliable, data-driven applications from the database layer to the UI. On the full-stack side, I work across the stack with <strong className="text-[#4338CA] font-semibold">Java</strong> as my primary language, alongside <strong className="text-[#4338CA] font-semibold">PHP</strong>, <strong className="text-[#4338CA] font-semibold">JavaScript</strong>, and <strong className="text-[#4338CA] font-semibold">React / Next.js</strong>, backed by <strong className="text-[#4338CA] font-semibold">MySQL</strong> and <strong className="text-[#4338CA] font-semibold">PostgreSQL</strong> for relational data and <strong className="text-[#4338CA] font-semibold">Supabase</strong> for lighter-weight backends — building applications that hold up from the database layer to the UI.
                  </p>

                  <p>
                    I'm particularly drawn to <strong className="text-[#4338CA] font-semibold">full stack development</strong> and <strong className="text-[#4338CA] font-semibold">data engineering</strong>, and I'm eager to grow in that direction by learning from experienced seniors while contributing my existing full-stack and database foundation. I'm actively seeking <strong className="text-[#17172B] font-semibold">IT Support</strong>, <strong className="text-[#17172B] font-semibold">IT Entry-Level</strong>, <strong className="text-[#17172B] font-semibold">Full Stack Development</strong>, or <strong className="text-[#17172B] font-semibold">Data Engineering</strong> roles where I can apply what I know, keep building toward data infrastructure and cybersecurity, and grow under mentorship.
                  </p>
                </div>

                {/* Education Card */}
                <div className="pt-3 border-t border-[#E0E0F0]/60">
                  <div className="bg-white/60 rounded-2xl p-3 sm:p-4 border border-white/60 shadow-xs flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/90 p-1.5 border border-[#E0E0F0]/80 shadow-xs flex items-center justify-center shrink-0">
                      <img
                        src={umakLogo}
                        alt="University of Makati logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-[#4338CA] uppercase tracking-wider bg-[#4338CA]/10 px-2 py-0.5 rounded-full border border-[#4338CA]/15">
                          Education
                        </span>
                        <span className="text-xs font-semibold text-[#17172B]">
                          University of Makati
                        </span>
                      </div>
                      <p className="font-bold text-[#17172B] text-sm sm:text-base leading-tight">
                        Bachelor of Science in Information Technology
                      </p>
                      <p className="text-[11px] sm:text-xs text-[#5F6075]">
                        Specialization: <span className="font-medium text-[#4338CA]">Network & Information Security</span> · 2022 — 2026 · <span className="font-bold text-[#17172B]">Magna Cum Laude (GWA: 1.28)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;