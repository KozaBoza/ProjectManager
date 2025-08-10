import React, { useState, FormEvent } from 'react';
//formevent - typ zdarzenia dla onsubmit
interface EmployeeFormProps {
  onAddEmployee: (employee: { position: string; experience: string; firstName: string; lastName: string }) => void;
}

function EmployeeForm({ onAddEmployee }: EmployeeFormProps) {
  const [position, setPosition] = useState('');
  const [experience, setExperience] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); //blokuje domyslne przeladowanie strony
    if (position && experience && firstName && lastName) {
      onAddEmployee({ position, experience, firstName, lastName });
      setPosition('');
      setExperience('');
      setFirstName('');
      setLastName('');
    } else {
      alert('Please fill in all employee fields.'); 
    }
  };

  return (
    <div className="section-card">
      <h3>Add New Employee</h3> 
      <form className="employee-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label> 
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="John"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label> 
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Doe"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position:</label> 
          <input
            type="text"
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            placeholder="Senior Developer"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="experience">Experience:</label> 
          <input
            type="text"
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            placeholder="5 years React"
            required
          />
        </div>
        <button type="submit" className="button primary">Add Employee</button> 
      </form>
    </div>
  );
}

export default EmployeeForm;