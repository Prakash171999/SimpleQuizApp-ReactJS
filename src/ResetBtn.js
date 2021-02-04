import React from "react";

const ResetBtn = () => {

  const resetHandleEvent = () => {
    window.location.reload();
  };
  
  return (
    <div>
      <button className="reset-btn" onClick={resetHandleEvent}>Reset</button>
    </div>
  );
};

export default ResetBtn;
