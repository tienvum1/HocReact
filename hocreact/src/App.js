import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Layout Components
import Header from './components/Layout/Header';

// Page Components
import Home from './pages/Home/Home';
import BasicCommands from './pages/BasicCommands/BasicCommands';
import Branching from './pages/Branching/Branching';
import Collaboration from './pages/Collaboration/Collaboration';
import Scenarios from './pages/Scenarios/Scenarios';
import Clone from './pages/Clone/Clone';

/**
 * Component chính của ứng dụng Git Tutorial
 * Ứng dụng học Git từ cơ bản đến nâng cao với các tình huống thực tế
 * 
 * Features:
 * - Responsive design cho mọi thiết bị
 * - Navigation hiện đại với React Router
 * - Nội dung chi tiết về Git commands và workflows
 * - Interactive examples và best practices
 */
function App() {
  return (
    <Router>
      <div className="App">
        {/* Header với navigation tích hợp */}
        <Header />
        
        {/* Main content area */}
        <main className="main-content-fullwidth">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basic-commands" element={<BasicCommands />} />
            <Route path="/clone" element={<Clone />} />
            <Route path="/branching" element={<Branching />} />
            <Route path="/collaboration" element={<Collaboration />} />
            <Route path="/scenarios" element={<Scenarios />} />
            
            {/* 404 Page với thiết kế đẹp */}
            <Route path="*" element={
              <div className="not-found">
                <div className="not-found-content">
                  <div className="not-found-icon">🔍</div>
                  <h1>404 - Trang không tồn tại</h1>
                  <p>Trang bạn tìm kiếm không tồn tại hoặc đã bị di chuyển.</p>
                  <div className="not-found-actions">
                    <a href="/" className="back-home-btn">🏠 Về trang chủ</a>
                    <a href="/basic-commands" className="learn-btn">📚 Bắt đầu học</a>
                  </div>
                </div>
              </div>
            } />
          </Routes>
        </main>
        
        {/* Footer hiện đại */}
        <footer className="modern-footer">
          <div className="footer-content">
            <div className="footer-left">
              <h3>🎓 Git Tutorial</h3>
              <p>Học Git từ cơ bản đến nâng cao</p>
            </div>
            <div className="footer-center">
              <p>© 2024 Git Tutorial - Made with ❤️ and React</p>
            </div>
            <div className="footer-right">
              <span className="footer-motto">🚀 Learn • Practice • Master Git</span>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
