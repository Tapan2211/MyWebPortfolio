import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styles from './Box.module.css';
import { Tooltip } from '@mui/material';

import MYPHOTO from '../../assets/my_pic.jpg';

import qtrip_static from '../../assets/qtrip_static.png';
import qtrip_dynamic from '../../assets/qtrip_dynamic.png';
import qkart from '../../assets/qkarts.png';
import qtify from '../../assets/qtify.png';
import igstudio from '../../assets/igstudio.png';
import news_feed from '../../assets/news_feed.png';
import portfolio from '../../assets/portfolio.png';

const imageMap = {
    'qtrip_static.png': qtrip_static,
    'qtrip_dynamic.png': qtrip_dynamic,
    'qkarts.png': qkart,
    'qtify.png': qtify,
    'igstudio.png': igstudio,
    'news_feed.png': news_feed,
    'portfolio.png':portfolio
};

export default function MediaCard({ data }) {
    const { name, image, link } = data;

    const handleClick = (link) => {
        window.open(link, '_blank');
    }

    return (
        <Tooltip title={name}>
            <Card sx={{ maxWidth: 345 }} className={styles.main}>
                <CardMedia
                    sx={{ height: 340, width: 300 }}
                    image={imageMap[image]}
                    title={name}
                >
                    <CardContent className={styles.cardContent} onClick={() => handleClick(link)}>
                        <Typography component="div" className={styles.bottomCenter}>
                            {name}
                        </Typography>
                    </CardContent>
                </CardMedia>

            </Card>
        </Tooltip>
    );
}
