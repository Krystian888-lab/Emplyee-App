import React from 'react';
// import styles from './Employee.module.scss';
import '../../../dev-assets/style.scss'

const Employee = ({name,id,showSelectedEmployee}) => {

    console.log(name)
    return (
      // Tu w propsie potrzeba przekazać 'id'
      // <div className={styles.Employee} onClick={()=> showSelectedEmployee(id)}>Name: {name}</div>
      <div className='c-btn c-btn--light' onClick={()=> showSelectedEmployee(id)}>Name: {name}</div>
      );
  }

export default Employee;