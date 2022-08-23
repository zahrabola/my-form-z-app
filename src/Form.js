import React, { useState } from "react";
import Otherinfo from "./otherinfo";
import Personalinfo from "./Personalinfo";
import Signup from "./Signup";

function Form() {

const  [page, setPage] = useState(0);
const FormName =["Sign Up", "Personal Information", "Other Information"];

const PageDispalay = () => {
    if (page === 0){
        return <Signup />;
    } else if (page === 1) {
        return <Personalinfo />;
    } else {
        return <Otherinfo/>;
    }
}



  return (
    <div className="form">
      <div className="progressionbar">
        <div
          style={{
            width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
          }}
        ></div>

        <div className="form-container">
          <div className="header">{FormName[page]}</div>
          <div className="body">{PageDispalay ()}</div>
          <div className="footer">
            <button
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Prev{" "}
            </button>
            <button
              disabled={page === FormName.length - 1}
              onClick={() => {
                setPage((currPage) => currPage + 1);
              }}
            >
              Next{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
