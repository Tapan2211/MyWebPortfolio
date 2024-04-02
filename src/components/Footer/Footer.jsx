import React from "react";
import styles from './Footer.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer(){
    const handleClick = (e) =>{
        window.open(e, '_blank')
    }
    return(
        <div className={styles.main_div}>
            <p>This template is made with  by Tapan Ghataliya</p> 
            <div>
                <GitHubIcon onClick={()=>handleClick('https://github.com/Tapan2211')} style={{height:'50px', width:'50px', padding:'10px'}} className={styles.logo} />
                <LinkedInIcon onClick={()=>handleClick('https://www.linkedin.com/in/tapan-ghataliya-9a8a3083/')} style={{height:'50px', width:'50px', padding:'10px'}} className={styles.logo} />
                {/* <InstagramIcon style={{height:'50px', width:'50px', padding:'10px'}} className={styles.logo} />
                <FacebookIcon style={{height:'50px', width:'50px', padding:'10px'}} className={styles.logo} /> */}
    
            </div>
    
        </div>
    )
}

export default Footer;