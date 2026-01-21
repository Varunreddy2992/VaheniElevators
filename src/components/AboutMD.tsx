import styles from './AboutMD.module.css';

const AboutMD = () => {
    return (
        <section id="about" className={`section ${styles.aboutMD}`}>
            <div className="container">
                <div className={styles.content}>
                    <h2 className={styles.name}>CH. SRINU</h2>
                    <h3 className={styles.role}>Managing Director</h3>
                    <p className={styles.message}>
                        Leading Vaheni Elevators with 12 years of proven expertise in elevator solutions, committed to delivering excellence in every project.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMD;
