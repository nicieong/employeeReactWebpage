const EMPLOYEE_API_BASE_URI = "http://localhost:8080/api/v1/employees";

class EmployeeService {
    getEmployee() {
        var responseFromGetApi = fetch(EMPLOYEE_API_BASE_URI);
        return responseFromGetApi;
    }

    createEmployee(employee) {
        var responseFromPostApi = 
            fetch(EMPLOYEE_API_BASE_URI, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify(employee)
            })
        return responseFromPostApi;
    }

    getEmployeeById(id) {
        var responseFromGetByIdApi = 
            fetch(EMPLOYEE_API_BASE_URI + "/" + id);
        return responseFromGetByIdApi;
    }

    updateEmployee(employee, id) {
        var responseFromPutApi = 
        fetch(EMPLOYEE_API_BASE_URI + "/" + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(employee)
        });
    return responseFromPutApi;
    }

    deleteEmployee(id) {
        var responseFromDeleteApi = 
            fetch(EMPLOYEE_API_BASE_URI + "/" + id, {
                method: 'DELETE'
            });
        return responseFromDeleteApi;
    }
}

export default new EmployeeService();