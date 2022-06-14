import React, { Fragment, useState, useEffect } from 'react';
import EditEmployee from './EditEmployee'

const DisplayEmployee = () => {
  const [employee, setEmployee] = useState([]);

  const deleteEmployee = async (id) => {
    try {
      const res = await fetch(`http://localhost:3001/employee/${id}`, {
        method:"DELETE"
      });
      setEmployee(employee.filter(employees => employees.employee_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }

  const getEmployee = async () => {
    try {
      const res = await fetch("http://localhost:3001/employee");
      //converting the data to JSON format
      const data = await res.json();
      //putting all employee data into the state
      setEmployee(data)
    } catch (err) {
      console.error(err.message);
    }
  }
  //useEffect hook that runs the function when initiated
  useEffect(() => {
    getEmployee();
  }, []);

  return (
    <Fragment>
      <h1 className="text-center my-5">Employees</h1>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Code</th>
            <th scope="col">Profession</th>
            <th scope="col">Color</th>
            <th scope="col">City</th>
            <th scope="col">Branch</th>
            <th scope="col">Assigned</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>

          </tr>
        </thead>
        <tbody>
            {employee.map(employees => (
              <tr>
                <td>{employees.employee_id}</td>
                <td>{employees.name}</td>
                <td>{employees.code}</td>
                <td>{employees.profession}</td>
                <td>{employees.color}</td>
                <td>{employees.city}</td>
                <td>{employees.branch}</td>
                <td>{employees.assigned}</td>
                <td><EditEmployee employee={employees}/></td>
                <td><button className="btn btn-danger" onClick={() => deleteEmployee(employees.employee_id)}>Delete</button></td>
              </tr>
            ))}
        </tbody>
      </table>
    </Fragment>
  );
}

export default DisplayEmployee;