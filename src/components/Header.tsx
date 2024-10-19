import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
import styles from "../styles/Navbar.module.scss"

const Header = () => {
    return (
        <header className={styles.main_header}>
            <div className={styles.navbar_brand}>
                <Link href="/">
                    <Image src="/images/logo1.png" alt="my logo image" width={120} height={90} />
                </Link>
            </div>
            <Navbar />
        </header>
    );
};

export default Header;
