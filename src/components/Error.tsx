import React from 'react';
import styles from "../styles/Error.module.scss"

interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div className={styles.errorContainer}>
      <p className={styles.errorMessage}>{message}</p>
    </div>
  );
};

export default Error;
