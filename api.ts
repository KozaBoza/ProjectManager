const API_BASE_URL = 'http://localhost:5000'; 

interface Employee {
  id?: string; 
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

interface BackendPayload {
  employees: Employee[];
  goals: ProjectGoal[];
}

export const sendDataToBackend = async (payload: BackendPayload) => {
  try {
    const response = await fetch(`${API_BASE_URL}/submit-project`, { //!
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Server error.');
    }

    return await response.json();
  } catch (error) {
    console.error('Error in sendDataToBackend:', error);
    throw error;
  }
};