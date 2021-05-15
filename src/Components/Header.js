import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Logo from '../Assets/home-logo.png';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <div className={styles.logo}>
                    <Link  to="/" aria-label="Patricia's Portfolio - Home">
                        <img src={Logo} alt="website logo" />
                    </Link>
                </div>
                <div className={styles.navlinks}>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><a href="https://github.com/patriciasteinberg">Github</a></li>
                        <li><a href="https://www.behance.net/patriciasteinberg">Behance</a></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;
