



import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./BrandsWeDeal.css";


/* =========================================================
   BRAND IMAGES
   ========================================================= */

import allenBradley from "../../assets/brands/allen-bradley.png";
import delta from "../../assets/brands/delta.png";
import lt from "../../assets/brands/l&t.png";
import mitsubishi from "../../assets/brands/mitsubishi.png";
import omron from "../../assets/brands/omron.png";
import proFace from "../../assets/brands/Pro-face.png";
import siemens from "../../assets/brands/siemens.png";


/* =========================================================
   BRANDS
   ========================================================= */

const brands = [
    {
        name: "Allen-Bradley",
        image: allenBradley,
    },
    {
        name: "Delta",
        image: delta,
    },
    {
        name: "L&T",
        image: lt,
    },
    {
        name: "Mitsubishi Electric",
        image: mitsubishi,
    },
    {
        name: "Omron",
        image: omron,
    },
    {
        name: "Pro-face",
        image: proFace,
    },
    {
        name: "Siemens",
        image: siemens,
    },
];


/* =========================================================
   DUPLICATE FOR SEAMLESS MARQUEE
   ========================================================= */

const marqueeBrands = [
    ...brands,
    ...brands,
];


/* =========================================================
   BRANDS WE DEAL
   ========================================================= */

const BrandsWeDeal = () => {

    useEffect(() => {
        AOS.refresh();
    }, []);


    return (

        <section
            className="brands"
            id="brands"
        >

            <div className="container brands__container">

                {/* =================================================
                    HEADER
                ================================================= */}

                <header className="brands__header">

                    <div
                        className="brands__eyebrow"
                        data-aos="fade-down"
                        data-aos-once="false"
                    >

                        <span className="brands__eyebrow-line" />

                        <span>
                            BRANDS WE DEAL WITH
                        </span>

                    </div>


                    <div className="brands__heading-row">

                        <div
                            className="brands__heading"
                            data-aos="fade-up"
                            data-aos-once="false"
                        >

                            <h2>
                                LEADING
                                <br />

                                <span>
                                    AUTOMATION BRANDS.
                                </span>
                            </h2>

                        </div>


                        <div
                            className="brands__intro"
                            data-aos="fade-up"
                            data-aos-delay="120"
                            data-aos-once="false"
                        >

                            <p>
                                We work with leading industrial automation
                                and electrical brands to deliver reliable
                                products and solutions for your application.
                            </p>

                        </div>

                    </div>

                </header>

            </div>


            {/* =================================================
                LOGO MARQUEE
            ================================================= */}

            <div
                className="brands__marquee"
                data-aos="fade-up"
                data-aos-delay="180"
                data-aos-once="false"
            >

                <div className="brands__fade brands__fade--left" />
                <div className="brands__fade brands__fade--right" />


                <div className="brands__track">

                    {marqueeBrands.map(
                        (brand, index) => (

                            <div
                                className="brand-logo"
                                key={`${brand.name}-${index}`}
                            >

                                <img
                                    src={brand.image}
                                    alt={`${brand.name} logo`}
                                    loading={
                                        index < 7
                                            ? "eager"
                                            : "lazy"
                                    }
                                />

                            </div>

                        )
                    )}

                </div>

            </div>


        </section>

    );

};


export default BrandsWeDeal;
