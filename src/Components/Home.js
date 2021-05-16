import styles from './Home.module.css';
import React from 'react';
import LinkedInHome from '../Assets/home-linkedin-btn.png';
import BehanceHome from '../Assets/home-behance-btn.png';
import GithubHome from '../Assets/home-github-btn.png';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className={`${styles.homeContent} container`}>
            <h1 className={styles.title}>Patricia Steinberg</h1>
            <h2 className={styles.subtitle}>Front-end developer</h2>
            <div className={styles.extLinks}>
                <a href="https://www.linkedin.com/in/patricia-steinberg-74a6b6177" target="_blank"><img src={LinkedInHome} alt="LinkedIn logo" /></a>
                <a href="https://www.behance.net/patriciasteinberg" target="_blank"><img src={BehanceHome} alt="Behance logo" /></a>
                <a href="https://github.com/patriciasteinberg" target="_blank"><img src={GithubHome} alt="Github logo" /></a>
            </div>
            <Link to="/projects" className={styles.aboutBtn}>More of my projects</Link>
        </div>
    )
}

export default Home
