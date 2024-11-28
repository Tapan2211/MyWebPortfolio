import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styles from "./Box.module.css";
import { Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";

// Dynamically import all images from the assets folder
const importAll = (r) => {
    let images = {};
    r.keys().map((item) => (images[item.replace("./", "")] = r(item)));
    return images;
};
const images = importAll(require.context("../../assets", false, /\.(png|jpe?g|svg)$/));

export default function MediaCard({ data }) {
    if (!data) return null;

    const { p_name, p_url, github, image } = data; // Use `image` key

    const handleLink = (link) => {
        if (link && link.trim()) window.open(link, "_blank");
    };

    return (
        <Tooltip title={p_name}>
            <CardMedia
                sx={{ height: 340, width: 300, margin: 2, borderRadius: 2 }}
                image={images[image]}
                title={p_name}
                className={styles.img}
            >
                <div className={styles.icons}>
                    {p_url && <LinkIcon className={styles.logo} onClick={() => handleLink(p_url)} />}
                    {github && <GitHubIcon className={styles.logo} onClick={() => handleLink(github)} />}
                </div>
            </CardMedia>

            {/* <Card sx={{ maxWidth: 345 }} className={styles.main}>
                <CardMedia
                    sx={{ height: 340, width: 300 }}
                    image={images[image]} // Access the `image` dynamically
                    title={p_name}
                    className={styles.img}
                />
                <CardContent className={styles.cardContent}>
                    <Typography gutterBottom variant="h6" component="div">
                        {p_name}
                    </Typography>
                    <div className={styles.icons}>
                        {p_url && <LinkIcon className={styles.logo} onClick={() => handleLink(p_url)} />}
                        {github && <GitHubIcon className={styles.logo} onClick={() => handleLink(github)} />}
                    </div>
                </CardContent>
            </Card> */}
        </Tooltip>
    );
}



// import React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import styles from './Box.module.css';
// import { Tooltip } from '@mui/material';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkIcon from '@mui/icons-material/Link';

// export default function MediaCard({ data }) {
//     if (!data) {
//         return null; // Render nothing if data is undefined
//     }
//     const { projectName, demoLink, gitLink, projectImage } = data;

//     const handleLink = (demoLink) => {
//         if (demoLink && demoLink.trim() !== '') { // Check if link is not empty or null
//             window.open(demoLink, '_blank');
//         }
//     }

//     const handleGitHubLink = (gitLink) => {
//         if (gitLink && gitLink.trim() !== '') { // Check if github is not empty or null
//             window.open(gitLink, '_blank');
//         }
//     }

//     return (
//         <Tooltip title={projectName}>
//             <Card sx={{ maxWidth: 345 }} className={styles.main}>
//                 <CardMedia
//                     sx={{ height: 340, width: 300 }}
//                     image={projectImage}
//                     title={projectName}
//                     className={styles.img}
//                 >
//                     <CardContent className={styles.cardContent}>
//                         <LinkIcon className={styles.logo} onClick={() => handleLink(demoLink)} />
//                         <GitHubIcon className={styles.logo} onClick={() => handleGitHubLink(gitLink)} />
//                     </CardContent>
//                 </CardMedia>

//             </Card>
//         </Tooltip>
//     );
// }
