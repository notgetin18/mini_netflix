import React, { useState } from 'react';
import { faqs } from '@/constants';
import styles from "../styles/Faq.module.scss";

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={styles.faqContainer}>
            <h2>FAQ's</h2>
            {faqs.map((faq, index) => (
                <div key={index} className={styles.faqCard}>
                    <div className={styles.question} onClick={() => toggleFaq(index)}>
                        <h3>{faq.question}</h3>
                        <span className={styles.icon}>
                            {openIndex === index ? '-' : '+'}
                        </span>
                    </div>
                    <div
                        className={`${styles.answer} ${openIndex === index ? styles.open : ''}`}
                        style={{ maxHeight: openIndex === index ? '200px' : '0px' }}  // Adjust max height based on content
                    >
                        <p>{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Faq;
