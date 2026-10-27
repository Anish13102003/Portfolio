import { useState, useEffect, useRef } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Sun,
  Moon,
  ExternalLink,
  FileText,
  Code,
  Terminal,
  Database,
  Cpu,
  BookOpen,
  Award,
  Send,
  CheckCircle2,
  Download,
  ArrowRight,
  GraduationCap
} from 'lucide-react';
import voiceEmailImg from './assets/projects/voice_email.png';
import trustRelayImg from './assets/projects/trust_relay.png';
import learningJourneyImg from './assets/projects/learning_journey.png';
import studentManagementImg from './assets/projects/student_management.png';
import profileImg from './assets/image.jpeg';

// Custom SVG components for brand icons that were removed in Lucide v1.0.0
const Github = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

function App() {
  // Theme State
  const [theme, setTheme] = useState('dark');
  // Mobile Nav Drawer State
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Active Navigation Link State
  const [activeSection, setActiveSection] = useState('home');
  // Scrolled Navbar Style Toggle
  const [isScrolled, setIsScrolled] = useState(false);

  // Contact Form States
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Toggle Theme
  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Sync Theme with DOM
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light-theme');
    } else {
      root.classList.remove('light-theme');
    }
  }, [theme]);

  // Handle Scroll Events for Sticky Nav & Active Section Tracking
  useEffect(() => {
    const handleScroll = () => {
      // Navbar styling threshold
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current visible section
      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Form Submission Simulator
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ type: '', message: '' });
      }, 5000);
    }, 1500);
  };

  // Portfolio Information Configurations
  const socialLinks = {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'mailto:anishpalani1310@gmail.com',
    phone: 'tel:+916381845045'
  };

  const softSkills = [
    'Communication Skills', 'Teamwork & Collaboration', 'Leadership',
    'Problem Solving', 'Adaptability', 'Quick Learner'
  ];

  const education = [
    {
      degree: 'B.Tech - Information Technology',
      institution: 'College of Engineering, Guindy, Chennai',
      period: '2022 - 2025',
      grade: 'CGPA : 6.51'
    },
    {
      degree: 'Diploma in Mechanical Engineering',
      institution: 'Sri Vignesh Polytechnic College, Trichy',
      period: '2019 - 2022',
      grade: 'Percentage : 93%'
    }
  ];

  const skillsData = [
    {
      category: 'Programming Languages',
      icon: <Terminal size={22} className="skills-category-icon" />,
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Data Structures', level: 80 },
        { name: 'OOP Concepts', level: 85 }
      ]
    },
    {
      category: 'Frontend Development',
      icon: <Code size={22} className="skills-category-icon" />,
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'JavaScript (ES6+)', level: 80 },
        { name: 'HTML5 & CSS3', level: 90 }
      ]
    },
    {
      category: 'Backend & Database',
      icon: <Database size={22} className="skills-category-icon" />,
      skills: [
        { name: 'Core Java & JDBC', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'Python & Flask', level: 75 }
      ]
    },
    {
      category: 'Tools & Platforms',
      icon: <Cpu size={22} className="skills-category-icon" />,
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'VS Code & Eclipse', level: 80 },
        { name: 'Local Storage API', level: 75 }
      ]
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'Voice-Based Email System',
      tech: ['Python', 'Java', 'NLP', 'Email APIs'],
      icon: <Terminal size={24} />,
      image: voiceEmailImg,
      description: 'Developed a voice-activated email system that allows users to compose, send, and manage emails through voice commands. Implemented speech recognition and NLP techniques to interpret and execute user instructions, and integrated with email APIs for seamless, accessible email experiences.',
    },
    {
      id: 2,
      title: 'Trust Relay - Secure Data Transfer System',
      tech: ['Python', 'Java', 'HTML', 'CSS', 'JavaScript', 'IBBET', 'Flask'],
      icon: <Cpu size={24} />,
      image: trustRelayImg,
      description: 'Developed a secure web application for encrypted data transfer. Implemented Identity-Based Broadcast Encryption Transformation (IBBET) to provide advanced cryptographic protection and controlled access. Enhanced data confidentiality through encryption-based file sharing and authentication mechanisms.',
    },
    {
      id: 3,
      title: 'Learning Journey',
      tech: ['React.js', 'CSS', 'Local Storage'],
      icon: <BookOpen size={24} />,
      image: learningJourneyImg,
      description: 'Developed an interactive Java learning platform with a responsive user interface using React.js and CSS, covering concepts from basics to advanced. Implemented Local Storage to save user progress and provide a seamless learning experience across sessions, focusing on reusable components.',
    },
    {
      id: 4,
      title: 'Student Management System',
      tech: ['Java', 'JDBC', 'MySQL'],
      icon: <Database size={24} />,
      image: studentManagementImg,
      description: 'Developed a Java-based Student Management System using JDBC and MySQL. Implemented the DAO design pattern with separate POJO and DAO layers for better code maintainability and scalability. Performed CRUD operations on student records through optimized SQL queries and database connectivity.',
    }
  ];

  const certifications = [
    {
      title: 'Python Internship',
      provider: 'Internship Program',
      link: '#'
    },
    {
      title: 'Java Full Stack',
      provider: 'Development Certification',
      link: '#'
    },
    {
      title: 'IBM Skills Network',
      provider: 'IBM Badges & Training',
      link: '#'
    }
  ];

  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* BACKGROUND FLOATING SHAPES */}
      <div className="hero-background-shapes">
        <div className="bg-shape bg-shape-1"></div>
        <div className="bg-shape bg-shape-2"></div>
      </div>

      {/* HEADER & NAVIGATION */}
      <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : 'not-scrolled'}`}>
        <div className="container navbar-container">
          <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
            ANISH<span>.M</span>
          </a>

          {/* Nav Links List */}
          <nav>
            <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
              <li>
                <a
                  href="#home"
                  className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick('skills'); }}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#certifications"
                  className={`nav-link ${activeSection === 'certifications' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick('certifications'); }}
                >
                  Certifications
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="nav-actions">
            {/* Theme Toggle Button */}
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle Light/Dark Theme"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Icon Toggle */}
            <button
              className="menu-toggle"
              onClick={() => setIsMenuOpen(prev => !prev)}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-greeting">WELCOME TO MY PORTFOLIO</span>
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Anish M</span>
            </h1>
            <h2 className="hero-subtitle">IT Graduate & Software Developer</h2>
            <p className="hero-description">
              Enthusiastic B.Tech Information Technology graduate from College of Engineering, Guindy.
              Strong fundamentals in software engineering, Core Java, and databases. Dedicated to building
              high-quality web projects and resolving real-world problems through clean code.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}>
                View Projects <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>
                Contact Me
              </a>
            </div>
            <div className="hero-socials">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub Profile">
                <Github size={20} />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn Profile">
                <Linkedin size={20} />
              </a>
              <a href={socialLinks.email} className="social-icon" aria-label="Email Me">
                <Mail size={20} />
              </a>
              <a href={socialLinks.phone} className="social-icon" aria-label="Call Me">
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div className="hero-artwork">
            <div className="artwork-wrapper">
              <div className="artwork-inner">
                <img src={profileImg} alt="Anish M. - IT Engineer" className="artwork-avatar-img" />
              </div>
              <div className="orb orb-1"></div>
              <div className="orb orb-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section id="about" className="container">
        <div className="section-header">
          <span className="section-subtitle">BIOGRAPHY</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          {/* Professional Summary */}
          <div className="glass-card about-card">
            <h3 className="about-title">Professional Summary</h3>
            <p className="about-text">
              I am an enthusiastic Information Technology graduate with strong fundamentals in software development,
              Core Java, and relational database systems. Through my academic path and hands-on projects, I have
              acquired rich experience in designing algorithms, managing secure communications, and developing web applications.
            </p>
            <p className="about-text">
              I am a motivated, communicative team player, eager to learn new libraries and frameworks, and contribute
              innovative engineering solutions to fast-paced technical products.
            </p>
            <h3 className="about-title" style={{ marginTop: '32px' }}>Soft Skills</h3>
            <div className="soft-skills-container">
              {softSkills.map((skill, index) => (
                <span key={index} className="soft-skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div className="glass-card timeline-content">
            <h3 className="about-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <GraduationCap className="skills-category-icon" /> Education
            </h3>
            <div className="timeline" style={{ marginTop: '24px' }}>
              {education.map((edu, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-header">
                    <h4 className="timeline-title">{edu.degree}</h4>
                    <span className="timeline-date">{edu.period}</span>
                  </div>
                  <p className="timeline-institution">{edu.institution}</p>
                  <span className="timeline-grade">{edu.grade}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <br></br>

      {/* SKILLS SECTION */}
      <section id="skills" className="container">
        <div className="section-header">
          <span className="section-subtitle">EXPERTISE</span>
          <h2 className="section-title">Technical Skills</h2>
        </div>

        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div className="glass-card skills-category-card" key={index}>
              <div className="skills-category-header">
                {category.icon}
                <h3 className="skills-category-title">{category.category}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, sIdx) => (
                  <div className="skill-item" key={sIdx}>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <div className="skill-bar-fill" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <br></br>

      {/* PROJECTS SECTION */}
      <section id="projects" className="container">
        <div className="section-header">
          <span className="section-subtitle">MY WORK</span>
          <h2 className="section-title">Academic Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="glass-card project-card" key={project.id}>
              {project.image && (
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-image-overlay"></div>
                </div>
              )}
              <div className="project-body">
                <div className="project-meta">
                  <div className="project-icon-box">
                    {project.icon}
                  </div>
                  <span className="tech-badge" style={{ borderColor: 'var(--color-primary)' }}>
                    Academic
                  </span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((t, idx) => (
                    <span className="tech-badge" key={idx}>{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Github size={16} /> Code Source
                  </a>
                  <a href="#" className="project-link" onClick={(e) => { e.preventDefault(); alert(`Demo for ${project.title} will be launched soon!`); }}>
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <br></br>
      {/* CERTIFICATIONS SECTION */}
      <section id="certifications" className="container">
        <div className="section-header">
          <span className="section-subtitle">ACHIEVEMENTS</span>
          <h2 className="section-title">Certifications</h2>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div className="glass-card cert-card" key={index}>
              <div className="cert-icon-wrapper">
                <Award size={26} />
              </div>
              <div className="cert-info">
                <h3 className="cert-title">{cert.title}</h3>
                <span className="cert-provider">{cert.provider}</span>
                <a href={cert.link} className="cert-action-link" onClick={(e) => { e.preventDefault(); alert(`Verification for ${cert.title} is linked in the offline PDF resume.`); }}>
                  View Credential <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <br></br>
      {/* CONTACT SECTION */}
      <section id="contact" className="container">
        <div className="section-header">
          <span className="section-subtitle">GET IN TOUCH</span>
          <h2 className="section-title">Contact Me</h2>
        </div>

        <div className="contact-grid">
          {/* Contact info panel */}
          <div className="contact-info-panel">
            <div className="glass-card contact-info-card">
              <h3 className="about-title">Contact Information</h3>
              <p className="about-text" style={{ margin: 0 }}>
                Feel free to reach out to me! I am open to discussing junior software engineer positions, internship opportunities, or interesting projects.
              </p>

              <div className="contact-info-item">
                <div className="contact-info-icon-box">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="contact-info-label">Email</span>
                  <a href={socialLinks.email} className="contact-info-value">
                    anishpalani1310@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon-box">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="contact-info-label">Phone</span>
                  <a href={socialLinks.phone} className="contact-info-value">
                    +91 6381845045
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon-box">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="contact-info-label">Location</span>
                  <span className="contact-info-value">Chennai,,Bengaluru,Hyderabad - India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form panel */}
          <div className="glass-card contact-form-card">
            <form onSubmit={handleFormSubmit}>
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Anish M"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Your Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Inquiry about Junior Java Dev role"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending Message...'
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>

              {formStatus.message && (
                <div className={`form-status ${formStatus.type === 'success' ? 'success' : ''}`}>
                  {formStatus.type === 'success' && <CheckCircle2 size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />}
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
      <br></br>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-content">
          <a href="#home" className="footer-logo" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
            ANISH<span>.M</span>
          </a>
          <p className="footer-text">
            © {new Date().getFullYear()} Anish M. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
