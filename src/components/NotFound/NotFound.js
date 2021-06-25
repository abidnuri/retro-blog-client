import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-center" style={{ paddingTop: "20%" }}>
            <h2 className="text-danger" >404 Error! Not Found</h2>
            <Link to="/" className="text-dark">Back To The Home</Link>
        </div>
    );
};

export default NotFound;