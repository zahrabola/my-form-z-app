import React from "react";

function Signup({ formdata, setFormData }) {
  return (
    <div className="P-info">

      <input
        type="text"
        placeholder="Email Address...."
        value={formdata.email}
        onChange={(event) =>
          setFormData({ ...formdata, email: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Password ...."
        value={formdata.password}
        onChange={(event) =>
          setFormData({ ...formdata, password: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Confirm Password..."
        value={formdata.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formdata, confirmPassword: event.target.value })
        }
      />
    </div>
  );
}

export default Signup;
