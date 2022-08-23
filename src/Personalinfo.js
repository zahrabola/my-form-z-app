import React from "react";

function Personalinfo({ formdata, setFormData }) {
  return (
    <div className="P-info">
    
      <input
        type="text"
        placeholder="First Name ...."
        value={formdata.firstName}
        onChange={(e) => {
          setFormData({ ...formdata, firstName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Last Name ...."
        value={formdata.lastName}
        onChange={(e) => {
          setFormData({ ...formdata, lastName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Username ...."
        value={formdata.username}
        onChange={(e) => {
          setFormData({ ...formdata, username: e.target.value });
        }}
      />
    </div>
  );
}

export default Personalinfo;
