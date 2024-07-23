import React from "react";
import styles from './Resume.module.css';
// import { CircularProgress, Box } from "@mui/material";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import { getEducation } from "../../Api/api";

function Resume() {

    // const [education, setEducation] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     const fetchEducationList = async () => {
    //         try {
    //             const result = await getEducation();
    //             setIsLoading(false);
    //             setEducation(result);
    //         } catch (error) {
    //             setIsLoading(false)
    //         }
    //     };
    //     fetchEducationList();
    // }, []);

    return (
        <div id="resume" className={styles.main_div}>
            <h2>My <span>Resume</span></h2>
            <div className={styles.sub_div}>

                <div className={styles.content_div}>
                    <h2 style={{ marginRight: '5px' }}>Education</h2>
                    <div className={styles.sub_content_div}>
                        <p style={{ textAlign: 'start', fontSize: '14px' }}><span style={{ marginRight: '5px' }}><CalendarMonthIcon style={{ height: '15px', width: '15px' }} /></span>2013 - 2017</p>
                        <p>B.E in Computer <br /> C U SHASH ENGINEERING & TECHNOLOGY <br /> Wadhwancity</p>

                    </div>

                    <div className={styles.sub_content_div}>
                        <p style={{ textAlign: 'start', fontSize: '14px' }}><span style={{ marginRight: '5px' }}><CalendarMonthIcon style={{ height: '15px', width: '15px' }} /></span>2009 - 2013</p>
                        <p>Diploma in Computer <br /> C U SHASH ENGINEERING & TECHNOLOGY <br /> Wadhwancity</p>
                    </div>
                </div>
                <div className={styles.content_div}>
                    <h2>Experience</h2>
                    <div className={styles.sub_content_div}>
                        <p style={{ textAlign: 'start', fontSize: '14px' }}><span style={{ marginRight: '5px' }}><CalendarMonthIcon style={{ height: '15px', width: '15px' }} /></span>OCT 2022 - JUL 2023</p>
                        <p>Sr. Software Engineer<br /> Mindfire Solutions, Noida </p>
                    </div>

                    <div className={styles.sub_content_div}>
                        <p style={{ textAlign: 'start', fontSize: '14px' }}><span style={{ marginRight: '5px' }}><CalendarMonthIcon style={{ height: '15px', width: '15px' }} /></span>SEP 2021- OCT 2022</p>
                        <p>Software Engineer<br /> Mirraw.com, Mumbai </p>
                    </div>

                    <div className={styles.sub_content_div}>
                        <p style={{ textAlign: 'start', fontSize: '14px' }}><span style={{ marginRight: '5px' }}><CalendarMonthIcon style={{ height: '15px', width: '15px' }} /></span>AUG 2018 - SEP 2021</p>
                        <p>Android developer<br /> Windzoon Technologies, Ahmedabad </p>
                    </div>

                    <div className={styles.sub_content_div}>
                        <p style={{ textAlign: 'start', fontSize: '14px' }}><span style={{ marginRight: '5px' }}><CalendarMonthIcon style={{ height: '15px', width: '15px' }} /></span>JUL 2017 - AUG 2018
                        </p>
                        <p>Internship<br /> Rosix Technology, Ahmedabad </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;