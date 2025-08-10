import React from 'react';

interface Employee {
    id: string;
    position: string;
    experience: string;
    firstName: string;
    lastName: string;
}

interface EmployeeTableProps {
    employees: Employee[];
    onDeleteEmployee: (id: string) => void;
}

function EmployeeTable({ employees, onDeleteEmployee }: EmployeeTableProps) {
    if (employees.length === 0) {
        return <p className="info-message">No employees added. Add the first employee above.</p>; // Translated from "Brak dodanych pracowników. Dodaj pierwszego pracownika powy¿ej."
    }

    return (
        <div className="employee-table-container section-card"> {/* Added section-card for styling */}
            <h3>List of Added Employees</h3> {/* Translated from "Lista dodanych pracowników" */}
            <table className="employee-table">
                <thead>
                    <tr>
                        <th>First Name</th> {/* Translated from "Imiê" */}
                        <th>Last Name</th> {/* Translated from "Nazwisko" */}
                        <th>Position</th> {/* Translated from "Stanowisko" */}
                        <th>Experience</th> {/* Translated from "Doœwiadczenie" */}
                        <th>Actions</th> {/* Translated from "Akcje" */}
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.position}</td>
                            <td>{employee.experience}</td>
                            <td>
                                <button
                                    className="button danger"
                                    onClick={() => onDeleteEmployee(employee.id)}
                                >
                                    Delete {/* Translated from "Usuñ" */}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeTable;