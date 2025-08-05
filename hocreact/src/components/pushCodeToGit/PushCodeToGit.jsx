import React from "react";

const PushCodeToGit = () => {
  return (
    <div className="pushCodeToGit">
      <h1>
        To push your code to Git, make sure the code is on your laptop and then
        follow these steps.
      </h1>
      <h2>Step 1: Initialize Git in your project folder using git init</h2>
      <h2>Step 2: Follow file : git status</h2>
      <h2>Step 3: Add code : git add . </h2>
      <h2>Step 4: Commit file : git commit -m "Your comment"</h2>
      <h2>
        Step 5: Connect git by https : git remote add origin
        https://github.com/tienvum1/HocReact.git{" "}
      </h2>
      <h2>Step 6: Push code : git push</h2>
      <h2>Step 7:  </h2>
    </div>
  );
};
export default PushCodeToGit;
