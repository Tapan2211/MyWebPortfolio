import React from "react";
import styles from './About.module.css';
import Button from '@mui/material/Button';

import MYPHOTO from '../../assets/my_pic.jpg';

function About() {

    const downloadPDF = () =>{
        const pdfURl = 'resume.pdf';
        const link = document.createElement("a");
        link.href = pdfURl;
        link.download = "document.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div id="about" className={styles.main_div}>
            <div className={styles.box}>
                <img className={styles.photo} src={MYPHOTO} alt="photo" />
            </div>
            <div className={styles.box2}>
                <div>
                    <h1 className={styles.h1}>
                        About Me
                    </h1>
                    <p style={{ color: '#ededed', justifyContent: 'start', textAlign: 'start' }}>
                        Separated they live in Bookmarksgrove right at the<br /> coast of the Semantics, a large language ocean.
                        <br />
                        A small river named Duden flows by their place and supplies it with the <br />necessary regelialia. It is a paradisematic country, <br />in which roasted parts of sentences fly into your mouth.
                    </p><br />

                    <div className={styles.btn_div}>
                        <button variant="outlined" className={styles.btn} onClick={()=>downloadPDF()}> 
                            DOWNLOAD
                        </button>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;