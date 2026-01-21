import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.heroContainer}`}>
                <div className={styles.heroContent}>
                    <div className={styles.badge}>
                        <span className={styles.badgeIcon}>⭐</span>
                        12 Years of Excellence
                    </div>
                    <h1 className={styles.title}>
                        Innovative Lift Solutions with <span className={styles.highlight}>Unmatched Reliability</span>
                    </h1>
                    <p className={styles.description}>
                        Under the leadership of Mr. Ch. Srinu, Vaheni Elevators delivers safe, reliable, and innovative elevator solutions for residential, commercial, and healthcare needs.
                    </p>
                    <div className={styles.ctaGroup}>
                        <a href="#services" className="btn btn-primary">Our Services</a>
                        <a href="#contact" className="btn btn-outline">Contact Us</a>
                    </div>
                </div>
                <div className={styles.heroImage}>
                    <div className={styles.imagePlaceholder}>
                        {/* Image will be placed here */}
                        <img src="/hero-image.png" alt="Vaheni Elevators" className={styles.img} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
