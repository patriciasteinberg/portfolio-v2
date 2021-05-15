import styles from './Home.module.css';
import React from 'react';

const Home = () => {
    return (
        <div className={`${styles.homeContent} container`}>
            <h1 className={styles.title}>Patricia Steinberg</h1>
            <h2>Front-end developer</h2>
            <ul>
                <li><a href="https://www.linkedin.com/in/patricia-steinberg-74a6b6177" target="_blank"><img src="../Assets/home-linkedin-btn.png" alt="LinkedIn Profile Page"/></a></li>
                <li><a href="https://www.behance.net/patriciasteinberg" target="_blank"><img src="../Assets/home-behance-btn.png" alt="Behance Profile Page"/></a></li>
                <li><a href="https://github.com/patriciasteinberg" target="_blank"><img src="../Assets/home-github-btn.png" alt="GitHub Profile Page"/></a></li>
            </ul>
            <a href="/about">More about me</a>
        </div>
    )
}

export default Home
