import styles from '../styles/Loading.module.scss'
export default function Loading() {
    return (
        <section className={styles.loading_section}>
            <div className={styles.loading}></div>
            <h2>Loading...</h2>
        </section>
    );
}