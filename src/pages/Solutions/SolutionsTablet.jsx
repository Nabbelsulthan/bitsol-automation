import { useEffect, useRef, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import {
    FaArrowLeft,
    FaArrowRight,
} from "react-icons/fa6";

import solutions from "./SolutionsData";

import "./SolutionsTablet.css";


const TOTAL = solutions.length;


const SolutionsTablet = () => {

    const [activeIndex, setActiveIndex] =
        useState(0);

    const touchStartX =
        useRef(null);

    const touchStartY =
        useRef(null);


    /*
    =========================================================
    CURRENT SOLUTION
    =========================================================
    */

    const current =
        solutions[activeIndex];

    const Icon =
        current.icon;


    /*
    =========================================================
    AOS
    =========================================================
    */

    useEffect(() => {

        AOS.init({
            duration: 800,
            easing: "ease-out-cubic",
            once: false,
            offset: 70,
        });

        return () => {
            AOS.refresh();
        };

    }, []);


    /*
    =========================================================
    NAVIGATION
    =========================================================
    */

    const goTo = (index) => {

        const nextIndex =
            Math.max(
                0,
                Math.min(
                    TOTAL - 1,
                    index
                )
            );

        setActiveIndex(nextIndex);
    };


    const next = () => {

        goTo(
            activeIndex + 1
        );

    };


    const previous = () => {

        goTo(
            activeIndex - 1
        );

    };


    /*
    =========================================================
    KEYBOARD
    =========================================================
    */

    useEffect(() => {

        const handleKeyDown = (event) => {

            if (
                event.key === "ArrowRight" ||
                event.key === "ArrowDown"
            ) {
                next();
            }


            if (
                event.key === "ArrowLeft" ||
                event.key === "ArrowUp"
            ) {
                previous();
            }

        };


        window.addEventListener(
            "keydown",
            handleKeyDown
        );


        return () => {

            window.removeEventListener(
                "keydown",
                handleKeyDown
            );

        };

    });


    /*
    =========================================================
    TOUCH START
    =========================================================
    */

    const handleTouchStart = (event) => {

        const touch =
            event.touches[0];

        touchStartX.current =
            touch.clientX;

        touchStartY.current =
            touch.clientY;

    };


    /*
    =========================================================
    TOUCH END
    =========================================================
    */

    const handleTouchEnd = (event) => {

        if (
            touchStartX.current === null ||
            touchStartY.current === null
        ) {
            return;
        }


        const touch =
            event.changedTouches[0];


        const deltaX =
            touch.clientX -
            touchStartX.current;

        const deltaY =
            touch.clientY -
            touchStartY.current;


        touchStartX.current =
            null;

        touchStartY.current =
            null;


        /*
        Keep normal vertical page scrolling.
        */

        if (
            Math.abs(deltaY) >
            Math.abs(deltaX)
        ) {
            return;
        }


        /*
        Ignore small movements.
        */

        if (
            Math.abs(deltaX) < 50
        ) {
            return;
        }


        if (deltaX < 0) {

            next();

        } else {

            previous();

        }

    };


    /*
    =========================================================
    PREVIOUS SOLUTION
    =========================================================
    */

    const previousSolution =
        activeIndex > 0
            ? solutions[activeIndex - 1]
            : null;


    /*
    =========================================================
    NEXT SOLUTION
    =========================================================
    */

    const nextSolution =
        activeIndex < TOTAL - 1
            ? solutions[activeIndex + 1]
            : null;


    /*
    =========================================================
    RENDER
    =========================================================
    */

    return (

        <section
            className="solutions-tablet"
            id="solutions-tablet"
        >

            <div className="solutions-tablet__container">


                {/* =================================================
                    HEADER
                ================================================= */}

                <header
                    className="solutions-tablet__header"
                >

                    <div
                        className="solutions-tablet__label"
                        data-aos="fade-down"
                    >

                        <span className="solutions-tablet__label-line" />

                        <span>
                            AUTOMATION SOLUTIONS
                        </span>

                    </div>


                    <div
                        className="solutions-tablet__heading-row"
                    >

                        <div>

                            <h2
                                data-aos="fade-up"
                            >
                                AUTOMATION
                                <br />

                                <span>
                                    THAT MOVES.
                                </span>
                            </h2>

                        </div>


                        <p
                            data-aos="fade-up"
                            data-aos-delay="120"
                        >
                            Industrial control and automation
                            solutions engineered around
                            your requirements.
                        </p>

                    </div>

                </header>


                {/* =================================================
                    TABLET SHOWCASE
                ================================================= */}

                <div
                    className="solutions-tablet__showcase"
                    onTouchStart={
                        handleTouchStart
                    }
                    onTouchEnd={
                        handleTouchEnd
                    }
                    data-aos="fade-up"
                    data-aos-delay="180"
                >


                    {/* =================================================
                        BACKGROUND ELLIPSES
                    ================================================= */}

                    <div
                        className="
                            solutions-tablet__ellipse
                            solutions-tablet__ellipse--outer
                        "
                    />

                    <div
                        className="
                            solutions-tablet__ellipse
                            solutions-tablet__ellipse--inner
                        "
                    />


                    {/* =================================================
                        PREVIOUS
                    ================================================= */}

                    <button
                        type="button"
                        className="
                            solutions-tablet__side-card
                            solutions-tablet__side-card--previous
                        "
                        onClick={previous}
                        disabled={
                            !previousSolution
                        }
                        aria-label="Previous solution"
                    >

                        {previousSolution ? (

                            <>

                                <span className="solutions-tablet__side-label">
                                    ← PREVIOUS
                                </span>

                                <span className="solutions-tablet__side-number">
                                    {previousSolution.number}
                                </span>

                                <strong>
                                    {previousSolution.title}
                                </strong>

                                <span className="solutions-tablet__side-action">
                                    VIEW
                                </span>

                            </>

                        ) : (

                            <span className="solutions-tablet__side-label">
                                START
                            </span>

                        )}

                    </button>


                    {/* =================================================
                        MAIN CARD
                    ================================================= */}

                    <article
                        className="
                            solutions-tablet__card
                        "
                        key={current.number}
                    >

                        <div
                            className="
                                solutions-tablet__card-grid
                            "
                        />

                        <div
                            className="
                                solutions-tablet__card-glow
                            "
                        />


                        {/* TOP */}

                        <div
                            className="
                                solutions-tablet__card-top
                            "
                        >

                            <span
                                className="
                                    solutions-tablet__number
                                "
                            >
                                {current.number}
                            </span>


                            <span
                                className="
                                    solutions-tablet__count
                                "
                            >
                                {current.number}
                                {" / "}
                                {String(TOTAL).padStart(2, "0")}
                            </span>

                        </div>


                        {/* BODY */}

                        <div
                            className="
                                solutions-tablet__card-body
                            "
                        >

                            <div
                                className="
                                    solutions-tablet__icon
                                "
                            >

                                <Icon />

                            </div>


                            <div
                                className="
                                    solutions-tablet__content
                                "
                            >

                                <span
                                    className="
                                        solutions-tablet__eyebrow
                                    "
                                >
                                    INDUSTRIAL SOLUTION
                                </span>


                                <h3>
                                    {current.title}
                                </h3>


                                <div
                                    className="
                                        solutions-tablet__tags
                                    "
                                >

                                    {current.tags.map(
                                        (tag) => (

                                            <span
                                                key={tag}
                                            >
                                                {tag}
                                            </span>

                                        )
                                    )}

                                </div>

                            </div>

                        </div>


                        {/* BOTTOM */}

                        <div
                            className="
                                solutions-tablet__card-bottom
                            "
                        >

                            <span>
                                BITSOL AUTOMATION
                            </span>

                            <span>
                                SOLUTION
                                {" "}
                                {current.number}
                            </span>

                        </div>

                    </article>


                    {/* =================================================
                        NEXT
                    ================================================= */}

                    <button
                        type="button"
                        className="
                            solutions-tablet__side-card
                            solutions-tablet__side-card--next
                        "
                        onClick={next}
                        disabled={
                            !nextSolution
                        }
                        aria-label="Next solution"
                    >

                        {nextSolution ? (

                            <>

                                <span className="solutions-tablet__side-label">
                                    NEXT →
                                </span>

                                <span className="solutions-tablet__side-number">
                                    {nextSolution.number}
                                </span>

                                <strong>
                                    {nextSolution.title}
                                </strong>

                                <span className="solutions-tablet__side-action">
                                    EXPLORE
                                </span>

                            </>

                        ) : (

                            <span className="solutions-tablet__side-label">
                                END
                            </span>

                        )}

                    </button>

                </div>


                {/* =================================================
                    NAVIGATION ROW
                ================================================= */}

                <div
                    className="
                        solutions-tablet__navigation
                    "
                    data-aos="fade-up"
                    data-aos-delay="260"
                >

                    <button
                        type="button"
                        className="
                            solutions-tablet__nav
                        "
                        onClick={previous}
                        disabled={
                            activeIndex === 0
                        }
                    >

                        <FaArrowLeft />

                        <span>
                            PREVIOUS
                        </span>

                    </button>


                    <div
                        className="
                            solutions-tablet__current
                        "
                    >

                        <strong>
                            {String(
                                activeIndex + 1
                            ).padStart(2, "0")}
                        </strong>

                        <span>
                            /
                            {" "}
                            {String(TOTAL).padStart(2, "0")}
                        </span>

                    </div>


                    <button
                        type="button"
                        className="
                            solutions-tablet__nav
                            solutions-tablet__nav--next
                        "
                        onClick={next}
                        disabled={
                            activeIndex ===
                            TOTAL - 1
                        }
                    >

                        <span>
                            NEXT
                        </span>

                        <FaArrowRight />

                    </button>

                </div>


                {/* =================================================
                    SOLUTION INDEX
                ================================================= */}

                <div
                    className="
                        solutions-tablet__index
                    "
                    data-aos="fade-up"
                    data-aos-delay="320"
                >

                    {solutions.map(
                        (item, index) => (

                            <button
                                key={item.number}
                                type="button"
                                className={`
                                    solutions-tablet__index-item
                                    ${
                                        index === activeIndex
                                            ? "is-active"
                                            : ""
                                    }
                                `}
                                onClick={() =>
                                    goTo(index)
                                }
                                aria-label={
                                    `Go to ${item.title}`
                                }
                            >

                                <span>
                                    {item.number}
                                </span>

                                <strong>
                                    {item.title}
                                </strong>

                            </button>

                        )
                    )}

                </div>


                {/* =================================================
                    PROGRESS
                ================================================= */}

                <div
                    className="
                        solutions-tablet__progress
                    "
                    data-aos="fade-up"
                    data-aos-delay="280"
                >

                    <div
                        className="
                            solutions-tablet__progress-track
                        "
                    >

                        <span
                            style={{
                                width: `${
                                    (
                                        (
                                            activeIndex + 1
                                        ) /
                                        TOTAL
                                    ) * 100
                                }%`,
                            }}
                        />

                    </div>


                    <span>
                        SWIPE TO EXPLORE
                    </span>

                </div>

            </div>

        </section>

    );

};


export default SolutionsTablet;