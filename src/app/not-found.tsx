import React from 'react';
import Link from 'next/link';
import styles from "../styles/NotFound.module.scss";

const NotFound = () => {
    return (
        <div className={styles.notFoundContainer}>
            <h1 className={styles.title}>404 - Page Not Found</h1>
            <p className={styles.message}>Sorry, the page you're looking for doesn't exist.</p>
            <Link href="/" className={styles.homeButton}>
                <button>Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;
