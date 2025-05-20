import React from 'react';
import Banner from './Banner';
import FeaturedTasks from './FeaturedTasks';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner />
            <FeaturedTasks />
            <HowItWorks />
            <Testimonials />
        </div>
    );
};

export default Home;