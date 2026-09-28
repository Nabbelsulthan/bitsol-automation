import React from "react";
import "./ProductsHero.css";

import productsHeroVideo
    from "../../assets/products/products1.mp4";


// import ContactCTA
//     from "../ContactCTA/ContactCTA";

    import Products from "./Products";

const ProductsHero = () => {

    return (

        <>

            {/* =================================================
                PRODUCTS HERO
                ================================================= */}

            <section className="products-hero">

                {/* =================================================
                    BACKGROUND VIDEO
                    ================================================= */}

                <div className="products-hero__media">

                    <video
                        className="products-hero__video"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        aria-hidden="true"
                    >

                        <source
                            src={productsHeroVideo}
                            type="video/mp4"
                        />

                    </video>

                </div>


                {/* =================================================
                    CINEMATIC OVERLAY
                    ================================================= */}

                <div className="products-hero__overlay" />


                {/* =================================================
                    CONTENT
                    ================================================= */}

                <div className="products-hero__container">

                    <div className="products-hero__content">

                        {/* Eyebrow */}

                        <div className="products-hero__eyebrow">

                            <span className="products-hero__eyebrow-line" />

                            <span>
                                INDUSTRIAL AUTOMATION PRODUCTS
                            </span>

                        </div>


                        {/* Main Heading */}

                        <h1 className="products-hero__heading">

                            <span>
                                ENGINEERED
                            </span>

                            <span>
                                TO
                            </span>

                            <span className="products-hero__heading-accent">
                                CONTROL.
                            </span>

                        </h1>


                        {/* Description */}

                        <p className="products-hero__description">

                            From PLCs and HMIs to drives, control panels,
                            sensors and industrial software, we provide
                            the technology that keeps your processes moving.

                        </p>


                        {/* CTA */}

                        <div className="products-hero__actions">

                            <a
                                href="#products"
                                className="products-hero__link"
                            >
                                EXPLORE OUR PRODUCTS
                            </a>

                            <a
                                href="/contactus.html"
                                className="products-hero__link products-hero__link--secondary"
                            >
                                TALK TO OUR TEAM
                            </a>

                        </div>

                    </div>


                    {/* =================================================
                        BOTTOM PRODUCT CATEGORIES
                        ================================================= */}

                    <div className="products-hero__bottom">

                        <div className="products-hero__bottom-item">

                            <span className="products-hero__bottom-number">
                                01
                            </span>

                            <span>
                                PLC & SCADA
                            </span>

                        </div>


                        <div className="products-hero__bottom-item">

                            <span className="products-hero__bottom-number">
                                02
                            </span>

                            <span>
                                HMI & VFD
                            </span>

                        </div>


                        <div className="products-hero__bottom-item">

                            <span className="products-hero__bottom-number">
                                03
                            </span>

                            <span>
                                CONTROL PANELS
                            </span>

                        </div>


                        <div className="products-hero__scroll">
                            SCROLL TO EXPLORE
                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                PRODUCTS CONTENT
                ================================================= */}

        
            
                <Products />



            {/* =================================================
                CONTACT CTA
                ================================================= */}

            {/* <ContactCTA /> */}

        </>

    );

};


export default ProductsHero;