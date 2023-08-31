import React from 'react';
import Header from '../components/Header/Header';
import AboutSection from '../components/AboutSection/AboutSection';
import Formations from '../components/Formations/Formations';
import ResearchSection from '../components/Research_section/ResearchSection';
import Partenaires from '../components/Partenaires/partenaires';
import NewsletterTestimonials from '../components/NewsletterTestimonials/NewsletterTestimonials';

const Home = () => {

    return(
        <div className="home">
            <Header />
            <AboutSection />
            <Formations />
            <ResearchSection />
            <Partenaires />
            <NewsletterTestimonials />
        </div>
    )
}

export default Home;