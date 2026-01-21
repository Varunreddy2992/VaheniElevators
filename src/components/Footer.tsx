import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerGrid}>
                    <div className={styles.footerBrand}>
                        <div className={styles.brand}>
                            <div className={styles.logoIcon}>VE</div>
                            <div className={styles.logoText}>
                                <span className={styles.brandName}>VAHENI</span>
                                <span className={styles.brandSub}>elevators</span>
                            </div>
                        </div>
                        <p className={styles.brandDesc}>
                            Leading provider of innovative elevator solutions. We specialize in installation, maintenance, and modernization of all types of lifts.
                        </p>
                    </div>

                    <div className={styles.footerLinks}>
                        <h4 className={styles.footerTitle}>Quick Links</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="#about">About Us</Link></li>
                            <li><Link href="#services">Our Services</Link></li>
                            <li><Link href="#products">Products</Link></li>
                            <li><Link href="#reviews">Testimonials</Link></li>
                            <li><Link href="#contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className={styles.footerLinks}>
                        <h4 className={styles.footerTitle}>Our Services</h4>
                        <ul className={styles.linkList}>
                            <li>Passenger Lifts</li>
                            <li>Goods Lifts</li>
                            <li>Hospital Lifts</li>
                            <li>Capsule Lifts</li>
                            <li>Maintenance</li>
                            <li>Modernization</li>
                        </ul>
                    </div>

                    <div className={styles.footerSocials}>
                        <h4 className={styles.footerTitle}>Connect With Us</h4>
                        <div className={styles.socialIcons}>
                            {/* Replace with real social links */}
                            <a href="#" className={styles.socialIcon}>fb</a>
                            <a href="#" className={styles.socialIcon}>tw</a>
                            <a href="#" className={styles.socialIcon}>li</a>
                            <a href="#" className={styles.socialIcon}>ig</a>
                        </div>
                        <p className={styles.footerContact}>
                            <strong>Call:</strong> +91 9000236557
                        </p>
                    </div>
                </div>

                <div className={styles.copyright}>
                    <p>&copy; {new Date().getFullYear()} Vaheni Elevators. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
