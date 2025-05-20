import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../Contexts/AuthContext';
import toast from 'react-hot-toast';
import { FaCalendarAlt } from 'react-icons/fa';

const AddTask = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target;
        const title = form.title.value;
        const category = form.category.value;
        const description = form.description.value;
        const deadline = form.deadline.value;
        const budget = parseFloat(form.budget.value);
        
        // Validation
        if (!title || !category || !description || !deadline || !budget) {
            toast.error('Please fill in all fields');
            setLoading(false);
            return;
        }

        // Check if deadline is in the future
        const selectedDate = new Date(deadline);
        const today = new Date();
        if (selectedDate < today) {
            toast.error('Deadline must be in the future');
            setLoading(false);
            return;
        }

        try {
            const taskData = {
                title,
                category,
                description,
                deadline,
                budget,
                userEmail: user.email,
                userName: user.displayName,
                userPhoto: user.photoURL,
                createdAt: new Date().toISOString(),
                bids: []
            };

            const response = await axios.post(`${import.meta.env.VITE_API_URL}/tasks`, taskData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.data.insertedId) {
                toast.success('Task added successfully');
                form.reset();
                navigate('/my-tasks');
            }
        } catch (error) {
            console.error('Error adding task:', error);
            toast.error('Failed to add task. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Get tomorrow's date as the minimum date for deadline
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDate = tomorrow.toISOString().split('T')[0];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-center">Add a New Task</h1>
                
                <form onSubmit={handleSubmit} className="card bg-base-100 shadow-xl p-6">
                    <div className="space-y-6">
                        {/* Task Title */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Task Title</span>
                            </label>
                            <input 
                                type="text" 
                                name="title"
                                placeholder="Enter a clear title for your task" 
                                className="input input-bordered w-full" 
                                required
                            />
                        </div>
                        
                        {/* Category */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Category</span>
                            </label>
                            <select 
                                name="category"
                                className="select select-bordered w-full" 
                                required
                            >
                                <option value="" disabled selected>Select a category</option>
                                {categories.map((category) => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                        
                        {/* Description */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Description</span>
                            </label>
                            <textarea 
                                name="description"
                                placeholder="Describe what needs to be done in detail" 
                                className="textarea textarea-bordered h-32" 
                                required
                            ></textarea>
                        </div>
                        
                        {/* Deadline */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Deadline</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <FaCalendarAlt className="text-gray-500" />
                                </div>
                                <input 
                                    type="date" 
                                    name="deadline"
                                    min={minDate}
                                    className="input input-bordered w-full pl-10" 
                                    required
                                />
                            </div>
                        </div>
                        
                        {/* Budget */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Budget (USD)</span>
                            </label>
                            <input 
                                type="number" 
                                name="budget"
                                min="1"
                                step="0.01"
                                placeholder="Set your budget for this task" 
                                className="input input-bordered w-full" 
                                required
                            />
                        </div>
                        
                        {/* User Info (Read-only) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Your Email</span>
                                </label>
                                <input 
                                    type="email" 
                                    value={user.email}
                                    className="input input-bordered w-full bg-gray-100" 
                                    readOnly
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Your Name</span>
                                </label>
                                <input 
                                    type="text" 
                                    value={user.displayName}
                                    className="input input-bordered w-full bg-gray-100" 
                                    readOnly
                                />
                            </div>
                        </div>
                        
                        {/* Submit Button */}
                        <div className="form-control mt-8">
                            <button 
                                type="submit" 
                                className="btn btn-primary"
                                disabled={loading}
                            >
                                {loading ? 
                                    <span className="loading loading-spinner loading-sm"></span>
                                    : 'Add Task'
                                }
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTask;