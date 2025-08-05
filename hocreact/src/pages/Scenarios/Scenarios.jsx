import React, { useState } from 'react';
import './Scenarios.css';

/**
 * Trang hiển thị các tình huống thực tế khi sử dụng Git
 * Bao gồm các vấn đề thường gặp và cách giải quyết
 */
const Scenarios = () => {
  const [activeScenario, setActiveScenario] = useState(0);
  const [expandedSolution, setExpandedSolution] = useState(null);

  // Danh sách các tình huống thực tế
  const scenarios = [
    {
      id: 1,
      title: "🚨 Commit nhầm file không mong muốn",
      problem: "Bạn đã commit file .env hoặc node_modules vào repository",
      difficulty: "Dễ",
      category: "Commit",
      situation: {
        description: "Bạn vừa chạy git add . và git commit mà không kiểm tra kỹ, kết quả là các file nhạy cảm như .env, node_modules, hoặc file build đã được commit.",
        impact: "Có thể làm lộ thông tin bảo mật hoặc làm repository trở nên nặng nề"
      },
      solutions: [
        {
          method: "Unstage file trước khi commit",
          commands: [
            "git reset HEAD <file>",
            "git commit -m 'Your message'"
          ],
          explanation: "Nếu bạn chưa commit, hãy unstage file không mong muốn"
        },
        {
          method: "Xóa file khỏi commit cuối",
          commands: [
            "git reset --soft HEAD~1",
            "git reset HEAD <file>",
            "git commit -m 'Your message'"
          ],
          explanation: "Quay lại commit trước đó và loại bỏ file không mong muốn"
        },
        {
          method: "Sử dụng .gitignore",
          commands: [
            "echo 'node_modules/' >> .gitignore",
            "echo '.env' >> .gitignore",
            "git rm --cached <file>",
            "git commit -m 'Remove ignored files'"
          ],
          explanation: "Thêm file vào .gitignore và xóa khỏi tracking"
        }
      ],
      prevention: [
        "Luôn kiểm tra git status trước khi commit",
        "Sử dụng .gitignore từ đầu dự án",
        "Dùng git add <specific-file> thay vì git add ."
      ]
    },
    {
      id: 2,
      title: "🔄 Conflict khi merge branch",
      problem: "Xuất hiện conflict khi merge branch feature vào main",
      difficulty: "Trung bình",
      category: "Merge",
      situation: {
        description: "Bạn đang làm việc trên branch feature, trong khi đó có người khác đã thay đổi cùng file trên branch main. Khi merge sẽ xuất hiện conflict.",
        impact: "Code không thể merge tự động, cần can thiệp thủ công"
      },
      solutions: [
        {
          method: "Giải quyết conflict thủ công",
          commands: [
            "git checkout main",
            "git pull origin main",
            "git checkout feature-branch",
            "git merge main",
            "# Sửa conflict trong editor",
            "git add .",
            "git commit -m 'Resolve merge conflict'"
          ],
          explanation: "Merge main vào feature branch trước, giải quyết conflict, rồi merge ngược lại"
        },
        {
          method: "Sử dụng rebase",
          commands: [
            "git checkout feature-branch",
            "git rebase main",
            "# Sửa conflict nếu có",
            "git add .",
            "git rebase --continue",
            "git checkout main",
            "git merge feature-branch"
          ],
          explanation: "Rebase tạo lịch sử commit sạch hơn"
        },
        {
          method: "Sử dụng merge tool",
          commands: [
            "git config --global merge.tool vimdiff",
            "git mergetool",
            "git commit -m 'Resolve conflict with mergetool'"
          ],
          explanation: "Sử dụng công cụ merge trực quan"
        }
      ],
      prevention: [
        "Thường xuyên pull main vào feature branch",
        "Chia nhỏ feature thành các commit nhỏ",
        "Communicate với team về file đang làm việc"
      ]
    },
    {
      id: 3,
      title: "⏪ Muốn quay lại commit trước đó",
      problem: "Commit mới có bug, cần quay lại phiên bản ổn định",
      difficulty: "Trung bình",
      category: "Reset",
      situation: {
        description: "Sau khi deploy, bạn phát hiện commit mới có bug nghiêm trọng. Cần quay lại commit trước đó ngay lập tức.",
        impact: "Ứng dụng có thể bị lỗi, ảnh hưởng đến user"
      },
      solutions: [
        {
          method: "Soft reset (giữ lại changes)",
          commands: [
            "git log --oneline",
            "git reset --soft HEAD~1",
            "# Sửa code",
            "git commit -m 'Fix bug'"
          ],
          explanation: "Quay lại commit trước nhưng giữ lại thay đổi để sửa"
        },
        {
          method: "Hard reset (xóa hết changes)",
          commands: [
            "git log --oneline",
            "git reset --hard HEAD~1",
            "git push --force-with-lease origin main"
          ],
          explanation: "Xóa hoàn toàn commit có bug (nguy hiểm!)"
        },
        {
          method: "Revert (tạo commit mới)",
          commands: [
            "git log --oneline",
            "git revert <commit-hash>",
            "git push origin main"
          ],
          explanation: "Tạo commit mới để undo thay đổi (an toàn hơn)"
        }
      ],
      prevention: [
        "Test kỹ trước khi commit",
        "Sử dụng CI/CD để test tự động",
        "Code review trước khi merge"
      ]
    },
    {
      id: 4,
      title: "🔐 Quên push, đồng nghiệp đã push trước",
      problem: "Local branch đã commit nhưng remote đã có commit mới",
      difficulty: "Dễ",
      category: "Push",
      situation: {
        description: "Bạn làm việc offline và commit local. Khi push thì báo lỗi vì đồng nghiệp đã push commit mới lên remote.",
        impact: "Không thể push được, cần sync với remote trước"
      },
      solutions: [
        {
          method: "Pull và merge",
          commands: [
            "git pull origin main",
            "# Giải quyết conflict nếu có",
            "git push origin main"
          ],
          explanation: "Kéo thay đổi mới về và merge với local"
        },
        {
          method: "Pull với rebase",
          commands: [
            "git pull --rebase origin main",
            "# Giải quyết conflict nếu có",
            "git rebase --continue",
            "git push origin main"
          ],
          explanation: "Rebase local commits lên trên remote commits"
        },
        {
          method: "Fetch và merge thủ công",
          commands: [
            "git fetch origin",
            "git merge origin/main",
            "git push origin main"
          ],
          explanation: "Kiểm soát quá trình merge tốt hơn"
        }
      ],
      prevention: [
        "Push thường xuyên",
        "Pull trước khi bắt đầu làm việc",
        "Communicate với team về timeline"
      ]
    },
    {
      id: 5,
      title: "🗑️ Xóa nhầm branch quan trọng",
      problem: "Đã xóa branch có code quan trọng chưa merge",
      difficulty: "Khó",
      category: "Recovery",
      situation: {
        description: "Bạn vô tình xóa branch feature có nhiều code quan trọng chưa được merge vào main.",
        impact: "Mất code, có thể mất nhiều ngày công việc"
      },
      solutions: [
        {
          method: "Khôi phục từ reflog",
          commands: [
            "git reflog",
            "git checkout -b recovered-branch <commit-hash>",
            "git push origin recovered-branch"
          ],
          explanation: "Git reflog lưu lại lịch sử tất cả thao tác"
        },
        {
          method: "Khôi phục từ remote",
          commands: [
            "git fetch origin",
            "git checkout -b recovered-branch origin/deleted-branch"
          ],
          explanation: "Nếu branch đã được push lên remote"
        },
        {
          method: "Tìm trong stash",
          commands: [
            "git stash list",
            "git stash show -p stash@{0}",
            "git stash apply stash@{0}"
          ],
          explanation: "Kiểm tra xem có code trong stash không"
        }
      ],
      prevention: [
        "Luôn push branch lên remote",
        "Double-check trước khi xóa branch",
        "Sử dụng git branch -d thay vì -D"
      ]
    },
    {
      id: 6,
      title: "📝 Sửa commit message đã push",
      problem: "Commit message có lỗi chính tả hoặc không rõ ràng",
      difficulty: "Trung bình",
      category: "Amend",
      situation: {
        description: "Bạn đã push commit với message có lỗi chính tả hoặc không mô tả đúng nội dung thay đổi.",
        impact: "Lịch sử commit không rõ ràng, khó theo dõi"
      },
      solutions: [
        {
          method: "Amend commit cuối (chưa push)",
          commands: [
            "git commit --amend -m 'New commit message'"
          ],
          explanation: "Chỉ dùng khi chưa push lên remote"
        },
        {
          method: "Amend và force push",
          commands: [
            "git commit --amend -m 'New commit message'",
            "git push --force-with-lease origin main"
          ],
          explanation: "Nguy hiểm! Chỉ dùng khi làm việc một mình"
        },
        {
          method: "Tạo commit mới để clarify",
          commands: [
            "git commit --allow-empty -m 'Clarification: previous commit did X'"
          ],
          explanation: "An toàn hơn, tạo commit rỗng để giải thích"
        }
      ],
      prevention: [
        "Viết commit message cẩn thận",
        "Sử dụng template cho commit message",
        "Review commit trước khi push"
      ]
    }
  ];

  /**
   * Xử lý khi click vào scenario
   */
  const handleScenarioClick = (index) => {
    setActiveScenario(index);
    setExpandedSolution(null);
  };

  /**
   * Toggle solution expansion
   */
  const toggleSolution = (index) => {
    setExpandedSolution(expandedSolution === index ? null : index);
  };

  /**
   * Copy command to clipboard
   */
  const copyCommand = (command) => {
    navigator.clipboard.writeText(command);
    // Có thể thêm toast notification
  };

  /**
   * Get difficulty color
   */
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Dễ': return '#2ecc71';
      case 'Trung bình': return '#f39c12';
      case 'Khó': return '#e74c3c';
      default: return '#95a5a6';
    }
  };

  return (
    <div className="scenarios">
      {/* Header */}
      <div className="scenarios-header">
        <h1>🎯 Tình huống thực tế với Git</h1>
        <p>Học cách giải quyết các vấn đề thường gặp khi sử dụng Git trong dự án thực tế</p>
      </div>

      <div className="scenarios-container">
        {/* Sidebar - Danh sách scenarios */}
        <div className="scenarios-sidebar">
          <h3>📋 Danh sách tình huống</h3>
          {scenarios.map((scenario, index) => (
            <div
              key={scenario.id}
              className={`scenario-item ${activeScenario === index ? 'active' : ''}`}
              onClick={() => handleScenarioClick(index)}
            >
              <div className="scenario-header">
                <h4 className="scenario-title">{scenario.title}</h4>
                <div className="scenario-meta">
                  <span 
                    className="difficulty-badge"
                    style={{ backgroundColor: getDifficultyColor(scenario.difficulty) }}
                  >
                    {scenario.difficulty}
                  </span>
                  <span className="category-badge">{scenario.category}</span>
                </div>
              </div>
              <p className="scenario-problem">{scenario.problem}</p>
            </div>
          ))}
        </div>

        {/* Main content - Chi tiết scenario */}
        <div className="scenario-detail">
          {scenarios[activeScenario] && (
            <div className="detail-content">
              {/* Situation */}
              <section className="situation-section">
                <h2>🔍 Tình huống</h2>
                <div className="situation-card">
                  <h3>{scenarios[activeScenario].title}</h3>
                  <p className="situation-description">
                    {scenarios[activeScenario].situation.description}
                  </p>
                  <div className="impact-box">
                    <strong>⚠️ Tác động:</strong> {scenarios[activeScenario].situation.impact}
                  </div>
                </div>
              </section>

              {/* Solutions */}
              <section className="solutions-section">
                <h2>💡 Cách giải quyết</h2>
                <div className="solutions-list">
                  {scenarios[activeScenario].solutions.map((solution, index) => (
                    <div key={index} className="solution-card">
                      <div 
                        className="solution-header"
                        onClick={() => toggleSolution(index)}
                      >
                        <h4>{solution.method}</h4>
                        <span className={`expand-icon ${expandedSolution === index ? 'expanded' : ''}`}>
                          ▼
                        </span>
                      </div>
                      
                      {expandedSolution === index && (
                        <div className="solution-content">
                          <p className="solution-explanation">{solution.explanation}</p>
                          <div className="commands-container">
                            <h5>📝 Các lệnh cần chạy:</h5>
                            {solution.commands.map((command, cmdIndex) => (
                              <div key={cmdIndex} className="command-line">
                                <code>{command}</code>
                                <button 
                                  className="copy-btn"
                                  onClick={() => copyCommand(command)}
                                  title="Copy command"
                                >
                                  📋
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Prevention */}
              <section className="prevention-section">
                <h2>🛡️ Cách phòng tránh</h2>
                <ul className="prevention-list">
                  {scenarios[activeScenario].prevention.map((tip, index) => (
                    <li key={index} className="prevention-item">
                      <span className="prevention-icon">✅</span>
                      <span className="prevention-text">{tip}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Scenarios;