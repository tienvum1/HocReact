import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

/**
 * Sidebar Navigation Component
 * Hiển thị menu điều hướng cho các trang Git tutorial
 */
function Sidebar() {
  const location = useLocation();

  // Danh sách các menu items
  const menuItems = [
    {
      path: '/',
      label: '🏠 Trang chủ',
      description: 'Giới thiệu về Git'
    },
    {
      path: '/basic-commands',
      label: '⚡ Lệnh cơ bản',
      description: 'Các lệnh Git cơ bản'
    },
    {
      path: '/clone',
      label: '📥 Clone Repository',
      description: 'Sao chép repository'
    },
    {
      path: '/branching',
      label: '🌿 Branching',
      description: 'Quản lý nhánh'
    },
    {
      path: '/collaboration',
      label: '👥 Collaboration',
      description: 'Làm việc nhóm'
    },
    {
      path: '/scenarios',
      label: '🎯 Scenarios',
      description: 'Tình huống thực tế'
    }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h3>📚 Git Tutorial</h3>
        <p>Học Git từ cơ bản đến nâng cao</p>
      </div>
      
      <nav className="sidebar-nav">
        <ul className="nav-list">
          {menuItems.map((item) => (
            <li key={item.path} className="nav-item">
              <Link 
                to={item.path} 
                className={`nav-link ${
                  location.pathname === item.path ? 'active' : ''
                }`}
              >
                <div className="nav-content">
                  <span className="nav-label">{item.label}</span>
                  <span className="nav-description">{item.description}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <p>💡 Tip: Thực hành thường xuyên để thành thạo Git!</p>
      </div>
    </aside>
  );
}

export default Sidebar;