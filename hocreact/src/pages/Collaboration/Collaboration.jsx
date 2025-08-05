import React, { useState } from 'react';
import './Collaboration.css';

/**
 * Trang hướng dẫn về Git Collaboration
 * Bao gồm làm việc nhóm, conflict resolution, và code review
 */
function Collaboration() {
  const [activeTab, setActiveTab] = useState('teamwork');

  const collaborationTopics = {
    teamwork: {
      title: '👥 Làm việc nhóm',
      content: [
        {
          title: 'Remote Repository Setup',
          commands: [
            'git remote add origin <repository-url>',
            'git remote -v',
            'git remote set-url origin <new-url>'
          ],
          description: 'Thiết lập và quản lý remote repository để chia sẻ code với team.'
        },
        {
          title: 'Fetch & Pull',
          commands: [
            'git fetch origin',
            'git pull origin main',
            'git pull --rebase origin main'
          ],
          description: 'Cập nhật code mới nhất từ remote repository trước khi làm việc.'
        },
        {
          title: 'Push Changes',
          commands: [
            'git push origin main',
            'git push -u origin feature-branch',
            'git push --force-with-lease origin branch'
          ],
          description: 'Đẩy thay đổi lên remote repository để chia sẻ với team.'
        }
      ]
    },
    conflicts: {
      title: '⚔️ Xử lý Conflict',
      content: [
        {
          title: 'Merge Conflicts',
          commands: [
            'git status',
            'git diff',
            'git add <resolved-file>',
            'git commit'
          ],
          description: 'Xử lý xung đột khi merge code từ nhiều nguồn khác nhau.'
        },
        {
          title: 'Conflict Resolution Tools',
          commands: [
            'git mergetool',
            'git checkout --ours <file>',
            'git checkout --theirs <file>'
          ],
          description: 'Sử dụng các công cụ để giải quyết conflict hiệu quả.'
        },
        {
          title: 'Abort Merge',
          commands: [
            'git merge --abort',
            'git reset --hard HEAD',
            'git clean -fd'
          ],
          description: 'Hủy bỏ merge khi gặp vấn đề và quay về trạng thái ban đầu.'
        }
      ]
    },
    review: {
      title: '🔍 Code Review',
      content: [
        {
          title: 'Pull Request Workflow',
          commands: [
            'git checkout -b feature/new-feature',
            'git push -u origin feature/new-feature',
            '# Create PR on GitHub/GitLab'
          ],
          description: 'Quy trình tạo Pull Request để review code trước khi merge.'
        },
        {
          title: 'Review Commands',
          commands: [
            'git log --oneline',
            'git show <commit-hash>',
            'git diff main..feature-branch'
          ],
          description: 'Các lệnh để review và kiểm tra thay đổi trong code.'
        },
        {
          title: 'Feedback Integration',
          commands: [
            'git commit --amend',
            'git rebase -i HEAD~3',
            'git push --force-with-lease'
          ],
          description: 'Tích hợp feedback từ code review vào branch.'
        }
      ]
    }
  };

  const bestPractices = [
    {
      icon: '📝',
      title: 'Commit Messages',
      description: 'Viết commit message rõ ràng và có ý nghĩa',
      example: 'feat: add user authentication\nfix: resolve login validation bug'
    },
    {
      icon: '🌿',
      title: 'Branch Strategy',
      description: 'Sử dụng Git Flow hoặc GitHub Flow',
      example: 'main → develop → feature/user-auth'
    },
    {
      icon: '🔄',
      title: 'Regular Sync',
      description: 'Thường xuyên pull code mới từ main branch',
      example: 'git pull origin main (hàng ngày)'
    },
    {
      icon: '🧪',
      title: 'Testing',
      description: 'Test kỹ trước khi push code',
      example: 'npm test && git push'
    }
  ];

  return (
    <div className="collaboration-page">
      <div className="page-header">
        <h1>👥 Git Collaboration</h1>
        <p>Làm việc nhóm hiệu quả với Git - từ cơ bản đến chuyên nghiệp</p>
      </div>

      {/* Navigation Tabs */}
      <div className="collaboration-tabs">
        {Object.entries(collaborationTopics).map(([key, topic]) => (
          <button
            key={key}
            className={`tab ${activeTab === key ? 'active' : ''}`}
            onClick={() => setActiveTab(key)}
          >
            {topic.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        <div className="content-grid">
          {collaborationTopics[activeTab].content.map((section, index) => (
            <div key={index} className="content-card">
              <h3>{section.title}</h3>
              <p className="section-description">{section.description}</p>
              <div className="commands-container">
                {section.commands.map((command, cmdIndex) => (
                  <code key={cmdIndex} className="command-line">
                    {command}
                  </code>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Best Practices Section */}
      <div className="best-practices">
        <h2>✨ Best Practices</h2>
        <div className="practices-grid">
          {bestPractices.map((practice, index) => (
            <div key={index} className="practice-card">
              <div className="practice-icon">{practice.icon}</div>
              <h3>{practice.title}</h3>
              <p>{practice.description}</p>
              <div className="practice-example">
                <strong>Ví dụ:</strong>
                <code>{practice.example}</code>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conflict Resolution Guide */}
      <div className="conflict-guide">
        <h2>⚔️ Hướng dẫn xử lý Conflict</h2>
        <div className="conflict-steps">
          <div className="conflict-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>Phát hiện Conflict</h4>
              <code>git status</code>
              <p>Git sẽ hiển thị các file bị conflict</p>
            </div>
          </div>
          <div className="conflict-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4>Mở file và sửa</h4>
              <div className="conflict-example">
                <pre>{`<<<<<<< HEAD
Your changes
=======
Their changes
>>>>>>> branch-name`}</pre>
              </div>
              <p>Chọn code nào giữ lại hoặc kết hợp cả hai</p>
            </div>
          </div>
          <div className="conflict-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4>Add và Commit</h4>
              <code>git add .</code>
              <code>git commit -m "Resolve merge conflict"</code>
              <p>Hoàn tất việc giải quyết conflict</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collaboration;