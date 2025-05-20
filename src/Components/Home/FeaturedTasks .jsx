import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaCalendarAlt, FaDollarSign, FaClock } from 'react-icons/fa';

const FeaturedTasks = () => {
    const [featuredTasks, setFeaturedTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // In a real application, you would fetch from your API
        // For now, let's use a placeholder
        setLoading(true);
        
        // Simulate API call - replace with actual API call
        setTimeout(() => {
            const mockTasks = [
                {
                    _id: '1',
                    title: 'Create a Responsive Website',
                    category: 'Web Development',
                    description: 'Looking for an experienced web developer to create a responsive website for my small business.',
                    deadline: '2025-06-15',
                    budget: 250,
                    userName: 'John Smith',
                    userEmail: 'john@example.com'
                },
                {
                    _id: '2',
                    title: 'Logo Design for Tech Startup',
                    category: 'Design',
                    description: 'Need a modern, clean logo design for a new technology startup in the AI space.',
                    deadline: '2025-06-10',
                    budget: 150,
                    userName: 'Emily Johnson',
                    userEmail: 'emily@example.com'
                },
                {
                    _id: '3',
                    title: 'Content Writing for Blog',
                    category: 'Writing',
                    description: 'Looking for a skilled content writer to create 5 blog posts about digital marketing strategies.',
                    deadline: '2025-06-20',
                    budget: 180,
                    userName: 'Michael Davis',
                    userEmail: 'michael@example.com'
                },
                {
                    _id: '4',
                    title: 'Mobile App Development',
                    category: 'App Development',
                    description: 'Need an experienced app developer to create an iOS and Android food delivery application.',
                    deadline: '2025-07-01',
                    budget: 500,
                    userName: 'Sarah Wilson',
                    userEmail: 'sarah@example.com'
                },
                {
                    _id: '5',
                    title: 'Social Media Marketing Campaign',
                    category: 'Marketing',
                    description: 'Looking for a marketer to plan and execute a 2-month social media campaign for a fitness brand.',
                    deadline: '2025-06-25',
                    budget: 300,
                    userName: 'David Brown',
                    userEmail: 'david@example.com'
                },
                {
                    _id: '6',
                    title: 'UI/UX Design for Web App',
                    category: 'Design',
                    description: 'Need a UI/UX designer to create wireframes and designs for a new web application.',
                    deadline: '2025-06-18',
                    budget: 350,
                    userName: 'Lisa Miller',
                    userEmail: 'lisa@example.com'
                }
            ];
            
            setFeaturedTasks(mockTasks);
            setLoading(false);
        }, 1000);
        
        // Actual API implementation would be:
        // axios.get('your-api-url/tasks/featured')
        //     .then(response => {
        //         setFeaturedTasks(response.data);
        //         setLoading(false);
        //     })
        //     .catch(error => {
        //         console.error('Error fetching featured tasks:', error);
        //         setLoading(false);
        //     });
    }, []);

    // Function to format date
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center mb-10">Featured Tasks</h2>
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            </div>
        );
    }

    return (
        <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-2">Featured Tasks</h2>
            <p className="text-gray-600 text-center mb-10">Recent tasks with upcoming deadlines</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredTasks.map((task) => (
                    <div key={task._id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition duration-300">
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                    {task.category}
                                </span>
                                <div className="flex items-center text-sm text-gray-500">
                                    <FaClock className="mr-1" />
                                    <span className="font-medium">{formatDate(task.deadline)}</span>
                                </div>
                            </div>
                            
                            <h3 className="text-xl font-bold mb-2 text-gray-800">{task.title}</h3>
                            
                            <p className="text-gray-600 mb-4 line-clamp-3">
                                {task.description}
                            </p>
                            
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center text-gray-600">
                                    <FaDollarSign className="mr-1" />
                                    <span className="font-bold">${task.budget}</span>
                                </div>
                                <div className="text-sm text-gray-500">
                                    Posted by: {task.userName}
                                </div>
                            </div>
                            
                            <Link
                                to={`/task/${task._id}`}
                                className="w-full block text-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300"
                            >
                                See Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="text-center mt-12">
                <Link
                    to="/browse-tasks"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg inline-block transition duration-300"
                >
                    View All Tasks
                </Link>
            </div>
        </section>
    );
};

export default FeaturedTasks;