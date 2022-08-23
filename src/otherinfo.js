import React from "react";

function Otherinfo({formdata, setFormData}) {
  return (
    <div className="P-info">
      <h1>Personal info</h1>
      <input type="text" placeholder="Nationality ...." />
      <input type="text" placeholder="Age ...." />
    </div>
  );
}

export default Otherinfo;
