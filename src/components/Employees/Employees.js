import React from 'react';
// import styles from './Employees.module.scss';
import '../../dev-assets/style.scss'


import Employee from './Employee/Employee';

const Employees = ({showSelectedEmployee, employees}) => {

        // Tu tworzeni są pracownicy, przerabiani są pracownicy z tablicy na obiekty javascript-owi
        // console.log(employees);
        
        const people = employees.map((employee, index) => {
            //zwracany komponent Employee
            return (<Employee key={employee.id} name={employee.employee_name} showSelectedEmployee={showSelectedEmployee} id={employee.id}/>);
            // do pojedyńczego  komponentu przekazywana dalej jest metoda showEmployeeHandler a nazwa propsa to: 'showSelectedEmployee'
        });

        //Tu znajdują się pracownicy     
        return (
            <div className='o-row'>
                <div className='o-col o-col--md50 o-col--lg25'> 
                {people} 
                </div>
            </div>)
    }

export default Employees;