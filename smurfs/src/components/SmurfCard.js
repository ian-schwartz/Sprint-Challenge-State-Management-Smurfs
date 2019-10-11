import React from 'react';
import { useContext } from 'react';
import { SmurfContext } from './contexts/SmurfContext';

const SmurfCard = () => {
    const { smurf } = useContext(SmurfContext);

    return (
        <div>
            {smurf.map(blue => (
                <div>
                    <p>{blue.name}</p>
                    <p>{blue.age}</p>
                    <p>{blue.height}</p>
                </div>
            ))}
        </div>
    );
}

export default SmurfCard;