import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white pt-10 pb-5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">TaskFlow</h3>
                        <p className="mb-4">
                            Your go-to platform for connecting freelancers and clients. Get your tasks done efficiently and on time.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul>
                            <li className="mb-2">
                                <Link to="/" className="hover:text-blue-400">Home</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/browse-tasks" className="hover:text-blue-400">Browse Tasks</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/add-task" className="hover:text-blue-400">Add Task</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/my-tasks" className="hover:text-blue-400">My Tasks</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <p className="mb-2">Email: info@taskflow.com</p>
                        <p className="mb-2">Phone: +1 (123) 456-7890</p>
                        <p className="mb-2">Address: 123 Freelance Street, Digital City</p>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-blue-400">
                                <FaFacebook size={24} />
                            </a>
                            <a href="#" className="hover:text-blue-400">
                                <FaTwitter size={24} />
                            </a>
                            <a href="#" className="hover:text-blue-400">
                                <FaInstagram size={24} />
                            </a>
                            <a href="#" className="hover:text-blue-400">
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 mt-8 pt-6 text-center">
                    <p>&copy; {new Date().getFullYear()} TaskFlow. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;