import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function ListEmployeeComponent() {
    const navigate = useNavigate();

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        EmployeeService.getEmployee()
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.json();
            })
            .then(data => {
                setEmployees(data);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    const viewEmployee = (id) => {
        navigate(`/view-employee/${id}`);
    }

    const updateEmployee = (id) => {
        navigate(`/update-employee/${id}`);
    };

    const deleteEmployee = (id) => {
        EmployeeService.deleteEmployee(id)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                window.location.reload();
                return response.json();
            })
            .catch(error => console.error('Error:', error));
    }

    return (
        <div>
            <h1 className='text-center'>Employees List</h1>
            <div className='row'>
                <Link to='/add-employee' className='btn btn-primary'>Add Employee</Link>
            </div>
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email ID</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => viewEmployee(employee.id)}>View</button>
                                    <button style={{marginLeft: "5px"}} className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                                    <button style={{marginLeft: "5px"}} className='btn btn-danger' onClick={() => deleteEmployee(employee.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListEmployeeComponent;