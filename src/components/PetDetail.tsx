import React from 'react';
import { useParams } from 'react-router-dom';

const PetDetail: React.FC = () => {
    const { id } = useParams<Record<string, string | undefined>>(); // Updated type
    console.log(id); // Use id to avoid the unused variable error
    // Fetch pet details based on id
    // Display pet details here

    return (
        <div className="pet-detail">
            {/* Display pet details */}
        </div>
    );
};

export default PetDetail;