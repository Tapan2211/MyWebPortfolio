import React from "react";
import styles from './Home.module.css';


import Navbar from '../Navbar/Navbar';
import HeroSection from '../HeroSection/HeroSection';
import About from '../About/About';
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
import Resume from "../Resume/Resume";
import Portfolio from "../Portfolio/Portfolio";
import Skill from "../Skill/Skill";

function Home() {
    return (
        <div id="/">
            <Navbar />
            <HeroSection />
            <Portfolio id="portfolio" />
            <Skill id="skill" />
            <Resume id="resume" />
            <About id="about" />
            <Contact id="contact" />
            <Footer />
        </div>
    )
}

export default Home;