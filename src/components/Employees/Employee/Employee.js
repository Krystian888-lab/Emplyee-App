import React from 'react';
import styles from './Employee.module.css';

const Employee = ({name,id,showSelectedEmployee}) => {

    console.log(name)
    return (
      // Tu w propsie potrzeba przekazać 'id'
      <div className={styles.Employee} onClick={()=> showSelectedEmployee(id)}>Name: {name}</div>
      );
  }

export default Employee;