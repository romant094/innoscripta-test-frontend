import React from 'react';
import {Link} from 'react-router-dom';

export const ErrorIndicator = () => {
    return (
        <div>
            <p>Oops!</p>
            <p>We have already sent a courier for some more cheese...</p>
            <p>Visit our <Link to='/'>Home page</Link></p>
        </div>
    );
};
