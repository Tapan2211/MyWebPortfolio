import React from "react";
import styles from './Portfolio.module.css';

import Box from '../Box/Box';
import projectList from '../../data.json';

function Portfolio() {

    return (
        <div id="portfolio" className={styles.main_div}>
            <h2>Featured <span>Portfolio</span></h2>
            <div className={styles.sub_div} >
                {
                    projectList.projects.map(project => (
                        <div key={project.id}>
                            <Box data={project} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Portfolio;