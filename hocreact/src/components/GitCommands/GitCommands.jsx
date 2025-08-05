import React, { useState } from 'react';
import './GitCommands.css';

/**
 * Component hiển thị các bước thực hiện Git commands
 * Với animation và interactive UI
 */
const GitCommands = () => {
  // State để track bước hiện tại
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);

  // Danh sách các bước Git
  const gitSteps = [
    {
      id: 1,
      title: "Khởi tạo Git Repository",
      command: "git init",
      description: "Tạo một repository Git mới trong thư mục hiện tại",
      icon: "🎯",
      example: "cd my-project && git init"
    },
    {
      id: 2,
      title: "Kiểm tra trạng thái",
      command: "git status",
      description: "Xem trạng thái các file trong working directory",
      icon: "👀",
      example: "git status"
    },
    {
      id: 3,
      title: "Thêm file vào staging",
      command: "git add .",
      description: "Thêm tất cả file thay đổi vào staging area",
      icon: "➕",
      example: "git add . hoặc git add filename.js"
    },
    {
      id: 4,
      title: "Commit thay đổi",
      command: 'git commit -m "message"',
      description: "Lưu snapshot của code với message mô tả",
      icon: "💾",
      example: 'git commit -m "Add new feature"'
    },
    {
      id: 5,
      title: "Kết nối với GitHub",
      command: "git remote add origin [URL]",
      description: "Liên kết local repo với GitHub repository",
      icon: "🔗",
      example: "git remote add origin https://github.com/username/repo.git"
    },
    {
      id: 6,
      title: "Push code lên GitHub",
      command: "git push -u origin main",
      description: "Đẩy code từ local lên GitHub repository",
      icon: "🚀",
      example: "git push -u origin main"
    },
    {
      id: 7,
      title: "Pull code từ GitHub",
      command: "git pull origin main",
      description: "Tải code mới nhất từ GitHub về local",
      icon: "⬇️",
      example: "git pull origin main"
    },
    {
      id: 8,
      title: "Clone repository",
      command: "git clone [URL]",
      description: "Tải toàn bộ repository từ GitHub về máy local",
      icon: "📥",
      example: "git clone https://github.com/username/repo.git"
    },
    {
      id: 9,
      title: "Tạo và chuyển nhánh",
      command: "git checkout -b [branch-name]",
      description: "Tạo nhánh mới và chuyển sang nhánh đó",
      icon: "🌿",
      example: "git checkout -b feature/login"
    },
    {
      id: 10,
      title: "Merge nhánh",
      command: "git merge [branch-name]",
      description: "Kết hợp code từ nhánh khác vào nhánh hiện tại",
      icon: "🔄",
      example: "git merge feature/login"
    }
  ];

  /**
   * Xử lý khi user click vào một bước
   * @param {number} stepIndex - Index của bước được click
   */
  const handleStepClick = (stepIndex) => {
    setCurrentStep(stepIndex);
    
    // Đánh dấu bước này đã hoàn thành
    if (!completedSteps.includes(stepIndex)) {
      setCompletedSteps([...completedSteps, stepIndex]);
    }
  };

  /**
   * Copy command vào clipboard
   * @param {string} command - Lệnh cần copy
   */
  const copyToClipboard = (command) => {
    navigator.clipboard.writeText(command);
    // Có thể thêm toast notification ở đây
  };

  return (
    <div className="git-commands">
      <div className="commands-header">
        <h2>📋 Các bước thực hiện Git</h2>
        <p>Click vào từng bước để xem chi tiết</p>
      </div>

      <div className="commands-container">
        {/* Sidebar - Danh sách các bước */}
        <div className="steps-sidebar">
          {gitSteps.map((step, index) => (
            <div
              key={step.id}
              className={`step-item ${
                currentStep === index ? 'active' : ''
              } ${
                completedSteps.includes(index) ? 'completed' : ''
              }`}
              onClick={() => handleStepClick(index)}
            >
              <div className="step-number">{step.id}</div>
              <div className="step-info">
                <span className="step-icon">{step.icon}</span>
                <span className="step-title">{step.title}</span>
              </div>
              {completedSteps.includes(index) && (
                <span className="check-mark">✅</span>
              )}
            </div>
          ))}
        </div>

        {/* Main content - Chi tiết bước hiện tại */}
        <div className="step-detail">
          {gitSteps[currentStep] && (
            <div className="detail-card">
              <div className="detail-header">
                <span className="detail-icon">
                  {gitSteps[currentStep].icon}
                </span>
                <h3>{gitSteps[currentStep].title}</h3>
              </div>
              
              <div className="detail-content">
                <p className="description">
                  {gitSteps[currentStep].description}
                </p>
                
                {/* Command box */}
                <div className="command-box">
                  <div className="command-header">
                    <span>💻 Lệnh:</span>
                    <button 
                      className="copy-btn"
                      onClick={() => copyToClipboard(gitSteps[currentStep].command)}
                      title="Copy command"
                    >
                      📋
                    </button>
                  </div>
                  <code className="command-text">
                    {gitSteps[currentStep].command}
                  </code>
                </div>
                
                {/* Example */}
                <div className="example-box">
                  <span className="example-label">📝 Ví dụ:</span>
                  <code className="example-text">
                    {gitSteps[currentStep].example}
                  </code>
                </div>

                {/* Thêm phần giải thích chi tiết cho Clone */}
                {currentStep === 7 && (
                  <div className="clone-explanation">
                    <h4>🔍 Chi tiết về Clone Repository</h4>
                    <p>
                      Clone là cách nhanh nhất để tải một dự án từ GitHub về máy tính của bạn. 
                      Khi clone, bạn sẽ có:
                    </p>
                    <ul className="clone-benefits">
                      <li>✅ Toàn bộ lịch sử commit</li>
                      <li>✅ Tất cả các nhánh (branches)</li>
                      <li>✅ Tất cả các tags</li>
                      <li>✅ Cấu hình remote tự động</li>
                    </ul>
                    <div className="clone-steps">
                      <h5>Các bước clone repository:</h5>
                      <ol>
                        <li>Truy cập vào repository trên GitHub</li>
                        <li>Click vào nút "Code" màu xanh</li>
                        <li>Copy URL (HTTPS hoặc SSH)</li>
                        <li>Mở terminal trên máy tính</li>
                        <li>Di chuyển đến thư mục bạn muốn lưu project</li>
                        <li>Chạy lệnh <code>git clone [URL]</code></li>
                      </ol>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="progress-section">
        <div className="progress-label">
          Tiến độ: {completedSteps.length}/{gitSteps.length} bước
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ 
              width: `${(completedSteps.length / gitSteps.length) * 100}%` 
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default GitCommands;