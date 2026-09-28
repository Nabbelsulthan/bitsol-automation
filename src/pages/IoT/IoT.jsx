import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./IoT.css";
import IotImage from "../../assets/images/iot.png";

const connectedSystems = [
    "PLC",
    "HMI",
    "VFD",
    "Energy Meters",
    "Sensors",
    "Control Panels",
    "Machines",
];

const solutions = [
    {
        number: "01",
        tag: "EMS",
        title: "Energy Management",
        text: "Monitor consumption, demand and electrical performance across your plant.",
    },
    {
        number: "02",
        tag: "MACHINE",
        title: "Machine Monitoring",
        text: "Bring machine status and operating parameters into one clear operational view.",
    },
    {
        number: "03",
        tag: "REMOTE",
        title: "Remote Visibility",
        text: "Access connected equipment information without being on the plant floor.",
    },
    {
        number: "04",
        tag: "DATA",
        title: "Data & Alerts",
        text: "Capture useful industrial data, follow trends and surface important changes.",
    },
];

const useCases = [
    {
        number: "01",
        title: "Plant-wide Energy",
        text: "Understand how energy is being used across production lines, equipment and facilities.",
    },
    {
        number: "02",
        title: "Machine Visibility",
        text: "See running, idle and stopped equipment in a way that is easy to act on.",
    },
    {
        number: "03",
        title: "Operational Trends",
        text: "Turn historical machine and electrical data into clearer operational context.",
    },
    {
        number: "04",
        title: "Remote Oversight",
        text: "Give engineering and management teams access to the information they need from anywhere.",
    },
];

function IoT() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-out-cubic",
            once: true,
            offset: 70,
        });

        const refresh = () => AOS.refresh();

        window.addEventListener("resize", refresh);

        return () => {
            window.removeEventListener("resize", refresh);
        };
    }, []);

    return (
        <main className="iot-page">

            {/* =====================================================
                HERO — CONTACT PAGE VISUAL LANGUAGE
            ===================================================== */}
            <section className="iot-hero">

                <div className="iot-hero-media">
                    <img
                        src={IotImage}
                        alt="Industrial IoT monitoring and connected factory systems"
                        className="iot-hero-image"
                    />

                    <div className="iot-hero-overlay" />
                    <div className="iot-hero-bottom-shade" />
                </div>

                <div className="iot-hero-inner">

                    <div className="iot-hero-content">

                        <span
                            className="iot-hero-eyebrow"
                            data-aos="fade-up"
                        >
                            INDUSTRIAL IoT
                        </span>

                        <h1
                            data-aos="fade-up"
                            data-aos-delay="80"
                        >
                            CONNECT YOUR
                            <br />
                            <span>PLANT.</span>
                            <br />
                            SEE WHAT
                            <br />
                            MATTERS.
                        </h1>

                        <p
                            data-aos="fade-up"
                            data-aos-delay="160"
                        >
                            Connect machines, energy systems and industrial
                            data into a clearer view of your operation.
                        </p>

                        <div
                            className="iot-hero-actions"
                            data-aos="fade-up"
                            data-aos-delay="230"
                        >
                            <Link
                                to="/contactus.html"
                                className="iot-button iot-button--red"
                            >
                                Discuss your requirement
                            </Link>

                            <a
                                href="#iot-overview"
                                className="iot-hero-link"
                            >
                                Explore IoT solutions
                            </a>
                        </div>

                    </div>


                    <div className="iot-hero-capabilities">

                        <div
                            className="iot-hero-capability"
                            data-aos="fade-up"
                            data-aos-delay="260"
                        >
                            <span>01</span>
                            <div>
                                <strong>ENERGY</strong>
                                <small>Management & monitoring</small>
                            </div>
                        </div>

                        <div
                            className="iot-hero-capability"
                            data-aos="fade-up"
                            data-aos-delay="310"
                        >
                            <span>02</span>
                            <div>
                                <strong>MACHINES</strong>
                                <small>Status & performance</small>
                            </div>
                        </div>

                        <div
                            className="iot-hero-capability"
                            data-aos="fade-up"
                            data-aos-delay="360"
                        >
                            <span>03</span>
                            <div>
                                <strong>VISIBILITY</strong>
                                <small>Remote operational view</small>
                            </div>
                        </div>

                        <div
                            className="iot-hero-capability"
                            data-aos="fade-up"
                            data-aos-delay="410"
                        >
                            <span>04</span>
                            <div>
                                <strong>DATA</strong>
                                <small>Trends, alerts & reports</small>
                            </div>
                        </div>

                    </div>

                </div>
            </section>


            {/* =====================================================
                WHY INDUSTRIAL IOT
            ===================================================== */}
            <section
                className="iot-overview"
                id="iot-overview"
            >
                <div className="iot-container">

                    <div className="iot-overview-head">

                        <div data-aos="fade-up">
                            <span className="iot-eyebrow">
                                WHY INDUSTRIAL IoT
                            </span>

                            <h2>
                                Your machines already
                                <br />
                                know a lot.
                            </h2>
                        </div>

                        <p data-aos="fade-up" data-aos-delay="100">
                            The value comes from making that information
                            easier to see, understand and use.
                        </p>
                    </div>


                    <div className="iot-overview-feature">

                        <div
                            className="iot-data-visual"
                            data-aos="fade-right"
                        >
                            <div className="iot-data-visual-label">
                                INDUSTRIAL DATA
                            </div>

                            <div className="iot-data-word">
                                DATA
                            </div>

                            <div className="iot-data-circles">
                                <span />
                                <span />
                                <span />
                            </div>

                            <div className="iot-data-mini">
                                <span>PLC</span>
                                <span>EMS</span>
                                <span>VFD</span>
                                <span>SENSORS</span>
                            </div>
                        </div>


                        <div
                            className="iot-overview-copy"
                            data-aos="fade-left"
                        >
                            <span className="iot-small-index">01</span>

                            <h3>
                                Connect the information
                                <span> already inside your plant.</span>
                            </h3>

                            <p className="iot-overview-lead">
                                Industrial IoT adds a visibility layer around
                                the automation systems you already use.
                            </p>

                            <p>
                                Bitsol can bring together information from
                                PLCs, HMIs, VFDs, meters, sensors and connected
                                equipment into monitoring solutions built
                                around your operational needs.
                            </p>

                            <div className="iot-overview-points">
                                <div>
                                    <strong>Visibility</strong>
                                    <span>See what your plant is doing.</span>
                                </div>

                                <div>
                                    <strong>Context</strong>
                                    <span>Understand trends over time.</span>
                                </div>

                                <div>
                                    <strong>Action</strong>
                                    <span>Respond when something changes.</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* =====================================================
                CONNECTED FACTORY
            ===================================================== */}
            <section className="iot-connected">
                <div className="iot-container">

                    <div className="iot-connected-head">
                        <div data-aos="fade-up">
                            <span className="iot-eyebrow">
                                CONNECTED FACTORY
                            </span>

                            <h2>
                                One plant.
                                <br />
                                More visibility.
                            </h2>
                        </div>

                        <p data-aos="fade-up" data-aos-delay="100">
                            Your automation layer stays at the centre.
                            IoT makes the information around it easier to access.
                        </p>
                    </div>


                    <div
                        className="iot-connected-stage"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >

                        <div className="iot-connected-systems">

                            <div className="iot-stage-label">
                                WHAT IS CONNECTED
                            </div>

                            <div className="iot-system-grid">
                                {connectedSystems.map((system, index) => (
                                    <div
                                        className="iot-system-card"
                                        key={system}
                                    >
                                        <span>0{index + 1}</span>
                                        <strong>{system}</strong>
                                    </div>
                                ))}
                            </div>
                        </div>


                        <div className="iot-connected-result">

                            <div className="iot-stage-label">
                                WHAT YOU GET
                            </div>

                            <div className="iot-result-stat">
                                <span>ONE CLEAR VIEW</span>
                                <strong>01</strong>
                            </div>

                            <p>
                                Live visibility, historical information,
                                alerts and reporting — shaped around the
                                operation rather than the technology.
                            </p>

                            <div className="iot-result-list">
                                <span>Live monitoring</span>
                                <span>Historical trends</span>
                                <span>Alerts</span>
                                <span>Reports</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            {/* =====================================================
                SOLUTIONS
            ===================================================== */}
            <section className="iot-solutions">

                <div className="iot-container">

                    <div className="iot-solutions-head">
                        <div data-aos="fade-up">
                            <span className="iot-eyebrow">
                                IOT SOLUTIONS
                            </span>

                            <h2>
                                Practical solutions
                                <br />
                                for real operations.
                            </h2>
                        </div>

                        <p data-aos="fade-up" data-aos-delay="100">
                            Start with the information your team actually
                            needs to monitor, understand or improve.
                        </p>
                    </div>


                    <div className="iot-solution-layout">

                        {/* FEATURED EMS */}
                        <article
                            className="iot-solution-featured"
                            data-aos="fade-up"
                        >
                            <div className="iot-featured-copy">

                                <div className="iot-solution-meta">
                                    <span>01</span>
                                    <span>EMS</span>
                                </div>

                                <h3>
                                    Energy
                                    <br />
                                    Management.
                                </h3>

                                <p>
                                    Track energy consumption, demand and
                                    electrical performance across your plant
                                    from a clearer monitoring environment.
                                </p>

                                <Link
                                    to="/contactus.html"
                                    className="iot-inline-button"
                                >
                                    Discuss EMS
                                </Link>
                            </div>


                            <div className="iot-energy-dashboard">

                                <div className="iot-dashboard-head">
                                    <div>
                                        <span>ENERGY MANAGEMENT</span>
                                        <strong>Plant overview</strong>
                                    </div>

                                    <span className="iot-dashboard-status">
                                        LIVE
                                    </span>
                                </div>

                                <div className="iot-dashboard-metrics">
                                    <div>
                                        <small>CONSUMPTION</small>
                                        <strong>1,240</strong>
                                        <span>kWh</span>
                                    </div>

                                    <div>
                                        <small>POWER FACTOR</small>
                                        <strong>0.96</strong>
                                        <span>PF</span>
                                    </div>

                                    <div>
                                        <small>ACTIVE ASSETS</small>
                                        <strong>18</strong>
                                        <span>Running</span>
                                    </div>
                                </div>

                                <div className="iot-dashboard-graph">
                                    <div className="iot-dashboard-graph-head">
                                        <span>Usage trend</span>
                                        <span>Today</span>
                                    </div>

                                    <div className="iot-dashboard-chart">
                                        <div className="iot-chart-area" />
                                        <div className="iot-chart-line">
                                            <span />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </article>


                        {/* OTHER SOLUTIONS */}
                        <div className="iot-solution-side">

                            {solutions.slice(1).map((solution, index) => (
                                <article
                                    className="iot-solution-row"
                                    key={solution.number}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 80}
                                >
                                    <div className="iot-solution-row-number">
                                        {solution.number}
                                    </div>

                                    <div className="iot-solution-row-content">
                                        <div className="iot-solution-row-meta">
                                            {solution.tag}
                                        </div>

                                        <h3>{solution.title}</h3>

                                        <p>{solution.text}</p>
                                    </div>

                                    <span className="iot-solution-row-mark">
                                        +
                                    </span>
                                </article>
                            ))}

                        </div>

                    </div>
                </div>
            </section>


            {/* =====================================================
                HOW IT WORKS
            ===================================================== */}
            <section className="iot-flow">

                <div className="iot-container">

                    <div className="iot-flow-head">
                        <div data-aos="fade-up">
                            <span className="iot-eyebrow">
                                HOW IT WORKS
                            </span>

                            <h2>
                                From field data
                                <br />
                                to useful insight.
                            </h2>
                        </div>

                        <p data-aos="fade-up" data-aos-delay="100">
                            A straightforward flow designed around industrial
                            equipment, existing automation and the information
                            your teams need.
                        </p>
                    </div>


                    <div className="iot-flow-grid">

                        <div
                            className="iot-flow-card"
                            data-aos="fade-up"
                        >
                            <span>01</span>
                            <div>
                                <h3>Connect</h3>
                                <p>
                                    Bring relevant equipment and control
                                    systems into the communication layer.
                                </p>
                            </div>
                        </div>

                        <div
                            className="iot-flow-card iot-flow-card--active"
                            data-aos="fade-up"
                            data-aos-delay="90"
                        >
                            <span>02</span>
                            <div>
                                <h3>Collect</h3>
                                <p>
                                    Capture the machine, electrical and
                                    process data that matters.
                                </p>
                            </div>
                        </div>

                        <div
                            className="iot-flow-card"
                            data-aos="fade-up"
                            data-aos-delay="180"
                        >
                            <span>03</span>
                            <div>
                                <h3>Monitor</h3>
                                <p>
                                    Bring live status, trends and alerts
                                    into a clearer operational view.
                                </p>
                            </div>
                        </div>

                        <div
                            className="iot-flow-card"
                            data-aos="fade-up"
                            data-aos-delay="270"
                        >
                            <span>04</span>
                            <div>
                                <h3>Act</h3>
                                <p>
                                    Give your team useful information for
                                    faster and more informed decisions.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* =====================================================
                USE CASES
            ===================================================== */}
            <section className="iot-usecases">

                <div className="iot-container">

                    <div className="iot-usecases-grid">

                        <div
                            className="iot-usecases-intro"
                            data-aos="fade-right"
                        >
                            <span className="iot-eyebrow">
                                APPLICATIONS
                            </span>

                            <h2>
                                Built for the
                                <br />
                                plant floor.
                            </h2>

                            <p>
                                IoT becomes valuable when it helps people
                                answer practical questions about the way a
                                plant is running.
                            </p>
                        </div>


                        <div className="iot-usecase-list">

                            {useCases.map((item, index) => (
                                <article
                                    className="iot-usecase"
                                    key={item.number}
                                    data-aos="fade-left"
                                    data-aos-delay={index * 70}
                                >
                                    <span>{item.number}</span>

                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                </article>
                            ))}

                        </div>

                    </div>
                </div>
            </section>


            {/* =====================================================
                FINAL CTA
            ===================================================== */}
            <section className="iot-final-cta">

                <div className="iot-container">

                    <div
                        className="iot-final-panel"
                        data-aos="fade-up"
                    >
                        <div className="iot-final-copy">
                            <span className="iot-eyebrow">
                                INDUSTRIAL IOT
                            </span>

                            <h2>
                                Give your
                                <br />
                                operation a
                                <span> clearer view.</span>
                            </h2>
                        </div>

                        <div className="iot-final-action">
                            <p>
                                Tell us what you want to monitor, measure or
                                improve. We can shape the right IoT approach
                                around your existing automation.
                            </p>

                            <Link
                                to="/quote"
                                className="iot-button iot-button--red"
                            >
                                Start a conversation
                            </Link>
                        </div>
                    </div>

                </div>
            </section>

        </main>
    );
}

export default IoT;
