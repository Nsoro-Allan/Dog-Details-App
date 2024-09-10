import React from 'react';

interface PetCardProps {
    image: string;
    breed: string;
}

const PetCard: React.FC<PetCardProps> = ({ image, breed }) => {
    return (
        <div className="pet-card">
            <img src={image} alt={breed} />
            <h3>{breed}</h3>
        </div>
    );
}

export default PetCard;