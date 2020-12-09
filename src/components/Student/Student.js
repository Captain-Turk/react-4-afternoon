import axios from 'axios';
import React, { Component } from 'react';

export default class Student extends Component {
  constructor() {
    super()
    this.state = {
      studentInfo: {}
    }

  }

  componentDidMount(){
    axios.get(`http://localhost:3005/students/${this.props.match.params.id}`)
    .then(res => {
      this.setState({
        studentInfo: res.data
      })
      // .catch(err=> console.log(err))
    })
  }

  render() {
    const {first_name, last_name, grade, email} = this.state.studentInfo
    return (
      <div className="box">
        <h1>{first_name} {last_name} </h1>
        <h3>Grade: {grade} </h3>
        <h3>Email: {email} </h3>

      </div>
    )
  }
}