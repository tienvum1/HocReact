import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

/**
 * Trang chủ Git Tutorial - Thiết kế hiện đại với animations và interactive elements
 */
const Home = () => {
  const [currentTip, setCurrentTip] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeFeature, setActiveFeature] = useState(null);
  const heroRef = useRef(null);
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation words
  const words = ['Git', 'Version Control', 'Collaboration', 'DevOps', 'Open Source'];

  // Enhanced Git tips với animations
  const gitTips = [
    {
      icon: '🚀',
      title: 'Git Revolution',
      content: 'Git đã thay đổi cách thế giới phát triển phầm. Từ Linux kernel đến các startup, Git là backbone của mọi dự án hiện đại.',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      icon: '🌍',
      title: 'Global Impact',
      content: 'Hơn 100 triệu developers trên toàn thế giới sử dụng Git hàng ngày. GitHub, GitLab, Bitbucket - tất cả đều dựa trên Git.',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      content: 'Git được thiết kế để xử lý từ dự án nhỏ đến enterprise với hàng triệu files. Performance là ưu tiên hàng đầu.',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      icon: '🔒',
      title: 'Cryptographic Security',
      content: 'Mọi commit trong Git được bảo vệ bằng SHA-1 hash. Không thể thay đổi lịch sử mà không bị phát hiện.',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      icon: '🎯',
      title: 'Branching Master',
      content: 'Git branching là "killer feature". Tạo, merge, delete branches trong milliseconds. Workflow linh hoạt vô hạn.',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    }
  ];

  // Enhanced features với detailed descriptions
  const features = [
    {
      icon: '🎓',
      title: 'Git Fundamentals',
      description: 'Master essential Git commands từ cơ bản đến nâng cao',
      details: 'Repository setup, staging, commits, branches, merging',
      path: '/basic-commands',
      color: '#e74c3c',
      gradient: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
      stats: '25+ commands'
    },
    {
      icon: '📦',
      title: 'Repository Cloning',
      description: 'Học cách clone và setup repositories từ mọi nguồn',
      details: 'HTTPS, SSH, GitHub CLI, authentication, troubleshooting',
      path: '/clone',
      color: '#2ecc71',
      gradient: 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)',
      stats: '5+ methods'
    },
    {
      icon: '🌳',
      title: 'Advanced Branching',
      description: 'Quản lý branches như một pro developer',
      details: 'Feature branches, Git Flow, merge strategies, rebasing',
      path: '/branching',
      color: '#f39c12',
      gradient: 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)',
      stats: '10+ strategies'
    },
    {
      icon: '👥',
      title: 'Team Collaboration',
      description: 'Làm việc nhóm hiệu quả với Git workflows',
      details: 'Pull requests, code review, conflict resolution, CI/CD',
      path: '/collaboration',
      color: '#9b59b6',
      gradient: 'linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)',
      stats: '15+ workflows'
    },
    {
      icon: '🔧',
      title: 'Real-world Scenarios',
      description: 'Giải quyết các tình huống thực tế trong development',
      details: 'Bug fixes, hotfixes, rollbacks, disaster recovery',
      path: '/scenarios',
      color: '#1abc9c',
      gradient: 'linear-gradient(135deg, #1abc9c 0%, #16a085 100%)',
      stats: '20+ scenarios'
    }
  ];

  // Enhanced statistics
  const stats = [
    { 
      number: '100M+', 
      label: 'Active Git Users Worldwide', 
      icon: '👨‍💻',
      description: 'Developers using Git daily'
    },
    { 
      number: '2005', 
      label: 'Year Git Was Born', 
      icon: '🎂',
      description: 'Created by Linus Torvalds'
    },
    { 
      number: '95%+', 
      label: 'Projects Using Git', 
      icon: '📊',
      description: 'Industry standard adoption'
    },
    { 
      number: '∞', 
      label: 'Possibilities with Git', 
      icon: '🚀',
      description: 'Unlimited potential'
    }
  ];

  // Typing animation effect
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 150;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setTypedText(prev => 
          isDeleting 
            ? prev.slice(0, -1)
            : currentWord.slice(0, prev.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentWordIndex, words]);

  // Mouse tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-rotate tips with enhanced timing
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % gitTips.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [gitTips.length]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('.home-container');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div className={`home-container ${isVisible ? 'visible' : ''}`}>
      {/* Floating particles background */}
      <div className="particles-bg">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i} 
            className="particle" 
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 20}s`
            }}
          />
        ))}
      </div>

      {/* Enhanced Hero Section */}
      <section className="hero-section" ref={heroRef}>
        <div className="hero-bg-gradient" 
             style={{
               transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
             }} />
        
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <span className="badge-icon">⭐</span>
                <span>Khóa học Git #1 Việt Nam</span>
              </div>
              
              <h1 className="hero-title">
                Master <span className="title-highlight">{typedText}</span>
                <span className="cursor">|</span>
                <br />
                <span className="title-subtitle">Like a Pro Developer</span>
              </h1>
              
              <p className="hero-description">
                Từ zero đến hero với Git - công cụ không thể thiếu của mọi developer. 
                Học với <strong>real-world projects</strong>, <strong>interactive tutorials</strong> 
                và <strong>industry best practices</strong> từ các chuyên gia hàng đầu.
              </p>
              
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">10,000+</span>
                  <span className="stat-label">Students</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">4.9/5</span>
                  <span className="stat-label">Rating</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Lessons</span>
                </div>
              </div>
              
              <div className="hero-actions">
                <Link to="/basic-commands" className="cta-primary">
                  <span className="cta-icon">🚀</span>
                  <span>Start Learning Now</span>
                  <span className="cta-arrow">→</span>
                </Link>
                <Link to="/scenarios" className="cta-secondary">
                  <span className="cta-icon">🎯</span>
                  <span>Explore Scenarios</span>
                </Link>
              </div>
              
              <div className="hero-social-proof">
                <div className="avatars">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="avatar" style={{zIndex: 5-i}} />
                  ))}
                </div>
                <span className="social-text">
                  Join <strong>10,000+</strong> developers already learning
                </span>
              </div>
            </div>
            
            <div className="hero-visual">
              <div className="code-window">
                <div className="window-header">
                  <div className="window-controls">
                    <span className="control close"></span>
                    <span className="control minimize"></span>
                    <span className="control maximize"></span>
                  </div>
                  <span className="window-title">terminal</span>
                </div>
                <div className="code-content">
                  <div className="code-line">
                    <span className="prompt">$</span>
                    <span className="command">git init my-awesome-project</span>
                  </div>
                  <div className="code-line output">
                    <span>Initialized empty Git repository</span>
                  </div>
                  <div className="code-line">
                    <span className="prompt">$</span>
                    <span className="command">git add .</span>
                  </div>
                  <div className="code-line">
                    <span className="prompt">$</span>
                    <span className="command">git commit -m "🎉 First commit"</span>
                  </div>
                  <div className="code-line output">
                    <span>[main (root-commit) a1b2c3d] 🎉 First commit</span>
                  </div>
                  <div className="code-line">
                    <span className="prompt">$</span>
                    <span className="command typing">git push origin main</span>
                  </div>
                </div>
              </div>
              
              <div className="floating-elements">
                <div className="floating-card git-logo">
                  <span>Git</span>
                </div>
                <div className="floating-card github-logo">
                  <span>GitHub</span>
                </div>
                <div className="floating-card gitlab-logo">
                  <span>GitLab</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tips Section */}
      <section className="tips-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-icon">💡</span>
              Git Knowledge Hub
            </h2>
            <p className="section-subtitle">
              Discover fascinating facts and insights about Git
            </p>
          </div>
          
          <div className="tips-container">
            <div className="tip-card" 
                 style={{background: gitTips[currentTip].gradient}}>
              <div className="tip-content">
                <div className="tip-icon">{gitTips[currentTip].icon}</div>
                <h3 className="tip-title">{gitTips[currentTip].title}</h3>
                <p className="tip-text">{gitTips[currentTip].content}</p>
              </div>
              
              <div className="tip-navigation">
                <div className="tip-indicators">
                  {gitTips.map((_, index) => (
                    <button
                      key={index}
                      className={`tip-indicator ${index === currentTip ? 'active' : ''}`}
                      onClick={() => setCurrentTip(index)}
                      aria-label={`Tip ${index + 1}`}
                    />
                  ))}
                </div>
                
                <div className="tip-controls">
                  <button 
                    className="tip-btn prev"
                    onClick={() => setCurrentTip(prev => 
                      prev === 0 ? gitTips.length - 1 : prev - 1
                    )}
                  >
                    ←
                  </button>
                  <button 
                    className="tip-btn next"
                    onClick={() => setCurrentTip(prev => 
                      (prev + 1) % gitTips.length
                    )}
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-icon">🎓</span>
              Complete Learning Path
            </h2>
            <p className="section-subtitle">
              From beginner to Git master - structured curriculum for every level
            </p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`feature-card ${activeFeature === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
                style={{'--feature-gradient': feature.gradient}}
              >
                <Link to={feature.path} className="feature-link">
                  <div className="feature-header">
                    <div className="feature-icon">{feature.icon}</div>
                    <div className="feature-stats">{feature.stats}</div>
                  </div>
                  
                  <div className="feature-content">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                    <p className="feature-details">{feature.details}</p>
                  </div>
                  
                  <div className="feature-footer">
                    <span className="feature-cta">Explore Course</span>
                    <span className="feature-arrow">→</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-icon">📊</span>
              Git by the Numbers
            </h2>
          </div>
          
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-description">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Git Section - Redesigned */}
      <section className="why-git-section">
        <div className="container">
          <div className="why-git-content">
            <div className="why-git-text">
              <h2 className="section-title">
                <span className="title-icon">🤔</span>
                Why Git is Essential?
              </h2>
              
              <div className="benefits-grid">
                <div className="benefit-card">
                  <div className="benefit-icon">🔄</div>
                  <h4>Version Control</h4>
                  <p>Track every change, never lose code, rollback anytime</p>
                </div>
                
                <div className="benefit-card">
                  <div className="benefit-icon">👥</div>
                  <h4>Team Collaboration</h4>
                  <p>Work seamlessly with teams of any size worldwide</p>
                </div>
                
                <div className="benefit-card">
                  <div className="benefit-icon">🚀</div>
                  <h4>Industry Standard</h4>
                  <p>Required skill for 95% of developer positions</p>
                </div>
                
                <div className="benefit-card">
                  <div className="benefit-icon">🔒</div>
                  <h4>Backup & Security</h4>
                  <p>Distributed architecture ensures code safety</p>
                </div>
              </div>
            </div>
            
            <div className="why-git-visual">
              <div className="git-flow-diagram">
                <div className="flow-step">
                  <div className="step-circle">1</div>
                  <div className="step-content">
                    <h4>Write Code</h4>
                    <p>Develop features</p>
                  </div>
                </div>
                
                <div className="flow-arrow">↓</div>
                
                <div className="flow-step">
                  <div className="step-circle">2</div>
                  <div className="step-content">
                    <h4>Stage Changes</h4>
                    <p>git add .</p>
                  </div>
                </div>
                
                <div className="flow-arrow">↓</div>
                
                <div className="flow-step">
                  <div className="step-circle">3</div>
                  <div className="step-content">
                    <h4>Commit</h4>
                    <p>git commit -m</p>
                  </div>
                </div>
                
                <div className="flow-arrow">↓</div>
                
                <div className="flow-step">
                  <div className="step-circle">4</div>
                  <div className="step-content">
                    <h4>Push</h4>
                    <p>git push</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-badge">
              <span>🎯 Ready to Level Up?</span>
            </div>
            
            <h2 className="cta-title">
              Start Your Git Journey Today
            </h2>
            
            <p className="cta-description">
              Join thousands of developers who've mastered Git with our comprehensive course. 
              From basic commands to advanced workflows - everything you need to become a Git expert.
            </p>
            
            <div className="cta-features">
              <div className="cta-feature">
                <span className="feature-check">✅</span>
                <span>Hands-on Practice</span>
              </div>
              <div className="cta-feature">
                <span className="feature-check">✅</span>
                <span>Real-world Projects</span>
              </div>
              <div className="cta-feature">
                <span className="feature-check">✅</span>
                <span>Expert Support</span>
              </div>
            </div>
            
            <div className="cta-actions">
              <Link to="/basic-commands" className="cta-btn primary">
                <span className="btn-icon">🚀</span>
                <span>Start Learning Git</span>
                <span className="btn-shine"></span>
              </Link>
              
              <Link to="/scenarios" className="cta-btn secondary">
                <span className="btn-icon">🎯</span>
                <span>Explore Scenarios</span>
              </Link>
            </div>
            
            <div className="cta-guarantee">
              <span className="guarantee-icon">🛡️</span>
              <span>100% Free - No Hidden Costs</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;