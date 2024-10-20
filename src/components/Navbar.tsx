'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import '../styles/Navbar.scss';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
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

                {/* Hamburger Icon (for mobile and tabs) */}
                <div className="navbar__toggle" onClick={toggleMenu}>
                    {isOpen ? (
                        <FaTimes className="navbar__icon" />
                    ) : (
                        <FaBars className="navbar__icon" />
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
