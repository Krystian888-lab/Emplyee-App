import React from 'react';
// import styles from './Employees.module.scss';
import '../../dev-assets/style.scss'


import Employee from './Employee/Employee';

const Employees = ({showSelectedEmployee, employees}) => {

        // Tu tworzeni są pracownicy, przerabiani są pracownicy z tablicy na obiekty javascript-owi
        // console.log(employees);
        
        const people = <ul className='o-row'> 
        {
        employees.map((employee, index) => {
            //zwracany komponent Employee
            return (<li key={employee.id}> <Employee name={employee.employee_name} showSelectedEmployee={showSelectedEmployee} id={employee.id}/>
            </li>);
        })
    }
        </ul>
    // do pojedyńczego  komponentu przekazywana dalej jest metoda showEmployeeHandler a nazwa propsa to: 'showSelectedEmployee'

        //Tu znajdują się pracownicy     
        return (
            // <div className='o-row'>
                <div className='o-col'> 
                <>
                {people} 
                </>
                </div>
                // </div>
            )
    }

export default Employees;