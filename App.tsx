import React, { useState } from 'react';
import './App.css';
import EmployeeForm from './components/EmployeeForm';
import EmployeeTable from './components/EmployeeTable';
import GoalForm from './components/GoalForm';
import ProjectSummary from './components/ProjectSummary';
import SubmitButton from './components/SubmitButton';
import { sendDataToBackend } from './services/api'; //dodac

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

interface CollapsiblePanelProps {
    title: string;
    children: React.ReactNode;
    initialOpen?: boolean;
    colorClass: string; // New prop for color
}

const CollapsiblePanel: React.FC<CollapsiblePanelProps> = ({ title, children, initialOpen = false, colorClass }) => {
    const [isOpen, setIsOpen] = useState(initialOpen);
    //widocznosc
    return (
        <div className={`collapsible-panel ${colorClass}`}> {}
            <div className="collapsible-header" onClick={() => setIsOpen(!isOpen)}> 
                <h3>{title}</h3> 
                <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
            </div>
            {isOpen && (
                <div className="collapsible-content">
                    {children}
                </div>
            )}
        </div>
    );
};

function App() {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [goal, setGoal] = useState<ProjectGoal>({ name: '', notes: '', deadline: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleAddEmployee = (newEmployee: Omit<Employee, 'id'>) => {
        setEmployees([...employees, { ...newEmployee, id: Date.now().toString() }]);
    };

    const handleDeleteEmployee = (id: string) => {
        setEmployees(employees.filter(emp => emp.id !== id));
    };

    const handleGoalChange = (newGoal: ProjectGoal) => {
        setGoal(newGoal);
    };

    const handleSubmit = async () => {
        if (employees.length === 0 || !goal.name || !goal.deadline) {
            setSubmitMessage('Please add employees and fill in the goal and deadline.');
            return;
        }
        setIsSubmitted(true);
        setSubmitMessage('Submitting data...');
        try {
            const payload = {
                employees,
                goals: [goal],
            };
            const response = await sendDataToBackend(payload);
           
            setSubmitMessage(`Success! ${response.message}`);
            setEmployees([]);
            setGoal({ name: '', notes: '', deadline: '' });
        } catch (error: any) {
            console.error('Error sending data:', error);
            setSubmitMessage(`Error: ${error.message || 'An error occurred while sending data.'}`);
        } finally {
            setIsSubmitted(false);
        }
    };

    return (
        <div className="app-container"> 
            <h1>Jira Task Manager</h1>

            <div className="main-content">
                <CollapsiblePanel title="1. Add Employees" initialOpen={true} colorClass="panel-blue">
                    <EmployeeForm onAddEmployee={handleAddEmployee} />
                    <EmployeeTable employees={employees} onDeleteEmployee={handleDeleteEmployee} />
                </CollapsiblePanel>

                <CollapsiblePanel title="2. Define Project Goal" colorClass="panel-green">
                    <GoalForm onGoalChange={handleGoalChange} currentGoal={goal} />
                </CollapsiblePanel>

                <CollapsiblePanel title="3. Summary and Submission" initialOpen={true} colorClass="panel-purple">
                    <ProjectSummary employees={employees} goal={goal} />
                    <SubmitButton onSubmit={handleSubmit} isLoading={isSubmitted} />
                    {submitMessage && <p className={`submit-message ${submitMessage.startsWith('Success') ? 'success' : 'error'}`}>{submitMessage}</p>}
                </CollapsiblePanel>
            </div>
        </div>
    );
}

export default App;