'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import '../styles/Navbar.scss';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar__container">
                {/* Logo */}
                <Link href="/">
                    <Image src="/images/logo1.png" alt="my logo image" width={90} height={60} priority />
                </Link>

                {/* Hamburger Icon (for mobile) */}
                {/* <div className="navbar__toggle" onClick={toggleMenu}>
                    <span className="navbar__toggle-icon"></span>
                    <span className="navbar__toggle-icon"></span>
                    <span className="navbar__toggle-icon"></span>
                </div> */}

                <div className="navbar__toggle" onClick={toggleMenu}>
                    {isOpen ? (
                        <FaTimes className="navbar__icon" /> // Show cross icon if menu is open
                    ) : (
                        <FaBars className="navbar__icon" />  // Show hamburger icon if menu is closed
                    )}
                </div>

                {/* Navigation Links */}
                <div className={`navbar__menu ${isOpen ? 'active' : ''}`}>
                    <Link href="/" className="navbar__link">
                        Home
                    </Link>
                    <Link href="/" className="navbar__link">
                        About Us
                    </Link>
                    <button className="navbar__button">Sign In</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
