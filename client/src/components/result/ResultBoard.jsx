import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { studentsData } from "./data";

const ResultBoard = () => {
  const initialVal = [];
  const [students, setStudents] = useState(initialVal);

  // compare is required in sort function to sort students using their names.
  const compare = (iStudent, jStudent) => {
    const iName = iStudent.name.toLowerCase();
    const jName = jStudent.name.toLowerCase();
    if (iName > jName) return -1;
    else return 1;
  };

  // setTotalMarks sets "totalMarks" a new property for each student.
  const setTotalMarks = (students) => {
    return students.map((student) => {
      const mathsMarks = Number(student.marks["Maths"]);
      const englishMarks = Number(student.marks["English"]);
      const scienceMarks = Number(student.marks["Science"]);
      const totalMarks = mathsMarks + englishMarks + scienceMarks;
      student.totalMarks = totalMarks;
    });
  };

  // findTopperMarks returns marks of the topper.
  const findTopperMarks = (students) => {
    let topperMarks = 0;

    students.forEach((student) => {
      const totalMarks = student.totalMarks;
      if (totalMarks > topperMarks) {
        topperMarks = totalMarks;
      }
    });
    return topperMarks;
  };

  //setStatus set or add a new property "status" for each student. status can be one of those - Pass, Fail, Topper.
  const setStatus = (students) => {
    const topperMarks = findTopperMarks(students);

    return students.map((student) => {
      const mathsMarks = Number(student.marks["Maths"]);
      const englishMarks = Number(student.marks["English"]);
      const scienceMarks = Number(student.marks["Science"]);
      const totalMarks = mathsMarks + englishMarks + scienceMarks;
      if (mathsMarks < 20 || scienceMarks < 20 || englishMarks < 20) {
        student.status = "Fail";
      } else if (totalMarks === topperMarks) {
        student.status = "Topper";
      } else {
        student.status = "Pass";
      }
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = axios.get("/api/students");
    // console.log(res.data);
  };

  return (
    <table className="tableContainer">
      <thead>
        <tr>
          <th>Student Result Board</th>
        </tr>
      </thead>
      <thead>
        <tr>
          <th>Student Name</th>
          <th>Roll Number</th>
          <th>Total Marks</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => {
          return (
            <tr key={student.rollNumber}>
              <td>{student.name}</td>
              <td>{student.rollNumber}</td>
              <td>{student.totalMarks}</td>
              <td>{student.status}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ResultBoard;
