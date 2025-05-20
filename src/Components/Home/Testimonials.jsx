import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Jessica Chen",
            role: "Small Business Owner",
            quote: "TaskFlow has been a game-changer for my small business. I found talented freelancers who delivered quality work on time and within budget. The platform is easy to use and the support team is always helpful.",
            avatar: "https://randomuser.me/api/portraits/women/12.jpg",
            rating: 5
        },
        {
            id: 2,
            name: "Marcus Johnson",
            role: "Marketing Director",
            quote: "I've used several freelancing platforms before, but TaskFlow stands out for its simplicity and the quality of professionals. We've completed over 20 projects through this platform and have been consistently impressed.",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            rating: 5
        },
        {
            id: 3,
            name: "Sophia Rodriguez",
            role: "Startup Founder",
            quote: "As a startup with limited resources, TaskFlow has been invaluable. We've found amazing designers, developers, and content writers who've helped us grow our brand without breaking the bank.",
            avatar: "https://randomuser.me/api/portraits/women/22.jpg",
            rating: 4
        },
        {
            id: 4,
            name: "Robert Taylor",
            role: "E-commerce Manager",
            quote: "The quality of freelancers on TaskFlow is exceptional. I posted a complex project and received bids from highly qualified professionals within hours. The work was completed ahead of schedule and exceeded my expectations.",
            avatar: "https://randomuser.me/api/portraits/men/42.jpg",
            rating: 5
        }
    ];

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-2">What Our Clients Say</h2>
                <p className="text-gray-600 text-center mb-12">Success stories from people who've used our platform</p>
                
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    className="pb-12"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="bg-gray-50 p-8 rounded-lg shadow-md h-full flex flex-col">
                                <FaQuoteLeft className="text-blue-300 text-3xl mb-4" />
                                
                                <p className="text-gray-600 mb-6 flex-grow">"{testimonial.quote}"</p>
                                
                                <div className="flex items-center">
                                    <img 
                                        src={testimonial.avatar} 
                                        alt={testimonial.name} 
                                        className="w-12 h-12 rounded-full mr-4"
                                    />
                                    <div>
                                        <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                                        <p className="text-gray-500 text-sm">{testimonial.role}</p>
                                        <div className="flex mt-1">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar 
                                                    key={i} 
                                                    className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"} 
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;