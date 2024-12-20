import React, { useEffect, useState } from "react";
import styles from './Skill.module.css';
import { CircularProgress, Box } from "@mui/material";
import skillData from '../../data/skills.json'; // Importing local JSON data

function Skill() {
    const [skills, setSkills] = useState([]); // State for storing skill data
    const [isLoading, setIsLoading] = useState(true); // State for loading indicator

    useEffect(() => {
        // Mock API call to simulate fetching data
        const fetchSkills = async () => {
            try {
                // Simulate an API delay
                await new Promise((resolve) => setTimeout(resolve, 1000));
                setSkills(skillData); // Set data from local JSON file
                setIsLoading(false); // Stop loading indicator
            } catch (error) {
                console.error("Error fetching skill data:", error);
                setIsLoading(false);
            }
        };
        fetchSkills();
    }, []);

    return (
        <div id="skill" className={styles.main_div}>
            <h2>
                <span>Skill</span>
            </h2>
            <div className={styles.sub_div}>
                {isLoading ? (
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        minHeight="100vh"
                        flexDirection="column"
                    >
                        <CircularProgress style={{ color: '#6feeb7' }} />
                    </Box>
                ) : (
                    skills.map((skill) => (
                        <div key={skill.id} className={styles.skill_div}>
                            {/* Dynamic image rendering */}
                            <img
                                src={require(`../../assets/${skill.image}`)}
                                alt={skill.skill}
                                className={styles.image}
                            />
                            <p className={styles.skill_name}>{skill.skill}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Skill;

// import React, { useEffect, useState } from "react";
// import styles from './Skill.module.css';
// import { CircularProgress, Box } from "@mui/material";
// import skillData from '../../data/skills.json';

// import IMAGES from '../../assets/bg_image.jpg';
// import { getSkill } from "../../Api/api";

// function Skill() {

//     const [skill, setSkill] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         const getSkillList = async () => {
//             try {
//                 const result = await getSkill();
//                 console.log("Skill_Data", result);
//                 setSkill(result);
//                 setIsLoading(false);
//             } catch (error) {
//                 setIsLoading(false);
//             }
//         };
//         getSkillList();
//     }, []);

//     return (

//         <div id="skill" className={styles.main_div}>
//             <h2><span>Skill</span></h2>
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
//                         skill.map(skills => (
//                             <div key={skills._id} className={styles.skill_div}>
//                                 <img src={skills.image} alt="skill image" className={styles.image} />
//                                 <p className={styles.skill_name}>{skills.skill}</p>
//                             </div>
//                         ))
//                     )
//                 }
//             </div>
//         </div >
//     )
// }

// export default Skill;