import React from 'react';
import styles from './Header.module.css';
import { Link, NavLink } from 'react-router-dom';
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
                        <li><NavLink to="/about" activeStyle={{fontWeight: "bold", color:"#7f6d63"}}>About</NavLink></li>
                        <li><NavLink to="/projects" activeStyle={{fontWeight: "bold", color:"#7f6d63"}}>Projects</NavLink></li>
                        <li><a href="https://github.com/patriciasteinberg" target="_blank">Github</a></li>
                        <li><a href="https://www.behance.net/patriciasteinberg" target="_blank">Behance</a></li>
                        <li><NavLink to="/contact" activeStyle={{fontWeight: "bold", color:"#7f6d63"}}>Contact</NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;
