import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function ViewEmployeeComponent() {
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
    
    return (
        <div className='container'>
            <div className='card col-md-6 offset-md-3'>
                <h2 className='text-center'>View Employee Details</h2>
                <div className='card-body'>
                    <div className='row'>
                        <h6 class='card-title'>Employee First Name:</h6>
                        <p class='card-text'>{employee.firstName}</p>
                        <br></br>
                    </div>
                    <div className='row'>
                        <h6 class='card-title'>Employee Last Name:</h6>
                        <p class='card-text'>{employee.lastName}</p>
                        <br></br>
                    </div>
                    <div className='row'>
                        <h6 class='card-title'>Employee Email:</h6>
                        <p class='card-text'>{employee.emailId}</p>
                        <br></br>
                    </div>
                    <button className='btn btn-info' onClick={() => navigate('/')}>Back</button>
                </div>
            </div>
        </div>
    );
}

export default ViewEmployeeComponent;