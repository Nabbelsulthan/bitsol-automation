
import "./Footer.css";

import logo from "../../assets/icons/footer-logo.PNG";
import footerIndustrial from "../../assets/images/footer-industrial.png";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">

            {/* =====================================================
                INDUSTRIAL BACKGROUND VISUAL
                ===================================================== */}

            <div
                className="footer__visual"
                aria-hidden="true"
            >
                <img
                    src={footerIndustrial}
                    alt=""
                />
            </div>


            {/* =====================================================
                FOOTER CONTENT
                ===================================================== */}

            <div className="footer__container">

                <div className="footer__main">


                    {/* =================================================
                        BRAND
                        ================================================= */}

                    <div
                        className="footer__brand"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >

                        <a
                            href="/index.html"
                            className="footer__logo"
                            aria-label="Bitsol Automation Home"
                        >
                            <img
                                src={logo}
                                alt="Bitsol Automation"
                            />
                        </a>


                        <p>
                            Industrial automation and control solutions
                            engineered around real production needs.
                        </p>


                        <span className="footer__est">
                            INDUSTRIAL AUTOMATION · EST. 2018
                        </span>

                    </div>


                    {/* =================================================
                        NAVIGATION
                        ================================================= */}

                    <div
                        className="footer__column"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="800"
                    >

                        <span className="footer__heading">
                            NAVIGATION
                        </span>


                        <nav className="footer__links">

                            <a href="/index.html">
                                HOME
                            </a>

                            <a href="/services.html">
                                SERVICES
                            </a>

                            <a href="/products.html">
                                PRODUCTS
                            </a>

                            <a href="/itsolutions.html">
                                IT SOLUTIONS
                            </a>

                            {/* <a href="/projects.html">
                                PROJECTS
                            </a> */}

                            <a href="/contactus.html">
                                CONTACT
                            </a>

                        </nav>

                    </div>


                    {/* =================================================
                        CAPABILITIES
                        ================================================= */}

                    <div
                        className="footer__column"
                        data-aos="fade-up"
                        data-aos-delay="180"
                        data-aos-duration="800"
                    >

                        <span className="footer__heading">
                            CAPABILITIES
                        </span>


                        <div className="footer__links">

                            <a href="/services.html">
                                PLC AUTOMATION
                            </a>

                            <a href="/services.html">
                                INDUSTRIAL CONTROL
                            </a>

                            <a href="/services.html">
                                PROCESS AUTOMATION
                            </a>

                            <a href="/services.html">
                                PANEL ENGINEERING
                            </a>

                            <a href="/services.html">
                                ENERGY MANAGEMENT
                            </a>

                        </div>

                    </div>


                    {/* =================================================
                        CONTACT
                        ================================================= */}

                    <div
                        className="footer__column footer__contact"
                        data-aos="fade-up"
                        data-aos-delay="260"
                        data-aos-duration="800"
                    >

                        <span className="footer__heading">
                            GET IN TOUCH
                        </span>


                        <address className="footer__address">

                            <p>
                                #  No.5/14-6, Rajeswari Nagar,
                                <br />
                                Bagalur Road,
                                <br />
                                Hosur, India - 635109
                            </p>

                        </address>


                        <a
                            href="tel:+917826800765"
                            className="footer__contact-link"
                        >
                            +91 7826800765
                        </a>


                        <a
                            href="mailto:raam@bitsol.in"
                            className="footer__contact-link"
                        >
                            {/* bitsolx@gmail.com */}

                            raam@bitsol.in

                        </a>


                        <a
                            href="mailto:bitsol@bitsol.in"
                            className="footer__contact-link"
                        >
                            {/* bitsolx@gmail.com */}

                            bitsol@bitsol.in

                        </a>


                        <a
                            href="/contactus.html"
                            className="footer__contact-button"
                        >
                            REQUEST A QUOTE
                        </a>

                    </div>

                </div>


                {/* =====================================================
                    DIVIDER
                    ===================================================== */}

                <div
                    className="footer__divider"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                ></div>


                {/* =====================================================
                    BOTTOM
                    ===================================================== */}

                <div className="footer__bottom">

                    <p>
                        © {currentYear} Bitsol Automation.
                        All rights reserved.
                    </p>


                    <div className="footer__bottom-links">

                        <a
                            href="https://www.linkedin.com/in/nabbel-sulthan-j-16a13827b/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Designed &amp; Developed by CES
                        </a>
                    </div>




                    <span className="footer__location">
                        HOSUR · INDIA
                    </span>

                </div>

            </div>

        </footer>
    );
}

export default Footer;