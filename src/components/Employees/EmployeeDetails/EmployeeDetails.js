import React from 'react';
import '../../../dev-assets/style.scss'

// import styles from './EmployeeDetails.module.scss';


const EmployeeDetails = ({name, salary, age}) => {

      return (
        <section className='t-promoted'>
        <div className='t-promoted__btn'>
          <div className='t-promoted__content'>
            Name: {name}</div>
          <div className='t-promoted__content'>
            Salary: {salary}</div>
          <div className='t-promoted__content'>
            Age: {age}</div>
        </div>
        </section>
      )
    }

export default EmployeeDetails;