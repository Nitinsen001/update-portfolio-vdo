import React from 'react';
import { motion } from 'framer-motion';

const experienceList = [
  {
    role: 'Python Intern',
    company: 'Infosys Springboard',
    period: 'Feb 2026 – Present',
    location: 'Remote Internship',
    bullets: [
      'Building AirAware, a smart air quality prediction system for 7-day AQI forecasting.',
      'Implemented ML models in Python and automated air quality alerts for predictive monitoring.',
      'Developed an interactive Streamlit dashboard for real-time insights and forecast visualization.',
    ],
  },
  {
    role: 'Web Development Intern',
    company: 'CodeAlpha',
    period: 'Jun 2025 – Jul 2025',
    location: 'Remote Internship',
    bullets: [
      'Delivered frontend and backend features using Django, HTML, CSS, and JavaScript.',
      'Built responsive web interfaces, dynamic pages, and a secure authentication flow.',
      'Learned best practices for full-stack project delivery and production-ready web apps.',
    ],
  },
  {
    role: 'Research Participant',
    company: 'Harvard-Affiliated Innovation Challenge',
    period: 'Jun 2025 – Present',
    location: 'JIT Borawan',
    bullets: [
      'Selected among the Top 20 teams for the final presentation in a high-impact innovation event.',
      'Collaborated on concept-to-demo solutions focused on social and technical feasibility.',
      'Grew research skills through guided mentorship from a Harvard university professor.',
    ],
  },
];

const projectList = [
  {
    title: 'AirAware – Smart AQI Prediction System',
    period: 'Feb 2026',
    description:
      'Forecasted air quality trends with Python and Facebook Prophet, building a Streamlit dashboard for 7-day AQI predictions and alerts.',
  },
  {
    title: 'E-commerce Store (Django Project)',
    period: 'Jun 2025',
    description:
      'Created a full-stack Django marketplace with email verification, search, cart, and PayPal checkout for a seamless shopping experience.',
  },
  {
    title: 'AI-Powered Career Recommender System',
    period: 'Mar 2026',
    description:
      'Built a career recommendation engine using Python, Django, and Scikit-Learn with resume parsing, skill-gap analysis, and admin dataset management.',
  },
  {
    title: 'Student Record Management System',
    period: 'Dec 2024',
    description:
      'Designed a C-based console app to manage academic records using linked lists and file handling for efficient retrieval and storage.',
  },
];

const certifications = [
  'Programming in Python for Beginners – Infosys',
  'Introduction to Machine Learning – DataFlair',
  'Machine Learning in Python Environment – Alison',
  'GFG 160 Days of Problem Solving',
  'C/C++ Essentials Training – LinkedIn Learning',
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-[#0a0a0a] text-white py-32 px-6 md:px-12 overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ff2a2a]/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.35em] text-[#ff6b6b] mb-4 px-4 py-2 bg-[#ff2a2a]/10 rounded-full border border-[#ff2a2a]/20">
            Experience & Projects
          </span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.2] mt-6 mb-6">
            Real internships, research,<br />and build-first projects
          </h2>
          <p className="text-lg text-[#c7c7c7] max-w-3xl mx-auto leading-relaxed">
            From predictive ML systems to Django web applications, these highlights show how I turn concepts into deployed solutions with strong technical foundations.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          {/* Left Column: Experience & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-10"
          >
            {/* Experience Card with Central Timeline */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-8 md:p-10 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
              <div className="mb-8">
                <p className="text-xs uppercase tracking-[0.3em] text-[#ff6b6b] font-bold mb-3">
                  📌 Professional Experience
                </p>
                <h3 className="text-3xl md:text-4xl font-black">Internships & Research</h3>
              </div>

              {/* Timeline Container */}
              <div className="relative">
                {/* Central Thread Line - positioned at dots center */}
                <svg className="absolute left-1/2 top-0 w-1 h-full transform -translate-x-1/2" style={{ zIndex: 5 }} viewBox="0 0 2 1000" preserveAspectRatio="none">
                  <line x1="1" y1="0" x2="1" y2="1000" stroke="#ff2a2a" strokeWidth="3" />
                </svg>

                {/* Timeline Items */}
                <div className="space-y-6 relative z-10">
                  {experienceList.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.12 }}
                      className={`flex gap-6 md:gap-8 ${
                        idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                    >
                      {/* Timeline dot ring on center line */}
                      <div className="hidden md:flex md:w-12 md:justify-center md:relative md:top-6" style={{ zIndex: 20 }}>
                        {/* Ring dot (border only) so thread shows through */}
                        <div className="w-7 h-7 rounded-full border-4 border-[#ff2a2a] bg-[#0a0a0a] shadow-lg shadow-[#ff2a2a]/60 flex items-center justify-center relative">
                          {/* Inner red center */}
                          <div className="w-2.5 h-2.5 bg-[#ff2a2a] rounded-full"></div>
                        </div>
                      </div>

                      {/* Mobile & Desktop Content */}
                      <div className="flex-1 pb-4">
                        {/* Mobile dot - ring style */}
                        <div className="md:hidden flex items-center gap-3 mb-2">
                          <div className="w-5 h-5 rounded-full border-3 border-[#ff2a2a] bg-[#0a0a0a] shadow-md shadow-[#ff2a2a]/50 flex items-center justify-center flex-shrink-0">
                            <div className="w-1.5 h-1.5 bg-[#ff2a2a] rounded-full"></div>
                          </div>
                        </div>

                        <div className="rounded-xl bg-[#0f0f0f] border border-white/5 p-5 md:p-6 hover:border-[#ff2a2a]/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,42,42,0.1)]">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-3">
                            <div className="flex-1">
                              <p className="text-xs uppercase tracking-[0.2em] text-[#f8f8f8]/60 font-bold">
                                {item.role}
                              </p>
                              <h4 className="text-xl md:text-2xl font-bold mt-2 text-[#ffffff]">{item.company}</h4>
                            </div>
                            <div className="text-xs md:text-sm text-[#999] text-right whitespace-nowrap">
                              <p className="font-semibold">{item.period}</p>
                              <p className="opacity-70">{item.location}</p>
                            </div>
                          </div>
                          <ul className="space-y-2 pl-5">
                            {item.bullets.map((bullet, bidx) => (
                              <li key={bidx} className="text-xs md:text-sm text-[#d2d2d2] leading-relaxed list-disc opacity-90 hover:opacity-100 transition-opacity">
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Empty space for alternate layout */}
                      <div className="hidden md:flex md:w-12"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-8 md:p-10 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
              <p className="text-xs uppercase tracking-[0.3em] text-[#ff6b6b] font-bold mb-6">
                🎓 Certifications & Achievements
              </p>
              <div className="grid gap-3 sm:grid-cols-2 auto-rows-max">
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="rounded-lg border border-white/5 bg-[#0f0f0f] p-4 text-xs md:text-sm text-[#d2d2d2] hover:border-[#ff2a2a]/30 transition-all hover:bg-[#1a1a1a]"
                  >
                    ✓ {cert}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Projects */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-5"
          >
            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[#ff6b6b] font-bold mb-3">
                🚀 Projects
              </p>
              <h3 className="text-2xl md:text-3xl font-black">Built & Deployed</h3>
            </div>
            
            {projectList.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:border-[#ff2a2a]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(255,42,42,0.15)]"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h4 className="text-lg md:text-xl font-bold text-white group-hover:text-[#ff2a2a] transition-colors flex-1">
                    {project.title}
                  </h4>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#ff6b6b] font-bold px-3 py-1.5 bg-[#ff2a2a]/10 rounded-full whitespace-nowrap">
                    {project.period}
                  </span>
                </div>
                <p className="text-sm text-[#c7c7c7] leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
