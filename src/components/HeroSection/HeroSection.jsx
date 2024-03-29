import React from "react";
import styles from './HeroSection.module.css';

function HeroSection() {
    return (
            <div className={styles.main_div}>
            
            <div className={styles.sub_div}>
                <p>
                    Hello, I'm <br />
                    Tapan Ghataliya
                </p>
                <h6>AND THIS IS MY RESUME</h6>
            </div>
        </div>
       
    )
}

export default HeroSection;