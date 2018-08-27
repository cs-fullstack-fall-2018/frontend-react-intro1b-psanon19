import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import StudentList from "./StudentList";

class App extends Component {
  render() {
    return (
        <div className="App">
            <p>School Time</p>
            <StudentList schoolInfo = {
                [{firstName:"Pelane",grade:97},
                    {firstName:"Caleb",grade:65}]
            }/> </div>
    );
  }
}

export default App;
