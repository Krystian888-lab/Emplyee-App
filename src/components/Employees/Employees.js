import React, { Component } from 'react';
import styles from './Employees.module.css';
import Employee from './Employee/Employee';

class Employees extends Component {
    render() {

        const employees = this.props.employees.map((employee, index) => {
            return (<Employee key={employee.id} name={employee.employee_name} showSelectedEmployee={this.props.showSelectedEmployee} id={employee.id}/>);
        });

        return (<div className={styles.Employees}>
            {employees}
        </div>)
    }
}

export default Employees;