import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

/**
 * Trang chủ của ứng dụng Git Tutorial
 * Giới thiệu tổng quan về Git và các tính năng của ứng dụng
 */
function Home() {
  // Danh sách các tính năng chính
  const features = [
    {
      icon: '⚡',
      title: 'Lệnh cơ bản',
      description: 'Học các lệnh Git cơ bản như add, commit, push, pull',
      link: '/basic-commands'
    },
    {
      icon: '📥',
      title: 'Clone Repository',
      description: 'Hướng dẫn sao chép repository từ GitHub, GitLab',
      link: '/clone'
    },
    {
      icon: '🌿',
      title: 'Quản lý nhánh',
      description: 'Tạo, chuyển đổi và merge các nhánh trong Git',
      link: '/branching'
    },
    {
      icon: '👥',
      title: 'Làm việc nhóm',
      description: 'Collaboration, conflict resolution, code review',
      link: '/collaboration'
    },
    {
      icon: '🎯',
      title: 'Tình huống thực tế',
      description: 'Các scenario phổ biến và cách xử lý',
      link: '/scenarios'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="git-icon">🚀</span>
            Chào mừng đến với Git Tutorial
          </h1>
          <p className="hero-subtitle">
            Học Git từ cơ bản đến nâng cao với các ví dụ thực tế và tương tác
          </p>
          <div className="hero-buttons">
            <Link to="/basic-commands" className="btn btn-primary">
              Bắt đầu học
            </Link>
            <Link to="/scenarios" className="btn btn-secondary">
              Xem scenarios
            </Link>
          </div>
        </div>
      </section>

      {/* About Git Section */}
      <section className="about-section">
        <div className="container">
          <h2>Git là gì?</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                <strong>Git</strong> là một hệ thống quản lý phiên bản phân tán (Distributed Version Control System) 
                được sử dụng rộng rãi trong phát triển phần mềm.
              </p>
              <ul className="git-benefits">
                <li>📝 Theo dõi thay đổi trong code</li>
                <li>🔄 Quản lý các phiên bản khác nhau</li>
                <li>👥 Hỗ trợ làm việc nhóm hiệu quả</li>
                <li>🔒 Backup và khôi phục dữ liệu</li>
                <li>🌐 Tích hợp với GitHub, GitLab, Bitbucket</li>
              </ul>
            </div>
            <div className="git-workflow">
              <h3>Git Workflow cơ bản:</h3>
              <div className="workflow-steps">
                <div className="step">
                  <span className="step-number">1</span>
                  <span className="step-text">Working Directory</span>
                </div>
                <div className="arrow">↓</div>
                <div className="step">
                  <span className="step-number">2</span>
                  <span className="step-text">Staging Area</span>
                </div>
                <div className="arrow">↓</div>
                <div className="step">
                  <span className="step-number">3</span>
                  <span className="step-text">Repository</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>Nội dung khóa học</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <Link 
                key={index} 
                to={feature.link} 
                className="feature-card"
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <span className="feature-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="quickstart-section">
        <div className="container">
          <h2>Bắt đầu nhanh</h2>
          <div className="quickstart-content">
            <div className="quickstart-steps">
              <div className="quick-step">
                <h4>1. Cài đặt Git</h4>
                <p>Tải và cài đặt Git từ trang chủ</p>
                <code>git --version</code>
              </div>
              <div className="quick-step">
                <h4>2. Cấu hình</h4>
                <p>Thiết lập tên và email</p>
                <code>git config --global user.name "Your Name"</code>
              </div>
              <div className="quick-step">
                <h4>3. Tạo repository</h4>
                <p>Khởi tạo Git repository</p>
                <code>git init</code>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;