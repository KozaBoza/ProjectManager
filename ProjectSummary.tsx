import React from 'react';

interface Employee {
    id: string;
    position: string;
    experience: string;
    firstName: string;
    lastName: string;
}

interface ProjectGoal {
    name: string;
    notes: string;
    deadline: string;
}

interface ProjectSummaryProps {
    employees: Employee[];
    goal: ProjectGoal;
}

function ProjectSummary({ employees, goal }: ProjectSummaryProps) {
    return (
        <div className="project-summary section-card"> {/* Added section-card for styling */}
            <h3>Data Summary</h3> {/* Translated from "Podsumowanie Danych" */}
            <div className="summary-section-item">
                <h4>Selected Employees:</h4> {/* Translated from "Wybrani Pracownicy:" */}
                {employees.length === 0 ? (
                    <p>No employees.</p> // Translated from "Brak pracowników."
                ) : (
                    <ul>
                        {employees.map((emp) => (
                            <li key={emp.id}>
                                {emp.firstName} {emp.lastName} ({emp.position}, {emp.experience})
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="summary-section-item">
                <h4>Goal Details:</h4> {/* Translated from "Szczegó³y Celu:" */}
                {goal.name ? (
                    <>
                        <p><strong>Name:</strong> {goal.name}</p> {/* Translated from "Nazwa:" */}
                        <p><strong>Deadline:</strong> {goal.deadline}</p> {/* Translated from "Deadline:" */}
                        {goal.notes && <p><strong>Notes:</strong> {goal.notes}</p>} {/* Translated from "Uwagi:" */}
                    </>
                ) : (
                    <p>No goal defined.</p> // Translated from "Brak zdefiniowanego celu."
                )}
            </div>
        </div>
    );
}

export default ProjectSummary;