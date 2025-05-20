import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div className="hero min-h-[70vh] bg-base-200 rounded-lg">
                <div className="hero-content flex-col lg:flex-row-reverse gap-8">
                    <img src="/api/placeholder/600/400" alt="Task Management" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Get Your Tasks Done Efficiently</h1>
                        <p className="py-6">TaskMaster helps you connect with skilled professionals who can complete your tasks on time and within budget. From home repairs to digital services, find the right person for any task.</p>
                        <div className="flex gap-4">
                            <Link to="/browse-tasks" className="btn btn-primary">Browse Tasks</Link>
                            <Link to="/add-task" className="btn btn-outline">Post a Task</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* How It Works */}
            <div className="py-6">
                <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body items-center text-center">
                            <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">1</div>
                            <h3 className="card-title">Post a Task</h3>
                            <p>Describe what you need done, when you need it, and your budget.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body items-center text-center">
                            <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">2</div>
                            <h3 className="card-title">Review Offers</h3>
                            <p>Compare offers from taskers based on skills, ratings, and price.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body items-center text-center">
                            <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">3</div>
                            <h3 className="card-title">Get It Done</h3>
                            <p>Choose the right person and get your task completed successfully.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Popular Categories */}
            <div className="py-6">
                <h2 className="text-3xl font-bold text-center mb-10">Popular Task Categories</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {['Home Cleaning', 'Furniture Assembly', 'Home Repairs', 'Moving Help', 'Web Development', 'Graphic Design', 'Tutoring', 'Event Planning'].map((category, index) => (
                        <div key={index} className="card bg-base-100 shadow-xl">
                            <div className="card-body p-4 items-center text-center">
                                <h3 className="font-medium">{category}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Call to Action */}
            <div className="bg-primary text-primary-content p-10 rounded-lg">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
                    <p className="mb-6 max-w-md mx-auto">Join thousands of people getting tasks done on TaskMaster every day.</p>
                    <div className="flex justify-center gap-4">
                        <Link to="/register" className="btn btn-secondary">Sign Up Now</Link>
                        <Link to="/browse-tasks" className="btn btn-outline btn-secondary">Browse Tasks</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;