import React, {useState, useEffect } from 'react';
import './App.css';
import Employees from '../components/Employees/Employees';
import axios from 'axios';
import EmployeeDetails from '../components/Employees/EmployeeDetails/EmployeeDetails';
// Pobieranie danych z komponetu Reacta wymaga zastosaowania zaczepów useState, useEffect

const App = () => {
  // Zaczep useState służy do przechowywania odpowiedzi w danych 
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null); // w SelectedEmployee przechowywana jest informacja o jednym konkretnym pracowniku, dopóki żaden nie zostanie wybrany będzie wyświetlany 'null'

  // Zaczep useEffect służy do wykonania żądania
  useEffect(()=> {   
    // Na adres puszczam żądanie GET aby dostać listę z pracownikami, która będzie zapisywana w stacie App, która będzie przekazywana do komponentu <Employees/>, najpierw komponenty się wyrenderują a potem zostanie puszczone zapytanie HTTP, po otrzymaniu odpowiedzi asynchronicznie zaktualizuje się nasz stan
    fetch('http://dummy.restapiexample.com/api/v1/employees', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      })
    })
    .then(res => {
      res.json()
    })
    .then(res => {
      console.log(res);
      console.log(res.data.data);

      const employeeArray = response.data.data;
      // W stałek employees zapisuje to co nam zwraca ta metoda
      setEmployees({employees: employeeArray});
      // Teraz pracownicy z  początkowego stanu tablicy 'useState' employees -> zostają przypsiani do stałej employeeArray
    })
    .catch(error => console.log(error))
  })

  // Metoda która będzie się wywoływała po wciśnięciu jednego pracownika (wciśnięciu jednego przycisku), przekazywane jest do niej id bo endpoint wymaga id
  const showSelectedEmployeeHandler = (id) => {
    console.log("Employee nr: " + id);
    fetch("http://dummy.restapiexample.com/api/v1/employee/" + id , {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      })
    })
    .then(res => {
      res.json()
    })
    .then(response => {
      // po przekazaniu argumentu z żądania metoda then określa co ma się stać kiedy otrzyma odpowiedź, która po otrzymaniu przypiszemy do funkcji w stacie 
      setSelectedEmployee({
        selectedEmployee: response.data.data
        //Tutaj zaszeregowane będą dane dotyczą imienia, wieku itd.
      });
    });
  }

  const saveEmployeeHandler = () => {
    const employeeToSave = {
      "name": "Maria123",
      "salary": "4500",
      "age": "25"
    }

    fetch("http://dummy.restapiexample.com/api/v1/create",
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/json' ,
      },
      body: {"name":"test","salary":"123","age":"23"},
    }
      ).then(response => {
      console.log(response);
    });
  }

  deleteEmployeeHandler = () => {
    const id = 2;
    axios.delete("http://dummy.restapiexample.com/api/v1/delete/" + id).then(
      response => {
        console.log(response);
      }
    );
  }
  // Sprawdzenie aktualnej wartości selectedEmployee, jeżeli będzie różna od zera , to będzie tworzony komponent EmplyeeDetails
  if(setSelectedEmployee() !== null){ 
    return (
    selectedEmployee = <EmployeeDetails 
    name={selectedEmployee.employee_name}
    salary={selectedEmployee.employee_salary}
    age={selectedEmployee.employee_age}
    /> )
  }
  return (

// W <Employees/> odwołuje się do stat-a employess
// Dopóki żadne pracownik nie zostanie wybrany będzie wyświetlany null ze stat-a
      <div className='App'> 
        {selectedEmployee}
        <h1>Employees</h1>
      
        <Employees employees={employees} showSelectedEmployee={showSelectedEmployeeHandler}/>
        <button onClick={saveEmployeeHandler} className="UpdateButton">Save Employee</button>
        <button onClick={deleteEmployeeHandler} className="UpdateButton">Delete Employee</button>
      </div>
        // W propsach przekazywana jest metoda showSelectedEmployeeHandler nazwa propsa to: 'showSelectedEmployee' 
        // metoda showSelectedEmployeeHandler przekazywana jest do komponentu employees
    );
  }


export default App;