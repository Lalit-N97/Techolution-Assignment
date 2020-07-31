import React, { Component } from "react";
import axios from "axios";
import "./StudentResultBoard.css";

class StudentResultBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
    this.compare = this.compare.bind(this);
    this.setTotalMarks = this.setTotalMarks.bind(this);
    this.findTopperMarks = this.findTopperMarks.bind(this);
    this.setStatus = this.setStatus.bind(this);
  }

  async componentDidMount() {
    const { data } = await axios.get("/api/students");
    // studentsData is the array of students info in our API
    this.setState({ students: data.studentsData });
    // console.log(this.state);
    this.state.students.sort(this.compare);
    this.setTotalMarks(this.state.students);
    this.setStatus(this.state.students);
    this.setState(this.state);
  }

  // compare is required in sort function to sort students using their names.
  compare = (iStudent, jStudent) => {
    const iName = iStudent.name.toLowerCase();
    const jName = jStudent.name.toLowerCase();
    if (iName > jName) return 1;
    else return -1;
  };

  // setTotalMarks sets "totalMarks" a new property for each student.
  setTotalMarks = (students) => {
    return students.map((student) => {
      const mathsMarks = Number(student.marks["Maths"]);
      const englishMarks = Number(student.marks["English"]);
      const scienceMarks = Number(student.marks["Science"]);
      const totalMarks = mathsMarks + englishMarks + scienceMarks;
      student.totalMarks = totalMarks;
    });
  };

  // findTopperMarks returns marks of the topper.
  findTopperMarks = (students) => {
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
  setStatus = (students) => {
    const topperMarks = this.findTopperMarks(students);

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

  render() {
    return (
      <table className="tableContainer">
        <thead className="table-heading">
          <tr>
            <th colSpan="4">Student Result Board</th>
          </tr>
        </thead>
        <thead className="table-subHeading">
          <tr>
            <th>Student Name</th>
            <th>Roll Number</th>
            <th>Total Marks</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {this.state.students.map((student) => {
            if (student.status === "Topper") {
              return (
                <tr key={student.rollNumber} className="green">
                  <td>
                    {student.name[0].toUpperCase() + student.name.slice(1)}
                  </td>
                  <td>{student.rollNumber}</td>
                  <td>{student.totalMarks}</td>
                  <td>{student.status}</td>
                </tr>
              );
            } else if (student.status === "Fail") {
              return (
                <tr key={student.rollNumber} className="red">
                  <td>
                    {student.name[0].toUpperCase() + student.name.slice(1)}
                  </td>
                  <td>{student.rollNumber}</td>
                  <td>{student.totalMarks}</td>
                  <td>{student.status}</td>
                </tr>
              );
            } else {
              return (
                <tr key={student.rollNumber}>
                  <td>
                    {student.name[0].toUpperCase() + student.name.slice(1)}
                  </td>
                  <td>{student.rollNumber}</td>
                  <td>{student.totalMarks}</td>
                  <td>{student.status}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    );
  }
}

export default StudentResultBoard;
