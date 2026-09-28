import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';

import './Services.css';
import consultancyImage from '../../assets/service/consultancy.png';

import dgControlImage from '../../assets/service/dg-control.png';
import conveyingBatchingImage from '../../assets/service/conveying-batching.png';
import vacuumFurnaceImage from '../../assets/service/vacuum-furnace.png';
import scadaHmiImage from '../../assets/service/scada-hmi.png';
import spmControlImage from '../../assets/service/spm-control.png';
import energyManagementImage from '../../assets/service/energy-management.png';
import controlPanelsImage from '../../assets/service/control-panel.png';
import commissioningImage from '../../assets/service/commissioning.png';
import engineerDeputationImage from '../../assets/service/engineer-deputation.png';
import amcImage from '../../assets/service/amc.png';

/* =========================================================
   SERVICES DATA
   Source content supplied for the Bitsol services section.
   Cards show a short set of capabilities.
   The modal shows the complete service scope.
   ========================================================= */

const services = [
    {
        id: 1,
        title: 'Automation Consultancy',
        image: consultancyImage,
        description:
            'Automation engineering, control strategy, integration and process improvement.',
        features: [
            'Conversion of Manual to Auto operation',
            'Control system network optimization',
            'Integrated control system architectures',
            'Field Instrument Specifications',
            'Integrated control system specifications (Third Party Interface)',
            'Third party integration',
            'Process and business LAN integration',
            'SCADA solutions & HMI solution',
            'PLC Based automation solution',
            'Retrofitting for existing machineries',
            'Energy management solution',
            'Cloud monitoring solution',
        ],
        icon: (
            <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
                <rect x="8" y="12" width="48" height="40" rx="3" />
                <path d="M16 22h12M16 30h8M16 38h18" />
                <rect x="38" y="21" width="10" height="10" rx="1" />
                <path d="M43 31v8M39 39h8" />
            </svg>
        ),
    },

    {
        id: 2,
        title: 'DG Control & Synchronizing',
        image: dgControlImage,
        description:
            'Power generation, generator control, synchronization and load management.',
        features: [
            'Power Generation Solutions',
            'Industrial energy management solutions',
            'Generator control including intergeneration with the governor and excitation controller',
            'Circuit breaker control including integration with protection relays, event monitoring, time synchronization with 1ms resolution',
            'Power control including tie-line control, peak shaving and load sharing',
            'Load shedding including both fast, slow and frequency based',
            'System handover & On-site training',
            'Remote monitoring and control through SCADA system',
        ],
        icon: (
            <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
                <circle cx="32" cy="32" r="22" />
                <circle cx="32" cy="32" r="9" />
                <path d="M32 10v13M32 41v13M10 32h13M41 32h13" />
                <path d="M17 17l9 9M38 38l9 9M47 17l-9 9M26 38l-9 9" />
            </svg>
        ),
    },

    {
        id: 3,
        title: 'Conveying & Batching System',
        image: conveyingBatchingImage,
        description:
            'Material conveying, batching, weighing, mixer and packaging automation.',
        features: [
            'Mixer Load Tracking',
            'Finished Batch Tracking',
            'Abnormal Condition Alarms and Tracking',
            'Remote Process Status & Data Access Software (Web Central)',
            'Troubleshooting & Diagnostics Features (Local & Remote)',
            'Bulk Conveying System Automation',
            'Bulk Liquid Handling System Automation',
            'Micro, Minor, Bulk Bag/Tote Ingredient Automation',
            'Manual Prompting & Weigh Station Automation',
            'Mixer Automation',
            'Packaging Interface',
            'Conductivity Monitoring',
        ],
        icon: (
            <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
                <path d="M8 42h48" />
                <path d="M14 35h36" />
                <circle cx="17" cy="46" r="5" />
                <circle cx="47" cy="46" r="5" />
                <path d="M18 35V23h28v12" />
                <path d="M25 23v-7h14v7" />
            </svg>
        ),
    },

    {
        id: 4,
        title: 'Vacuum Furnace Control System',
        image: vacuumFurnaceImage,
        description:
            'Furnace automation, PLC upgrades, HMI, recipe control and data logging.',
        features: [
            'Furnace control system',
            'Furnace Automation',
            'Furnace PLC programming and Upgrades',
            'Customizable HMI with chart recorder data logging',
            'Complete furnace automation with recipe control.',
            'Data logging and report generation',
        ],
        icon: (
            <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
                <rect x="12" y="10" width="40" height="44" rx="3" />
                <circle cx="32" cy="32" r="12" />
                <path d="M32 20v24M20 32h24" />
                <path d="M22 16h20M22 48h20" />
            </svg>
        ),
    },

    {
        id: 5,
        title: 'SCADA & HMI Development',
        image: scadaHmiImage,
        description:
            'SCADA and HMI development, upgrades, virtualization, analytics and remote access.',
        features: [
            'Customized HMI development',
            'SCADA System upgrades',
            'System studies and analysis',
            'Standards development',
            'Project reports',
            'Virtualization architecture',
            'Virtualization solutions for legacy systems',
            'Maintenance',
            'Mobile access options',
            'Data backup and disaster recovery systems',
            'Custom configured data analytic tools',
        ],
        icon: (
            <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
                <rect x="8" y="11" width="48" height="34" rx="3" />
                <path d="M18 36l8-10 7 6 11-14" />
                <path d="M27 53h10M32 45v8" />
            </svg>
        ),
    },

    {
        id: 6,
        title: 'SPM Control System',
        image: spmControlImage,
        description:
            'Special purpose machine automation, PLC programming, HMI and recipe control.',
        features: [
            'SPM Automation',
            'SPM PLC programming and Upgrades',
            'Customizable HMI development',
            'Complete SPM automation with recipe control.',
            'Data logging and report generation',
        ],
        icon: (
            <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
                <rect x="12" y="15" width="40" height="34" rx="3" />
                <path d="M20 24h24M20 32h8M20 40h18" />
                <circle cx="43" cy="32" r="5" />
            </svg>
        ),
    },

    {
        id: 7,
        title: 'Energy Management System',
        image: energyManagementImage,
        description:
            'Energy monitoring, reporting, alerts, connectivity and real-time data visibility.',
        features: [
            'Energy consumption against actual production per business unit be it Industry, Building, Utilities etc',
            'MIS reports: Equipment wise energy consumption, Comparison across equipment / machine',
            'Critical Alerts (sms / email) – on energy consumption exceed set threshold limit',
            'Minimum cabling since connectivity can be wireless',
            'Anytime Scalable solution',
            'Security –Access Level Control',
            'Real Time Meter Data: SLD View',
            'Web view even from smart phones(iPhone, Blackberry, Android etc)',
            'MIS Reporting, Trends, Alarms',
            'Sms / Email',
            'Connectivity to ERP / Biiling etc',
            'Data logging to any standard RDBMS (Database)',
            'Data connectivity from all floors or all units / plants',
            'Cabling: Wired or Wireless ( Wifi / GPRS, 3G )',
            'All standard protocols (Modbus) & proprietary protocol',
        ],
        icon: (
            <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
                <path d="M34 7L17 34h13l-2 23 19-30H34l0-20z" />
                <path d="M8 50h48" />
            </svg>
        ),
    },

    {
        id: 8,
        title: 'Automation Control Panels',
        image: controlPanelsImage,
        description:
            'PLC panels, operator interfaces, engineering stations and customized panel solutions.',
        features: [
            'PLC Panels',
            'Operators panels with HMI and SCADA system',
            'Engineers station control panels',
            'AMC Panels',
            'Improvement of processes',
            'Workstation ergonomics',
            'Design study',
            'Operator interface modification',
            'Customized order system',
            'Factory testing',
        ],
        icon: (
            <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
                <rect x="13" y="8" width="38" height="48" rx="2" />
                <rect x="20" y="15" width="24" height="12" rx="1" />
                <path d="M20 34h5M32 34h12M20 42h12M38 42h6" />
                <circle cx="24" cy="50" r="2" />
                <circle cx="40" cy="50" r="2" />
            </svg>
        ),
    },

    {
        id: 9,
        title: 'Commissioning Support',
        image: commissioningImage,
        description:
            'Field commissioning, testing, modifications, start-up, stabilization and documentation.',
        features: [
            'Network and Communication Integrity Testing',
            'Field instrumentation Installation Inspection, Loop Testing & Tuning (FF, 4-20mA, Wireless Pressure/Flow/DP/Level/Temperature Transmitters, Thermocouples & wells, Orifice plates, On-off valves, Heat/Gas/Flame detectors & Manual call points, Control valves, Analyzer, Metering system, Modular instruments etc.)',
            'Instrument Impulse and Pneumatic Supply tubing & fittings, Isolation Valves, Manifolds, Stanchions/support for field instruments installation inspections',
            'Logic testing and support for Onsite modifications',
            'Integrated Site Acceptance Testing (SAT)',
            'Software & Hardware modifications',
            'Design Change Request, Approvals and Implementation',
            'System Start-up, Health check and Process stabilization',
            'Configuration of data-logging & reporting',
            'As-Built documentation generation',
        ],
        icon: (
            <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
                <path d="M38 12a13 13 0 0 0-15 16L10 41l13 13 13-13a13 13 0 0 0 16-15l-10 10-7-7 10-10A13 13 0 0 0 38 12z" />
            </svg>
        ),
    },

    {
        id: 10,
        title: 'Engineer Deputation India or Overseas',
        image: engineerDeputationImage,
        description:
            'Experienced automation engineers for commissioning, retrofitting, support and plant maintenance.',
        features: [
            'Deputation of Experienced Automation engineers for commissioning support at India & Overseas',
            'Deputation of Automation Engineers for retrofitting jobs',
            'Automation Engineers support onsite or offsite',
            'Automation Engineers deputation for plant maintenance',
        ],
        icon: (
            <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
                <circle cx="32" cy="20" r="9" />
                <path d="M16 52c0-10 7-17 16-17s16 7 16 17" />
                <path d="M44 12l9 9M53 12l-9 9" />
            </svg>
        ),
    },

    {
        id: 11,
        title: 'Annual Maintenance Contract (AMC)',
        image: amcImage,
        description:
            'Ongoing automation maintenance, audits, support, version control and system modifications.',
        features: [
            'Permanent on-site maintenance support',
            'On-call site maintenance support',
            'Control system audits & recommendations for corrective procedures',
            'Multi-vendor control system hardware & software support',
            'Firmware version control & repository management',
            'Software version control & repository management',
            'Preventive and corrective maintenance',
            'Spare inventory management',
            'Control system additions & modifications',
        ],
        icon: (
            <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
                <path d="M32 9l20 8v14c0 12-8 20-20 25C20 51 12 43 12 31V17l20-8z" />
                <path d="M23 32l6 6 13-14" />
            </svg>
        ),
    },
];

/* =========================================================
   CARD MOTION
   ========================================================= */

const cardActiveMotion = {
    scale: 1.02,
    y: -4,
    transition: {
        duration: 0.32,
        ease: [0.22, 1, 0.36, 1],
    },
};

const cardNormalMotion = {
    scale: 1,
    y: 0,
    transition: {
        duration: 0.32,
        ease: [0.22, 1, 0.36, 1],
    },
};

const cardEntranceMotion = {
    hidden: {
        opacity: 0,
        y: 28,
    },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: (index % 3) * 0.08,
            ease: [0.16, 1, 0.3, 1],
        },
    }),
};

/* =========================================================
   MODAL MOTION
   ========================================================= */

const modalBackdrop = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.35,
            ease: 'easeOut',
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.25,
            ease: 'easeIn',
        },
    },
};

const modalPanel = {
    hidden: {
        opacity: 0,
        scale: 0.82,
        y: 24,
        rotateX: 7,
        filter: 'blur(8px)',
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        rotateX: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.62,
            ease: [0.16, 1, 0.3, 1],
        },
    },
    exit: {
        opacity: 0,
        scale: 0.9,
        y: 16,
        rotateX: -4,
        filter: 'blur(5px)',
        transition: {
            duration: 0.32,
            ease: [0.4, 0, 1, 1],
        },
    },
};

const modalImage = {
    hidden: {
        opacity: 0,
        scale: 1.14,
        x: -25,
    },
    visible: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: {
            duration: 0.9,
            delay: 0.08,
            ease: [0.16, 1, 0.3, 1],
        },
    },
    exit: {
        opacity: 0,
        scale: 1.05,
        x: -15,
        transition: {
            duration: 0.25,
        },
    },
};

const modalContent = {
    hidden: {
        opacity: 0,
        x: 35,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.55,
            delay: 0.18,
            ease: [0.16, 1, 0.3, 1],
        },
    },
    exit: {
        opacity: 0,
        x: 20,
        transition: {
            duration: 0.2,
        },
    },
};

const featureMotion = {
    hidden: {
        opacity: 0,
        y: 15,
    },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.38,
            delay: 0.2 + index * 0.035,
            ease: [0.16, 1, 0.3, 1],
        },
    }),
};

/* =========================================================
   SERVICE ICON
   ========================================================= */

function ServiceIcon({ children }) {
    return (
        <div className="service-card__icon">
            {children}
        </div>
    );
}

/* =========================================================
   SERVICE CARD
   ========================================================= */

function ServiceCard({
    service,
    index,
    onOpen,
    isActive,
}) {
    return (
        <motion.article
            className={[
                'service-card',
                isActive ? 'service-card--active' : '',
            ].join(' ')}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                amount: 0.12,
            }}
            animate={
                isActive
                    ? cardActiveMotion
                    : cardNormalMotion
            }
            variants={cardEntranceMotion}
        >
            <div
                className="service-card__image"
                data-aos="zoom-in"
                data-aos-duration="700"
                data-aos-once="false"
                style={{
                    backgroundImage: `url(${service.image})`,
                }}
            />

            <div className="service-card__overlay" />

            {/* <ServiceIcon>
                {service.icon}
            </ServiceIcon> */}

            <div className="service-card__body">
                <h3
                    data-aos="fade-up"
                    data-aos-duration="650"
                    data-aos-once="false"
                >
                    {service.title}
                </h3>

                <p
                    className="service-card__description"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="650"
                    data-aos-once="false"
                >
                    {service.description}
                </p>
            </div>


            <div
                className="service-card__footer"
                data-aos="fade-up"
                data-aos-delay="150"
                data-aos-duration="650"
                data-aos-once="false"
            >
                <button
                    type="button"
                    className="service-card__explore"
                    onClick={() => onOpen(service.id)}
                    aria-label={`Explore ${service.title}`}
                >
                    EXPLORE
                </button>
            </div>
        </motion.article>
    );
}

/* =========================================================
   SERVICE DETAIL MODAL
   ========================================================= */

function ServiceDetailModal({
    service,
    onClose,
    onPrevious,
    onNext,
}) {
    const modal = (
        <motion.div
            key={service.id}
            className="service-modal"
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <motion.div
                className="service-modal__backdrop"
                variants={modalBackdrop}
                onClick={onClose}
            />

            <motion.div
                className="service-modal__panel"
                variants={modalPanel}
                role="dialog"
                aria-modal="true"
                aria-labelledby="service-modal-title"
            >
                <button
                    type="button"
                    className="service-modal__close"
                    onClick={onClose}
                    aria-label="Close service details"
                >
                    CLOSE
                </button>

                <motion.div
                    className="service-modal__visual"
                    variants={modalImage}
                >

                    <div
                        className="service-modal__image-bg"
                        style={{
                            backgroundImage: `url(${service.image})`,
                        }}
                    />
                    <div
                        className="service-modal__image"
                        style={{
                            backgroundImage: `url(${service.image})`,
                        }}
                    />

                    <div className="service-modal__image-overlay" />

                    <div className="service-modal__visual-content">
                        <span>INDUSTRIAL AUTOMATION</span>
                    </div>
                </motion.div>

                <motion.div
                    className="service-modal__content"
                    variants={modalContent}
                >
                    <div className="service-modal__content-scroll">
                        <div className="service-modal__intro">
                            <h2 id="service-modal-title">
                                {service.title}
                            </h2>

                            <p className="service-modal__description">
                                {service.description}
                            </p>
                        </div>

                        <div className="service-modal__section-title">
                            WHAT WE PROVIDE
                        </div>

                        <div className="service-modal__features">
                            {service.features.map((feature, index) => (
                                <motion.div
                                    key={feature}
                                    className="service-modal__feature"
                                    custom={index}
                                    variants={featureMotion}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <span className="service-modal__feature-dot" />
                                    <span className="service-modal__feature-name">
                                        {feature}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <div className="service-modal__navigation">
                    <button
                        type="button"
                        className="service-modal__nav-button"
                        onClick={onPrevious}
                    >
                        PREVIOUS
                    </button>

                    <button
                        type="button"
                        className="service-modal__nav-button service-modal__nav-button--primary"
                        onClick={onNext}
                    >
                        NEXT
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );

    return createPortal(modal, document.body);
}

/* =========================================================
   MAIN SERVICES COMPONENT
   ========================================================= */

export default function Services() {
    const [activeServiceId, setActiveServiceId] = useState(null);
    const scrollPositionRef = useRef(0);

    const activeServiceIndex = services.findIndex(
        (service) => service.id === activeServiceId
    );

    const activeService =
        activeServiceIndex >= 0
            ? services[activeServiceIndex]
            : null;

    const openService = (serviceId) => {
        scrollPositionRef.current = window.scrollY;
        setActiveServiceId(serviceId);
    };

    const closeService = () => {
        setActiveServiceId(null);
    };

    const showPrevious = () => {
        if (activeServiceIndex < 0) return;

        const previousIndex =
            activeServiceIndex === 0
                ? services.length - 1
                : activeServiceIndex - 1;

        setActiveServiceId(services[previousIndex].id);
    };

    const showNext = () => {
        if (activeServiceIndex < 0) return;

        const nextIndex =
            activeServiceIndex === services.length - 1
                ? 0
                : activeServiceIndex + 1;

        setActiveServiceId(services[nextIndex].id);
    };

    useEffect(() => {
        if (!activeService) {
            const restoreY = scrollPositionRef.current;

            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';
            document.body.style.width = '';
            document.body.style.overflow = '';

            window.requestAnimationFrame(() => {
                window.scrollTo(0, restoreY);
            });

            return undefined;
        }

        const previousBodyStyles = {
            position: document.body.style.position,
            top: document.body.style.top,
            left: document.body.style.left,
            right: document.body.style.right,
            width: document.body.style.width,
            overflow: document.body.style.overflow,
        };

        const lockedScrollY = scrollPositionRef.current;

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                closeService();
            }

            if (event.key === 'ArrowLeft') {
                showPrevious();
            }

            if (event.key === 'ArrowRight') {
                showNext();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        document.body.style.position = 'fixed';
        document.body.style.top = `-${lockedScrollY}px`;
        document.body.style.left = '0';
        document.body.style.right = '0';
        document.body.style.width = '100%';
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);

            document.body.style.position = previousBodyStyles.position;
            document.body.style.top = previousBodyStyles.top;
            document.body.style.left = previousBodyStyles.left;
            document.body.style.right = previousBodyStyles.right;
            document.body.style.width = previousBodyStyles.width;
            document.body.style.overflow = previousBodyStyles.overflow;
        };
    }, [activeService, activeServiceIndex]);

    return (
        <section id="services" className="services-section section">
            <div className="container">
                <div
                    className="services-heading"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-once="false"
                >
                    <div
                        className="services-heading__eyebrow"
                        data-aos="fade-right"
                        data-aos-duration="700"
                        data-aos-once="false"
                    >
                        <span className="services-heading__dot" />
                        WHAT WE ENGINEER
                        <span className="services-heading__line" />
                    </div>

                    <div className="services-heading__content">
                        <div>
                            <h2
                                data-aos="fade-up"
                                data-aos-delay="100"
                                data-aos-duration="800"
                                data-aos-once="false"
                            >
                                AUTOMATION
                                <br />
                                <span>SERVICES.</span>
                            </h2>
                        </div>

                        <div
                            className="services-heading__description"
                            data-aos="fade-left"
                            data-aos-delay="150"
                            data-aos-duration="800"
                            data-aos-once="false"
                        >
                            <p>
                                From control systems and industrial automation
                                to commissioning and ongoing support, we engineer
                                solutions around how your operation actually works.
                            </p>

                            <div className="services-heading__technical">
                                <span>PLC</span>
                                <span>SCADA</span>
                                <span>HMI</span>
                                <span>CONTROL</span>
                                <span>INTEGRATION</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            index={index}
                            onOpen={openService}
                            isActive={service.id === activeServiceId}
                        />
                    ))}
                </div>

                <div
                    className="services-bottom"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-once="false"
                >
                    <span className="services-bottom__line" />

                    <p>
                        ENGINEERED FOR YOUR PROCESS.
                        <strong> BUILT FOR PERFORMANCE.</strong>
                    </p>

                    <span className="services-bottom__line" />
                </div>
            </div>

            <AnimatePresence>
                {activeService && (
                    <ServiceDetailModal
                        key={activeService.id}
                        service={activeService}
                        onClose={closeService}
                        onPrevious={showPrevious}
                        onNext={showNext}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}
