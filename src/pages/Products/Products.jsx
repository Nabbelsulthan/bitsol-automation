import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Products.css";


/* =========================================================
   PRODUCT DATA
   ========================================================= */

const products = [
    {
        id: "plc",
        number: "01",
        code: "PLC",
        category: "CONTROL",
        title: "Programmable Logic Controllers",
        description:
            "PLC systems provide the logic and control layer behind machines, production lines and industrial processes.",
        applications: [
            "Machine Automation",
            "Process Control",
            "Production Lines",
            "Material Handling",
            "Packaging",
        ],
        brands: [
            "Siemens",
            "Allen Bradley / Rockwell",
            "GE",
            "Schneider",
            "VIPA",
            "Delta",
            "Omron",
            "Mitsubishi",
        ],
        image: null,
        tone: "warm",
    },

    {
        id: "scada",
        number: "02",
        code: "SCADA",
        category: "SUPERVISION",
        title: "Supervisory Control & Data Acquisition",
        description:
            "SCADA solutions bring process information, equipment status, alarms and operating data into a centralized supervisory environment.",
        applications: [
            "Plant Monitoring",
            "Process Visualization",
            "Alarm Management",
            "Data Acquisition",
            "Production Monitoring",
        ],
        brands: [],
        image: null,
        tone: "cool",
    },

    {
        id: "hmi",
        number: "03",
        code: "HMI",
        category: "OPERATION",
        title: "Human Machine Interface",
        description:
            "HMI systems give operators direct access to machine and process information through intuitive visual interfaces.",
        applications: [
            "Machine Operation",
            "Process Monitoring",
            "Equipment Control",
            "Production Information",
            "Operator Interfaces",
        ],
        brands: [],
        image: null,
        tone: "pearl",
    },

    {
        id: "vfd",
        number: "04",
        code: "VFD",
        category: "DRIVE",
        title: "Variable Frequency Drives",
        description:
            "Variable frequency drives provide controlled motor speed and operating performance across industrial machinery.",
        applications: [
            "Motor Speed Control",
            "Conveyors",
            "Pumps",
            "Fans",
            "Industrial Machinery",
        ],
        brands: [],
        image: null,
        tone: "sage",
    },

    {
        id: "software",
        number: "05",
        code: "SOFTWARE",
        category: "DIGITAL",
        title: "Industrial Automation Software",
        description:
            "Automation software supports PLC programming, HMI development, SCADA configuration and industrial monitoring.",
        applications: [
            "PLC Programming",
            "SCADA Configuration",
            "HMI Development",
            "System Engineering",
            "Industrial Monitoring",
        ],
        brands: [],
        image: null,
        tone: "sand",
    },

    {
        id: "panels",
        number: "06",
        code: "PANELS",
        category: "HARDWARE",
        title: "Engineered Control Panel Solutions",
        description:
            "Control panels bring together automation, protection, switching, instrumentation and control components.",
        applications: [
            "Automation Panels",
            "PLC Panels",
            "Machine Control",
            "Process Control",
            "Industrial Equipment",
        ],
        brands: [],
        image: null,
        tone: "stone",
    },

    {
        id: "sensors",
        number: "07",
        code: "SENSORS",
        category: "FIELD",
        title: "Industrial Sensing & Instrumentation",
        description:
            "Industrial sensing technologies provide the information required by control systems to detect, measure and monitor.",
        applications: [
            "Object Detection",
            "Position Sensing",
            "Process Measurement",
            "Machine Monitoring",
            "Industrial Automation",
        ],
        brands: [],
        image: null,
        tone: "mist",
    },

    {
        id: "sms",
        number: "08",
        code: "SMS",
        category: "APPLICATION",
        title: "Industrial Monitoring & Alerts",
        description:
            "Application-based notification solutions deliver equipment, alarm and process information through automated messaging.",
        applications: [
            "Alarm Notifications",
            "Equipment Alerts",
            "Process Notifications",
            "Remote Status Updates",
            "Industrial Monitoring",
        ],
        brands: [],
        image: null,
        tone: "rose",
    },
];


/* =========================================================
   PRODUCT SPECIMEN
   ========================================================= */

function ProductSpecimen({ product, featured = false }) {
    return (
        <div
            className={`product-specimen product-specimen--${product.tone} ${
                featured ? "product-specimen--featured" : ""
            }`}
        >

            <div className="specimen-head">
                <span>{product.number}</span>
                <span>{product.category}</span>
            </div>


            {product.image ? (
                <img
                    src={product.image}
                    alt={product.title}
                    className="specimen-image"
                    loading="lazy"
                />
            ) : (
                <div className="specimen-art">

                    <div className="specimen-halo" />

                    <div className="specimen-paper">

                        <span className="specimen-paper__number">
                            {product.number}
                        </span>

                        <strong>
                            {product.code}
                        </strong>

                        <small>
                            INDUSTRIAL AUTOMATION
                        </small>

                    </div>

                </div>
            )}


            <div className="specimen-foot">
                <span>BITSOL AUTOMATION</span>
                <span>{product.code}</span>
            </div>

        </div>
    );
}


/* =========================================================
   PRODUCTS PAGE
   ========================================================= */

export default function Products() {

    const [activeProduct, setActiveProduct] = useState("plc");


    useEffect(() => {

        AOS.init({
            duration: 850,
            easing: "ease-out-cubic",
            once: true,
            offset: 80,
        });


        const observers = [];


        products.forEach((product) => {

            const element = document.getElementById(
                `product-${product.id}`
            );

            if (!element) return;


            const observer = new IntersectionObserver(
                ([entry]) => {

                    if (entry.isIntersecting) {
                        setActiveProduct(product.id);
                    }

                },
                {
                    rootMargin: "-35% 0px -48% 0px",
                    threshold: 0,
                }
            );


            observer.observe(element);

            observers.push(observer);

        });


        return () => {
            observers.forEach((observer) => observer.disconnect());
        };

    }, []);


    const scrollToProduct = (id) => {

        const target = document.getElementById(
            `product-${id}`
        );

        if (!target) return;


        target.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

    };


    return (
        <main className="products-page">


            {/* =====================================================
               HERO
               ===================================================== */}

            <section className="products-hero">

                <div className="container">

                    <div className="products-hero__grid">


                        <div className="products-hero__copy">

                            <span
                                className="products-overline"
                                data-aos="fade-up"
                            >
                                BITSOL AUTOMATION / PRODUCT PORTFOLIO
                            </span>


                            <h1
                                data-aos="fade-up"
                                data-aos-delay="70"
                            >
                                Industrial
                                <span>automation</span>
                                products.
                            </h1>


                            <div
                                className="products-hero__statement"
                                data-aos="fade-up"
                                data-aos-delay="140"
                            >

                                <div className="hero-stat">
                                    <strong>08</strong>
                                    <span>PRODUCT<br />CATEGORIES</span>
                                </div>

                                <p>
                                    Control, supervision, operation,
                                    drives, software, panels and field
                                    technologies brought together for
                                    real industrial applications.
                                </p>

                            </div>

                        </div>


                        {/* PRODUCT DECK */}

                        <div
                            className="product-deck"
                            data-aos="fade-left"
                            data-aos-delay="120"
                        >

                            <div className="product-deck__back" />

                            <div className="product-deck__middle" />


                            <div className="product-deck__front">

                                <div className="deck-header">
                                    <span>PRODUCT INDEX</span>
                                    <span>01 — 08</span>
                                </div>


                                <div className="deck-grid">

                                    {products.map((product) => (

                                        <button
                                            key={product.id}
                                            type="button"
                                            onClick={() =>
                                                scrollToProduct(
                                                    product.id
                                                )
                                            }
                                        >

                                            <span>
                                                {product.number}
                                            </span>

                                            <div>
                                                <strong>
                                                    {product.code}
                                                </strong>

                                                <small>
                                                    {product.category}
                                                </small>
                                            </div>

                                        </button>

                                    ))}

                                </div>


                                <div className="deck-footer">
                                    <span>INDUSTRIAL AUTOMATION</span>
                                    <span>2026</span>
                                </div>

                            </div>

                        </div>

                    </div>


                    <div
                        className="hero-microcopy"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >

                        <span>
                            CONTROL
                        </span>

                        <span>
                            MONITOR
                        </span>

                        <span>
                            OPERATE
                        </span>

                        <span>
                            CONNECT
                        </span>

                    </div>

                </div>

            </section>


            {/* =====================================================
               PRODUCT THESIS
               ===================================================== */}

            <section className="product-thesis section">

                <div className="container">

                    <div className="product-thesis__grid">

                        <div
                            data-aos="fade-up"
                        >

                            <span className="section-kicker">
                                PRODUCT RANGE
                            </span>

                            <h2>
                                Every layer of
                                <span>automation.</span>
                            </h2>

                        </div>


                        <div
                            className="product-thesis__copy"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >

                            <p className="thesis-lead">
                                From the field device to the
                                control system, every technology
                                has a purpose.
                            </p>

                            <p>
                                Bitsol brings the essential
                                technologies of industrial
                                automation together around
                                the requirements of each
                                application.
                            </p>

                        </div>

                    </div>


                    {/* FOUR BIG PRODUCT ROLES */}

                    <div className="product-role-grid">

                        <div
                            className="product-role product-role--red"
                            data-aos="fade-up"
                        >
                            <span>01</span>
                            <strong>CONTROL</strong>
                            <small>PLC</small>
                        </div>

                        <div
                            className="product-role product-role--soft"
                            data-aos="fade-up"
                            data-aos-delay="70"
                        >
                            <span>02</span>
                            <strong>SUPERVISION</strong>
                            <small>SCADA</small>
                        </div>

                        <div
                            className="product-role product-role--cream"
                            data-aos="fade-up"
                            data-aos-delay="140"
                        >
                            <span>03</span>
                            <strong>OPERATION</strong>
                            <small>HMI</small>
                        </div>

                        <div
                            className="product-role product-role--pale"
                            data-aos="fade-up"
                            data-aos-delay="210"
                        >
                            <span>04</span>
                            <strong>FIELD</strong>
                            <small>SENSORS</small>
                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
               PRODUCT NAV
               ===================================================== */}

            <section className="product-nav">

                <div className="container">

                    <div className="product-nav__inner">

                        <span className="product-nav__label">
                            EXPLORE RANGE
                        </span>


                        <div className="product-nav__items">

                            {products.map((product) => (

                                <button
                                    key={product.id}
                                    type="button"
                                    className={
                                        activeProduct === product.id
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() =>
                                        scrollToProduct(
                                            product.id
                                        )
                                    }
                                >

                                    <span>
                                        {product.number}
                                    </span>

                                    <strong>
                                        {product.code}
                                    </strong>

                                </button>

                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
               FEATURED PLC
               ===================================================== */}

            <section
                id="product-plc"
                className="featured-product section--large"
            >

                <div className="container">

                    <div className="featured-product__grid">


                        <div
                            className="featured-product__visual"
                            data-aos="fade-right"
                        >

                            <ProductSpecimen
                                product={products[0]}
                                featured
                            />

                        </div>


                        <div
                            className="featured-product__content"
                            data-aos="fade-left"
                        >

                            <div className="product-index">

                                <span>
                                    01
                                </span>

                                <span>
                                    CONTROL
                                </span>

                            </div>


                            <h2>
                                PLC
                            </h2>


                            <h3>
                                Programmable Logic Controllers
                            </h3>


                            <p className="featured-description">
                                {products[0].description}
                            </p>


                            <div className="featured-details">

                                <div>

                                    <span className="detail-label">
                                        APPLICATIONS
                                    </span>

                                    <div className="premium-chips">

                                        {products[0].applications.map(
                                            (item) => (

                                                <span key={item}>
                                                    {item}
                                                </span>

                                            )
                                        )}

                                    </div>

                                </div>


                                <div>

                                    <span className="detail-label">
                                        SUPPORTED MAKES
                                    </span>

                                    <div className="brand-stack">

                                        {products[0].brands.map(
                                            (brand, index) => (

                                                <span key={brand}>

                                                    <small>
                                                        0{index + 1}
                                                    </small>

                                                    {brand}

                                                </span>

                                            )
                                        )}

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
               REMAINING PRODUCTS
               ===================================================== */}

            <section className="product-stories">

                <div className="container">


                    <div
                        className="product-stories__heading"
                        data-aos="fade-up"
                    >

                        <div>

                            <span className="section-kicker">
                                PRODUCT COLLECTION
                            </span>

                            <h2>
                                Built around
                                <span>the application.</span>
                            </h2>

                        </div>

                        <p>
                            Explore the rest of the technologies
                            within the Bitsol automation portfolio.
                        </p>

                    </div>


                    <div className="product-story-list">

                        {products.slice(1).map(
                            (product, index) => (

                                <article
                                    key={product.id}
                                    id={`product-${product.id}`}
                                    className={`product-story ${
                                        index % 2 === 1
                                            ? "product-story--reverse"
                                            : ""
                                    }`}
                                >


                                    <div
                                        className="product-story__visual"
                                        data-aos={
                                            index % 2 === 0
                                                ? "fade-right"
                                                : "fade-left"
                                        }
                                    >

                                        <ProductSpecimen
                                            product={product}
                                        />

                                    </div>


                                    <div
                                        className="product-story__content"
                                        data-aos={
                                            index % 2 === 0
                                                ? "fade-left"
                                                : "fade-right"
                                        }
                                    >

                                        <div className="product-index">

                                            <span>
                                                {product.number}
                                            </span>

                                            <span>
                                                {product.category}
                                            </span>

                                        </div>


                                        <h3>
                                            {product.code}
                                        </h3>


                                        <h4>
                                            {product.title}
                                        </h4>


                                        <p>
                                            {product.description}
                                        </p>


                                        <div className="story-applications">

                                            <span className="detail-label">
                                                TYPICAL APPLICATIONS
                                            </span>


                                            <div className="premium-chips">

                                                {product.applications.map(
                                                    (item) => (

                                                        <span key={item}>
                                                            {item}
                                                        </span>

                                                    )
                                                )}

                                            </div>

                                        </div>

                                    </div>

                                </article>

                            )
                        )}

                    </div>

                </div>

            </section>


            {/* =====================================================
               SYSTEM
               ===================================================== */}

            <section className="system-section section--large">

                <div className="container">


                    <div
                        className="system-section__heading"
                        data-aos="fade-up"
                    >

                        <div>

                            <span className="section-kicker">
                                THE AUTOMATION SYSTEM
                            </span>

                            <h2>
                                Different technologies.
                                <span>One system.</span>
                            </h2>

                        </div>


                        <p>
                            The right combination of control,
                            operation, supervision and field
                            technologies creates a complete
                            automation solution.
                        </p>

                    </div>


                    <div className="system-composition">


                        <div
                            className="system-piece system-piece--field"
                            data-aos="fade-up"
                        >

                            <div className="system-piece__meta">
                                <span>01</span>
                                <small>FIELD</small>
                            </div>

                            <strong>
                                SENSORS
                            </strong>

                            <p>
                                Information begins at the
                                machine and process.
                            </p>

                        </div>


                        <div
                            className="system-piece system-piece--control"
                            data-aos="fade-up"
                            data-aos-delay="80"
                        >

                            <div className="system-piece__meta">
                                <span>02</span>
                                <small>CONTROL</small>
                            </div>

                            <strong>
                                PLC
                            </strong>

                            <p>
                                Logic turns information
                                into action.
                            </p>

                        </div>


                        <div
                            className="system-piece system-piece--operation"
                            data-aos="fade-up"
                            data-aos-delay="160"
                        >

                            <div className="system-piece__meta">
                                <span>03</span>
                                <small>OPERATION</small>
                            </div>

                            <strong>
                                HMI
                            </strong>

                            <p>
                                Operators see and interact
                                with the process.
                            </p>

                        </div>


                        <div
                            className="system-piece system-piece--supervision"
                            data-aos="fade-up"
                            data-aos-delay="240"
                        >

                            <div className="system-piece__meta">
                                <span>04</span>
                                <small>SUPERVISION</small>
                            </div>

                            <strong>
                                SCADA
                            </strong>

                            <p>
                                Process information becomes
                                visible at system level.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
               TECHNOLOGY
               ===================================================== */}

            <section className="technology-section section">

                <div className="container">


                    <div className="technology-section__grid">


                        <div
                            data-aos="fade-up"
                        >

                            <span className="section-kicker">
                                TECHNOLOGY
                            </span>

                            <h2>
                                Established
                                <span>platforms.</span>
                            </h2>

                        </div>


                        <div
                            className="technology-content"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >

                            <p>
                                We work with established
                                automation platforms selected
                                according to the technical
                                requirements of each project.
                            </p>


                            <div className="technology-cloud">

                                {products[0].brands.map(
                                    (brand, index) => (

                                        <span
                                            key={brand}
                                            className={`technology-token technology-token--${index + 1}`}
                                        >
                                            {brand}
                                        </span>

                                    )
                                )}

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
               APPLICATIONS
               ===================================================== */}

            <section className="applications-section section--large">

                <div className="container">


                    <div
                        className="applications-heading"
                        data-aos="fade-up"
                    >

                        <span className="section-kicker">
                            APPLICATIONS
                        </span>

                        <h2>
                            Designed around
                            <span>the application.</span>
                        </h2>

                    </div>


                    <div className="application-layout">


                        <article
                            className="application-tile application-tile--feature"
                            data-aos="fade-up"
                        >

                            <span>01</span>

                            <div>

                                <h3>
                                    Machine
                                    <br />
                                    Automation
                                </h3>

                                <p>
                                    Control and monitoring for
                                    industrial machinery and
                                    automated equipment.
                                </p>

                            </div>

                        </article>


                        <article
                            className="application-tile application-tile--warm"
                            data-aos="fade-up"
                            data-aos-delay="70"
                        >

                            <span>02</span>

                            <div>

                                <h3>
                                    Process
                                    <br />
                                    Automation
                                </h3>

                                <p>
                                    Automation technologies for
                                    industrial processes.
                                </p>

                            </div>

                        </article>


                        <article
                            className="application-tile application-tile--small"
                            data-aos="fade-up"
                            data-aos-delay="140"
                        >

                            <span>03</span>

                            <div>

                                <h3>
                                    Material
                                    <br />
                                    Handling
                                </h3>

                                <p>
                                    Control solutions for
                                    conveying, handling and
                                    movement systems.
                                </p>

                            </div>

                        </article>


                        <article
                            className="application-tile application-tile--wide"
                            data-aos="fade-up"
                            data-aos-delay="210"
                        >

                            <span>04</span>

                            <div>

                                <h3>
                                    Manufacturing
                                </h3>

                                <p>
                                    Automation systems supporting
                                    modern production environments.
                                </p>

                            </div>

                        </article>


                        <article
                            className="application-tile application-tile--compact"
                            data-aos="fade-up"
                            data-aos-delay="280"
                        >

                            <span>05</span>

                            <div>

                                <h3>
                                    Packaging
                                </h3>

                                <p>
                                    Control, drive and operator
                                    interface solutions.
                                </p>

                            </div>

                        </article>


                        <article
                            className="application-tile application-tile--monitoring"
                            data-aos="fade-up"
                            data-aos-delay="350"
                        >

                            <span>06</span>

                            <div>

                                <h3>
                                    Industrial
                                    <br />
                                    Monitoring
                                </h3>

                                <p>
                                    Monitoring, alerts and
                                    visualization for connected
                                    operations.
                                </p>

                            </div>

                        </article>

                    </div>

                </div>

            </section>


            {/* =====================================================
               FINAL CTA
               ===================================================== */}

            <section className="products-final section">

                <div className="container">


                    <div
                        className="products-final__card"
                        data-aos="fade-up"
                    >

                        <div className="final-orbit final-orbit--one" />
                        <div className="final-orbit final-orbit--two" />


                        <div className="products-final__left">

                            <span className="section-kicker">
                                START A PROJECT
                            </span>

                            <h2>
                                Have an automation
                                <span>requirement?</span>
                            </h2>

                        </div>


                        <div className="products-final__right">

                            <p>
                                Tell us what you are building,
                                controlling or improving.
                            </p>

                            <a href="/quote">
                                REQUEST A QUOTE
                            </a>

                        </div>


                        {/* <span className="products-final__index">
                            08
                        </span> */}

                    </div>

                </div>

            </section>


        </main>
    );
}