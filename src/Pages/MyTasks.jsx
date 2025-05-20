import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../Contexts/AuthContext';
import toast from 'react-hot-toast';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';

const MyTasks = () => {
    const { user } = useAuth();
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deleteTaskId, setDeleteTaskId] = useState(null);
    
    const fetchMyTasks = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/user-tasks?email=${user.email}`);
            setTasks(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching tasks:', error);
            toast.error('Failed to load your tasks');
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user?.email) {
            fetchMyTasks();
        }
    }, [user]);

    const handleDeleteTask = async () => {
        try {
            await axios.delete(`${import.meta.env.VITE_API_URL}/tasks/${deleteTaskId}`);
            toast.success('Task deleted successfully');
            setTasks(tasks.filter(task => task._id !== deleteTaskId));
            closeDeleteModal();
        } catch (error) {
            console.error('Error deleting task:', error);
            toast.error('Failed to delete task');
        }
    };

    const openDeleteModal = (taskId) => {
        setDeleteTaskId(taskId);
        document.getElementById('delete-modal').showModal();
    };

    const closeDeleteModal = () => {
        setDeleteTaskId(null);
        document.getElementById('delete-modal').close();
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    // Sort tasks by deadline (closest first)
    const sortedTasks = [...tasks].sort((a, b) => {
        return new Date(a.deadline) - new Date(b.deadline);
    });

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">My Posted Tasks</h1>
            
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <span className="loading loading-spinner loading-lg text-primary"></span>
                </div>
            ) : tasks.length === 0 ? (
                <div className="text-center py-12">
                    <h3 className="text-xl font-semibold mb-4">You haven't posted any tasks yet</h3>
                    <p className="text-gray-500 mb-6">Create your first task and find the right person for the job.</p>
                    <Link to="/add-task" className="btn btn-primary">
                        Post a New Task
                    </Link>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Task Title</th>
                                <th>Category</th>
                                <th>Deadline</th>
                                <th>Budget</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedTasks.map((task) => (
                                <tr key={task._id}>
                                    <td className="font-medium">{task.title}</td>
                                    <td>{task.category}</td>
                                    <td>{formatDate(task.deadline)}</td>
                                    <td>${task.budget}</td>
                                    <td>
                                        <div className="flex justify-center gap-2">
                                            <Link to={`/task/${task._id}`} className="btn btn-circle btn-sm btn-ghost">
                                                <FaEye className="text-blue-500" />
                                            </Link>
                                            <Link to={`/update-task/${task._id}`} className="btn btn-circle btn-sm btn-ghost">
                                                <FaEdit className="text-green-500" />
                                            </Link>
                                            <button 
                                                onClick={() => openDeleteModal(task._id)} 
                                                className="btn btn-circle btn-sm btn-ghost"
                                            >
                                                <FaTrash className="text-red-500" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            
            {/* Delete Confirmation Modal */}
            <dialog id="delete-modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Confirm Deletion</h3>
                    <p className="py-4">Are you sure you want to delete this task? This action cannot be undone.</p>
                    <div className="modal-action">
                        <button className="btn btn-ghost" onClick={closeDeleteModal}>Cancel</button>
                        <button className="btn btn-error" onClick={handleDeleteTask}>Delete</button>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default MyTasks;