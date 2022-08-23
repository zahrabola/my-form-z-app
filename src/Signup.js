import React from "react";

function Signup({ formdata, setFormData }) {
  return (
    <div className="P-info">
      <h1>Sign Up</h1>
      <input type="text" placeholder="Email Address...." />
      <input type="text" placeholder="Password ...." />
      <input type="text" placeholder="Confirm Password ...." />
    </div>
  );
}

export default Signup;
