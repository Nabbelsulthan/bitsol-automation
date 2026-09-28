import { useEffect, useRef } from "react";
import "./Stats.css";

const stats = [
    {
        number: 50,
        suffix: "+",
        label: "COMPLETED PROJECTS",
        text: "Automation and control projects delivered across industrial applications.",
    },
    {
        number: 20,
        suffix: "+",
        label: "CLIENTS",
        text: "Businesses that trust Bitsol for industrial automation solutions.",
    },
];

function Stats() {
    const sectionRef = useRef(null);
    const numberRefs = useRef([]);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting || hasAnimated.current) {
                    return;
                }

                hasAnimated.current = true;

                stats.forEach((stat, index) => {
                    const element = numberRefs.current[index];

                    if (!element) return;

                    const duration = 1600;
                    const start = performance.now();

                    const animate = (time) => {
                        const progress = Math.min(
                            (time - start) / duration,
                            1
                        );

                        const eased =
                            1 - Math.pow(1 - progress, 3);

                        element.textContent = Math.floor(
                            eased * stat.number
                        );

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            element.textContent = stat.number;
                        }
                    };

                    requestAnimationFrame(animate);
                });
            },
            {
                threshold: 0.35,
            }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            className="stats"
            ref={sectionRef}
            aria-labelledby="stats-title"
        >
            <div className="stats__container">

                <div className="stats__header">

                    <span
                        className="stats__eyebrow"
                        data-aos="fade-up"
                        data-aos-duration="700"
                    >
                        OUR TRACK RECORD
                    </span>

                    <h2
                        id="stats-title"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="800"
                    >
                        PROVEN
                        <span> RESULTS.</span>
                    </h2>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="180"
                        data-aos-duration="800"
                    >
                        Experience backed by projects delivered and
                        relationships built.
                    </p>

                </div>


                <div className="stats__items">

                    {stats.map((stat, index) => (
                        <article
                            className="stats__item"
                            key={stat.label}
                            data-aos={
                                index === 0
                                    ? "fade-right"
                                    : "fade-left"
                            }
                            data-aos-delay={250 + index * 120}
                            data-aos-duration="900"
                        >

                            <div className="stats__number-wrap">

                                <span
                                    className="stats__number"
                                    ref={(element) => {
                                        numberRefs.current[index] =
                                            element;
                                    }}
                                >
                                    0
                                </span>

                                <span className="stats__suffix">
                                    {stat.suffix}
                                </span>

                            </div>

                            <div className="stats__content">

                                <h3>
                                    {stat.label}
                                </h3>

                                <p>
                                    {stat.text}
                                </p>

                            </div>

                            <span className="stats__line"></span>

                        </article>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Stats;