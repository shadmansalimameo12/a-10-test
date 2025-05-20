import React, { useState, useMemo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => console.log(error));
    };

    const navItems = useMemo(() => (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "font-medium text-blue-500"
                            : "font-medium text-gray-700 hover:text-blue-500"
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/browse-tasks"
                    className={({ isActive }) =>
                        isActive
                            ? "font-medium text-blue-500"
                            : "font-medium text-gray-700 hover:text-blue-500"
                    }
                >
                    Browse Tasks
                </NavLink>
            </li>
            {user && (
                <>
                    <li>
                        <NavLink
                            to="/add-task"
                            className={({ isActive }) =>
                                isActive
                                    ? "font-medium text-blue-500"
                                    : "font-medium text-gray-700 hover:text-blue-500"
                            }
                        >
                            Add Task
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/my-tasks"
                            className={({ isActive }) =>
                                isActive
                                    ? "font-medium text-blue-500"
                                    : "font-medium text-gray-700 hover:text-blue-500"
                            }
                        >
                            My Posted Tasks
                        </NavLink>
                    </li>
                </>
            )}
        </>
    ), [user]);

    return (
        <nav className="bg-white shadow-md py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-blue-600">TaskFlow</Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <ul className="flex space-x-6">{navItems}</ul>
                    <div className="flex items-center space-x-4">
                        {user ? (
                            <div className="flex items-center space-x-4">
                                <div className="relative group">
                                    {user.photoURL ? (
                                        <img
                                            src={user.photoURL}
                                            alt={user.displayName}
                                            className="w-10 h-10 rounded-full cursor-pointer"
                                            title={user.displayName}
                                        />
                                    ) : (
                                        <FaUserCircle className="w-10 h-10 rounded-full cursor-pointer" title={user.displayName} />
                                    )}
                                    <div className="absolute right-0 w-40 p-2 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                        <p className="text-sm font-medium text-gray-700 truncate mb-2">{user.displayName}</p>
                                        <p className="text-xs text-gray-500 truncate mb-2">{user.email}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={handleLogOut}
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex space-x-3">
                                <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Login</Link>
                                <Link to="/register" className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-50 transition duration-300">Sign Up</Link>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-700 focus:outline-none"
                    >
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white px-4 pt-2 pb-4 shadow-lg">
                    <ul className="flex flex-col space-y-4">{navItems}</ul>
                    <div className="mt-6">
                        {user ? (
                            <div className="flex flex-col space-y-3">
                                <div className="flex items-center space-x-3">
                                    {user.photoURL ? (
                                        <img
                                            src={user.photoURL}
                                            alt={user.displayName}
                                            className="w-8 h-8 rounded-full"
                                        />
                                    ) : (
                                        <FaUserCircle className="w-8 h-8" />
                                    )}
                                    <span className="font-medium text-gray-700">{user.displayName}</span>
                                </div>
                                <button
                                    onClick={handleLogOut}
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 w-full"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col space-y-3">
                                <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 text-center">Login</Link>
                                <Link to="/register" className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-50 transition duration-300 text-center">Sign Up</Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
