import React, { useState, useRef, useEffect } from 'react';
import {
  motion,
  useInView,
  useReducedMotion,
  AnimatePresence,
} from 'framer-motion';
import { ExternalLink, GitBranch, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    number: '01',
    title: 'AI Career Recommender',
    tagline: 'Smart career guidance powered by AI.',
    description:
      'An intelligent system that recommends career paths based on user skills, interests, and market trends using AI.',
    role: 'AI/ML Developer',
    year: '2025',
    tech: ['Python', 'Flask', 'AI', 'ML'],
    cover: 'linear-gradient(150deg, #1a0b2e 0%, #4b1d7a 45%, #8b5cf6 100%)',
    liveUrl: 'https://aicrs-h2j4.onrender.com',
    githubUrl: 'https://github.com/Nitinsen001/AI_Career_Recommender_update.git',
  },
  {
    number: '02',
    title: 'AirAware-system',
    tagline: 'Real-time air quality insights for everyone.',
    description:
      'An air quality monitoring system providing real-time data analysis and public awareness features.',
    role: 'Data Scientist',
    year: '2024',
    tech: ['Python', 'Streamlit', 'EDA', 'Visualization'],
    cover: 'linear-gradient(150deg, #0f172a 0%, #2563eb 45%, #38bdf8 100%)',
    liveUrl: 'https://airawaresmartqualitypredictionsystem.streamlit.app/',
    githubUrl: 'https://github.com/Nitinsen001/AirAware-system.git',
  },
  {
    number: '03',
    title: 'Kaggle Capstone Project',
    tagline: 'Analytics and ML on real datasets.',
    description:
      'A comprehensive data science project demonstrating advanced analytics and machine learning techniques on Kaggle datasets.',
    role: 'Data Science Engineer',
    year: '2024',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Kaggle'],
    cover: 'linear-gradient(150deg, #111827 0%, #374151 45%, #9ca3af 100%)',
    liveUrl: '#',
    githubUrl: 'https://github.com/Nitinsen001/Kaggle_capston_project.git',
  },
  {
    number: '04',
    title: 'JARVIS Interface (JS)',
    tagline: 'A futuristic assistant built with JavaScript.',
    description:
      'A futuristic voice-activated assistant interface built with pure JavaScript, inspired by Iron Man\'s JARVIS.',
    role: 'Frontend Developer',
    year: '2023',
    tech: ['JavaScript', 'HTML', 'CSS', 'Voice UI'],
    cover: 'linear-gradient(150deg, #111827 0%, #1f2937 45%, #f59e0b 100%)',
    liveUrl: '#',
    githubUrl: 'https://github.com/Nitinsen001/JARVIS-INTERFACE-IN-JS.git',
  },
  {
    number: '05',
    title: 'Book Web Scraper',
    tagline: 'Extract book data from the web.',
    description:
      'A Python-based web scraping tool designed to extract book data such as prices, ratings, and reviews from online bookstores.',
    role: 'Python Developer',
    year: '2023',
    tech: ['Python', 'BeautifulSoup', 'Requests', 'Scraping'],
    cover: 'linear-gradient(150deg, #3f2a14 0%, #8b5a2b 45%, #fbbf24 100%)',
    liveUrl: '#',
    githubUrl: 'https://github.com/Nitinsen001/book_web_scrape.git',
  },
  {
    number: '06',
    title: 'Insurance Agent Chatbot',
    tagline: 'Smart customer support for insurance queries.',
    description:
      'An automated chatbot solution for insurance companies to handle customer queries and policy information efficiently.',
    role: 'Chatbot Developer',
    year: '2023',
    tech: ['Python', 'NLP', 'Chatbot', 'Automation'],
    cover: 'linear-gradient(150deg, #052e16 0%, #166534 45%, #4ade80 100%)',
    liveUrl: '#',
    githubUrl: 'https://github.com/Nitinsen001/INSURANCE_AGENT_CHATBOT.git',
  },
  {
    number: '07',
    title: 'Face Attendance System',
    tagline: 'Biometric attendance with facial recognition.',
    description:
      'Analysis and implementation of a biometric attendance system using facial recognition technology.',
    role: 'Computer Vision Engineer',
    year: '2023',
    tech: ['Python', 'OpenCV', 'Face Recognition', 'System Design'],
    cover: 'linear-gradient(150deg, #172554 0%, #1d4ed8 45%, #60a5fa 100%)',
    liveUrl: '#',
    githubUrl: 'https://github.com/Nitinsen001/FACE_ATTENDANCE_SYSTEM-ANALYSIS.git',
  },
  {
    number: '08',
    title: 'Credit Scoring Model',
    tagline: 'Predict creditworthiness with data.',
    description:
      'A predictive model developed to assess creditworthiness and calculate credit scores for loan applicants.',
    role: 'ML Engineer',
    year: '2023',
    tech: ['Python', 'Scikit-learn', 'ML', 'Analytics'],
    cover: 'linear-gradient(150deg, #1f2937 0%, #111827 45%, #f43f5e 100%)',
    liveUrl: '#',
    githubUrl: 'https://github.com/Nitinsen001/CodeAlpha-Credit-Scoring-Model.git',
  },
  {
    number: '09',
    title: 'Student Record System',
    tagline: 'Manage academic records efficiently.',
    description:
      'A digital record management system for educational institutions to track student performance and attendance.',
    role: 'Full-stack Developer',
    year: '2022',
    tech: ['Java', 'Database', 'CRUD', 'UI'],
    cover: 'linear-gradient(150deg, #0f766e 0%, #14b8a6 45%, #99f6e4 100%)',
    liveUrl: '#',
    githubUrl: 'https://github.com/Nitinsen001/student_record_system.git',
  },
  {
    number: '10',
    title: 'E-commerce Platform',
    tagline: 'A polished online shopping experience.',
    description:
      'A full-featured e-commerce website with product listings, shopping cart functionality, and secure checkout.',
    role: 'Frontend Developer',
    year: '2022',
    tech: ['React', 'Node.js', 'Stripe', 'E-commerce'],
    cover: 'linear-gradient(150deg, #431407 0%, #c2410c 45%, #fb923c 100%)',
    liveUrl: 'https://code-alpha-ecommerce-5ayn.vercel.app/',
    githubUrl: 'https://github.com/Nitinsen001/CodeAlpha-ecommerce.git',
  },
  {
    number: '11',
    title: 'Image Recognition System',
    tagline: 'Classify objects in images with accuracy.',
    description:
      'A machine learning system capable of identifying and classifying objects within images with high accuracy.',
    role: 'Computer Vision Engineer',
    year: '2022',
    tech: ['Python', 'CNN', 'ML', 'Image Processing'],
    cover: 'linear-gradient(150deg, #3b0764 0%, #7c3aed 45%, #c084fc 100%)',
    liveUrl: '#',
    githubUrl: 'https://github.com/Nitinsen001/image_recognization_system.git',
  },
  {
    number: '12',
    title: 'Social Media Platform',
    tagline: 'Connect, share, and interact in real time.',
    description:
      'A social networking application enabling user connections, post sharing, and real-time interaction.',
    role: 'Full-stack Developer',
    year: '2022',
    tech: ['React', 'Node.js', 'Realtime', 'UI'],
    cover: 'linear-gradient(150deg, #0f172a 0%, #334155 45%, #e2e8f0 100%)',
    liveUrl: '#',
    githubUrl: 'https://github.com/Nitinsen001/CodeAlpha-social_media_platform.git',
  },
  {
    number: '13',
    title: 'KBC Game',
    tagline: 'An interactive quiz challenge with lifelines.',
    description:
      'An interactive quiz game inspired by Kaun Banega Crorepati, featuring multiple levels and lifelines.',
    role: 'Frontend Developer',
    year: '2021',
    tech: ['JavaScript', 'HTML', 'CSS', 'Game UI'],
    cover: 'linear-gradient(150deg, #450a0a 0%, #b91c1c 45%, #fde68a 100%)',
    liveUrl: '#',
    githubUrl: 'https://github.com/Nitinsen001/KBC-GAME.git',
  },
];

// Left "cover" face: if a live demo exists, show a mini browser frame
// with the actual hosted site loaded inside it (like a live preview).
// Otherwise fall back to the original gradient/typographic cover.
const CoverFace = ({ project }) => {
  const hasLiveDemo = Boolean(project.liveUrl) && project.liveUrl !== '#';

  return (
    <div
      className="relative w-full h-full rounded-l-[1.5rem] overflow-hidden flex flex-col justify-between"
      style={{ background: project.cover }}
    >
      <div
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(115deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 3px)',
        }}
      />

      {hasLiveDemo ? (
        <>
          {/* Mini browser frame showing the actual hosted site */}
          <div className="absolute inset-4 md:inset-6 rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-white">
            <div className="h-6 md:h-7 bg-gray-100 flex items-center gap-1.5 px-3 border-b border-gray-200 shrink-0">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="ml-2 text-[9px] text-gray-400 font-medium truncate">
                {project.liveUrl.replace(/^https?:\/\//, '')}
              </span>
            </div>
            <div className="relative w-full h-[calc(100%-1.5rem)] md:h-[calc(100%-1.75rem)] overflow-hidden bg-white">
              <iframe
                src={project.liveUrl}
                title={project.title}
                className="absolute top-0 left-0 border-0 pointer-events-none select-none"
                style={{
                  width: '400%',
                  height: '400%',
                  transform: 'scale(0.25)',
                  transformOrigin: 'top left',
                }}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          </div>

          {/* Number + title overlay */}
          <div className="absolute top-4 left-4 z-10 font-serif italic text-white/30 text-4xl md:text-5xl leading-none select-none drop-shadow-sm">
            {project.number}
          </div>
          <div className="relative z-10 mt-auto p-5 pt-10 bg-gradient-to-t from-black/70 via-black/25 to-transparent">
            <h3 className="text-white text-xl md:text-2xl font-black tracking-tight leading-[1.05] mb-1 drop-shadow-sm">
              {project.title}
            </h3>
            <p className="text-white/70 text-xs font-medium italic font-serif">{project.tagline}</p>
          </div>
        </>
      ) : (
        <>
          <span className="absolute top-4 left-4 font-serif italic text-white/25 text-5xl md:text-6xl lg:text-7xl leading-none select-none">
            {project.number}
          </span>
          <div className="relative z-10 mt-16 p-8">
            <h3 className="text-white text-3xl font-black tracking-tight leading-[1.05] mb-2 drop-shadow-sm">
              {project.title}
            </h3>
            <p className="text-white/70 text-sm font-medium italic font-serif">{project.tagline}</p>
          </div>
        </>
      )}
    </div>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const prefersReducedMotion = useReducedMotion();

  const [isBookOpen, setIsBookOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isFlipping, setIsFlipping] = useState(false);
  const project = projects[active];

  // Book opening animation on scroll
  useEffect(() => {
    if (isInView && !isBookOpen) {
      const timer = setTimeout(() => {
        setIsBookOpen(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isInView, isBookOpen]);

  const goTo = (i) => {
    if (i === active || isFlipping) return;
    setDirection(i > active ? 1 : -1);
    setIsFlipping(true);
    setActive(i);
    setTimeout(() => setIsFlipping(false), 600);
  };
  const next = () => goTo((active + 1) % projects.length);
  const prev = () => goTo((active - 1 + projects.length) % projects.length);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="bg-white py-24 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative">

        <div data-aos="fade-up" className="text-center mb-16 max-w-xl mx-auto">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-8 shadow-sm bg-white">
            Selected Work
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-4 tracking-tight">
            A few chapters worth opening
          </h2>
          <p className="text-gray-500 text-base md:text-lg font-medium leading-relaxed">
            Flip through the projects below — each one opens to the story behind it.
          </p>
        </div>

        {/* ── The Book ─────────────────────────────────────────────────── */}
        <div className="relative flex justify-center py-6">
          {/*
            Book + side page-tabs now live in a normal flex row instead of the
            tabs being absolutely positioned outside the book. This keeps the
            tabs fully flexible/responsive and stops them from spilling out of
            the section (which was getting clipped by overflow-hidden above).
          */}
          <div className="flex items-stretch gap-3 w-full max-w-6xl">
            <div className="relative flex-1 min-w-0" style={{ perspective: '2000px' }}>

              {/* Book Container with 3D transform */}
              <motion.div
                className="relative"
                style={{
                  transformStyle: 'preserve-3d',
                }}
                animate={{
                  rotateY: isBookOpen ? -5 : 0,
                  rotateX: isBookOpen ? 2 : 0,
                  translateZ: isBookOpen ? 20 : 0,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 50,
                  damping: 18,
                  mass: 1.2,
                  delay: 0.1,
                }}
              >
                {/* Book shadow */}
                <motion.div
                  className="absolute -bottom-8 left-1/2 w-[90%] h-12 bg-black/30 rounded-full blur-2xl"
                  animate={{
                    scaleX: isBookOpen ? 0.9 : 1,
                    opacity: isBookOpen ? 0.4 : 0.6,
                    x: isBookOpen ? '0%' : '-50%',
                  }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  style={{ translateX: '-50%' }}
                />

                {/* Book Body */}
                <div
                  className="relative flex flex-col md:flex-row rounded-[1.6rem] shadow-[0_35px_80px_rgba(0,0,0,0.25)] border border-black/10 min-h-[520px] md:min-h-[560px] bg-white overflow-hidden"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Book Spine - visible on the left */}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#3a0000] to-[#160000] z-30" />

                  {/* Book binding detail */}
                  <div className="absolute left-0 top-0 bottom-0 w-[6px] z-20">
                    <div className="w-full h-full bg-gradient-to-r from-black/30 via-black/10 to-transparent" />
                  </div>

                  {/* LEFT PAGE - Project Cover / Live Preview */}
                  <motion.div
                    className="relative w-full md:w-1/2 min-h-[300px] md:min-h-full z-10"
                    style={{ transformOrigin: 'left center' }}
                    animate={{
                      rotateY: isBookOpen ? -2 : 0,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 60,
                      damping: 20,
                      delay: 0.15,
                    }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={active}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{
                          type: 'spring',
                          stiffness: 100,
                          damping: 20,
                          duration: 0.4,
                        }}
                        className="absolute inset-0"
                      >
                        <CoverFace project={project} />
                      </motion.div>
                    </AnimatePresence>

                    {/* Page number indicator */}
                    <div className="absolute bottom-4 right-4 text-white/20 font-serif text-sm z-20">
                      {String(active + 1).padStart(2, '0')}
                    </div>
                  </motion.div>

                  {/* Center crease / binding shadow */}
                  <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-8 z-20 pointer-events-none">
                    <div className="w-full h-full bg-gradient-to-r from-black/20 via-black/5 to-transparent" />
                  </div>

                  {/* RIGHT PAGE - Project Details */}
                  <motion.div
                    className="relative w-full md:w-1/2 bg-[#faf9f5] min-h-[300px] md:min-h-full z-20 overflow-hidden"
                    style={{ transformOrigin: 'right center' }}
                    animate={{
                      rotateY: isBookOpen ? 2 : 0,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 60,
                      damping: 20,
                      delay: 0.2,
                    }}
                  >
                    <div
                      className="pointer-events-none absolute top-0 right-0 w-16 h-16 z-10"
                      style={{
                        background: 'linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.06) 50%)',
                        clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
                      }}
                    />

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={active}
                        initial={{
                          opacity: 0,
                          x: direction > 0 ? 30 : -30,
                          rotateY: direction > 0 ? 15 : -15,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          rotateY: 0,
                        }}
                        exit={{
                          opacity: 0,
                          x: direction > 0 ? -30 : 30,
                          rotateY: direction > 0 ? -15 : 15,
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 80,
                          damping: 20,
                          duration: 0.5,
                        }}
                        style={{ transformOrigin: 'left center', backfaceVisibility: 'hidden' }}
                        className="h-full w-full p-8 md:p-10 flex flex-col rounded-r-[1.4rem]"
                      >
                        <span className="font-serif italic text-gray-300 text-xl mb-3">
                          {project.number} / {String(projects.length).padStart(2, '0')}
                        </span>
                        <h4 className="text-2xl font-black text-gray-900 tracking-tight mb-1">{project.title}</h4>
                        <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-5">
                          {project.role} · {project.year}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed font-medium mb-6 flex-1">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-7">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="text-xs font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-600 border border-gray-200"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-3 mt-auto">
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 bg-[#ff2a2a] text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-[0_10px_25px_rgba(255,42,42,0.35)] hover:shadow-[0_14px_32px_rgba(255,42,42,0.5)] transition-all duration-300"
                            whileHover={{ scale: 1.04, y: -2 }}
                            whileTap={{ scale: 0.96 }}
                          >
                            Live Demo
                            <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </motion.a>
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="View source on GitHub"
                          >
                            <GitBranch className="w-4 h-4" />
                          </motion.a>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>
                </div>

                {/* Front Cover - Overlay that opens like a real book */}
                <motion.div
                  className="absolute inset-0 rounded-[1.6rem] bg-gradient-to-br from-[#1a0000] via-[#4a0000] to-[#7a0000] shadow-2xl overflow-hidden"
                  style={{
                    transformOrigin: 'left center',
                    backfaceVisibility: 'hidden',
                    zIndex: 20,
                  }}
                  animate={{
                    rotateY: isBookOpen ? -175 : 0,
                    opacity: isBookOpen ? 0.2 : 1,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 40,
                    damping: 16,
                    mass: 1.4,
                    delay: 0.1,
                  }}
                >
                  {/* Cover design */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <div className="absolute inset-5 md:inset-8 border border-white/25 rounded-2xl" />
                    <div className="absolute inset-6 md:inset-9 border border-white/10 rounded-xl" />
                    <div className="absolute top-0 right-10 md:right-16 w-5 h-20 bg-[#ffd23f] shadow-md" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 82%, 50% 100%, 0 82%)' }} />
                    <p className="font-serif italic text-white/60 text-2xl mb-1">a little collection of</p>
                    <h3 className="text-white text-5xl md:text-6xl font-black tracking-tight leading-[1.05] drop-shadow-md">
                      My Projects
                    </h3>
                    <div className="w-16 h-[2px] bg-white/30 mx-auto my-6" />
                    <p className="text-white/50 text-xs uppercase tracking-[0.3em] font-bold">Scroll to open</p>
                  </div>

                  {/* Cover shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-50" />
                </motion.div>

                {/* Page edge details - shows paper thickness */}
                <motion.div
                  className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-r from-[#f1ead8] to-[#d9cfb4] rounded-r-sm"
                  style={{
                    zIndex: 5,
                    transform: 'translateZ(1px)',
                  }}
                  animate={{
                    opacity: isBookOpen ? 0 : 1,
                  }}
                />
              </motion.div>
            </div>

            {/* Page tabs - side navigation, now a normal flex column beside the
                book (not absolutely positioned outside it), so it never
                overflows and shrinks/wraps naturally on any screen size. */}
            <div
              className={`hidden md:flex flex-col gap-2 justify-center shrink-0 transition-all duration-700 ${
                isBookOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6 pointer-events-none'
              }`}
            >
              {projects.map((p, i) => (
                <motion.button
                  key={p.number}
                  onClick={() => goTo(i)}
                  aria-label={`Open ${p.title}`}
                  className={`h-8 rounded-r-md text-xs font-black tracking-wide transition-all duration-300 flex items-center justify-center px-2.5 shadow-md ${
                    i === active
                      ? 'w-14 bg-[#ff2a2a] text-white'
                      : 'w-9 bg-gray-200 text-gray-500 hover:w-11 hover:bg-gray-300'
                  }`}
                  whileHover={{ x: i === active ? 0 : 2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {p.number}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Navigation controls ────────────────────────────────────────── */}
        <motion.div
          className={`flex items-center justify-center gap-6 mt-10 transition-all duration-700 ${
            isBookOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
          }`}
        >
          <motion.button
            onClick={prev}
            aria-label="Previous project"
            className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-all duration-300"
            whileHover={{ scale: 1.08, x: -2 }}
            whileTap={{ scale: 0.92 }}
            disabled={isFlipping}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          <motion.span
            key={active}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif italic text-gray-400 text-sm min-w-[80px] text-center"
          >
            Page {String(active + 1).padStart(2, '0')} of {String(projects.length).padStart(2, '0')}
          </motion.span>
          <motion.button
            onClick={next}
            aria-label="Next project"
            className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-all duration-300"
            whileHover={{ scale: 1.08, x: 2 }}
            whileTap={{ scale: 0.92 }}
            disabled={isFlipping}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;