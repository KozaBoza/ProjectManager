import React from 'react';

interface SubmitButtonProps {
    onSubmit: () => void; //wywolujemy na klikniecie
    isLoading: boolean; //czy jestesmy w trakcie wysylania
}

function SubmitButton({ onSubmit, isLoading }: SubmitButtonProps) { //przyjmujemy funkcje i stan ladowania jako propsy
    return ( 
        <button //przycisk do wysylania danych
            className="button submit"
            onClick={onSubmit}
            disabled={isLoading}
        >
            {isLoading ? 'Submitting...' : 'Submit to Jira via n8n'}
        </button>
    );
}

export default SubmitButton;