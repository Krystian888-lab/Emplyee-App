import React from 'react';
import styles from './Employee.module.css';

const Employee = ({name}) => {

    console.log(name)
    return (
      <div className={styles.Employee} onClick={()=> showSelectedEmployee(id)}>Name: {name}</div>
      );
  }

export default Employee;