import styles from './Testimonials.module.css';

const stats = [
    { label: 'Projects Completed', value: '500+' },
    { label: 'Years Experience', value: '12+' },
    { label: 'Customer Satisfaction', value: '98%' },
    { label: 'Support Available', value: '24/7' }
];

const reviews = [
    {
        text: 'Vaheni Elevators installed lifts in our residential complex. The team was professional, timely, and the installation was flawless. The lifts have been running smoothly for over 2 years now with minimal maintenance.',
        author: 'Residential Client',
        rating: 5
    },
    {
        text: 'We needed specialized hospital lifts that could handle stretchers smoothly. Vaheni delivered exactly what we needed. Their after-sales service is exceptional, and they respond quickly to any maintenance calls.',
        author: 'Hospital Administrator',
        rating: 5
    },
    {
        text: "We've worked with Vaheni Elevators on multiple commercial projects. Their product quality is excellent and their team understands construction timelines. The MRL lifts they provided are space-efficient and cost-effective.",
        author: 'Commercial Developer',
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section id="reviews" className={`section ${styles.testimonials}`}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>What Our Clients Say</h2>
                    <p className={styles.subtitle}>Trusted by hundreds of satisfied customers across residential, commercial, and healthcare sectors</p>
                </div>

                <div className={styles.statsGrid}>
                    {stats.map((stat, index) => (
                        <div key={index} className={styles.statCard}>
                            <div className={styles.statValue}>{stat.value}</div>
                            <div className={styles.statLabel}>{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className={styles.reviewsGrid}>
                    {reviews.map((review, index) => (
                        <div key={index} className={styles.reviewCard}>
                            <div className={styles.quoteIcon}>“</div>
                            <div className={styles.rating}>
                                {[...Array(review.rating)].map((_, i) => (
                                    <span key={i} className={styles.star}>★</span>
                                ))}
                            </div>
                            <p className={styles.reviewText}>{review.text}</p>
                            <div className={styles.author}>- {review.author}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
