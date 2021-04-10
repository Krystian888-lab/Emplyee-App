import React, { Component } from 'react';
import styles from './Employee.module.css';



class Employee extends Component {


  render() {
    
    return (
      <div className={styles.Employee} onClick={()=> {this.props.showSelectedEmployee(this.props.id)}}>Name: {this.props.name}</div>
      );
  }

}



export default Employee;