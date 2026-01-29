"use client";
import { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            if (res.ok) {
                setStatus({ type: 'success', message: data.message });
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            } else {
                setStatus({ type: 'error', message: data.message });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className={`section ${styles.contact}`}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.categoryTag}>Get In Touch</span>
                    <h2 className={styles.title}>Contact Us</h2>
                    <p className={styles.subtitle}>Reach out to us for any inquiries, quotes, or support</p>
                </div>

                <div className={styles.contactGrid}>
                    <div className={styles.formWrapper}>
                        <h3 className={styles.formTitle}>Send Us a Message</h3>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.formRow}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className={styles.input}
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Phone Number"
                                    className={styles.input}
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                className={styles.input}
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                className={styles.input}
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                className={styles.textarea}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className={`btn btn-primary ${styles.submitBtn}`}
                                disabled={loading}
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                            {status.message && (
                                <div className={`${styles.status} ${styles[status.type]}`}>
                                    {status.message}
                                </div>
                            )}
                        </form>
                    </div>

                    <div className={styles.infoWrapper}>
                        <h3 className={styles.infoTitle}>Contact Information</h3>
                        <div className={styles.infoList}>
                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>🏢</div>
                                <div className={styles.infoText}>
                                    <strong>Head Office</strong>
                                    <p>H.No. 4-17/1, Durgamatha Colony, Ameenpur, Patancheru, Hyderabad</p>
                                </div>
                            </div>
                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>📞</div>
                                <div className={styles.infoText}>
                                    <strong>Phone Numbers</strong>
                                    <p>+91 9000236557</p>
                                    <p>+91 9515346503</p>
                                </div>
                            </div>
                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>✉️</div>
                                <div className={styles.infoText}>
                                    <strong>Email</strong>
                                    <p>vahenielevators77@gmail.com</p>
                                    <p>vaheni99@gmail.com</p>
                                </div>
                            </div>
                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>🌐</div>
                                <div className={styles.infoText}>
                                    <strong>Website</strong>
                                    <p>www.vahenielevators.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
