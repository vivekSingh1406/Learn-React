import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="logo-link">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="logo-img"
                            alt="Logo"
                        />
                    </Link>
                    <div className="nav-buttons">
                        <Link to="#" className="login-btn">Log in</Link>
                        <Link to="#" className="start-btn">Get started</Link>
                    </div>
                    <div className="nav-links">
                        <ul className="nav-list">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/github"
                                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                                >
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
