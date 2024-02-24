import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function CreateEmployeeComponent() {
    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        emailId: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEmployee({ ...employee, [name]: value });
    }

    const saveEmployee = (e) => {
        e.preventDefault();
        console.log('employee => ' + JSON.stringify(employee));

        EmployeeService.createEmployee(employee)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.json();
            })
            .then(() => navigate('/'))
            .catch(error => console.error('Error:', error));
    }

    const cancel = (e) => {
        e.preventDefault();
        navigate('/');
    }

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h2 className='text-center'>Add Employee</h2>
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label>First Name:</label>
                                    <input placeholder='First Name' name="firstName" className='form-control'
                                        value={employee.firstName} onChange={handleChange} />
                                </div>
                                <div className='form-group'>
                                    <label>Last Name:</label>
                                    <input placeholder='Last Name' name="lastName" className='form-control'
                                        value={employee.lastName} onChange={handleChange} />
                                </div>
                                <div className='form-group'>
                                    <label>Email Address:</label>
                                    <input placeholder='Email Address' name="emailId" className='form-control'
                                        value={employee.emailId} onChange={handleChange} />
                                </div>
                                <button className='btn btn-success' onClick={saveEmployee}>Save</button>
                                <button style={{marginLeft: "5px"}} className='btn btn-danger' onClick={cancel}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateEmployeeComponent;