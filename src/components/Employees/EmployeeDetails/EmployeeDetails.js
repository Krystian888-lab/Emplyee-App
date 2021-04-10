import React, {Component} from 'react';
import styles from './EmployeeDetails.module.css'


class EmployeeDetails extends Component {

    render(){

      return (
        <div className={styles.EmployeeDetails}>
          <div className={styles.EmployeeDetails}>Name: {this.props.name}</div>
          <div className={styles.EmployeeDetails}>Salary: {this.props.salary}</div>
          <div className={styles.EmployeeDetails}>Age: {this.props.age}</div>
        </div>
      )
    }
}

export default EmployeeDetails;