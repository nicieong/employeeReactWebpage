import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function UpdateEmployeeComponent() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [employee, setEmployee] = useState({
        id: id,
        firstName: '',
        lastName: '',
        emailId: ''
    });

    useEffect(() => {
        EmployeeService.getEmployeeById(id)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.json();
            })
            .then(data => {
                setEmployee(data);
            })
            .catch(error => console.error('Error:', error));
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEmployee({ ...employee, [name]: value });
    }

    const updateEmployee = (e) => {
        e.preventDefault();
        console.log('employee => ' + JSON.stringify(employee));

        EmployeeService.updateEmployee(employee, id)
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
                        <h2 className='text-center'>Update Employee</h2>
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
                                <button className='btn btn-success' onClick={updateEmployee}>Update</button>
                                <button style={{marginLeft: "5px"}} className='btn btn-danger' onClick={cancel}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateEmployeeComponent;