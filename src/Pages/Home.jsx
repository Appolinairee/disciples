import React from 'react';
import Header from '../components/Header/Header';
import AboutSection from '../components/AboutSection/AboutSection';
import ResearchSection from '../components/Research_section/ResearchSection';
import NewsletterTestimonials from '../components/NewsletterTestimonials/NewsletterTestimonials';

const Home = () => {

    return(
        <div className="home">
            <Header />
            <AboutSection />
            <ResearchSection />
            <NewsletterTestimonials />
        </div>
    )
}

export default Home;