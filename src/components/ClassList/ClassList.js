import React, { Component } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

export default class ClassList extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://localhost:3005/students?class=${this.props.match.params.class}`
      )
      .then((res) => {
        console.log(res.data)
        this.setState({
          students: res.data,
        });
        // .catch(err => console.log(err))
      });
  }

  render() {
    console.log(this.state.students)
    const mappedStudents = this.state.students.map((student, index) => {
      return (
        <Link to={`/student/${student.id}`}>
          <h3 key={index}>
            {student.first_name} {student.last_name}{" "}
          </h3>
        </Link>
      );
    });

    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {mappedStudents}
      </div>
    );
  }
}
