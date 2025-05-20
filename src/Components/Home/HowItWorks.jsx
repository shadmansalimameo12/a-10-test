import React from 'react';
import { FaClipboardList, FaUsers, FaHandshake, FaCheckCircle } from 'react-icons/fa';

const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            title: "Post Your Task",
            description: "Describe your task, set your budget, and specify the deadline",
            icon: <FaClipboardList className="text-4xl text-blue-500 mb-4" />
        },
        {
            id: 2,
            title: "Get Matched",
            description: "Freelancers will contact you with their proposals and bids",
            icon: <FaUsers className="text-4xl text-blue-500 mb-4" />
        },
        {
            id: 3,
            title: "Collaborate",
            description: "Choose the right freelancer and work together on your task",
            icon: <FaHandshake className="text-4xl text-blue-500 mb-4" />
        },
        {
            id: 4,
            title: "Complete",
            description: "Approve the completed work and leave a review",
            icon: <FaCheckCircle className="text-4xl text-blue-500 mb-4" />
        }
    ];

    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-2">How It Works</h2>
                <p className="text-gray-600 text-center mb-12">Your task completed in four simple steps</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step) => (
                        <div key={step.id} className="bg-white p-6 rounded-lg shadow-md text-center relative">
                            <div className="flex justify-center">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                            
                            {step.id < steps.length && (
                                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                                    <div className="w-8 h-0.5 bg-gray-300"></div>
                                </div>
                            )}
                            
                            <div className="absolute -top-4 left-0 right-0 flex justify-center">
                                <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                                    {step.id}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;