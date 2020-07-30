import React from "react";
import "./AdmissionForm.css";

const AdmissionForm = () => {
  return (
    <form className="form-container">
      <input
        type="text"
        placeholder="First Name e.g - Henry"
        pattern="[a - zA - Z]"
        maxLength="20"
        required
      />
      <input
        type="text"
        placeholder="Last Name e.g - Ford"
        pattern="[a-zA-Z]"
        maxLength="20"
        required
      />
      <input
        type="text"
        placeholder="Class e.g - 5A"
        pattern="[a-zA-Z0-9]"
        maxLength="5"
        required
      />
      <input
        type="text"
        placeholder="Passing Year e.g - 2010"
        pattern="[0-9]{4}"
        required
      />
      <input
        type="text"
        placeholder="Marks Percentage e.g - 89"
        pattern="[0-9]"
        maxLength="3"
        required
      />
      <input type="submit" />
    </form>
  );
};

export default AdmissionForm;
