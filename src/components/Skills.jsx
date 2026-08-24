import React, { useEffect, useRef, useState } from 'react';
import { Code2, Cpu, Database, Layers3, ChevronRight, Award, FolderOpen } from 'lucide-react';

const skillsData = [
  {
    category: 'Programming Languages',
    icon: Code2,
    description: 'Core languages and frameworks used across my ML, backend and web projects.',
    skills: [
      { name: 'Python', project: 'AirAware Smart Air Quality Prediction System, AI Career Recommendation System', cert: 'LinkedIn Learning', desc: 'Primary language, used across Machine Learning, Data Science, Automation and Backend Development.' },
      { name: 'C', project: 'Student Record Management System', cert: 'LinkedIn Learning', desc: 'First programming language, learned in first year engineering; built strong programming fundamentals.' },
      { name: 'C++', project: 'Student Record Management System', cert: 'LinkedIn Learning', desc: 'Learned core OOP concepts alongside C in first year.' },
      { name: 'HTML5', project: 'Portfolio Website, E-commerce Website', cert: 'HTML Certification', desc: 'Semantic markup foundation for portfolio and e-commerce projects.' },
      { name: 'CSS3', project: 'Portfolio Website, E-commerce Website', cert: null, desc: 'Responsive layouts, usually combined with Bootstrap and AI-generated frontend designs.' },
      { name: 'JavaScript', project: 'Portfolio Website, E-commerce Website', cert: null, desc: 'Basic knowledge, used mainly for frontend interactivity.' },
      { name: 'Django', project: 'E-commerce Website, AI Career Recommendation System, Insurance Agent Chatbot, Face Attendance System, Social Media Platform', cert: null, desc: 'Primary backend framework for building full-stack Python web applications.' },
      { name: 'FastAPI', project: 'REST API Projects', cert: null, desc: 'Python backend framework used to build fast, lightweight REST APIs.' },
    ],
  },
  {
    category: 'AI & Data Science',
    icon: Cpu,
    description: 'Machine Learning, data analysis and visualization skills applied across real projects.',
    skills: [
      { name: 'Machine Learning', project: 'AirAware Smart Air Quality Prediction System, AI Career Recommendation System', cert: 'Andrew Ng, GFG, W3Schools', desc: 'Supervised and unsupervised learning concepts, backed by 2 ML certificates.' },
      { name: 'Pandas', project: 'Data Analysis Projects', cert: null, desc: 'Data cleaning, processing and feature engineering.' },
      { name: 'NumPy', project: 'Data Analysis Projects', cert: null, desc: 'Numerical computing for data and model pipelines.' },
      { name: 'Matplotlib', project: 'Data Analysis Dashboard', cert: null, desc: 'Data visualization for exploratory analysis and reporting.' },
      { name: 'Scikit-learn', project: 'AI Career Recommendation System', cert: null, desc: 'Model training and evaluation for classification and regression tasks.' },
      { name: 'Streamlit', project: 'AirAware, Book Web Scraper, KBC Game, Data Analysis Dashboard', cert: null, desc: 'Rapid deployment of interactive ML and data apps.' },
      { name: 'Power BI', project: 'Data Analysis Dashboard', cert: null, desc: 'Business intelligence dashboards for data-driven insights.' },
      { name: 'Facebook Prophet', project: 'AirAware Forecasting', cert: null, desc: 'Time series forecasting for air quality prediction.' },
      { name: 'Data Analytics', project: 'Data Analysis Dashboard, AirAware', cert: null, desc: 'End-to-end EDA, visualization, data cleaning and insight generation.' },
    ],
  },
  {
    category: 'Databases & Tools',
    icon: Database,
    description: 'Development tools and database systems used throughout my project workflow.',
    skills: [
      { name: 'Git', project: 'All Projects', cert: null, desc: 'Version control for tracking and managing project history.' },
      { name: 'GitHub', project: 'All Projects', cert: null, desc: 'Code hosting and collaboration across all projects.' },
      { name: 'VS Code', project: 'All Projects', cert: null, desc: 'Primary code editor for development across all tech stacks.' },
      { name: 'Jupyter Notebook', project: 'Data Analysis Projects', cert: null, desc: 'Interactive environment for data science and model prototyping.' },
      { name: 'SQLite3', project: 'Local Application Projects', cert: null, desc: 'Lightweight embedded database for local application storage.' },
      { name: 'MySQL', project: 'E-commerce Website, Social Media Platform', cert: null, desc: 'Relational database powering production-grade web applications.' },
      { name: 'PL/SQL', project: 'Database Procedure Projects', cert: null, desc: 'Stored procedures and database programming on Oracle systems.' },
    ],
  },
  {
    category: 'Concepts & Development',
    icon: Layers3,
    description: 'Core computer science and engineering concepts applied across projects.',
    skills: [
      { name: 'Object Oriented Programming', project: 'Student Record Management System', cert: null, desc: 'Designing modular, reusable code using classes and objects.' },
      { name: 'Data Structures', project: 'Algorithm Implementation Projects', cert: null, desc: 'Arrays, linked lists and trees for efficient data handling.' },
      { name: 'Algorithms', project: 'Algorithm Implementation Projects', cert: null, desc: 'Sorting, searching and graph algorithms for problem solving.' },
      { name: 'Web Development', project: 'Portfolio Website, E-commerce Website, Social Media Platform', cert: null, desc: 'Full-stack development across frontend and backend layers.' },
      { name: 'REST API Development', project: 'REST API Projects', cert: null, desc: 'Designing and building RESTful services for client-server communication.' },
      { name: 'Responsive Design', project: 'Portfolio Website', cert: null, desc: 'Mobile-first layouts that adapt cleanly across screen sizes.' },
      { name: 'Feature Engineering', project: 'AI Career Recommendation System, AirAware', cert: null, desc: 'Transforming raw data into meaningful inputs for ML models.' },
      { name: 'Exploratory Data Analysis', project: 'Data Analysis Dashboard', cert: null, desc: 'Uncovering patterns and insights through systematic data exploration.' },
      { name: 'File Handling', project: 'Data Processing Tools', cert: null, desc: 'Reading, writing and managing data files programmatically.' },
    ],
  },
];

const SkillRow = ({ skill, index, isVisible }) => {
  return (
    <div className={`skill-row ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${index * 60}ms` }}>
      {/* Left side - Skill Name */}
      <div className="skill-name-col">
        <span className="skill-dot"></span>
        <span className="skill-name-text">{skill.name}</span>
        {skill.cert && (
          <span className="cert-tag">🏆</span>
        )}
      </div>

      {/* Right side - Details */}
      <div className="skill-detail-col">
        <div className="detail-item">
          <FolderOpen size={14} className="detail-icon" />
          <span className="detail-text">{skill.project}</span>
        </div>
        {skill.cert && (
          <div className="detail-item cert-item">
            <Award size={14} className="detail-icon cert-icon" />
            <span className="detail-text cert-text">Certified by: {skill.cert}</span>
          </div>
        )}
        <div className="detail-item desc-item">
          <span className="detail-text desc-text">{skill.desc}</span>
        </div>
      </div>
    </div>
  );
};

const CategoryView = ({ categoryData, index, total }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const Icon = categoryData.icon;

  return (
    <div ref={sectionRef} className={`category-view ${isVisible ? 'visible' : ''}`}>
      {/* Category Header */}
      <div className="category-header">
        <div className="category-icon-wrap">
          <Icon size={24} color="#FFFFFF" strokeWidth={2.4} />
        </div>
        <div className="category-info">
          <h3 className="category-name">{categoryData.category}</h3>
          <p className="category-desc">{categoryData.description}</p>
        </div>
        <span className="category-count">{index + 1}/{total}</span>
      </div>

      {/* Skills Grid - 2 Column Layout */}
      <div className="skills-grid">
        {categoryData.skills.map((skill, idx) => (
          <SkillRow 
            key={idx} 
            skill={skill} 
            index={idx}
            isVisible={isVisible}
          />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('forward');

  const handleNext = () => {
    setDirection('forward');
    setCurrentIndex((prev) => (prev + 1) % skillsData.length);
  };

  const handlePrev = () => {
    setDirection('backward');
    setCurrentIndex((prev) => (prev - 1 + skillsData.length) % skillsData.length);
  };

  const currentCategory = skillsData[currentIndex];

  return (
    <section className="skills-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&family=Inter:wght@400;500;600&display=swap');

        * {
          box-sizing: border-box;
        }

        .skills-section {
          width: 100%;
          min-height: 100vh;
          background: #F8F9FA;
          padding: 50px 24px 70px;
          font-family: 'Inter', sans-serif;
        }

        .skills-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        /* Header */
        .main-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .main-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #C1121F;
          padding: 6px 18px;
          border: 1.5px solid #C1121F;
          border-radius: 999px;
          margin-bottom: 14px;
          background: #FFFFFF;
        }

        .main-title {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(30px, 4vw, 42px);
          line-height: 1.1;
          color: #111111;
          margin: 0 0 6px;
        }

        .main-title span {
          color: #C1121F;
        }

        .main-subtitle {
          font-size: 15px;
          color: #6B6B6B;
          max-width: 480px;
          margin: 0 auto 10px;
        }

        /* Progress */
        .progress-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 30px;
        }

        .progress-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #DDE0E3;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          padding: 0;
        }

        .progress-dot.active {
          background: #C1121F;
          transform: scale(1.25);
          box-shadow: 0 0 20px rgba(193, 18, 31, 0.3);
        }

        .progress-dot.completed {
          background: #C1121F;
        }

        .progress-dot:hover {
          transform: scale(1.15);
        }

        .progress-text {
          text-align: center;
          font-size: 13px;
          font-weight: 500;
          color: #999;
          margin-bottom: 28px;
        }

        /* Category View */
        .category-view {
          background: #FFFFFF;
          border-radius: 24px;
          padding: 28px 32px 32px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.04);
          border: 1px solid #EDEDED;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .category-view.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 16px;
          padding-bottom: 20px;
          border-bottom: 2px solid #F0F0F0;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .category-icon-wrap {
          width: 44px;
          height: 44px;
          min-width: 44px;
          background: #C1121F;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(193, 18, 31, 0.2);
        }

        .category-info {
          flex: 1;
          min-width: 150px;
        }

        .category-name {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 20px;
          color: #111111;
          margin: 0 0 2px;
        }

        .category-desc {
          font-size: 13.5px;
          color: #6B6B6B;
          margin: 0;
          line-height: 1.5;
        }

        .category-count {
          font-size: 13px;
          font-weight: 600;
          color: #AAA;
          background: #F5F5F5;
          padding: 4px 14px;
          border-radius: 999px;
        }

        /* Skills Grid - 2 Columns */
        .skills-grid {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .skill-row {
          display: grid;
          grid-template-columns: 253px 1fr;
          gap: 50px;
          padding: 12px 16px;
          border-radius: 12px;
          background: #FAFAFA;
          border: 1px solid #F0F0F0;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          opacity: 0;
          transform: translateX(-10px);
        }

        .skill-row.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .skill-row:hover {
          background: #FFFFFF;
          border-color: #C1121F;
          box-shadow: 0 4px 16px rgba(193, 18, 31, 0.06);
          transform: translateX(4px);
        }

        /* Left Column - Skill Name */
        .skill-name-col {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-right: 12px;
          border-right: 2px solid #E8E8E8;
        }

        .skill-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #C1121F;
          display: inline-block;
          flex-shrink: 0;
        }

        .skill-name-text {
          font-weight: 600;
          font-size: 15px;
          color: #111111;
          white-space: nowrap;
        }

        .cert-tag {
          font-size: 13px;
          flex-shrink: 0;
        }

        /* Right Column - Details */
        .skill-detail-col {
          display: flex;
          flex-direction: column;
          gap: 3px;
          justify-content: center;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .detail-icon {
          color: #888;
          flex-shrink: 0;
        }

        .cert-icon {
          color: #C1121F;
        }

        .detail-text {
          font-size: 13px;
          color: #555;
          line-height: 1.4;
        }

        .cert-text {
          color: #C1121F;
          font-weight: 500;
        }

        .desc-text {
          color: #888;
          font-size: 12.5px;
        }

        .desc-item {
          margin-top: 2px;
          padding-top: 2px;
          border-top: 1px dashed #EFEFEF;
        }

        /* Navigation Buttons */
        .nav-wrapper {
          display: flex;
          justify-content: center;
          gap: 14px;
          margin-top: 32px;
        }

        .nav-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          border: none;
          border-radius: 999px;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-btn.prev {
          background: #F0F0F0;
          color: #555;
        }

        .nav-btn.prev:hover {
          background: #E0E0E0;
          transform: translateX(-2px);
        }

        .nav-btn.next {
          background: #C1121F;
          color: #FFFFFF;
          box-shadow: 0 4px 20px rgba(193, 18, 31, 0.25);
        }

        .nav-btn.next:hover {
          background: #A00E1A;
          transform: translateX(2px);
          box-shadow: 0 8px 28px rgba(193, 18, 31, 0.3);
        }

        .nav-btn:active {
          transform: scale(0.96);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .skill-row {
            grid-template-columns: 1fr;
            gap: 8px;
            padding: 14px 16px;
          }

          .skill-name-col {
            border-right: none;
            border-bottom: 1px solid #E8E8E8;
            padding-right: 0;
            padding-bottom: 6px;
          }

          .category-view {
            padding: 20px 18px 24px;
          }

          .category-header {
            flex-wrap: wrap;
          }

          .category-count {
            margin-left: auto;
          }
        }

        @media (max-width: 480px) {
          .skills-section {
            padding: 30px 12px 50px;
          }

          .category-view {
            padding: 16px 12px 20px;
            border-radius: 16px;
          }

          .category-icon-wrap {
            width: 36px;
            height: 36px;
            min-width: 36px;
          }

          .category-name {
            font-size: 17px;
          }

          .skill-name-text {
            font-size: 14px;
          }

          .detail-text {
            font-size: 12px;
          }

          .nav-btn {
            padding: 10px 20px;
            font-size: 13px;
          }

          .progress-wrapper {
            gap: 10px;
          }

          .progress-dot {
            width: 10px;
            height: 10px;
          }
        }
      `}</style>

      <div className="skills-container">
        {/* Header */}
        <div className="main-header">
          <div className="main-badge">⚡ Technical Stack</div>
          <h2 className="main-title">
            Technologies I <span>work with</span>
          </h2>
          <p className="main-subtitle">
            Left me skill ka naam · Right me uski complete detail
          </p>
        </div>

        {/* Progress Dots */}
        <div className="progress-wrapper">
          {skillsData.map((_, idx) => (
            <button
              key={idx}
              className={`progress-dot ${idx === currentIndex ? 'active' : ''} ${idx < currentIndex ? 'completed' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={skillsData[idx].category}
            />
          ))}
        </div>
        <p className="progress-text">
          {currentIndex + 1} / {skillsData.length} · {currentCategory.category}
        </p>

        {/* Current Category */}
        <CategoryView
          categoryData={currentCategory}
          index={currentIndex}
          total={skillsData.length}
        />

        {/* Navigation */}
        <div className="nav-wrapper">
          <button className="nav-btn prev" onClick={handlePrev}>
            <ChevronRight size={18} style={{ transform: 'rotate(180deg)' }} />
            Previous
          </button>
          <button className="nav-btn next" onClick={handleNext}>
            Next
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;