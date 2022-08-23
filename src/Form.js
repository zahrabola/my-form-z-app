import React, { useState } from "react";
import Otherinfo from "./Otherinfo";
import Personalinfo from "./Personalinfo";
import Signup from "./Signup";

function Form() {

const  [page, setPage] = useState(0);
const [formdata, setFormData] = useState({
  email: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
  username: "",
  nationality: "",
  age: "",
});




const FormName =["Sign Up", "Personal Information", "Other Information"];

const PageDispalay = () => {
    if (page === 0){
        return <Signup formdata={formdata} setFormData={setFormData}    />;
    } else if (page === 1) {
        return <Personalinfo formdata={formdata} setFormData={setFormData} />;
    } else {
        return <Otherinfo formdata={formdata} setFormData={setFormData} />;
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
        </div>

        <div className="form-container">
          <div className="header">{FormName[page]}</div>
          <div className="body">{PageDispalay()}</div>
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
              ///disabled={page === FormName.length - 1}
              onClick={() => {
                if (page === FormName.length - 1) {
                  alert("Form Submitted");
                  console.log(formdata);
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === FormName.length - 1 ? "Submit" : "  Next"}
    
            </button>
          </div>
        </div>
      
    </div>
  );
}

export default Form;
