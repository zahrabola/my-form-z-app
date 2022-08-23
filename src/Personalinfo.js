import React from "react";

function Personalinfo({ formdata, setFormData }) {
  return (
    <div className="P-info">
      <h1>Personal info</h1>
      <input type="text" placeholder="First Name ...." value={formdata.firstName} />
      <input type="text" placeholder="Last Name ...." value={formdata.lastName} />
      <input type="text" placeholder="Username ...." value={formdat.usernamea} />
    </div>
  );
}

export default Personalinfo;
