import React, { useState } from 'react';
import './Branching.css';

/**
 * Trang hướng dẫn về Git Branching
 * Bao gồm tạo, chuyển đổi, merge và xóa branch
 */
function Branching() {
  const [activeSection, setActiveSection] = useState('overview');

  const branchingConcepts = [
    {
      id: 'create',
      title: 'Tạo Branch',
      icon: '🌱',
      commands: [
        {
          command: 'git branch <branch-name>',
          description: 'Tạo branch mới từ branch hiện tại'
        },
        {
          command: 'git checkout -b <branch-name>',
          description: 'Tạo và chuyển sang branch mới'
        },
        {
          command: 'git switch -c <branch-name>',
          description: 'Tạo và chuyển sang branch mới (Git 2.23+)'
        }
      ]
    },
    {
      id: 'switch',
      title: 'Chuyển Branch',
      icon: '🔄',
      commands: [
        {
          command: 'git checkout <branch-name>',
          description: 'Chuyển sang branch khác'
        },
        {
          command: 'git switch <branch-name>',
          description: 'Chuyển sang branch khác (Git 2.23+)'
        },
        {
          command: 'git checkout -',
          description: 'Chuyển về branch trước đó'
        }
      ]
    },
    {
      id: 'merge',
      title: 'Merge Branch',
      icon: '🔀',
      commands: [
        {
          command: 'git merge <branch-name>',
          description: 'Merge branch vào branch hiện tại'
        },
        {
          command: 'git merge --no-ff <branch-name>',
          description: 'Merge với commit merge (không fast-forward)'
        },
        {
          command: 'git merge --squash <branch-name>',
          description: 'Merge và gộp tất cả commit thành 1'
        }
      ]
    },
    {
      id: 'delete',
      title: 'Xóa Branch',
      icon: '🗑️',
      commands: [
        {
          command: 'git branch -d <branch-name>',
          description: 'Xóa branch đã được merge'
        },
        {
          command: 'git branch -D <branch-name>',
          description: 'Xóa branch (force delete)'
        },
        {
          command: 'git push origin --delete <branch-name>',
          description: 'Xóa branch trên remote'
        }
      ]
    }
  ];

  const workflowSteps = [
    {
      step: 1,
      title: 'Tạo feature branch',
      command: 'git checkout -b feature/new-feature',
      description: 'Tạo branch mới cho tính năng'
    },
    {
      step: 2,
      title: 'Làm việc và commit',
      command: 'git add . && git commit -m "Add new feature"',
      description: 'Phát triển tính năng và commit'
    },
    {
      step: 3,
      title: 'Push branch lên remote',
      command: 'git push -u origin feature/new-feature',
      description: 'Đẩy branch lên repository'
    },
    {
      step: 4,
      title: 'Chuyển về main và merge',
      command: 'git checkout main && git merge feature/new-feature',
      description: 'Merge tính năng vào main branch'
    },
    {
      step: 5,
      title: 'Xóa branch không cần thiết',
      command: 'git branch -d feature/new-feature',
      description: 'Dọn dẹp branch đã merge'
    }
  ];

  return (
    <div className="branching-page">
      <div className="page-header">
        <h1>🌿 Git Branching</h1>
        <p>Quản lý nhánh hiệu quả trong Git - từ cơ bản đến nâng cao</p>
      </div>

      {/* Navigation Tabs */}
      <div className="section-tabs">
        <button 
          className={`tab ${activeSection === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveSection('overview')}
        >
          📖 Tổng quan
        </button>
        <button 
          className={`tab ${activeSection === 'commands' ? 'active' : ''}`}
          onClick={() => setActiveSection('commands')}
        >
          ⚡ Lệnh
        </button>
        <button 
          className={`tab ${activeSection === 'workflow' ? 'active' : ''}`}
          onClick={() => setActiveSection('workflow')}
        >
          🔄 Workflow
        </button>
      </div>

      {/* Overview Section */}
      {activeSection === 'overview' && (
        <div className="section-content">
          <div className="overview-grid">
            <div className="concept-card">
              <h3>🎯 Branch là gì?</h3>
              <p>
                Branch (nhánh) là một phiên bản độc lập của codebase, cho phép bạn 
                phát triển tính năng mới mà không ảnh hưởng đến code chính.
              </p>
              <ul>
                <li>Mỗi branch có lịch sử commit riêng</li>
                <li>Có thể merge branch vào nhau</li>
                <li>Main/Master branch là nhánh chính</li>
              </ul>
            </div>
            
            <div className="concept-card">
              <h3>💡 Tại sao cần Branch?</h3>
              <ul>
                <li>🔒 <strong>Isolation:</strong> Tách biệt các tính năng</li>
                <li>👥 <strong>Collaboration:</strong> Nhiều người làm việc song song</li>
                <li>🧪 <strong>Experimentation:</strong> Thử nghiệm an toàn</li>
                <li>🚀 <strong>Release Management:</strong> Quản lý phiên bản</li>
              </ul>
            </div>
            
            <div className="concept-card">
              <h3>📋 Branch Naming Convention</h3>
              <div className="naming-examples">
                <code>feature/user-authentication</code>
                <code>bugfix/login-error</code>
                <code>hotfix/security-patch</code>
                <code>release/v1.2.0</code>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Commands Section */}
      {activeSection === 'commands' && (
        <div className="section-content">
          <div className="commands-grid">
            {branchingConcepts.map((concept) => (
              <div key={concept.id} className="command-group">
                <h3 className="group-title">
                  <span className="group-icon">{concept.icon}</span>
                  {concept.title}
                </h3>
                <div className="commands-list">
                  {concept.commands.map((cmd, index) => (
                    <div key={index} className="command-item">
                      <code className="command">{cmd.command}</code>
                      <p className="command-desc">{cmd.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Workflow Section */}
      {activeSection === 'workflow' && (
        <div className="section-content">
          <div className="workflow-container">
            <h3>🔄 Git Flow Workflow</h3>
            <div className="workflow-steps">
              {workflowSteps.map((step) => (
                <div key={step.step} className="workflow-step">
                  <div className="step-number">{step.step}</div>
                  <div className="step-content">
                    <h4>{step.title}</h4>
                    <code className="step-command">{step.command}</code>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Branch Visualization */}
          <div className="branch-visualization">
            <h3>🌳 Branch Visualization</h3>
            <div className="git-graph">
              <div className="branch-line main-branch">
                <span className="branch-label">main</span>
                <div className="commits">
                  <div className="commit">A</div>
                  <div className="commit">B</div>
                  <div className="commit merge">M</div>
                  <div className="commit">F</div>
                </div>
              </div>
              <div className="branch-line feature-branch">
                <span className="branch-label">feature</span>
                <div className="commits">
                  <div className="commit">C</div>
                  <div className="commit">D</div>
                  <div className="commit">E</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Branching;