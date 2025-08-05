import React, { useState } from 'react';
import './Clone.css';

/**
 * Trang hướng dẫn về Git Clone
 * Bao gồm các cách clone repository và best practices
 */
function Clone() {
  const [activeMethod, setActiveMethod] = useState('https');

  const cloneMethods = {
    https: {
      title: '🔗 HTTPS Clone',
      description: 'Phương pháp phổ biến nhất, dễ sử dụng và không cần cấu hình SSH',
      command: 'git clone https://github.com/username/repository.git',
      pros: [
        'Dễ sử dụng, không cần setup',
        'Hoạt động qua firewall',
        'Hỗ trợ authentication token'
      ],
      cons: [
        'Cần nhập username/password mỗi lần',
        'Chậm hơn SSH một chút'
      ],
      steps: [
        'Copy URL từ GitHub/GitLab',
        'Mở terminal tại thư mục muốn clone',
        'Chạy lệnh git clone với URL',
        'Nhập credentials nếu repository private'
      ]
    },
    ssh: {
      title: '🔐 SSH Clone',
      description: 'Phương pháp bảo mật cao, nhanh và không cần nhập password',
      command: 'git clone git@github.com:username/repository.git',
      pros: [
        'Bảo mật cao với key pair',
        'Không cần nhập password',
        'Nhanh hơn HTTPS'
      ],
      cons: [
        'Cần setup SSH key trước',
        'Phức tạp hơn cho người mới'
      ],
      steps: [
        'Tạo SSH key: ssh-keygen -t rsa -b 4096',
        'Add SSH key vào GitHub/GitLab',
        'Copy SSH URL từ repository',
        'Chạy lệnh git clone với SSH URL'
      ]
    },
    github: {
      title: '📱 GitHub CLI',
      description: 'Sử dụng GitHub CLI để clone repository một cách tiện lợi',
      command: 'gh repo clone username/repository',
      pros: [
        'Tích hợp tốt với GitHub',
        'Syntax ngắn gọn',
        'Tự động authentication'
      ],
      cons: [
        'Chỉ hoạt động với GitHub',
        'Cần cài đặt GitHub CLI'
      ],
      steps: [
        'Cài đặt GitHub CLI',
        'Login: gh auth login',
        'Clone: gh repo clone username/repo',
        'Hoặc: gh repo clone URL'
      ]
    }
  };

  const cloneOptions = [
    {
      option: '--depth 1',
      description: 'Shallow clone - chỉ lấy commit mới nhất',
      example: 'git clone --depth 1 https://github.com/user/repo.git',
      useCase: 'Tiết kiệm bandwidth, phù hợp khi chỉ cần code mới nhất'
    },
    {
      option: '--branch <name>',
      description: 'Clone một branch cụ thể',
      example: 'git clone --branch develop https://github.com/user/repo.git',
      useCase: 'Khi muốn làm việc với branch khác main/master'
    },
    {
      option: '--single-branch',
      description: 'Chỉ clone một branch duy nhất',
      example: 'git clone --single-branch --branch main https://github.com/user/repo.git',
      useCase: 'Tiết kiệm dung lượng khi repository có nhiều branch'
    },
    {
      option: '--recursive',
      description: 'Clone cả submodules',
      example: 'git clone --recursive https://github.com/user/repo.git',
      useCase: 'Khi repository có submodules cần thiết'
    }
  ];

  const troubleshooting = [
    {
      problem: 'Permission denied (publickey)',
      solution: 'Kiểm tra SSH key đã được add vào GitHub chưa',
      commands: ['ssh -T git@github.com', 'ssh-add ~/.ssh/id_rsa']
    },
    {
      problem: 'Repository not found',
      solution: 'Kiểm tra URL và quyền truy cập repository',
      commands: ['git remote -v', 'git remote set-url origin <correct-url>']
    },
    {
      problem: 'SSL certificate problem',
      solution: 'Cấu hình SSL hoặc sử dụng HTTP thay HTTPS',
      commands: ['git config --global http.sslverify false']
    }
  ];

  return (
    <div className="clone-page">
      <div className="page-header">
        <h1>📥 Git Clone</h1>
        <p>Hướng dẫn chi tiết cách clone repository từ GitHub, GitLab và các platform khác</p>
      </div>

      {/* Clone Methods */}
      <div className="clone-methods">
        <h2>🚀 Phương pháp Clone</h2>
        <div className="method-tabs">
          {Object.entries(cloneMethods).map(([key, method]) => (
            <button
              key={key}
              className={`method-tab ${activeMethod === key ? 'active' : ''}`}
              onClick={() => setActiveMethod(key)}
            >
              {method.title}
            </button>
          ))}
        </div>

        <div className="method-content">
          <div className="method-info">
            <h3>{cloneMethods[activeMethod].title}</h3>
            <p className="method-description">{cloneMethods[activeMethod].description}</p>
            
            <div className="command-showcase">
              <h4>Lệnh cơ bản:</h4>
              <code className="main-command">{cloneMethods[activeMethod].command}</code>
            </div>

            <div className="pros-cons">
              <div className="pros">
                <h4>✅ Ưu điểm:</h4>
                <ul>
                  {cloneMethods[activeMethod].pros.map((pro, index) => (
                    <li key={index}>{pro}</li>
                  ))}
                </ul>
              </div>
              <div className="cons">
                <h4>❌ Nhược điểm:</h4>
                <ul>
                  {cloneMethods[activeMethod].cons.map((con, index) => (
                    <li key={index}>{con}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="steps-guide">
              <h4>📋 Các bước thực hiện:</h4>
              <ol>
                {cloneMethods[activeMethod].steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Clone Options */}
      <div className="clone-options">
        <h2>⚙️ Tùy chọn Clone</h2>
        <div className="options-grid">
          {cloneOptions.map((option, index) => (
            <div key={index} className="option-card">
              <h3>
                <code className="option-name">{option.option}</code>
              </h3>
              <p className="option-description">{option.description}</p>
              <div className="option-example">
                <strong>Ví dụ:</strong>
                <code>{option.example}</code>
              </div>
              <div className="option-usecase">
                <strong>Khi nào dùng:</strong>
                <span>{option.useCase}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Start Guide */}
      <div className="quick-start">
        <h2>⚡ Quick Start</h2>
        <div className="quick-steps">
          <div className="quick-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>Tìm Repository URL</h4>
              <p>Vào trang GitHub/GitLab, click nút "Code" và copy URL</p>
            </div>
          </div>
          <div className="quick-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4>Mở Terminal</h4>
              <p>Điều hướng đến thư mục muốn lưu project</p>
              <code>cd ~/Documents/Projects</code>
            </div>
          </div>
          <div className="quick-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4>Chạy lệnh Clone</h4>
              <code>git clone &lt;repository-url&gt;</code>
            </div>
          </div>
          <div className="quick-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h4>Vào thư mục project</h4>
              <code>cd repository-name</code>
            </div>
          </div>
        </div>
      </div>

      {/* Troubleshooting */}
      <div className="troubleshooting">
        <h2>🔧 Xử lý sự cố</h2>
        <div className="trouble-list">
          {troubleshooting.map((trouble, index) => (
            <div key={index} className="trouble-item">
              <h4 className="trouble-problem">❌ {trouble.problem}</h4>
              <p className="trouble-solution">💡 {trouble.solution}</p>
              <div className="trouble-commands">
                {trouble.commands.map((command, cmdIndex) => (
                  <code key={cmdIndex}>{command}</code>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clone;