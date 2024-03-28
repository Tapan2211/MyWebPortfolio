import React from "react";
import styles from './About.module.css';
import Button from '@mui/material/Button';

import MYPHOTO from '../../assets/my_pic.jpg';

function About() {

    const downloadPDF = () => {
        const pdfURl = 'resume.pdf';
        const link = document.createElement("a");
        link.href = pdfURl;
        link.download = "document.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div id="about" className={styles.main}>
            <div className={styles.firstDiv}>
                <img src={MYPHOTO} alt="Image" className={styles.image} />
            </div>
            <div className={styles.secondDiv}>
                <h1 className={styles.h1}>
                    About Me
                </h1>

                <p style={{ color: '#ededed', justifyContent: 'start', textAlign: 'start' }}>
                    
With over 5 years of experience in web development, I specialize in frontend technologies such as HTML, CSS, Bootstrap, JavaScript, and jQuery. I have honed my skills in React.js, including Material-UI and TypeScript, with 2 years of hands-on experience. Recently, I've been expanding my expertise by learning backend technologies like Express.js and MongoDB, aiming to build full-stack applications seamlessly. My diverse skill set enables me to create dynamic and user-friendly web applications with a focus on modern design and functionality.
                </p><br />

                <button variant="outlined" className={styles.btn} onClick={() => downloadPDF()}>
                    DOWNLOAD
                </button>

            </div>
        </div>
    )
}

export default About;