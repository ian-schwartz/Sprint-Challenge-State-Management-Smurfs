import React from 'react';
import { useContext } from 'react';
import { SmurfContext } from './contexts/SmurfContext';

const SmurfCard = () => {
    const { smurf } = useContext(SmurfContext);

    return (
        <div>
            {smurf.map(smu => (
                <div>
                    <p>{smu.name}</p>
                    <p>{smu.age}</p>
                    <p>{smu.height}</p>
                </div>
            ))}
        </div>
    );
}

export default SmurfCard;