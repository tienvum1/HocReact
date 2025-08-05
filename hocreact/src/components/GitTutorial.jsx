import React, { useState } from 'react';
import './GitTutorial.css';
import GitCommands from './GitCommands/GitCommands';

/**
 * Component chính hiển thị tutorial về Git
 * Bao gồm giới thiệu và các lệnh Git
 */
const GitTutorial = () => {
  // State để quản lý việc hiển thị nội dung
  const [showCommands, setShowCommands] = useState(false);
  const [activeTab, setActiveTab] = useState('intro'); // 'intro', 'commands', 'clone'

  /**
   * Xử lý sự kiện khi người dùng click vào nút "Bắt đầu học"
   */
  const handleStartLearning = () => {
    setShowCommands(true);
    setActiveTab('commands');
    // Scroll xuống phần commands
    setTimeout(() => {
      document.getElementById('git-commands')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 100);
  };

  /**
   * Xử lý chuyển tab
   */
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab !== 'intro' && !showCommands) {
      setShowCommands(true);
    }
  };

  return (
    <div className="git-tutorial">
      {/* Phần giới thiệu */}
      <section className="intro-section">
        <div className="intro-card">
          <div className="intro-icon">📚</div>
          <h2 className="intro-title">
            Tại sao phải học Git?
          </h2>
          <div className="intro-content">
            <p>
              Git là công cụ <strong>bắt buộc</strong> đối với mọi lập trình viên! 
              Nó giúp bạn:
            </p>
            <ul className="benefits-list">
              <li>🔄 Quản lý phiên bản code hiệu quả</li>
              <li>👥 Làm việc nhóm một cách chuyên nghiệp</li>
              <li>🔒 Backup code an toàn trên cloud</li>
              <li>📈 Theo dõi lịch sử thay đổi</li>
              <li>🌟 Tăng giá trị bản thân trong mắt nhà tuyển dụng</li>
            </ul>
            
            {/* Nút bắt đầu học */}
            <button 
              className="start-btn"
              onClick={handleStartLearning}
            >
              🚀 Bắt đầu học ngay!
            </button>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      {showCommands && (
        <div className="tutorial-tabs">
          <button 
            className={`tab-btn ${activeTab === 'commands' ? 'active' : ''}`}
            onClick={() => handleTabChange('commands')}
          >
            📋 Các lệnh Git
          </button>
          <button 
            className={`tab-btn ${activeTab === 'clone' ? 'active' : ''}`}
            onClick={() => handleTabChange('clone')}
          >
            📥 Clone Repository
          </button>
        </div>
      )}

      {/* Phần hiển thị commands (chỉ hiện khi user click) */}
      {showCommands && activeTab === 'commands' && (
        <section id="git-commands" className="commands-section">
          <GitCommands />
        </section>
      )}

      {/* Phần Clone Repository */}
      {showCommands && activeTab === 'clone' && (
        <section id="clone-section" className="clone-section">
          <div className="clone-container">
            <div className="clone-header">
              <h2>📥 Clone Repository từ GitHub</h2>
              <p>Cách tải một dự án từ GitHub về máy tính của bạn</p>
            </div>
            
            <div className="clone-content">
              <div className="clone-card">
                <h3>🔍 Clone là gì?</h3>
                <p>
                  <strong>Clone</strong> là quá trình tạo một bản sao của repository từ GitHub về máy tính của bạn.
                  Đây là cách phổ biến nhất để bắt đầu làm việc với một dự án đã tồn tại trên GitHub.
                </p>
                
                <div className="clone-benefits-container">
                  <h4>Lợi ích của Clone:</h4>
                  <ul className="clone-benefits-list">
                    <li>
                      <span className="benefit-icon">⏱️</span>
                      <span className="benefit-text">Tiết kiệm thời gian khởi tạo dự án</span>
                    </li>
                    <li>
                      <span className="benefit-icon">📂</span>
                      <span className="benefit-text">Tải về toàn bộ lịch sử commit</span>
                    </li>
                    <li>
                      <span className="benefit-icon">🌿</span>
                      <span className="benefit-text">Bao gồm tất cả các nhánh (branches)</span>
                    </li>
                    <li>
                      <span className="benefit-icon">🏷️</span>
                      <span className="benefit-text">Tải về tất cả các tags</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="clone-steps-card">
                <h3>👨‍💻 Cách Clone Repository</h3>
                
                <div className="clone-method">
                  <h4>Phương pháp 1: Sử dụng HTTPS</h4>
                  <ol className="numbered-steps">
                    <li>
                      <strong>Bước 1:</strong> Truy cập vào repository trên GitHub
                      <div className="step-image">
                        <div className="github-ui">
                          <div className="github-header">GitHub Repository</div>
                          <div className="github-content">
                            <div className="code-btn">Code ▼</div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <strong>Bước 2:</strong> Click vào nút "Code" màu xanh và chọn tab HTTPS
                    </li>
                    <li>
                      <strong>Bước 3:</strong> Copy URL hiển thị
                      <div className="code-snippet">
                        <code>https://github.com/username/repository.git</code>
                        <button className="copy-icon">📋</button>
                      </div>
                    </li>
                    <li>
                      <strong>Bước 4:</strong> Mở Terminal trên máy tính
                    </li>
                    <li>
                      <strong>Bước 5:</strong> Di chuyển đến thư mục bạn muốn lưu project
                      <div className="code-snippet">
                        <code>cd /đường/dẫn/đến/thư/mục</code>
                      </div>
                    </li>
                    <li>
                      <strong>Bước 6:</strong> Chạy lệnh git clone với URL đã copy
                      <div className="code-snippet">
                        <code>git clone https://github.com/username/repository.git</code>
                      </div>
                    </li>
                  </ol>
                </div>
                
                <div className="clone-method">
                  <h4>Phương pháp 2: Sử dụng SSH (Bảo mật hơn)</h4>
                  <div className="note-box">
                    <p><strong>Lưu ý:</strong> Phương pháp này yêu cầu bạn đã thiết lập SSH key với GitHub.</p>
                  </div>
                  <ol className="numbered-steps">
                    <li>
                      <strong>Bước 1-2:</strong> Tương tự như trên, nhưng chọn tab SSH
                    </li>
                    <li>
                      <strong>Bước 3:</strong> Copy SSH URL
                      <div className="code-snippet">
                        <code>git@github.com:username/repository.git</code>
                      </div>
                    </li>
                    <li>
                      <strong>Bước 4-6:</strong> Tương tự như trên, nhưng sử dụng SSH URL
                      <div className="code-snippet">
                        <code>git clone git@github.com:username/repository.git</code>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            
            <div className="clone-tips">
              <h3>💡 Mẹo hữu ích</h3>
              <ul className="tips-list">
                <li>
                  <strong>Clone một nhánh cụ thể:</strong>
                  <code>git clone -b tên-nhánh https://github.com/username/repository.git</code>
                </li>
                <li>
                  <strong>Clone với tên thư mục khác:</strong>
                  <code>git clone https://github.com/username/repository.git tên-thư-mục-mới</code>
                </li>
                <li>
                  <strong>Clone nhanh hơn (shallow clone):</strong>
                  <code>git clone --depth=1 https://github.com/username/repository.git</code>
                </li>
              </ul>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default GitTutorial;