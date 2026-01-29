import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>VE</div>
          <div className={styles.logoText}>
            <span className={styles.brandName}>VAHENI</span>
            <span className={styles.brandSub}>elevators</span>
          </div>
        </Link>
        <ul className={styles.navLinks}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#services">Services</Link></li>
          <li><Link href="#products">Products</Link></li>
          <li><Link href="#reviews">Reviews</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
        <div className={styles.navActions}>
          <a href="tel:+919000236557" className={styles.phone}>
            <span className={styles.phoneIcon}>📞</span>
            +91 9000236557
          </a>
          <a href="#contact" className="btn btn-primary">Get Quote</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
