'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('intro');
  const [audience, setAudience] = useState('anyone');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollY = window.scrollY;

      sections.forEach(section => {
        const offsetTop = section.offsetTop - 100;
        const offsetBottom = offsetTop + section.offsetHeight;

        if (scrollY >= offsetTop && scrollY < offsetBottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = sectionId === 'intro' ? 0 : element.offsetTop;
      window.scrollTo({ top: offset, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const audiences = {
    anyone: {
      title: 'For Anyone',
      description: (
        <span>
          I&apos;m a <TypewriterText /> solving real-world challenges by creating impactful and practical digital solutions that make a difference in people&apos;s lives, currently diving into AI for innovation.
        </span>
      ),
      skills: []
    },
    recruiters: {
      title: 'Recruiters',
      description: (
        <span>
          Data Engineer with 4+ years of professional experience. My expertise includes <TypewriterText />
        </span>
      ),
      skills: [
        <a key="resume" href="/SaiPavanKatineedi_Resume.pdf" download className="hover:text-[#fefeff] transition-colors">
          Download Resume
        </a>
      ]
    },
    engineers: {
      title: 'Engineers',
      description: (
        <span>
          A problem-solver at heart, passionate about innovation and collaboration. Explore my real-time projects on my&nbsp;
          <a href="https://github.com/Saipavank63" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#969696]" style={{display: 'inline-flex', alignItems: 'center'}}>
            GitHub ↗
          </a>
        </span>
      ),
      skills: [
        <a key="resume" href="/SaiPavanKatineedi_Resume.pdf" download className="hover:text-[#fefeff] transition-colors">
          Download Resume
        </a>
      ]
    },
    'product-managers': {
      title: 'Product Managers',
      description: 'I bring technical expertise to product development, bridging the gap between business objectives and technical execution.',
      skills: [
        <a key="resume" href="/SaiPavanKatineedi_Resume.pdf" download className="hover:text-[#fefeff] transition-colors">
          Download Resume
        </a>
      ]
    }
  };

  const navItems = [
    { id: 'intro', title: 'Intro' },
    { id: 'work', title: 'Work' },
    { id: 'tech', title: 'Tech' },
    { id: 'background', title: 'Background' },
    { id: 'achievements', title: 'Awards' },
    { id: 'blogs', title: 'Blogs' },
    { id: 'about', title: 'About' },
    { id: 'contact', title: 'Contact' }
  ];

  if (isLoading) {
    return (
      <div className="text-[#fefeff] flex flex-col min-h-screen relative">
        {/* Parallax Background */}
        <div className="parallax-bg"></div>

        <div className="bg"></div>
        <div className="star-field">
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
        </div>

        {/* Geometric Shapes */}
        <div className="geometric-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>

        {/* Floating Particles */}
        <div className="floating-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        <motion.div
          className="h-screen w-screen flex items-center justify-center relative z-10"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          aria-live="polite"
          aria-busy={true}
        >
          <div className="relative w-full max-w-5xl px-6">
            <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
              <div className="h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.05)_45%,transparent_70%)] blur-2xl"></div>
            </div>
            <motion.h1
              className="text-[9vw] sm:text-[8vw] md:text-[7vw] lg:text-[6.2vw] font-medium leading-none text-center select-none whitespace-nowrap text-[#fefeff]"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.04,
                    delayChildren: 0.15
                  }
                }
              }}
            >
              {Array.from('Sai Pavan Katineedi').map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 420, damping: 30 } }
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              className="mt-4 text-center text-sm md:text-base text-[#9b9b9b]"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9 }}
            >
              Building scalable data platforms and real-time analytics.
            </motion.p>
            <div className="mx-auto mt-8 w-full max-w-md">
              <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-white/70"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                ></motion.div>
              </div>
              <div className="mt-2 flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest text-[#6f6f6f]">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Loading
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Portfolio
                </motion.span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="text-[#fefeff] flex flex-col min-h-screen relative">
      <div className="bg"></div>
      <div className="star-field">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
      </div>

      {/* Logo */}
      <motion.div
        className="absolute lg:fixed top-8 left-8 lg:left-8 z-50 cursor-pointer"
        onClick={() => window.location.reload()}
      >
        <div className="relative text-3xl font-medium flex">
          <span>S</span>
        </div>
      </motion.div>

      {/* Mobile Menu Button */}
      <button
        className="absolute xl:fixed top-8 right-8 z-50 xl:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <div className="space-y-2">
          <span className={`block w-8 h-0.5 bg-[#fefeff] transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`block w-8 h-0.5 bg-[#fefeff] transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-8 h-0.5 bg-[#fefeff] transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </div>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-black z-40 xl:hidden pt-24 px-8"
          >
            {navItems.map(item => (
              <div key={item.id} className="mb-6">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-2xl font-medium transition-colors duration-300 ${
                    activeSection === item.id ? 'text-[#fefeff]' : 'text-[#969696] hover:text-[#fefeff]'
                  }`}
                >
                  {item.title}
                </button>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="p-4 xl:p-8 pt-24 xl:pt-8 bg-black">
        <div className="relative xl:static mb-8">
          <nav className="max-w-screen-xl mx-auto audience-nav">
            <ul className="flex items-center justify-center gap-1 p-1 text-sm">
              {['anyone', 'recruiters', 'engineers', 'product-managers'].map(audienceKey => (
                <li key={audienceKey} className="relative">
                  <button
                    onClick={() => setAudience(audienceKey)}
                    data-active={audience === audienceKey}
                    className={`px-4 py-2 rounded-md transition-all duration-200 ${
                      audience === audienceKey ? 'text-[#fefeff]' : 'text-[#969696] hover:text-[#fefeff]'
                    }`}
                  >
                    {audiences[audienceKey as keyof typeof audiences].title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Desktop Navigation */}
      <nav className="hidden xl:block fixed left-8 top-1/2 -translate-y-1/2 z-40">
        {navItems.map(item => (
          <div key={item.id} className="mb-4 text-left">
            <button
              onClick={() => scrollToSection(item.id)}
              className={`group flex items-center gap-2 text-sm transition-colors duration-300 ${
                activeSection === item.id ? 'text-[#fefeff]' : 'text-[#969696] hover:text-[#fefeff]'
              }`}
            >
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`transition-all duration-300 ${
                  activeSection === item.id ? 'font-medium' : ''
                }`}
              >
                {item.title}
              </motion.span>
            </button>
          </div>
        ))}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Intro Section */}
        <section id="intro" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 xl:px-24 xl:ml-16">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-8">
              <div className="w-full">
                <div className="space-y-6 max-w-2xl mx-auto xl:mx-0 xl:ml-16 text-center lg:text-left mb-8 xl:mb-0">
                  <div className="space-y-2">
                    <h1 className="text-sm text-[#969696] tracking-wider uppercase">Data Engineer</h1>
                    <h2 className="text-3xl sm:text-4xl xl:text-7xl font-medium group relative">
                      Sai Pavan Katineedi
                      <span className="text-[#969696]">.</span>
                    </h2>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                  >
                    <p className="text-[#969696] text-base sm:text-lg">
                      {audiences[audience as keyof typeof audiences].description}
                    </p>
                    {audiences[audience as keyof typeof audiences].skills.length > 0 && (
                      <motion.div
                        className="flex flex-wrap gap-2 sm:gap-4 mt-6 sm:mt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {audiences[audience as keyof typeof audiences].skills.map((skill, index) => (
                          <div key={index} className="bg-white/5 border border-white/10 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm hover:bg-white/10 transition-colors">
                            {skill}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>

                  <div className="pt-6 sm:pt-8 flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                    <a
                      href="https://github.com/Saipavank63"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-black/40 border border-white/10 rounded-lg text-sm text-[#fefeff] font-medium hover:border-white/20 hover:text-[#969696] transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/saipavank"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-black/40 border border-white/10 rounded-lg text-sm text-[#fefeff] font-medium hover:border-white/20 hover:text-[#969696] transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <div className="flex items-center justify-center max-w-xl mx-auto xl:mx-0">
                  <GitHubCard />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="min-h-screen px-4 xl:px-24 xl:ml-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <WorkSection />
          </motion.div>
        </section>

        {/* Tech Section */}
        <section id="tech" className="min-h-screen px-4 xl:px-24 py-32 xl:ml-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <TechSection />
          </motion.div>
        </section>

        {/* Background Section */}
        <section id="background" className="min-h-screen px-4 xl:px-24 py-32 xl:ml-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <BackgroundSection />
          </motion.div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="min-h-screen px-4 xl:px-24 py-32 xl:ml-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AchievementsSection />
          </motion.div>
        </section>

        {/* Blogs Section */}
        <section id="blogs" className="min-h-screen px-4 xl:px-24 py-32 xl:ml-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <BlogsSection />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen px-4 xl:px-24 py-32 xl:ml-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AboutSection />
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen px-4 xl:px-24 py-32 xl:ml-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ContactSection />
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-4 xl:px-24 py-8 text-[#969696] xl:ml-16">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-4">
          <span className="text-sm text-center xl:text-left">© 2025 Sai Pavan Katineedi. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}

// Typewriter Component
function TypewriterText() {
  const [currentText, setCurrentText] = useState(0);
  const texts = ['Developer', 'Next.js', 'React', 'Python', 'Spark', 'Kafka', 'AWS'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block text-blue-400">
      {texts[currentText]}
    </span>
  );
}

// GitHub Card Component
function GitHubCard() {
  const [activeTab, setActiveTab] = useState('pull-requests');

  return (
    <div className="card-container">

      <div className="card">
        <div className="header">
          <div className="top-header">
            <svg className="icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"/>
            </svg>
            <a href="#" className="gh-icon" onClick={(e) => e.preventDefault()}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"/>
              </svg>
            </a>
            <div className="repo">
              <a href="#" onClick={(e) => e.preventDefault()} className="repo-owner">Saipavank63</a>
              <span className="repo-slash">/</span>
              <a href="#" onClick={(e) => e.preventDefault()} className="repo-name">about-me</a>
            </div>
            <div className="space"></div>
            <svg className="icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"/>
            </svg>
            <svg className="icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.8 2.06A1.75 1.75 0 0 1 4.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395c.04.093.06.194.06.295v4.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-4.5c0-.101.02-.202.06-.295Zm1.61.44a.25.25 0 0 0-.23.152L1.887 8H4.75a.75.75 0 0 1 .6.3L6.625 10h2.75l1.275-1.7a.75.75 0 0 1 .6-.3h2.863L11.82 2.652a.25.25 0 0 0-.23-.152Zm10.09 7h-2.875l-1.275 1.7a.75.75 0 0 1-.6.3h-3.5a.75.75 0 0 1-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z"/>
            </svg>
            <div className="pfp"></div>
          </div>

          <div className="btm-header">
            <div className={`tab ${activeTab === 'code' ? 'active' : ''}`}>
              <svg className="tab-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"/>
              </svg>
              <div className="tab-text">Code</div>
            </div>
            <div className={`tab ${activeTab === 'issues' ? 'active' : ''}`}>
              <svg className="tab-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/>
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"/>
              </svg>
              <div className="tab-text">Issues</div>
            </div>
            <div className={`tab ${activeTab === 'pull-requests' ? 'active' : ''}`} onClick={() => setActiveTab('pull-requests')}>
              <svg className="tab-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"/>
              </svg>
              <div className="tab-text">Pull Requests</div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="prs">
            {activeTab === 'pull-requests' && (
              <>
                <PullRequestItem
                  title="[Feature] Designed + shipped features under tight deadlines without breaking a sweat"
                  time="1 minute ago"
                  checked={false}
                />
                <PullRequestItem
                  title="[Chore] Refactored ego out of the codebase — embraced team feedback fully"
                  time="4 minutes ago"
                  checked={false}
                />
                <PullRequestItem
                  title="[UX] Championed the user journey from onboarding to 'wow!' moments"
                  time="6 minutes ago"
                  checked={false}
                />
                <PullRequestItem
                  title="[Experiment] Stepped way outside my comfort zone and loved the chaos"
                  time="10 minutes ago"
                  checked={false}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Pull Request Item Component
function PullRequestItem({ title, time, checked }: { title: string; time: string; checked: boolean }) {
  return (
    <div className="pr">
      <label>
        <input type="checkbox" defaultChecked={checked} />
        <div className="checkbox"></div>
      </label>
      <div className="pr-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"/>
        </svg>
      </div>
      <div className="pr-text">
        <a href="#" onClick={(e) => e.preventDefault()} className="pr-title">{title}</a>
        <div className="pr-desc">#1338 opened {time} by sai</div>
      </div>
    </div>
  );
}

// Section Components
function WorkSection() {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Redinai Project */}
        <div className="bg-black/40 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 group">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">Redinai</h3>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          <p className="text-gray-300 text-sm mb-4">AI-powered platform for intelligent automation and data processing</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">React</span>
            <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Node.js</span>
            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">AI/ML</span>
          </div>
          <div className="text-xs text-gray-500">Featured Project</div>
        </div>

        {/* Apple Clone Webpage */}
        <div className="bg-black/40 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 group">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">Apple Clone</h3>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          <p className="text-gray-300 text-sm mb-4">Pixel-perfect clone of Apple&apos;s website with modern animations</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">React</span>
            <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">Three.js</span>
            <span className="px-2 py-1 bg-pink-500/20 text-pink-400 text-xs rounded-full">GSAP</span>
          </div>
          <div className="text-xs text-gray-500">Web Development</div>
        </div>

        {/* Current Job */}
        <div className="bg-black/40 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 group">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">Data Engineer</h3>
            <span className="text-xs text-gray-500 bg-green-500/20 text-green-400 px-2 py-1 rounded-full">Current</span>
          </div>
          <p className="text-gray-300 text-sm mb-4">Dell Technologies | Aug 2024 – Present</p>
          <ul className="text-gray-400 text-sm space-y-1 mb-4">
            <li>• ETL/ELT pipelines with Airflow, AWS Glue, dbt</li>
            <li>• Real-time streaming with Kafka, Spark, Kinesis</li>
            <li>• Infrastructure automation with Terraform, Docker</li>
          </ul>
          <div className="text-xs text-gray-500">Professional Experience</div>
        </div>

        {/* Previous Job - Cybage */}
        <div className="bg-black/40 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 group">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">Data Engineer</h3>
            <span className="text-xs text-gray-500 bg-gray-500/20 text-gray-400 px-2 py-1 rounded-full">2 Years</span>
          </div>
          <p className="text-gray-300 text-sm mb-4">Cybage Software | Previous Role</p>
          <ul className="text-gray-400 text-sm space-y-1 mb-4">
            <li>• ETL/ELT pipeline development and optimization</li>
            <li>• Big data processing with Spark and Hadoop</li>
            <li>• Data warehouse design and implementation</li>
            <li>• Real-time data streaming solutions</li>
          </ul>
          <div className="text-xs text-gray-500">Professional Experience</div>
        </div>
      </div>
    </div>
  );
}

function TechSection() {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-16 text-center">Tech Stack & Skills</h2>

      {/* Main Tech Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {/* Frontend */}
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8 backdrop-blur-sm hover:scale-105 transition-all duration-300 group">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-center mb-6 text-white">Frontend</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">React</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-blue-400 rounded-full"></div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Next.js</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-blue-400 rounded-full"></div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">TypeScript</span>
              <div className="flex space-x-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-blue-400 rounded-full"></div>
                ))}
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Tailwind CSS</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-blue-400 rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8 backdrop-blur-sm hover:scale-105 transition-all duration-300 group">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-center mb-6 text-white">Backend</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Python</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-green-400 rounded-full"></div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Node.js</span>
              <div className="flex space-x-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-green-400 rounded-full"></div>
                ))}
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">PostgreSQL</span>
              <div className="flex space-x-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-green-400 rounded-full"></div>
                ))}
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">MongoDB</span>
              <div className="flex space-x-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-green-400 rounded-full"></div>
                ))}
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Cloud & DevOps */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm hover:scale-105 transition-all duration-300 group">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-center mb-6 text-white">Cloud & DevOps</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">AWS</span>
              <div className="flex space-x-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-purple-400 rounded-full"></div>
                ))}
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Docker</span>
              <div className="flex space-x-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-purple-400 rounded-full"></div>
                ))}
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Kubernetes</span>
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-purple-400 rounded-full"></div>
                ))}
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-gray-600 rounded-full"></div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Terraform</span>
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-purple-400 rounded-full"></div>
                ))}
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-gray-600 rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Data & AI */}
        <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8 backdrop-blur-sm hover:scale-105 transition-all duration-300 group">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
              </svg>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-center mb-6 text-white">Data & AI</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Apache Spark</span>
              <div className="flex space-x-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-orange-400 rounded-full"></div>
                ))}
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Apache Kafka</span>
              <div className="flex space-x-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-orange-400 rounded-full"></div>
                ))}
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Airflow</span>
              <div className="flex space-x-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-orange-400 rounded-full"></div>
                ))}
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Machine Learning</span>
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-orange-400 rounded-full"></div>
                ))}
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-gray-600 rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Skills */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-8 text-white">Additional Skills</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            'Git', 'Linux', 'CI/CD', 'REST APIs', 'GraphQL', 'Redis', 'Elasticsearch',
            'Jenkins', 'Agile/Scrum', 'System Design', 'Microservices', 'Testing'
          ].map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-gray-300 hover:bg-white/20 hover:text-white transition-all duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function BackgroundSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Background</h2>
      <div className="bg-black/40 border border-white/10 rounded-xl p-8 backdrop-blur-sm">
        <h3 className="text-2xl font-semibold mb-4">MS in Computer Science</h3>
        <p className="text-blue-400 mb-4">Wichita State University | May 2025</p>
        <p className="text-gray-300">GPA: 3.97</p>
        <p className="text-gray-300">Graduate Teaching Assistant – Intro to Data Science</p>
      </div>
    </div>
  );
}

function AchievementsSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Achievements</h2>
      <div className="bg-black/10 border border-white/5 rounded-xl p-8 backdrop-blur-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#fefeff] mb-2">5</div>
            <div className="text-sm text-[#969696]">Awards</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#fefeff] mb-2">3</div>
            <div className="text-sm text-[#969696]">Hackathon Wins</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#fefeff] mb-2">2</div>
            <div className="text-sm text-[#969696]">Academic Honors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#fefeff] mb-2">100%</div>
            <div className="text-sm text-[#969696]">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlogsSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Blogs</h2>
      <div className="space-y-6">
        <div className="bg-black/40 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-2">Building Scalable Data Pipelines</h3>
          <p className="text-gray-300 mb-4">A comprehensive guide to designing and implementing robust data pipelines...</p>
          <a href="#" className="text-blue-400 hover:text-blue-300">Read More →</a>
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">About</h2>
      <div className="bg-black/40 border border-white/10 rounded-xl p-8 backdrop-blur-sm">
        <p className="text-lg text-gray-300 leading-relaxed">
          I&apos;m Sai Pavan Katineedi, a passionate Data Engineer with 4+ years of experience building scalable data platforms
          and real-time analytics solutions. I specialize in modern data stack technologies and cloud-native architectures.
        </p>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Contact</h2>
      <div className="bg-black/40 border border-white/10 rounded-xl p-8 backdrop-blur-sm text-center">
        <p className="text-lg text-gray-300 mb-8">
          Let&apos;s connect and discuss how we can work together on exciting data projects.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:saipavank0801@gmail.com" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
            Email Me
          </a>
          <a href="https://www.linkedin.com/in/saipavank" className="px-6 py-3 border border-gray-600 hover:border-gray-400 rounded-lg transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com/Saipavank63" className="px-6 py-3 border border-gray-600 hover:border-gray-400 rounded-lg transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
