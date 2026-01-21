"use client";
import { useState } from 'react';
import styles from './Products.module.css';

type OverviewData = {
    type: 'Overview';
    title: string;
    description: string;
    list: { title: string; desc: string; }[];
    image: string;
};

type ComponentsData = {
    type: 'Components';
    title: string;
    description: string;
    categories: { name: string; items: string[]; }[];
};

type MotorsData = {
    type: 'Motors & Controls';
    title: string;
    description: string;
    motors: string[];
    controls: { title: string; text: string; };
};

type ProductTabData = OverviewData | ComponentsData | MotorsData;

const productData: Record<string, ProductTabData> = {
    Overview: {
        type: 'Overview',
        title: 'Our Product Range',
        description: 'We offer a comprehensive range of elevator products designed to meet diverse needs - from residential apartments to commercial high-rises and specialized healthcare facilities.',
        list: [
            { title: 'Elevator Cabins', desc: 'Standard Cabins, Luxury Cabins, Glass Cabins, Hospital Cabins' },
            { title: 'Elevator Doors', desc: 'Manual Doors, Automatic Doors, Glass Doors' }
        ],
        image: '/product-range.png'
    },
    Components: {
        type: 'Components',
        title: 'Elevator Components',
        description: 'Quality components for every part of your elevator system, ensuring longevity and safety.',
        categories: [
            {
                name: 'Elevator Cabins',
                items: ['Standard Cabins', 'Luxury Cabins', 'Glass Cabins', 'Hospital Cabins']
            },
            {
                name: 'Elevator Doors',
                items: ['MS Small Vision Door', 'Collapsible Door', 'Imperforated Door', 'Auto Big Vision Door', 'Hospital Door', 'Swing Big Vision Door']
            },
            {
                name: 'Elevator Gear Machines',
                items: ['Worm Gear', 'Helical Gear', 'Planetary Gear']
            },
            {
                name: 'Accessories & Spare Parts',
                items: ['Control Panels (LOP & COP)', 'Door Operators', 'Safety Gear', 'Guide Rails', 'Buffers']
            },
            {
                name: 'Electrical Components',
                items: ['VFD Drives', 'ARD Systems', 'Emergency Lighting', 'Intercom Systems']
            }
        ]
    },
    'Motors & Controls': {
        type: 'Motors & Controls',
        title: 'Types of Motors & Controls',
        description: 'We work with leading Indian and international motor manufacturers to provide geared and gearless motors with advanced control systems for optimal performance.',
        motors: [
            'Montanary', 'Turri Drive', 'Bharat Bijlee', 'Over Speed Governor',
            'Sharp', 'Bicor', 'Sharp Gearless Machine', 'Montanary Gearless Machine'
        ],
        controls: {
            title: 'Control Systems',
            text: 'LOP & COP panels, Fire Alarms, Emergency Systems, and Advanced microprocessor controllers.'
        }
    }
};

const tabs = ['Overview', 'Components', 'Motors & Controls'];

const Products = () => {
    const [activeTab, setActiveTab] = useState('Overview');
    const data = productData[activeTab];

    return (
        <section id="products" className={`section ${styles.products}`}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.categoryTag}>Our Products</span>
                    <h2 className={styles.title}>Products & Solutions</h2>
                    <p className={styles.subtitle}>AN ELEVATOR WITH A THOUSAND FACES - Premium quality elevator components and systems</p>
                </div>

                <div className={styles.tabContainer}>
                    <div className={styles.tabs}>
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.content}>
                    {data.type === 'Overview' && (
                        <div className={styles.productDisplay}>
                            <div className={styles.imageGallery}>
                                <div className={styles.mainImage}>
                                    <img src={data.image} alt="Elevator Range" className={styles.img} />
                                </div>
                            </div>
                            <div className={styles.productInfo}>
                                <h3 className={styles.infoTitle}>{data.title}</h3>
                                <p className={styles.infoText}>{data.description}</p>
                                <ul className={styles.productList}>
                                    {data.list.map((item, idx) => (
                                        <li key={idx} className={styles.productItem}>
                                            <div className={styles.itemTitle}>{item.title}</div>
                                            <div className={styles.itemDesc}>{item.desc}</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    {data.type === 'Components' && (
                        <div className={styles.componentsGrid}>
                            {data.categories.map((cat, idx) => (
                                <div key={idx} className={styles.compCard}>
                                    <h4 className={styles.compName}>{cat.name}</h4>
                                    <ul className={styles.itemList}>
                                        {cat.items.map((item, i) => (
                                            <li key={i} className={styles.listItem}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    )}

                    {data.type === 'Motors & Controls' && (
                        <div className={styles.motorsLayout}>
                            <div className={styles.imageGallery}>
                                <div className={styles.mainImage}>
                                    <img src="/types-of-motors.png" alt="Motors and Controls" className={styles.img} />
                                </div>
                            </div>
                            <div className={styles.motorsInfo}>
                                <h3 className={styles.infoTitle}>{data.title}</h3>
                                <p className={styles.infoText}>{data.description}</p>
                                <div className={styles.motorGrid}>
                                    {data.motors.map((motor, idx) => (
                                        <div key={idx} className={styles.motorItem}>{motor}</div>
                                    ))}
                                </div>
                                <div className={styles.controlsSection}>
                                    <h4 className={styles.controlsTitle}>{data.controls.title}</h4>
                                    <p className={styles.controlsText}>{data.controls.text}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Products;
