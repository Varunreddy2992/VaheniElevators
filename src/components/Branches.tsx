import styles from './Branches.module.css';

const branches = [
    {
        name: 'Gajularamaram Branch',
        address: 'H. No. 4-83/48, Adarsh Nagar, Gajularamaram, Jeedimetla, Hyderabad - 500 055'
    },
    {
        name: 'Vijayawada Branch',
        address: 'H. No. 947, YSR Colony, Street No. 4, Vanukuru, Vijayawada, AP - 521151'
    }
];

const Branches = () => {
    return (
        <section className={`section ${styles.branches}`}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Our Branches</h2>
                </div>
                <div className={styles.grid}>
                    {branches.map((branch, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>📍</div>
                            <div className={styles.branchInfo}>
                                <h3 className={styles.branchName}>{branch.name}</h3>
                                <p className={styles.branchAddress}>{branch.address}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Branches;
