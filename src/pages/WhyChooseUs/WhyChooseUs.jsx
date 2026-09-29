



// import "./WhyChooseUs.css";

// const reasons = [
//     {
//         number: "02",
//         title: "CUSTOM SOLUTIONS",
//         text: "Automation engineered around your process, equipment and production requirements.",
//     },
//     {
//         number: "03",
//         title: "MICRO TO TURNKEY",
//         text: "From focused automation upgrades to complete turnkey industrial projects.",
//     },
//     {
//         number: "04",
//         title: "OPTIMIZED ENGINEERING",
//         text: "Practical engineering focused on performance, reliability and cost.",
//     },
//     {
//         number: "05",
//         title: "RELIABLE SUPPORT",
//         text: "Technical service and after-sales support when your operation needs it.",
//     },
// ];

// function WhyChooseUs() {
//     return (
//         <section
//             className="why-choose"
//             id="why-choose-us"
//             aria-labelledby="why-choose-title"
//         >
//             <div className="why-choose__container">

//                 {/* =====================================================
//                     HEADER
//                 ===================================================== */}

//                 <div className="why-choose__header">

//                     <div
//                         className="why-choose__label"
//                         data-aos="fade-up"
//                         data-aos-duration="700"
//                     >
//                         WHY BITSOL
//                     </div>


//                     <div className="why-choose__heading">

//                         <h2
//                             id="why-choose-title"
//                             data-aos="fade-up"
//                             data-aos-delay="100"
//                             data-aos-duration="900"
//                         >
//                             ENGINEERED
//                             <br />
//                             <span>FOR INDUSTRY.</span>
//                         </h2>

//                         <p
//                             data-aos="fade-up"
//                             data-aos-delay="200"
//                             data-aos-duration="800"
//                         >
//                             We bring together experience, engineering and
//                             practical automation to build systems that perform
//                             in the environments where they actually matter.
//                         </p>

//                     </div>

//                 </div>


//                 {/* =====================================================
//                     MAIN CONTENT
//                 ===================================================== */}

//                 <div className="why-choose__content">

//                     {/* FEATURED EXPERIENCE */}

//                     <article
//                         className="why-choose__feature"
//                         data-aos="fade-up"
//                         data-aos-duration="900"
//                     >

//                         <div className="why-choose__feature-number">
//                             01
//                         </div>

//                         <div className="why-choose__feature-body">

//                             <span className="why-choose__feature-kicker">
//                                 EXPERIENCE
//                             </span>

//                             <h3>
//                                 20+
//                                 <br />
//                                 YEARS
//                             </h3>

//                             <p>
//                                 Deep expertise in industrial automation,
//                                 control systems and engineering solutions
//                                 built around real production environments.
//                             </p>

//                         </div>

//                     </article>


//                     {/* SUPPORTING REASONS */}

//                     <div className="why-choose__list">

//                         {reasons.map((reason, index) => (
//                             <article
//                                 className="why-choose__item"
//                                 key={reason.number}
//                                 data-aos="fade-up"
//                                 data-aos-delay={(index + 1) * 100}
//                                 data-aos-duration="750"
//                             >

//                                 <span className="why-choose__item-number">
//                                     {reason.number}
//                                 </span>

//                                 <div className="why-choose__item-content">

//                                     <h3>
//                                         {reason.title}
//                                     </h3>

//                                     <p>
//                                         {reason.text}
//                                     </p>

//                                 </div>

//                             </article>
//                         ))}

//                     </div>

//                 </div>

//             </div>
//         </section>
//     );
// }

// export default WhyChooseUs;



import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import "./WhyChooseUs.css";


const reasons = [
    {
        number: "02",
        title: "CUSTOM SOLUTIONS",
        text: "Automation engineered around your process, equipment and production requirements.",
    },
    {
        number: "03",
        title: "MICRO TO TURNKEY",
        text: "From focused automation upgrades to complete turnkey industrial projects.",
    },
    {
        number: "04",
        title: "OPTIMIZED ENGINEERING",
        text: "Practical engineering focused on performance, reliability and cost.",
    },
    {
        number: "05",
        title: "RELIABLE SUPPORT",
        text: "Technical service and after-sales support when your operation needs it.",
    },
];


function WhyChooseUs() {

    useEffect(() => {

        AOS.init({
            duration: 800,
            easing: "ease-out-cubic",
            once: false,
            offset: 80,
        });

        AOS.refresh();

        return () => {
            AOS.refresh();
        };

    }, []);


    return (

        <section
            className="why-choose"
            id="why-choose-us"
            aria-labelledby="why-choose-title"
        >

            <div className="why-choose__container">


                {/* =====================================================
                    HEADER
                ===================================================== */}

                <div className="why-choose__header">

                    <div
                        className="why-choose__label"
                        data-aos="fade-up"
                        data-aos-duration="700"
                    >
                        WHY BITSOL
                    </div>


                    <div className="why-choose__heading">

                        <h2
                            id="why-choose-title"
                            data-aos="fade-up"
                            data-aos-delay="100"
                            data-aos-duration="900"
                        >
                            ENGINEERED
                            <br />
                            <span>FOR INDUSTRY.</span>
                        </h2>


                        <p
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="800"
                        >
                            We bring together experience, engineering and
                            practical automation to build systems that perform
                            in the environments where they actually matter.
                        </p>

                    </div>

                </div>


                {/* =====================================================
                    MAIN CONTENT
                ===================================================== */}

                <div className="why-choose__content">


                    {/* =================================================
                        FEATURED EXPERIENCE
                    ================================================= */}

                    <article
                        className="why-choose__feature"
                        data-aos="fade-up"
                        data-aos-delay="250"
                        data-aos-duration="900"
                    >

                        <div className="why-choose__feature-number">
                            01
                        </div>


                        <div className="why-choose__feature-body">

                            <span className="why-choose__feature-kicker">
                                EXPERIENCE
                            </span>


                            <h3>
                                20+
                                <br />
                                YEARS
                            </h3>


                            <p>
                                Deep expertise in industrial automation,
                                control systems and engineering solutions
                                built around real production environments.
                            </p>

                        </div>

                    </article>


                    {/* =================================================
                        SUPPORTING REASONS
                    ================================================= */}

                    <div className="why-choose__list">

                        {reasons.map(
                            (reason, index) => (

                                <article
                                    className="why-choose__item"
                                    key={reason.number}
                                    data-aos="fade-up"
                                    data-aos-delay={
                                        350 + (index * 100)
                                    }
                                    data-aos-duration="750"
                                >

                                    <span className="why-choose__item-number">
                                        {reason.number}
                                    </span>


                                    <div className="why-choose__item-content">

                                        <h3>
                                            {reason.title}
                                        </h3>


                                        <p>
                                            {reason.text}
                                        </p>

                                    </div>

                                </article>

                            )
                        )}

                    </div>

                </div>

            </div>

        </section>

    );

}


export default WhyChooseUs;