import React, { Component } from 'react';
import NavBar from './components/Navbar'
import Employees from './components/Employees'
import './App.css';

class App extends Component{
  render(){
    return (
      <div>
        <NavBar /><br></br>
        <Employees/>
      </div> 
    );
  }
}

export default App;
