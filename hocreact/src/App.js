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
 * Sử dụng React Router để điều hướng giữa các trang
 * Layout đã được cập nhật để loại bỏ Sidebar
 */
function App() {
  return (
    <Router>
      <div className="App">
        {/* Header cố định với navigation tích hợp */}
        <Header />
        
        {/* Main content area - full width */}
        <main className="main-content-fullwidth">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basic-commands" element={<BasicCommands />} />
            <Route path="/branching" element={<Branching />} />
            <Route path="/collaboration" element={<Collaboration />} />
            <Route path="/scenarios" element={<Scenarios />} />
            <Route path="/clone" element={<Clone />} />
            {/* 404 Page */}
            <Route path="*" element={
              <div className="not-found">
                <div className="not-found-content">
                  <h1>🔍 404 - Trang không tồn tại</h1>
                  <p>Trang bạn tìm kiếm không tồn tại hoặc đã bị di chuyển.</p>
                  <a href="/" className="back-home-btn">🏠 Về trang chủ</a>
                </div>
              </div>
            } />
          </Routes>
        </main>
        
        {/* Footer đẹp */}
        <footer className="modern-footer">
          <div className="footer-content">
            <p>© 2024 Git Tutorial - Made with ❤️ and React</p>
            <div className="footer-links">
              <span>🚀 Learn • Practice • Master Git</span>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
