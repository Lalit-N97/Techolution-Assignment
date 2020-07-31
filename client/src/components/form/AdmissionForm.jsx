import React from "react";
import "./AdmissionForm.css";
import { useState } from "react";
import { useEffect } from "react";

const AdmissionForm = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState("");
  const [Class, setClass] = useState("");
  const [year, setYear] = useState("");
  const [marks, setMarks] = useState("");

  const [isValidFirstName, setIsValidFirstName] = useState(false);
  const [isValidLastName, setIsValidLastName] = useState(false);
  const [isValidClass, setIsValidClass] = useState(false);
  const [isValidYear, setIsValidYear] = useState(false);
  const [isValidMarks, setIsValidMarks] = useState(false);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setIsValid(
      isValidFirstName &&
        isValidLastName &&
        isValidClass &&
        isValidMarks &&
        isValidYear
    );
  }, [
    isValidFirstName,
    isValidLastName,
    isValidClass,
    isValidYear,
    isValidMarks,
  ]);

  const reset = () => {
    setFirstName("");
    setLastName("");
    setClass("");
    setYear("");
    setMarks("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Successfully Submitted!");
    reset();
  };

  const changeFirstName = (e) => {
    e.preventDefault();
    setFirstName(e.target.value);
    const regex = /^[a-zA-Z]{1,20}$/;
    if (regex.test(e.target.value)) {
      e.target.setCustomValidity("");
      setIsValidFirstName(true);
    } else {
      e.target.setCustomValidity(
        "first name should contain only english alphabet with length <= 20"
      );
      setIsValidFirstName(false);
    }
  };

  const changeLastName = (e) => {
    e.preventDefault();
    setLastName(e.target.value);
    const regex = /^[a-zA-Z]{1,20}$/;
    if (regex.test(e.target.value)) {
      e.target.setCustomValidity("");
      setIsValidLastName(true);
    } else {
      e.target.setCustomValidity(
        "should contain only english alphabet with length <= 20"
      );
      setIsValidLastName(false);
    }
  };

  const changeClass = (e) => {
    e.preventDefault();
    setClass(e.target.value);
    const regex = /^[a-zA-Z0-9]{2,5}$/;
    if (regex.test(e.target.value)) {
      e.target.setCustomValidity("");
      setIsValidClass(true);
    } else {
      e.target.setCustomValidity(
        "alphanumeric string is accepted between 2 to 5 length"
      );
      setIsValidClass(false);
    }
  };

  const changeYear = (e) => {
    e.preventDefault();
    setYear(e.target.value);
    const regex = /^[0-9]{4}$/;
    const val = Number(e.target.value);
    if (regex.test(e.target.value) && val <= 2017) {
      e.target.setCustomValidity("");
      setIsValidYear(true);
    } else {
      e.target.setCustomValidity("year should be less than 2018");
      setIsValidYear(false);
    }
  };

  const changeMarks = (e) => {
    e.preventDefault();
    setMarks(e.target.value);
    const regex = /^[0-9]{1,3}$/;
    const val = Number(e.target.value);
    if (regex.test(e.target.value) && val <= 100) {
      e.target.setCustomValidity("");
      setIsValidMarks(true);
    } else {
      e.target.setCustomValidity(
        "marks should be less than 100 and greater than 0"
      );
      setIsValidMarks(false);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        id="firstName"
        type="text"
        placeholder="First Name e.g - Henry"
        title="only english letters with maximum length 20 is allowed"
        required
        value={firstName}
        onChange={changeFirstName}
      />
      <input
        id="lastName"
        type="text"
        placeholder="Last Name e.g - Ford"
        title="only english letters with maximum length 20 is allowed"
        required
        value={lastName}
        onChange={changeLastName}
      />
      <input
        id="class"
        type="text"
        placeholder="Class e.g - 5A"
        title="other than english alphabets and digits characters are not allowed and maxlength should be 5"
        required
        value={Class}
        onChange={changeClass}
      />
      <input
        id="year"
        type="text"
        placeholder="Passing Year e.g - 2010"
        title="only year less than 2017 is allowed with no other characters"
        required
        value={year}
        onChange={changeYear}
      />
      <input
        id="marks"
        type="text"
        placeholder="Marks Percentage e.g - 89"
        title="only number <= 100 is allowed and should be non-negative."
        required
        value={marks}
        onChange={changeMarks}
      />
      {isValid && <input className="proceed" type="submit" value="Proceed" />}
      {!isValid && (
        <input disabled type="submit" value="invalid inputs can't Proceed" />
      )}
    </form>
  );
};

export default AdmissionForm;
