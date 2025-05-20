import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-primary">404</h1>
                <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>
                <p className="mt-4 text-gray-600">The page you're looking for doesn't exist or has been moved.</p>
                <Link to="/" className="btn btn-primary mt-8">Go Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;