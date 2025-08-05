import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

/**
 * Header Component với thiết kế hiện đại
 * Bao gồm logo, navigation menu và responsive design
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Danh sách menu items với icons đẹp
  const menuItems = [
    { path: '/', label: 'Trang chủ', icon: '🏠', color: '#3498db' },
    { path: '/basic-commands', label: 'Lệnh cơ bản', icon: '⚡', color: '#e74c3c' },
    { path: '/clone', label: 'Clone Repository', icon: '📥', color: '#2ecc71' },
    { path: '/branching', label: 'Branching', icon: '🌿', color: '#f39c12' },
    { path: '/collaboration', label: 'Collaboration', icon: '👥', color: '#9b59b6' },
    { path: '/scenarios', label: 'Scenarios', icon: '🎯', color: '#1abc9c' }
  ];

  // Theo dõi scroll để thay đổi style header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Toggle mobile menu
   */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  /**
   * Đóng mobile menu khi click vào link
   */
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  /**
   * Kiểm tra menu item có active không
   */
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`modern-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-wrapper">
        {/* Logo với animation */}
        <Link to="/" className="brand-logo" onClick={closeMenu}>
          <div className="logo-container">
            <span className="logo-icon">🎓</span>
            <div className="logo-text">
              <span className="brand-name">Git Tutorial</span>
              <span className="brand-subtitle">Learn Git Easily</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-navigation">
          <ul className="nav-menu">
            {menuItems.map((item) => (
              <li key={item.path} className="nav-item">
                <Link 
                  to={item.path} 
                  className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                  style={{'--item-color': item.color}}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-text">{item.label}</span>
                  <div className="nav-indicator"></div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className={`mobile-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
      
      {/* Mobile Navigation Menu */}
      <nav className={`mobile-navigation ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <h3>📚 Git Tutorial Menu</h3>
          <button className="close-btn" onClick={closeMenu}>✕</button>
        </div>
        <ul className="mobile-nav-list">
          {menuItems.map((item) => (
            <li key={item.path} className="mobile-nav-item">
              <Link 
                to={item.path} 
                className={`mobile-nav-link ${isActive(item.path) ? 'active' : ''}`}
                onClick={closeMenu}
                style={{'--item-color': item.color}}
              >
                <span className="mobile-nav-icon">{item.icon}</span>
                <span className="mobile-nav-text">{item.label}</span>
                {isActive(item.path) && <span className="active-indicator">●</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;