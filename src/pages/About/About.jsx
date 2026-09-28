

import "./About.css";

const About = () => {




    return (
        <section className="about section">

            <div className="container">

                {/* =====================================================
                    TOP LABEL
                    ===================================================== */}

                <div
                    className="about-top"
                    data-aos="fade-down"
                >

                    <div className="about-label">

                        <span className="about-label-line"></span>

                        <span>ABOUT BITSOL</span>

                    </div>

                    <span className="about-est">
                        EST. 2018
                    </span>

                </div>


                {/* =====================================================
                    MAIN HEADING
                    ===================================================== */}

                <div
                    className="about-heading"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >

                    <h2>
                        BUILT ON
                        <br />

                        <span>
                            EXPERIENCE.
                        </span>
                    </h2>

                    <div className="about-heading-side">

                        <span>
                            INDUSTRIAL CONTROL
                        </span>

                        <span>
                            & AUTOMATION
                        </span>

                    </div>

                </div>


                {/* =====================================================
                    MAIN STORY
                    ===================================================== */}

                <div className="about-story">


                    {/* =================================================
                        LEFT VISUAL
                        ================================================= */}

                    <div
                        className="about-visual"
                        data-aos="fade-right"
                        data-aos-delay="150"
                    >

                        <div className="about-visual-grid"></div>


                        <div className="about-year">

                            <span className="about-year-small">
                                ESTABLISHED
                            </span>

                            <span className="about-year-number">
                                2018
                            </span>

                            <span className="about-year-line"></span>

                            <span className="about-year-caption">
                                INDUSTRIAL
                                <br />
                                AUTOMATION
                            </span>

                        </div>


                        {/* Technical markers */}

                        <div className="about-marker about-marker--top">
                            11° 32' N
                        </div>

                        <div className="about-marker about-marker--bottom">
                            CONTROL / 01
                        </div>


                        {/* Red corner */}

                        <div className="about-corner"></div>

                    </div>


                    {/* =================================================
                        CUSTOMER CONTENT
                        ================================================= */}

                    <div className="about-copy">


                        <div
                            className="about-copy-block"
                            data-aos="fade-up"
                            data-aos-delay="250"
                        >

                            <span className="about-index">
                                01
                            </span>

                            <div>

                                <p className="about-lead">
                                    <strong>
                                        Bitsol Automation
                                    </strong>{" "}
                                    established in the year of 2018 to cater
                                    for Industrial Automation requirements
                                    based on the client demands.
                                </p>

                                <p>
                                    The team of which having sound knowledge
                                    and good experience around 15 years in the
                                    automation field with wide range of
                                    Industries and Applications.
                                </p>

                                <p>
                                    By understanding the competitive world,
                                    our optimized engineering solution with
                                    competitive price, service support after
                                    sales will keep as our key mantra to
                                    sustain in the market for long term.
                                </p>

                            </div>

                        </div>


                        <div
                            className="about-divider"
                            data-aos="fade"
                            data-aos-delay="350"
                        ></div>


                        <div
                            className="about-copy-block"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >

                            <span className="about-index">
                                02
                            </span>

                            <div>

                                <p className="about-lead">
                                    <strong>
                                        Bitsol Automation
                                    </strong>{" "}
                                    specialized in the field of Industrial
                                    Control & Automation capable to undertake
                                    micro projects to Turnkey Projects.
                                </p>

                                <p>
                                    We offers customized Automation solutions
                                    for your line of business, whether you are
                                    in the machinery, manufacturing industry,
                                    power distribution, energy management,
                                    Conveying & Batching system, and Heat
                                    treatment or Furnace machineries etc…
                                </p>

                            </div>

                        </div>

                    </div>

                </div>


                {/* =====================================================
                    EXPERIENCE STRIP
                    ===================================================== */}

                <div
                    className="about-stats"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >

                    <div className="about-stat">

                        <span className="about-stat-number">
                            2018
                        </span>

                        <span className="about-stat-label">
                            ESTABLISHED
                        </span>

                    </div>


                    <div className="about-stat">

                        <span className="about-stat-number">
                            20+
                        </span>

                        <span className="about-stat-label">
                            YEARS AUTOMATION
                            EXPERIENCE
                        </span>

                    </div>


                    <div className="about-stat">

                        <span className="about-stat-number">
                            MICRO
                            <br />
                            → TURNKEY
                        </span>

                        <span className="about-stat-label">
                            PROJECT CAPABILITY
                        </span>

                    </div>


                    <div className="about-stat about-stat--accent">

                        <span className="about-stat-number">
                            CUSTOM
                        </span>

                        <span className="about-stat-label">
                            ENGINEERED
                            SOLUTIONS
                        </span>

                    </div>

                </div>


                {/* =====================================================
                    BOTTOM STATEMENT
                    ===================================================== */}

                <div
                    className="about-bottom"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >

                    <span className="about-bottom-line"></span>

                    <p>
                        INDUSTRIAL CONTROL.
                        <span> AUTOMATION.</span>
                        ENGINEERED AROUND YOUR REQUIREMENTS.
                    </p>

                </div>

            </div>

        </section>
    );
};

export default About;