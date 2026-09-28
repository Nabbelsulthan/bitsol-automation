import React from "react";
import "./ServicesHero.css";

import servicesHeroVideo from "../../assets/service/service1.mp4";


import ContactCTA
    from "../ContactCTA/ContactCTA";

import Services from "./Services";


const ServicesHero = () => {

    return (

        <>

            {/* =================================================
                SERVICES HERO
                ================================================= */}

            <section className="services-hero">

                {/* =================================================
                    BACKGROUND VIDEO
                    ================================================= */}

                <div className="services-hero__media">

                    <video
                        className="services-hero__video"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        aria-hidden="true"
                    >

                        <source
                            src={servicesHeroVideo}
                            type="video/mp4"
                        />

                    </video>

                </div>


                {/* =================================================
                    CINEMATIC OVERLAY
                    ================================================= */}

                <div className="services-hero__overlay" />


                {/* =================================================
                    CONTENT
                    ================================================= */}

                <div className="services-hero__container">

                    <div className="services-hero__content">

                        {/* Eyebrow */}

                        <div className="services-hero__eyebrow">

                            <span className="services-hero__eyebrow-line" />

                            <span>
                                INDUSTRIAL AUTOMATION SERVICES
                            </span>

                        </div>


                        {/* Main Heading */}

                        <h1 className="services-hero__heading">

                            <span>
                                ENGINEERED
                            </span>

                            <span>
                                FOR HOW
                            </span>

                            <span className="services-hero__heading-accent">
                                INDUSTRY WORKS.
                            </span>

                        </h1>


                        {/* Description */}

                        <p className="services-hero__description">

                            From PLC and control systems to complete
                            industrial automation, we engineer solutions
                            around your process, production and performance.

                        </p>


                        {/* CTA */}

                        <div className="services-hero__actions">

                            <a
                                href="#services"
                                className="services-hero__link"
                            >
                                EXPLORE OUR SERVICES
                            </a>

                            <a
                                href="/contactus.html"
                                className="services-hero__link services-hero__link--secondary"
                            >
                                TALK TO OUR TEAM
                            </a>

                        </div>

                    </div>


                    {/* =================================================
                        BOTTOM INFO
                        ================================================= */}

                    <div className="services-hero__bottom">

                        <div className="services-hero__bottom-item">

                            <span className="services-hero__bottom-number">
                                01
                            </span>

                            <span>
                                PLC & CONTROL
                            </span>

                        </div>


                        <div className="services-hero__bottom-item">

                            <span className="services-hero__bottom-number">
                                02
                            </span>

                            <span>
                                PROCESS AUTOMATION
                            </span>

                        </div>


                        <div className="services-hero__bottom-item">

                            <span className="services-hero__bottom-number">
                                03
                            </span>

                            <span>
                                SYSTEM INTEGRATION
                            </span>

                        </div>


                        <div className="services-hero__scroll">
                            SCROLL TO EXPLORE
                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                SERVICES CONTENT
                ================================================= */}

            <Services />


            {/* =================================================
                CONTACT CTA
                ================================================= */  }

            <ContactCTA />

        </>

    );

};


export default ServicesHero;