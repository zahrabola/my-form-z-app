import React from "react";

function Form() {
  return (
    <div className="form">
      <h1>form </h1>
      <div className="progressionbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>

        <div className="form-container">
          <div className="header">Title</div>
          <div className="body">Body info</div>
          <div className="footer">
            <button>Prev </button>
            <button>Next </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
