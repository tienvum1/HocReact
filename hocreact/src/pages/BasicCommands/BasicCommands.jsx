import React, { useState } from 'react';
import './BasicCommands.css';

/**
 * Trang hướng dẫn các lệnh Git cơ bản
 * Bao gồm tất cả lệnh thiết yếu với ví dụ thực tế
 */
const BasicCommands = () => {
  const [activeCommand, setActiveCommand] = useState(null);
  const [copiedCommand, setCopiedCommand] = useState('');

  // Danh sách các lệnh Git cơ bản với giải thích chi tiết
  const gitCommands = [
    {
      id: 'config',
      category: 'Cấu hình',
      title: 'git config',
      description: 'Cấu hình thông tin người dùng và các thiết lập Git',
      icon: '⚙️',
      commands: [
        {
          command: 'git config --global user.name "Tên của bạn"',
          explanation: 'Thiết lập tên người dùng cho tất cả repository'
        },
        {
          command: 'git config --global user.email "email@example.com"',
          explanation: 'Thiết lập email cho tất cả repository'
        },
        {
          command: 'git config --list',
          explanation: 'Xem tất cả cấu hình hiện tại'
        },
        {
          command: 'git config user.name',
          explanation: 'Xem tên người dùng hiện tại'
        }
      ],
      realExample: {
        scenario: 'Lần đầu sử dụng Git',
        steps: [
          'Mở terminal/command prompt',
          'Chạy: git config --global user.name "Nguyễn Văn A"',
          'Chạy: git config --global user.email "nguyenvana@gmail.com"',
          'Kiểm tra: git config --list'
        ]
      }
    },
    {
      id: 'init',
      category: 'Khởi tạo',
      title: 'git init',
      description: 'Khởi tạo một repository Git mới trong thư mục hiện tại',
      icon: '🚀',
      commands: [
        {
          command: 'git init',
          explanation: 'Tạo repository Git mới trong thư mục hiện tại'
        },
        {
          command: 'git init tên-dự-án',
          explanation: 'Tạo thư mục mới và khởi tạo Git repository'
        },
        {
          command: 'git init --bare',
          explanation: 'Tạo bare repository (dùng làm remote repository)'
        }
      ],
      realExample: {
        scenario: 'Bắt đầu dự án mới',
        steps: [
          'Tạo thư mục dự án: mkdir my-project',
          'Vào thư mục: cd my-project',
          'Khởi tạo Git: git init',
          'Tạo file đầu tiên: echo "# My Project" > README.md'
        ]
      }
    },
    {
      id: 'status',
      category: 'Kiểm tra',
      title: 'git status',
      description: 'Xem trạng thái hiện tại của working directory và staging area',
      icon: '📊',
      commands: [
        {
          command: 'git status',
          explanation: 'Hiển thị trạng thái đầy đủ của repository'
        },
        {
          command: 'git status -s',
          explanation: 'Hiển thị trạng thái ở dạng ngắn gọn'
        },
        {
          command: 'git status --porcelain',
          explanation: 'Hiển thị trạng thái dạng machine-readable'
        }
      ],
      realExample: {
        scenario: 'Kiểm tra thay đổi trước khi commit',
        steps: [
          'Chỉnh sửa file index.html',
          'Chạy: git status',
          'Thấy file màu đỏ (chưa được add)',
          'Add file: git add index.html',
          'Chạy lại: git status (file màu xanh)'
        ]
      }
    },
    {
      id: 'add',
      category: 'Staging',
      title: 'git add',
      description: 'Thêm file vào staging area để chuẩn bị commit',
      icon: '➕',
      commands: [
        {
          command: 'git add tên-file.txt',
          explanation: 'Thêm một file cụ thể vào staging area'
        },
        {
          command: 'git add .',
          explanation: 'Thêm tất cả file trong thư mục hiện tại'
        },
        {
          command: 'git add -A',
          explanation: 'Thêm tất cả file (bao gồm file đã xóa)'
        },
        {
          command: 'git add *.js',
          explanation: 'Thêm tất cả file JavaScript'
        },
        {
          command: 'git add -p',
          explanation: 'Thêm từng phần của file (interactive mode)'
        }
      ],
      realExample: {
        scenario: 'Chuẩn bị commit feature mới',
        steps: [
          'Tạo file: touch feature.js',
          'Chỉnh sửa: nano feature.js',
          'Add file: git add feature.js',
          'Kiểm tra: git status',
          'Commit: git commit -m "Add new feature"'
        ]
      }
    },
    {
      id: 'commit',
      category: 'Lưu trữ',
      title: 'git commit',
      description: 'Lưu các thay đổi từ staging area vào repository',
      icon: '💾',
      commands: [
        {
          command: 'git commit -m "Mô tả commit"',
          explanation: 'Commit với message ngắn gọn'
        },
        {
          command: 'git commit -am "Message"',
          explanation: 'Add và commit tất cả file đã tracked'
        },
        {
          command: 'git commit --amend',
          explanation: 'Sửa đổi commit cuối cùng'
        },
        {
          command: 'git commit --amend -m "New message"',
          explanation: 'Thay đổi message của commit cuối'
        }
      ],
      realExample: {
        scenario: 'Commit feature hoàn chỉnh',
        steps: [
          'Hoàn thành code feature',
          'Add files: git add .',
          'Commit: git commit -m "feat: add user authentication"',
          'Kiểm tra: git log --oneline'
        ]
      }
    },
    {
      id: 'log',
      category: 'Lịch sử',
      title: 'git log',
      description: 'Xem lịch sử commit của repository',
      icon: '📜',
      commands: [
        {
          command: 'git log',
          explanation: 'Hiển thị lịch sử commit đầy đủ'
        },
        {
          command: 'git log --oneline',
          explanation: 'Hiển thị mỗi commit trên một dòng'
        },
        {
          command: 'git log --graph',
          explanation: 'Hiển thị dạng đồ thị ASCII'
        },
        {
          command: 'git log --author="Tên tác giả"',
          explanation: 'Lọc commit theo tác giả'
        },
        {
          command: 'git log --since="2 weeks ago"',
          explanation: 'Lọc commit theo thời gian'
        }
      ],
      realExample: {
        scenario: 'Tìm commit gây bug',
        steps: [
          'Xem lịch sử: git log --oneline',
          'Tìm commit nghi ngờ: git log --author="John"',
          'Xem chi tiết: git show commit-hash',
          'So sánh: git diff commit1 commit2'
        ]
      }
    },
    {
      id: 'diff',
      category: 'So sánh',
      title: 'git diff',
      description: 'So sánh sự khác biệt giữa các phiên bản',
      icon: '🔍',
      commands: [
        {
          command: 'git diff',
          explanation: 'So sánh working directory với staging area'
        },
        {
          command: 'git diff --staged',
          explanation: 'So sánh staging area với commit cuối'
        },
        {
          command: 'git diff HEAD',
          explanation: 'So sánh working directory với commit cuối'
        },
        {
          command: 'git diff commit1 commit2',
          explanation: 'So sánh hai commit'
        }
      ],
      realExample: {
        scenario: 'Kiểm tra thay đổi trước khi commit',
        steps: [
          'Chỉnh sửa file app.js',
          'Xem thay đổi: git diff app.js',
          'Add file: git add app.js',
          'Xem staged changes: git diff --staged'
        ]
      }
    },
    {
      id: 'remote',
      category: 'Remote',
      title: 'git remote',
      description: 'Quản lý các remote repository',
      icon: '🌐',
      commands: [
        {
          command: 'git remote add origin URL',
          explanation: 'Thêm remote repository với tên "origin"'
        },
        {
          command: 'git remote -v',
          explanation: 'Xem danh sách remote repositories'
        },
        {
          command: 'git remote remove origin',
          explanation: 'Xóa remote repository'
        },
        {
          command: 'git remote rename old-name new-name',
          explanation: 'Đổi tên remote repository'
        }
      ],
      realExample: {
        scenario: 'Kết nối với GitHub repository',
        steps: [
          'Tạo repo trên GitHub',
          'Copy URL repository',
          'Add remote: git remote add origin https://github.com/user/repo.git',
          'Kiểm tra: git remote -v'
        ]
      }
    },
    {
      id: 'push',
      category: 'Đồng bộ',
      title: 'git push',
      description: 'Đẩy commit từ local repository lên remote repository',
      icon: '⬆️',
      commands: [
        {
          command: 'git push origin main',
          explanation: 'Push nhánh main lên remote origin'
        },
        {
          command: 'git push -u origin main',
          explanation: 'Push và set upstream cho nhánh main'
        },
        {
          command: 'git push --all',
          explanation: 'Push tất cả nhánh'
        },
        {
          command: 'git push --force',
          explanation: 'Force push (nguy hiểm - ghi đè lịch sử)'
        }
      ],
      realExample: {
        scenario: 'Đẩy code lên GitHub lần đầu',
        steps: [
          'Commit code: git commit -m "Initial commit"',
          'Add remote: git remote add origin URL',
          'Push: git push -u origin main',
          'Kiểm tra trên GitHub'
        ]
      }
    },
    {
      id: 'pull',
      category: 'Đồng bộ',
      title: 'git pull',
      description: 'Kéo và merge thay đổi từ remote repository',
      icon: '⬇️',
      commands: [
        {
          command: 'git pull',
          explanation: 'Pull từ remote đã set upstream'
        },
        {
          command: 'git pull origin main',
          explanation: 'Pull nhánh main từ remote origin'
        },
        {
          command: 'git pull --rebase',
          explanation: 'Pull và rebase thay vì merge'
        },
        {
          command: 'git pull --no-commit',
          explanation: 'Pull nhưng không tự động commit'
        }
      ],
      realExample: {
        scenario: 'Cập nhật code từ team',
        steps: [
          'Kiểm tra nhánh: git branch',
          'Chuyển về main: git checkout main',
          'Pull updates: git pull origin main',
          'Kiểm tra log: git log --oneline'
        ]
      }
    }
  ];

  // Copy command to clipboard
  const copyToClipboard = (command) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(command);
    setTimeout(() => setCopiedCommand(''), 2000);
  };

  return (
    <div className="basic-commands-container">
      {/* Header */}
      <div className="page-header">
        <h1>⚡ Lệnh Git Cơ Bản</h1>
        <p>Tất cả lệnh Git thiết yếu mà mọi developer cần biết</p>
      </div>

      {/* Quick Reference */}
      <div className="quick-reference">
        <h2>🚀 Quick Reference</h2>
        <div className="quick-commands">
          <div className="quick-command">
            <span className="command">git init</span>
            <span className="description">Khởi tạo repo</span>
          </div>
          <div className="quick-command">
            <span className="command">git add .</span>
            <span className="description">Add tất cả file</span>
          </div>
          <div className="quick-command">
            <span className="command">git commit -m "msg"</span>
            <span className="description">Commit với message</span>
          </div>
          <div className="quick-command">
            <span className="command">git push</span>
            <span className="description">Đẩy lên remote</span>
          </div>
        </div>
      </div>

      {/* Commands List */}
      <div className="commands-grid">
        {gitCommands.map((cmd) => (
          <div 
            key={cmd.id} 
            className={`command-card ${activeCommand === cmd.id ? 'active' : ''}`}
            onClick={() => setActiveCommand(activeCommand === cmd.id ? null : cmd.id)}
          >
            <div className="command-header">
              <div className="command-icon">{cmd.icon}</div>
              <div className="command-info">
                <div className="command-category">{cmd.category}</div>
                <h3 className="command-title">{cmd.title}</h3>
                <p className="command-description">{cmd.description}</p>
              </div>
              <div className="expand-icon">
                {activeCommand === cmd.id ? '−' : '+'}
              </div>
            </div>

            {activeCommand === cmd.id && (
              <div className="command-details">
                <div className="commands-section">
                  <h4>📝 Các lệnh:</h4>
                  {cmd.commands.map((item, index) => (
                    <div key={index} className="command-item">
                      <div className="command-line">
                        <code>{item.command}</code>
                        <button 
                          className="copy-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            copyToClipboard(item.command);
                          }}
                        >
                          {copiedCommand === item.command ? '✅' : '📋'}
                        </button>
                      </div>
                      <p className="command-explanation">{item.explanation}</p>
                    </div>
                  ))}
                </div>

                <div className="example-section">
                  <h4>🎯 Ví dụ thực tế:</h4>
                  <div className="scenario">
                    <h5>Tình huống: {cmd.realExample.scenario}</h5>
                    <ol className="steps-list">
                      {cmd.realExample.steps.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Git Workflow */}
      <div className="workflow-section">
        <h2>🔄 Git Workflow Cơ Bản</h2>
        <div className="workflow-diagram">
          <div className="workflow-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>Working Directory</h4>
              <p>Chỉnh sửa file</p>
              <code>nano file.txt</code>
            </div>
          </div>
          <div className="workflow-arrow">→</div>
          <div className="workflow-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4>Staging Area</h4>
              <p>Add file</p>
              <code>git add file.txt</code>
            </div>
          </div>
          <div className="workflow-arrow">→</div>
          <div className="workflow-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4>Repository</h4>
              <p>Commit</p>
              <code>git commit -m "msg"</code>
            </div>
          </div>
          <div className="workflow-arrow">→</div>
          <div className="workflow-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h4>Remote</h4>
              <p>Push</p>
              <code>git push</code>
            </div>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="best-practices">
        <h2>✨ Best Practices</h2>
        <div className="practices-grid">
          <div className="practice-item">
            <div className="practice-icon">💬</div>
            <h4>Commit Messages</h4>
            <ul>
              <li>Sử dụng present tense: "Add feature" thay vì "Added feature"</li>
              <li>Giới hạn 50 ký tự cho title</li>
              <li>Sử dụng prefix: feat:, fix:, docs:, style:</li>
            </ul>
          </div>
          <div className="practice-item">
            <div className="practice-icon">🔄</div>
            <h4>Commit Frequency</h4>
            <ul>
              <li>Commit thường xuyên với các thay đổi nhỏ</li>
              <li>Mỗi commit nên có một mục đích rõ ràng</li>
              <li>Không commit code chưa hoàn thành</li>
            </ul>
          </div>
          <div className="practice-item">
            <div className="practice-icon">🛡️</div>
            <h4>Safety</h4>
            <ul>
              <li>Luôn pull trước khi push</li>
              <li>Kiểm tra git status trước khi commit</li>
              <li>Backup code quan trọng</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicCommands;