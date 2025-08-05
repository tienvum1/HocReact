import React from "react";
import "./git.css";
import PushCodeToGit from "./pushCodeToGit/PushCodeToGit";
const git = () => {
  return (
    <div className="git">
      <h1>
        Tuyệt vời! Việc học Git là cực kỳ quan trọng đối với lập trình viên, đặc
        biệt khi làm việc nhóm hoặc quản lý dự án. Mình sẽ hướng dẫn bạn từ A
        đến Z các bước học Git, kèm ví dụ thực tế, có code và cách push lên
        GitHub và pull code từ GitHub về máy
      </h1>
      <PushCodeToGit />
    </div>
  );
};

export default git;
