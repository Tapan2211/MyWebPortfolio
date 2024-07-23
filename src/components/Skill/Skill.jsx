import React, { useEffect, useState } from "react";
import styles from './Skill.module.css';
import { CircularProgress, Box } from "@mui/material";
import IMAGES from '../../assets/bg_image.jpg';
import { getSkill } from "../../Api/api";

function Skill() {

    const [skill, setSkill] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getSkillList = async () => {
            try {
                const result = await getSkill();
                console.log("Skill_Data", result);
                setSkill(result);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
            }
        };
        getSkillList();
    }, []);

    return (

        <div id="skill" className={styles.main_div}>
            <h2><span>Skill</span></h2>
            <div className={styles.sub_div} >
                {
                    isLoading ? (
                        <Box display="flex"
                            justifyContent="center"
                            alignItems="center"
                            minHeight="100vh"
                            flexDirection="column">
                            <CircularProgress style={{ color: '#6feeb7' }} />
                        </Box>
                    ) : (
                        skill.map(skills => (
                            <div key={skills._id} className={styles.skill_div}>
                                <img src={skills.image} alt="skill image" className={styles.image} />
                                <p className={styles.skill_name}>{skills.skill}</p>
                            </div>
                        ))
                    )
                }
            </div>
        </div >
    )
}

export default Skill;