import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div>
        <h1>404-not found </h1>
        <h4>This page isnt found click on Back to back to the home </h4>
        <Link className='btn btn-primary' to="/">Back</Link>
    </div>
);

export default NotFound;