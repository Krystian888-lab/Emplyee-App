import React from 'react';
import styles from './EmployeeDetails.module.scss';


const EmployeeDetails = ({name, salary, age}) => {

      return (
        <div className={styles.EmployeeDetailsDiv}>
          <div className={styles.EmployeeDetailsDiv}>
            Name: {name}</div>
          <div className={styles.EmployeeDetailsDiv}>
            Salary: {salary}</div>
          <div className={styles.EmployeeDetailsDiv}>
            Age: {age}</div>
        </div>
      )
    }

export default EmployeeDetails;