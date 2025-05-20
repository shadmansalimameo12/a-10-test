import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../Contexts/AuthContext';
import { FaCalendarAlt, FaDollarSign, FaUser } from 'react-icons/fa';

const BrowseTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');
    const [selectedCategory, setSelectedCategory] = useState('');
    const { user } = useAuth();
    
    const categories = [
        "Web Development", 
        "Design", 
        "Writing", 
        "Marketing", 
        "Data Entry",
        "Virtual Assistant",
        "Mobile Development",
        "SEO"
    ];

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/tasks`);
                setTasks(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching tasks:', error);
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    const filteredTasks = tasks.filter(task => {
        if (selectedCategory && task.category !== selectedCategory) {
            return false;
        }

        if (filter === 'all') return true;
        if (filter === 'recent') {
            // Tasks added in the last 3 days
            const threeDaysAgo = new Date();
            threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
            return new Date(task.createdAt) >= threeDaysAgo;
        }
        if (filter === 'urgent') {
            // Tasks with deadline within 7 days
            const today = new Date();
            const deadline = new Date(task.deadline);
            const diffTime = Math.abs(deadline - today);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays <= 7;
        }
        return true;
    });

    // Sort by most recent deadline first
    const sortedTasks = [...filteredTasks].sort((a, b) => {
        return new Date(a.deadline) - new Date(b.deadline);
    });

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Browse Available Tasks</h1>
            
            <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                    <select 
                        className="select select-bordered w-full sm:w-auto" 
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="all">All Tasks</option>
                        <option value="recent">Recently Added</option>
                        <option value="urgent">Urgent (Due Soon)</option>
                    </select>
                    
                    <select 
                        className="select select-bordered w-full sm:w-auto" 
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="">All Categories</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
                
                {user && (
                    <Link to="/add-task" className="btn btn-primary">
                        Post a New Task
                    </Link>
                )}
            </div>
            
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <span className="loading loading-spinner loading-lg text-primary"></span>
                </div>
            ) : sortedTasks.length === 0 ? (
                <div className="text-center py-12">
                    <h3 className="text-xl font-semibold mb-4">No tasks found</h3>
                    <p className="text-gray-500 mb-6">There are no tasks matching your criteria.</p>
                    {user && (
                        <Link to="/add-task" className="btn btn-primary">
                            Post a New Task
                        </Link>
                    )}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedTasks.map((task) => (
                        <div key={task._id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
                            <div className="card-body">
                                <div className="flex justify-between items-start">
                                    <h2 className="card-title text-lg">{task.title}</h2>
                                    <div className="badge badge-primary">{task.category}</div>
                                </div>
                                <p className="mt-2 text-gray-600 line-clamp-3">{task.description}</p>
                                
                                <div className="mt-4 space-y-2">
                                    <div className="flex items-center text-sm">
                                        <FaCalendarAlt className="mr-2 text-gray-500" />
                                        <span>Deadline: {new Date(task.deadline).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <FaDollarSign className="mr-2 text-gray-500" />
                                        <span>Budget: ${task.budget}</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <FaUser className="mr-2 text-gray-500" />
                                        <span>Posted by: {task.userName}</span>
                                    </div>
                                </div>
                                
                                <div className="card-actions justify-end mt-4">
                                    <Link to={`/task/${task._id}`} className="btn btn-primary btn-sm">
                                        See Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BrowseTasks;