import React, { Component } from 'react';
import './App.css';
import Employees from '../components/Employees/Employees';
import axios from 'axios';
import EmployeeDetails from '../components/Employees/EmployeeDetails/EmployeeDetails';

class App extends Component {

  state = {
    employees: [],
    selectedEmployee: null
  }

  componentDidMount(){
    axios.get('http://dummy.restapiexample.com/api/v1/employees', null)
    .then(response => {
      console.log(response);
      console.log(response.data.data);
      const firstTenEmployees = response.data.data;
      
      this.setState({employees: firstTenEmployees});
    });
  }

  showSelectedEmployeeHandler = (id) => {
    console.log("Employee nr: " + id);
    axios.get("http://dummy.restapiexample.com/api/v1/employee/" + id).then(
    response => {
      this.setState({
        selectedEmployee: response.data
      })
    }
    );
  }

  saveEmployeeHandler = () => {

    const employeeToSave = {
      name: "Maria123",
      salary: 4500,
      age: 25
    }

    axios.post("http://dummy.restapiexample.com/api/v1/create",employeeToSave).then(response => {
      console.log(response);
    });
  }

  deleteEmployeeHandler = () => {
    const id = 2;
    axios.delete("http://dummy.restapiexample.com/api/v1/delete/" + id).then(
      response => {
        console.log(response);
      }
    );
  }

  

  render() {

    let selectedEmployee = null;

    if(this.state.selectedEmployee !== null){
      selectedEmployee =
      <EmployeeDetails 
      name={this.state.selectedEmployee.employee_name}
      salary={this.state.selectedEmployee.employee_salary}
      age={this.state.selectedEmployee.employee_age}
      /> 
    }

    return (
      <div className='App'>
        {selectedEmployee}
        <h1>Employees</h1>
        <Employees employees={this.state.employees} showSlectedEmployee={this.showSelectedEmployeeHandler}/>
        <button onClick={this.saveEmployeeHandler} className="UpdateButton">Save Employee</button>
        <button onClick={this.deleteEmployeeHandler} className="UpdateButton">Delete Employee</button>
      </div>
    );
  }
}

export default App;