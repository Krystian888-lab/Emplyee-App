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
      const firstTenEmployees = response.data.slice(0,10);
      
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

  render() {

    let selectedEmployee = null;

    if(this.state.selectedEmployee !== null){
      selectedEmployee = <EmployeeDetails 
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
      </div>
    );
  }
}

export default App;