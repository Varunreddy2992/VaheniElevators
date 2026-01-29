import styles from './CoreValues.module.css';

const values = [
    {
        title: 'Safety First',
        description: 'Prioritizing passenger & operational safety in every project',
        icon: '🛡️'
    },
    {
        title: 'Quality Service',
        description: 'Delivering excellence in installation, maintenance & modernization',
        icon: '🏅'
    },
    {
        title: 'Innovation',
        description: 'Adopting advanced technology and modern designs for better performance',
        icon: '💡'
    },
    {
        title: 'Customer Commitment',
        description: 'Building long term trust through transparency and reliability',
        icon: '🤝'
    },
    {
        title: 'Integrity',
        description: 'Operating with honesty, responsibility and professionalism',
        icon: '❤️'
    },
    {
        title: 'Sustainability',
        description: 'Creating eco-friendly and energy efficient lift solutions',
        icon: '🍃'
    },
    {
        title: 'Teamwork',
        description: 'Encouraging collaboration and growth with employees, partners & clients',
        icon: '👥'
    }
];

const CoreValues = () => {
    return (
        <section className={`section ${styles.coreValues}`}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Core Values</h2>
                </div>
                <div className={styles.grid}>
                    {values.map((value, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>{value.icon}</div>
                            <h3 className={styles.cardTitle}>{value.title}</h3>
                            <p className={styles.cardDescription}>{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreValues;
