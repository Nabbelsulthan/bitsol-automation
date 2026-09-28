import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Customers.css";

import Britannia from "../../assets/customers/Britannia.png";
import cothas from "../../assets/customers/cothas.png";
import ef from "../../assets/customers/ef.png";
import indo from "../../assets/customers/indo.png";
import jbm from "../../assets/customers/jbm.png";
import kemin from "../../assets/customers/kemin.png";
import lumnx from "../../assets/customers/lumnx.png";
import megawin from "../../assets/customers/megawin.png";
import morgan from "../../assets/customers/morgan.png";
import schmetz from "../../assets/customers/schmetz.png";
import scorpio from "../../assets/customers/scorpio.png";
import tata from "../../assets/customers/tata.png";
import tvs from "../../assets/customers/tvs.png";


/* =========================================================
   CUSTOMERS
   ========================================================= */

const customers = [
    {
        name: "Britannia",
        image: Britannia,
    },
    {
        name: "Cothas Coffee",
        image: cothas,
    },
    {
        name: "EF",
        image: ef,
    },
    {
        name: "Indo-MIM",
        image: indo,
    },
    {
        name: "JBM Group",
        image: jbm,
    },
    {
        name: "Kemin",
        image: kemin,
    },
    {
        name: "Lumnx",
        image: lumnx,
    },
    {
        name: "Megawin",
        image: megawin,
    },
    {
        name: "Morgan Advanced Materials",
        image: morgan,
    },
    {
        name: "Schmetz",
        image: schmetz,
    },
    {
        name: "Scorpio",
        image: scorpio,
    },
    {
        name: "Tata Power Solar",
        image: tata,
    },
    {
        name: "TVS Sundram Fasteners",
        image: tvs,
    },
];


/* =========================================================
   DUPLICATE FOR SEAMLESS MARQUEE
   ========================================================= */

const marqueeCustomers = [
    ...customers,
    ...customers,
];


/* =========================================================
   CUSTOMERS COMPONENT
   ========================================================= */

const Customers = () => {

    useEffect(() => {
        AOS.refresh();
    }, []);


    return (

        <section
            className="customers"
            id="customers"
        >

            <div className="container customers__container">

                {/* =================================================
                    HEADER
                ================================================= */}

                <header className="customers__header">

                    <div
                        className="customers__eyebrow"
                        data-aos="fade-down"
                    >

                        <span className="customers__eyebrow-line" />

                        <span>
                            OUR CUSTOMERS
                        </span>

                    </div>


                    <div className="customers__heading-row">

                        <div
                            className="customers__heading"
                            data-aos="fade-up"
                        >

                            <h2>
                                TRUSTED BY
                                <br />

                                <span>
                                    INDUSTRY LEADERS.
                                </span>
                            </h2>

                        </div>


                        <div
                            className="customers__intro"
                            data-aos="fade-up"
                            data-aos-delay="120"
                        >

                            <p>
                                Automation solutions delivered for
                                businesses across manufacturing,
                                process and industrial sectors.
                            </p>

                        </div>

                    </div>

                </header>

            </div>


            {/* =================================================
                LOGO MARQUEE
            ================================================= */}

            <div
                className="customers__marquee"
                data-aos="fade-up"
                data-aos-delay="180"
            >

                <div className="customers__fade customers__fade--left" />
                <div className="customers__fade customers__fade--right" />


                <div className="customers__track">

                    {marqueeCustomers.map(
                        (customer, index) => (

                            <div
                                className="customer-logo"
                                key={`${customer.name}-${index}`}
                            >

                                <img
                                    src={customer.image}
                                    alt={`${customer.name} logo`}
                                    loading={
                                        index < 13
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


export default Customers;