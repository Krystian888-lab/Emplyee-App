import React, {useState, useEffect } from 'react';
import '../dev-assets/style.scss';
import Employees from '../components/Employees/Employees';
import EmployeeDetails from '../components/Employees/EmployeeDetails/EmployeeDetails';
// Pobieranie danych z komponetu Reacta wymaga zastosaowania zaczepów useState, useEffect

const App = () => {
  // Zaczep useState służy do przechowywania odpowiedzi w danych 
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null); // w SelectedEmployee przechowywana jest informacja o jednym konkretnym pracowniku, dopóki żaden nie zostanie wybrany będzie wyświetlany 'null'

  // Zaczep useEffect służy do wykonania żądania
  useEffect(()=> {   
    // Na adres puszczam żądanie GET aby dostać listę z pracownikami, która będzie zapisywana w stacie App, która będzie przekazywana do komponentu <Employees/>, najpierw komponenty się wyrenderują a potem zostanie puszczone zapytanie HTTP, po otrzymaniu odpowiedzi asynchronicznie zaktualizuje się nasz stan
    // (fetch = sprowadzać)
    fetch('http://dummy.restapiexample.com/api/v1/employees', {
      method: 'GET',
      // headers: {
      //   'Content-Type': 'application/json'
      // },
      // body: JSON.stringify({

      // })
    })
    .then(res => res.json())
    .then(res => {
      console.log(res.data);
      console.log(res.status);

      const employeeArray = res.data;
      console.log(employeeArray, "employeeArray")
      // W stałej employees zapisuje to co nam zwraca ta metoda
      setEmployees(employeeArray);
      // Teraz pracownicy z  początkowego stanu tablicy 'useState' employees -> zostają przypsiani do stałej employeeArray

    })
    .catch(error => console.log(error))
  }, []);

  // Metoda która będzie się wywoływała po wciśnięciu jednego pracownika (wciśnięciu jednego przycisku), przekazywane jest do niej id bo endpoint wymaga id
  const showSelectedEmployeeHandler = (id) => {
    console.log("Employee nr: " + id);
    fetch("http://dummy.restapiexample.com/api/v1/employee/" + id)
    .then(res => {
      return res.json()
    })
    .then(res => {
      // po przekazaniu argumentu z żądania metoda then określa co ma się stać kiedy otrzyma odpowiedź, która po otrzymaniu przypiszemy do funkcji w stacie
      console.log(res, "res po przekazaniu id");
        setSelectedEmployee(res.data
        //Tutaj zaszeregowane będą dane dotyczą imienia, wieku itd.
      );
    });
  }

  const saveEmployeeHandler = () => {
    // obiekt JavaScriptowy (pracownik) do zapisu
    const employeeToSave = {
      "name": "Tomek123",
      "salary": "4500",
      "age": "25"
    }
    // Żądanie POST
    fetch("http://dummy.restapiexample.com/api/v1/create",
    {
      method: "POST",
      // headers: {
      //   'Content-Type': 'application/json',
      // },
      body: employeeToSave//Dane które będziemy zapisywać,
      // Jak powinno wyglądać ciało obiektu JavaScriptowego
    })
    .then(res => {
      return res.json();
    })
    .then(res => console.log(res));
  }

  const deleteEmployeeHandler = () => {
    // Będzie wysyłało zapytanie http z id na sztywno wpisanym w kodzie
    const id = 2; // Stała id obiektu do usunięcia
    fetch("http://dummy.restapiexample.com/api/v1/delete/" + id, {
      method: 'DELETE'
    })  
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
  // Sprawdzenie aktualnej wartości selectedEmployee, jeżeli będzie różna od zera , to będzie tworzony komponent EmplyeeDetails
  if(selectedEmployee !== null){ 
    return (
    <EmployeeDetails 
    name={selectedEmployee.employee_name}
    salary={selectedEmployee.employee_salary}
    age={selectedEmployee.employee_age}
    /> )
  }

  return (
// W <Employees/> odwołuje się do stat-a employess
// Dopóki żadne pracownik nie zostanie wybrany będzie wyświetlany null ze stat-a
      // "saveEmployeeHandler" Przycisk który na sztywno wpisuje dane pracownika w kod
      <header className='t-site-header'>
      <div className='o-container'>
        
        {selectedEmployee}
        <h1 className='c-heading c-heading--level1 c-heading--white'>Employees</h1>

        
        <Employees employees={employees} showSelectedEmployee={showSelectedEmployeeHandler}/>
        <div className='t-post-list'>
        <button onClick={saveEmployeeHandler} className='c-btn c-btn--accent'>Save Employee</button>
        <span className="t-post-list__divider">OR</span>
        <button onClick={deleteEmployeeHandler} className='c-btn c-btn--outline'>Delete Employee</button>
          </div>
          </div>
        
        </header>
        // W propsach przekazywana jest metoda showSelectedEmployeeHandler nazwa propsa to: 'showSelectedEmployee' 
        // metoda showSelectedEmployeeHandler przekazywana jest do komponentu employees
    );
  }

export default App;