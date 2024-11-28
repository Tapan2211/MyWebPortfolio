import React, { useState, useEffect } from "react";
import styles from "./Portfolio.module.css";
import { CircularProgress } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Box from "../Box/Box";
import projectList from "../../data/portfolio.json";

function Portfolio() {
    const [project, setProject] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulating data fetching
        try {
            setProject(projectList);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            toast.error("Fetching error project");
        }
    }, []);

    return (
        <div id="portfolio" className={styles.main_div}>
            <h2>Featured <span>Portfolio</span></h2>
            <div className={styles.sub_div}>
                {isLoading ? (
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                        <CircularProgress style={{ color: "#6feeb7" }} />
                    </div>
                ) : (
                    project.map((projects) => (
                        <div key={projects.id}>
                            <Box data={projects} />
                        </div>
                    ))
                )}
            </div>
            <ToastContainer />
        </div>
    );
}

export default Portfolio;


// import React, { useEffect, useState } from "react";
// import styles from './Portfolio.module.css';
// import { CircularProgress } from "@mui/material";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import Box from '../Box/Box';
// import projectList from '../../data.json';
// import { getProjectList } from "../../Api/api";

// function Portfolio() {

//     const [project, setProject] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         const fetchProject = async () => {
//             try {
//                 const result = await getProjectList();
//                 console.log("PROJECTS", result);
//                 setIsLoading(false);
//                 setProject(result);
//             } catch (error) {
//                 setIsLoading(false);
//                 toast.error("Fetching error project");
//             }
//         }

//         fetchProject();
//     }, []);

//     return (
//         <div id="portfolio" className={styles.main_div}>
//             <h2>Featured <span>Portfolio</span></h2>
//             <div className={styles.sub_div} >
//                 {
//                     isLoading ? (
//                         <Box display="flex"
//                             justifyContent="center"
//                             alignItems="center"
//                             minHeight="100vh"
//                             flexDirection="column">
//                             <CircularProgress style={{ color: '#6feeb7' }} />
//                         </Box>
//                     ) : (
//                         project.map(projects => (
//                             <div key={projects._id}>
//                                 <Box data={projects} />
//                             </div>
//                         ))
//                     )
//                 }
//             </div>
//             <ToastContainer />
//         </div>
//     )
// }

// export default Portfolio;
