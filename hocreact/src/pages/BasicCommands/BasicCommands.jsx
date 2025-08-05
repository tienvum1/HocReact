import React, { useState } from 'react';
import './BasicCommands.css';

/**
 * Trang hướng dẫn các lệnh Git cơ bản
 * Bao gồm các lệnh thường dùng nhất trong Git
 */
function BasicCommands() {
  const [activeCommand, setActiveCommand] = useState(null);

  // Danh sách các lệnh Git cơ bản
  const commands = [
    {
      id: 'init',
      name: 'git init',
      description: 'Khởi tạo một Git repository mới',
      syntax: 'git init [directory-name]',
      example: 'git init my-project',
      explanation: 'Tạo một thư mục .git ẩn để theo dõi các thay đổi trong project.',
      useCase: 'Sử dụng khi bắt đầu một project mới hoặc muốn thêm Git vào project hiện tại.'
    },
    {
      id: 'clone',
      name: 'git clone',
      description: 'Sao chép một repository từ remote về local',
      syntax: 'git clone <repository-url> [directory-name]',
      example: 'git clone https://github.com/user/repo.git',
      explanation: 'Tải về toàn bộ lịch sử và nội dung của repository từ server.',
      useCase: 'Sử dụng khi muốn làm việc với một project có sẵn trên GitHub, GitLab, etc.'
    },
    {
      id: 'add',
      name: 'git add',
      description: 'Thêm file vào staging area',
      syntax: 'git add <file-name> | git add . | git add -A',
      example: 'git add index.html\ngit add .\ngit add -A',
      explanation: 'Chuẩn bị các file để commit. Staging area là nơi tạm thời trước khi commit.',
      useCase: 'Sử dụng trước mỗi lần commit để chọn những thay đổi muốn lưu.'
    },
    {
      id: 'commit',
      name: 'git commit',
      description: 'Lưu các thay đổi vào repository',
      syntax: 'git commit -m "commit message"',
      example: 'git commit -m "Add login feature"',
      explanation: 'Tạo một snapshot của project tại thời điểm hiện tại với message mô tả.',
      useCase: 'Sử dụng để lưu lại các thay đổi có ý nghĩa trong quá trình phát triển.'
    },
    {
      id: 'status',
      name: 'git status',
      description: 'Kiểm tra trạng thái của working directory',
      syntax: 'git status',
      example: 'git status',
      explanation: 'Hiển thị các file đã thay đổi, file trong staging area, và file chưa được track.',
      useCase: 'Sử dụng thường xuyên để biết trạng thái hiện tại của project.'
    },
    {
      id: 'push',
      name: 'git push',
      description: 'Đẩy commits từ local lên remote repository',
      syntax: 'git push [remote] [branch]',
      example: 'git push origin main\ngit push -u origin feature-branch',
      explanation: 'Upload các commit từ máy local lên server để chia sẻ với team.',
      useCase: 'Sử dụng sau khi commit để cập nhật code lên repository chung.'
    },
    {
      id: 'pull',
      name: 'git pull',
      description: 'Kéo các thay đổi từ remote về local',
      syntax: 'git pull [remote] [branch]',
      example: 'git pull origin main',
      explanation: 'Tải về và merge các commit mới từ remote repository.',
      useCase: 'Sử dụng để cập nhật code mới nhất từ team trước khi làm việc.'
    },
    {
      id: 'log',
      name: 'git log',
      description: 'Xem lịch sử commit',
      syntax: 'git log [options]',
      example: 'git log\ngit log --oneline\ngit log --graph',
      explanation: 'Hiển thị danh sách các commit với thông tin chi tiết.',
      useCase: 'Sử dụng để xem lại lịch sử phát triển của project.'
    }
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // Có thể thêm notification ở đây
  };

  return (
    <div className="basic-commands-page">
      <div className="page-header">
        <h1>⚡ Lệnh Git Cơ Bản</h1>
        <p>Tìm hiểu các lệnh Git thiết yếu mà mọi developer cần biết</p>
      </div>

      <div className="commands-container">
        <div className="commands-grid">
          {commands.map((command) => (
            <div 
              key={command.id} 
              className={`command-card ${
                activeCommand === command.id ? 'active' : ''
              }`}
              onClick={() => setActiveCommand(
                activeCommand === command.id ? null : command.id
              )}
            >
              <div className="command-header">
                <h3 className="command-name">{command.name}</h3>
                <button 
                  className="copy-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    copyToClipboard(command.example.split('\n')[0]);
                  }}
                  title="Copy command"
                >
                  📋
                </button>
              </div>
              
              <p className="command-description">{command.description}</p>
              
              {activeCommand === command.id && (
                <div className="command-details">
                  <div className="detail-section">
                    <h4>Cú pháp:</h4>
                    <code className="syntax">{command.syntax}</code>
                  </div>
                  
                  <div className="detail-section">
                    <h4>Ví dụ:</h4>
                    <pre className="example">{command.example}</pre>
                  </div>
                  
                  <div className="detail-section">
                    <h4>Giải thích:</h4>
                    <p className="explanation">{command.explanation}</p>
                  </div>
                  
                  <div className="detail-section">
                    <h4>Khi nào sử dụng:</h4>
                    <p className="use-case">{command.useCase}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Quick Reference Section */}
      <div className="quick-reference">
        <h2>🚀 Quick Reference</h2>
        <div className="workflow-example">
          <h3>Workflow cơ bản:</h3>
          <div className="workflow-steps">
            <div className="workflow-step">
              <span className="step-number">1</span>
              <code>git add .</code>
              <span className="step-desc">Thêm tất cả file vào staging</span>
            </div>
            <div className="workflow-step">
              <span className="step-number">2</span>
              <code>git commit -m "message"</code>
              <span className="step-desc">Commit với message</span>
            </div>
            <div className="workflow-step">
              <span className="step-number">3</span>
              <code>git push origin main</code>
              <span className="step-desc">Đẩy lên remote repository</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicCommands;