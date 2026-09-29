import React, {
    useEffect,
    useRef,
    useState,
} from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import {
    FaArrowRight,
} from "react-icons/fa6";

import solutions from "./SolutionsData";

import "./SolutionsMobile.css";


const SolutionsMobile = () => {

    const [
        activeIndex,
        setActiveIndex,
    ] = useState(0);


    const touchStartX =
        useRef(null);

    const touchStartY =
        useRef(null);

    const isDragging =
        useRef(false);


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
    NEXT / PREVIOUS
    =========================================================
    */

    const goNext = () => {

        setActiveIndex(
            (currentIndex) =>
                Math.min(
                    currentIndex + 1,
                    solutions.length - 1
                )
        );

    };


    const goPrevious = () => {

        setActiveIndex(
            (currentIndex) =>
                Math.max(
                    currentIndex - 1,
                    0
                )
        );

    };


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

        isDragging.current =
            true;

    };


    /*
    =========================================================
    TOUCH END
    =========================================================
    */

    const handleTouchEnd = (event) => {

        if (
            !isDragging.current ||
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

        isDragging.current =
            false;


        /*
        Horizontal movement must be
        clearly stronger than vertical.
        */

        if (
            Math.abs(deltaX) < 45
        ) {
            return;
        }


        if (
            Math.abs(deltaX) <=
            Math.abs(deltaY)
        ) {
            return;
        }


        if (
            deltaX < 0
        ) {
            goNext();
        } else {
            goPrevious();
        }

    };


    /*
    =========================================================
    KEYBOARD
    =========================================================
    */

    const handleKeyDown = (event) => {

        if (
            event.key === "ArrowRight"
        ) {
            goNext();
        }


        if (
            event.key === "ArrowLeft"
        ) {
            goPrevious();
        }

    };


    /*
    =========================================================
    NEXT SOLUTION
    =========================================================
    */

    const nextSolution =
        activeIndex <
        solutions.length - 1
            ? solutions[activeIndex + 1]
            : null;


    /*
    =========================================================
    RENDER
    =========================================================
    */

    return (

        <section
            className="solutions-mobile"
            id="solutions-mobile"
        >

            <div
                className="
                    solutions-mobile__container
                "
            >

                {/* =================================================
                    HEADER
                ================================================= */}

                <header
                    className="
                        solutions-mobile__header
                    "
                    data-aos="fade-up"
                >

                    <div
                        className="
                            solutions-mobile__label
                        "
                    >

                        <span />

                        <span>
                            AUTOMATION SOLUTIONS
                        </span>

                    </div>


                    <h2>

                        AUTOMATION
                        <br />

                        <span>
                            THAT MOVES.
                        </span>

                    </h2>


                    <p>
                        Industrial control and automation
                        solutions engineered around
                        your requirements.
                    </p>

                </header>


                {/* =================================================
                    CARD AREA
                ================================================= */}

                <div
                    className="
                        solutions-mobile__stage
                    "
                    data-aos="fade-up"
                    data-aos-delay="120"
                >

                    {/* Decorative grid */}

                    <div
                        className="
                            solutions-mobile__grid
                        "
                    />


                    {/* Decorative circles */}

                    <div
                        className="
                            solutions-mobile__circle
                            solutions-mobile__circle--one
                        "
                    />

                    <div
                        className="
                            solutions-mobile__circle
                            solutions-mobile__circle--two
                        "
                    />


                    {/* =================================================
                        CARD
                    ================================================= */}

                    <div
                        className="
                            solutions-mobile__card-wrap
                        "
                        tabIndex={0}
                        role="region"
                        aria-label="Automation solutions carousel"
                        onTouchStart={
                            handleTouchStart
                        }
                        onTouchEnd={
                            handleTouchEnd
                        }
                        onKeyDown={
                            handleKeyDown
                        }
                    >

                        <article
                            key={current.number}
                            className="
                                solutions-mobile__card
                                solutions-mobile__card--active
                            "
                        >

                            {/* CARD TOP */}

                            <div
                                className="
                                    solutions-mobile__card-top
                                "
                            >

                                <span
                                    className="
                                        solutions-mobile__number
                                    "
                                >
                                    {current.number}
                                </span>


                                <span
                                    className="
                                        solutions-mobile__count
                                    "
                                >
                                    {current.number}
                                    {" / "}
                                    {solutions.length}
                                </span>

                            </div>


                            {/* CARD MAIN */}

                            <div
                                className="
                                    solutions-mobile__card-main
                                "
                            >

                                <div
                                    className="
                                        solutions-mobile__icon
                                    "
                                >

                                    <Icon />

                                </div>


                                <div
                                    className="
                                        solutions-mobile__content
                                    "
                                >

                                    <span
                                        className="
                                            solutions-mobile__eyebrow
                                        "
                                    >
                                        INDUSTRIAL SOLUTION
                                    </span>


                                    <h3>
                                        {current.title}
                                    </h3>


                                    <div
                                        className="
                                            solutions-mobile__tags
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


                            {/* CARD BOTTOM */}

                            <div
                                className="
                                    solutions-mobile__card-bottom
                                "
                            >

                                <span>
                                    BITSOL AUTOMATION
                                </span>


                      

                            </div>

                        </article>

                    </div>


                    {/* =================================================
                        NEXT SOLUTION PREVIEW
                    ================================================= */}

                    <div
                        className="
                            solutions-mobile__next-preview
                        "
                        data-aos="fade-up"
                        data-aos-delay="220"
                    >

                        {nextSolution ? (

                            <>
                                <span>
                                    NEXT SOLUTION
                                </span>

                                <strong>
                                    {nextSolution.number}
                                    {" "}
                                    {nextSolution.title}
                                </strong>

                           

                            </>

                        ) : (

                            <>
                                <span>
                                    ALL SOLUTIONS
                                </span>

                                <strong>
                                    YOU'VE REACHED THE END
                                </strong>
                            </>

                        )}

                    </div>


                    {/* =================================================
                        PREVIOUS / NEXT CONTROLS
                    ================================================= */}

                    <div
                        className="
                            solutions-mobile__controls
                        "
                    >

                        <button
                            type="button"
                            aria-label="Previous solution"
                            disabled={
                                activeIndex === 0
                            }
                            onClick={
                                goPrevious
                            }
                        >
                            <span>
                                ←
                            </span>
                        </button>


                        <div
                            className="
                                solutions-mobile__dots
                            "
                        >

                            {solutions.map(
                                (
                                    item,
                                    index
                                ) => (

                                    <button
                                        key={
                                            item.number
                                        }
                                        type="button"
                                        aria-label={
                                            `Show solution ${index + 1}`
                                        }
                                        className={`
                                            solutions-mobile__dot
                                            ${
                                                activeIndex === index
                                                    ? "is-active"
                                                    : ""
                                            }
                                        `}
                                        onClick={() =>
                                            setActiveIndex(
                                                index
                                            )
                                        }
                                    />

                                )
                            )}

                        </div>


                        <button
                            type="button"
                            aria-label="Next solution"
                            disabled={
                                activeIndex ===
                                solutions.length - 1
                            }
                            onClick={
                                goNext
                            }
                        >
                            <span>
                                →
                            </span>
                        </button>

                    </div>

                </div>


                {/* =================================================
                    PROGRESS
                ================================================= */}

                <div
                    className="
                        solutions-mobile__progress
                    "
                    data-aos="fade-up"
                    data-aos-delay="300"
                >

                    <div
                        className="
                            solutions-mobile__progress-count
                        "
                    >

                        <strong>
                            {current.number}
                        </strong>

                        <span>
                            /
                            {" "}
                            {solutions.length}
                        </span>

                    </div>


                    <div
                        className="
                            solutions-mobile__progress-track
                        "
                    >

                        <span
                            style={{
                                width: `${
                                    (
                                        (
                                            activeIndex + 1
                                        ) /
                                        solutions.length
                                    ) * 100
                                }%`,
                            }}
                        />

                    </div>


                    <span
                        className="
                            solutions-mobile__swipe
                        "
                    >
                        SWIPE TO EXPLORE
                    </span>

                </div>

            </div>

        </section>

    );

};


export default SolutionsMobile;