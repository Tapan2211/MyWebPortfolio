import React from "react";
import styles from './Home.module.css';


import Navbar from '../Navbar/Navbar';
import HeroSection from '../HeroSection/HeroSection';
import About from '../About/About';
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
import Resume from "../Resume/Resume";

function Home() {
    return (
        <div id="/">
            <Navbar/>
            <HeroSection/>
            <Resume id="resume"/>
            <About id="about"/>
            <Contact id="contact"/>
            <Footer/>
        </div>
    )
}

export default Home;