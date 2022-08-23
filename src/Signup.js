import React from "react";

function Signup({ formdata, setFormData }) {
  return (
    <div className="P-info">
      <h1>Sign Up</h1>
      <input type="text" placeholder="Email Address...." value={formdata.email} />
      <input type="text" placeholder="Password ...." value={formdata.password} />
      <input type="text" placeholder="Confirm Password ...." value={formdata} />
    </div>
  );
}

export default Signup;
