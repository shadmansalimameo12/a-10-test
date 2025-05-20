import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

const Banner = () => {
    const slides = [
        {
            id: 1,
            title: "Find the Perfect Freelancer",
            description: "Connect with skilled professionals for your tasks and projects",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
        },
        {
            id: 2,
            title: "Post Your Task in Minutes",
            description: "Describe what you need, set your budget, and receive bids quickly",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        },
        {
            id: 3,
            title: "Get Work Done On Time",
            description: "Hire reliable freelancers and complete your projects on schedule",
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        },
    ];

    return (
        <section className="w-full">
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                className="h-[500px] md:h-[600px]"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div 
                            className="relative h-full bg-cover bg-center" 
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-10">
                                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{slide.title}</h1>
                                <p className="text-lg md:text-xl text-white mb-8 max-w-2xl">{slide.description}</p>
                                <div className="flex flex-col md:flex-row gap-4">
                                    <Link
                                        to="/browse-tasks"
                                        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
                                    >
                                        Browse Tasks
                                    </Link>
                                    <Link
                                        to="/add-task"
                                        className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition duration-300"
                                    >
                                        Post a Task
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Banner;