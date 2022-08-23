import React from "react";

function Otherinfo({formdata, setFormData}) {
  return (
    <div className="P-info">
  
      <input
        type="text"
        placeholder="Nationality ...."
        value={formdata.nationality}
        onChange={(e) => {
          setFormData({ ...formdata, nationality: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Age ...."
        value={formdata.age}
        onChange={(e) => {
          setFormData({ ...formdata, age: e.target.value });
        }}
      />
    </div>
  );
}

export default Otherinfo;
