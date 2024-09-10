import React, { useEffect, useState } from 'react';
import PetCard from './PetCard';

const API_KEY = 'live_nDshsZtcViamIpReR7lBfDZ0jrWXMVpmyfAP3Pp2iKlT9dcVMDpg4Uq5ej9UNtCZ'; // Add your API key here

const PetList: React.FC = () => {
    const [pets, setPets] = useState<any[]>([]);

    useEffect(() => {
        const fetchPets = async () => {
            const response = await fetch(`https://api.thedogapi.com/v1/images/search?limit=10`, {
                headers: {
                    'x-api-key': API_KEY,
                },
            });
            const data = await response.json();
            setPets(data);
        };

        fetchPets();
    }, []);

    return (
        <div className="header">
            <div>
                {pets.map((pet) => (
                    <PetCard key={pet.id} image={pet.url} breed={pet.breeds[0]?.name || 'Unknown'} />
                ))}
            </div>
        </div>
    );
}

export default PetList;