import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-scroll';

function Navbar() {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className={styles.navbar}>
            {/* <Link to="/">
                <div className={styles.logo}><Logo /></div>
            </Link> */}
            <div className={`${styles.menuIcon} ${showMenu ? styles.active : ''}`} onClick={toggleMenu}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>
            <div className={`${styles.menu} ${showMenu ? styles.show : ''}`}>
                <Link to="/" duration={500} className={styles.link}>HOME</Link>
                <Link to="portfolio" smooth={false} duration={500} className={styles.link}>PORTFOLIO</Link>
                <Link to="resume" smooth={false} duration={500} className={styles.link}>RESUME</Link>
                <Link to="about" smooth={false} duration={500} className={styles.link}>ABOUT</Link>
                <Link to="contact" smooth={false} duration={500} className={styles.link}>CONTACT</Link>
               
            </div>

        </div>

    );
}

export default Navbar;