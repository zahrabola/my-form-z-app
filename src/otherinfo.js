import React from "react";

function Otherinfo({formdata, setFormData}) {
  return (
    <div className="P-info">
      <h1>Personal info</h1>
      <input
        type="text"
        placeholder="Nationality ...."
        value={formdata.nationality}
      />
      <input type="text" placeholder="Age ...." value={formdata.age} />
    </div>
  );
}

export default Otherinfo;
