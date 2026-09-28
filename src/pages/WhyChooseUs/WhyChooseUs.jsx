import "./WhyChooseUs.css";

const reasons = [
    {
        number: "01",
        title: "20+ YEARS EXPERIENCE",
        text: "Deep expertise in industrial automation and control systems.",
    },
    {
        number: "02",
        title: "CUSTOM SOLUTIONS",
        text: "Automation engineered around your process and production needs.",
    },
    {
        number: "03",
        title: "MICRO TO TURNKEY",
        text: "From focused automation work to complete turnkey projects.",
    },
    {
        number: "04",
        title: "OPTIMIZED ENGINEERING",
        text: "Practical solutions balancing performance, reliability and cost.",
    },
    {
        number: "05",
        title: "RELIABLE SUPPORT",
        text: "Technical service and after-sales support when you need it.",
    },
];

function WhyChooseUs() {
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

                <header className="why-choose__header">

                    <div
                        className="why-choose__label"
                        data-aos="fade-right"
                        data-aos-duration="800"
                    >
                        <span className="why-choose__label-line"></span>

                        <div>
                            <span className="why-choose__label-main">
                                WHY BITSOL
                            </span>

                            <span className="why-choose__label-year">
                                EST. 2018
                            </span>
                        </div>
                    </div>


                    <div className="why-choose__heading">

                        <h2
                            id="why-choose-title"
                            data-aos="fade-up"
                            data-aos-duration="900"
                        >
                            BUILT FOR
                            <br />
                            <span>INDUSTRY.</span>
                        </h2>

                        <p
                            data-aos="fade-up"
                            data-aos-delay="150"
                            data-aos-duration="800"
                        >
                            Experience, engineering and support focused on
                            keeping your automation practical and reliable.
                        </p>

                    </div>

                </header>


                {/* =====================================================
                    REASONS
                ===================================================== */}

                <div className="why-choose__reasons">

                    {reasons.map((reason, index) => (
                        <article
                            className="why-choose__reason"
                            key={reason.number}
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay={index * 100}
                        >

                            <div className="why-choose__number">
                                {reason.number}
                            </div>

                            <div className="why-choose__reason-title">
                                {reason.title}
                            </div>

                            <p className="why-choose__reason-text">
                                {reason.text}
                            </p>

                        </article>
                    ))}

                </div>


                {/* =====================================================
                    CTA
                ===================================================== */}

                <div
                    className="why-choose__cta"
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="900"
                >

                    <div className="why-choose__cta-copy">

                        <span>
                            HAVE AN AUTOMATION REQUIREMENT?
                        </span>

                        <strong>
                            LET'S BUILD THE RIGHT SOLUTION.
                        </strong>

                    </div>

                    <a
                        href="/contactus.html"
                        className="why-choose__cta-button"
                    >
                        <span className="why-choose__cta-button-text">
                            TALK TO OUR TEAM
                        </span>
                    </a>

                </div>

            </div>
        </section>
    );
}

export default WhyChooseUs;