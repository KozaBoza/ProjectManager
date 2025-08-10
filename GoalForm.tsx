import React, { useState, useEffect, ChangeEvent } from 'react';

interface ProjectGoal {
    name: string;
    notes: string;
    deadline: string;
}

interface GoalFormProps {
    onGoalChange: (goal: ProjectGoal) => void;
    currentGoal: ProjectGoal;
}

function GoalForm({ onGoalChange, currentGoal }: GoalFormProps) {
    const [name, setName] = useState(currentGoal.name);
    const [notes, setNotes] = useState(currentGoal.notes);
    const [deadline, setDeadline] = useState(currentGoal.deadline);

    useEffect(() => {
        onGoalChange({ name, notes, deadline });
    }, [name, notes, deadline, onGoalChange]);

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const handleNotesChange = (e: ChangeEvent<HTMLTextAreaElement>) => setNotes(e.target.value);
    const handleDeadlineChange = (e: ChangeEvent<HTMLInputElement>) => setDeadline(e.target.value);

    return (
        <div className="goal-form section-card"> {/* Added section-card for styling */}
            <h3>Project/Goal Details</h3> {/* New heading for this section */}
            <div className="form-group">
                <label htmlFor="goalName">Project/Goal Name:</label> {/* Translated from "Nazwa Projektu/Celu:" */}
                <input
                    type="text"
                    id="goalName"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Develop new functionality X" // Translated from "Rozwój nowej funkcjonalnoœci X"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="goalNotes">Project Notes:</label> {/* Translated from "Uwagi do Projektu:" */}
                <textarea
                    id="goalNotes"
                    value={notes}
                    onChange={handleNotesChange}
                    placeholder="Focus on performance and scalability." // Translated from "Nale¿y skupiæ siê na wydajnoœci i skalowalnoœci."
                    rows={4}
                ></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="deadline">Deadline:</label> {/* Translated from "Deadline:" */}
                <input
                    type="date"
                    id="deadline"
                    value={deadline}
                    onChange={handleDeadlineChange}
                    required
                />
            </div>
        </div>
    );
}

export default GoalForm;