import styles from './Services.module.css';

const services = [
    {
        title: 'New Lift Installation',
        description: 'Professional installation of modern elevator systems for new buildings and retrofits',
        icon: '🏢',
        tag: 'Our Expertise'
    },
    {
        title: 'Lifts Maintenance & Modification',
        description: 'Regular maintenance and upgrade services to keep your lifts running smoothly',
        icon: '🔧'
    },
    {
        title: 'Passenger Lifts',
        description: 'Comfortable and efficient passenger elevators for residential and commercial buildings',
        icon: '👥'
    },
    {
        title: 'Goods Lifts',
        description: 'Heavy-duty cargo elevators designed for transporting goods and materials',
        icon: '📦'
    },
    {
        title: 'Hospital Lifts',
        description: 'Specialized lifts for healthcare facilities with smooth operation and hygiene standards',
        icon: '🏥'
    },
    {
        title: 'Capsule Lifts',
        description: 'Modern panoramic elevators with glass enclosures for aesthetic appeal',
        icon: '🎡'
    }
];

const Services = () => {
    return (
        <section id="services" className={`section ${styles.services}`}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.categoryTag}>Our Expertise</span>
                    <h2 className={styles.title}>Our Services</h2>
                    <p className={styles.subtitle}>Comprehensive elevator solutions including sales, service & modernization</p>
                </div>
                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>{service.icon}</div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardDescription}>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
