import {
    motion,
    useScroll,
    useTransform,
} from "framer-motion";

import {
    useEffect,
    useRef,
    useState,
} from "react";

import solutions from "./SolutionsData";

import "./SolutionsDesktop.css";


/* =========================================================
   CONSTANTS
   ========================================================= */

const TOTAL = solutions.length;

const STEP = (Math.PI * 2) / TOTAL;

const FINAL_HOLD = 0.08;


/* =========================================================
   ANGLE HELPER
   ========================================================= */

const normalizeAngle = (angle) => {
    return (
        ((angle + Math.PI) %
            (Math.PI * 2)) -
        Math.PI
    );
};


/* =========================================================
   ORBIT CARD
   ========================================================= */

const OrbitCard = ({
    item,
    index,
    progress,
}) => {

    const Icon = item.icon;


    /* =====================================================
       ANGLE
    ===================================================== */

    const angle = useTransform(
        progress,
        (value) =>
            index * STEP -
            value *
                (TOTAL - 1) *
                STEP
    );


    /* =====================================================
       DISTANCE FROM CENTER
    ===================================================== */

    const distance = useTransform(
        angle,
        (value) =>
            Math.abs(
                normalizeAngle(value)
            )
    );


    /* =====================================================
       ORBIT FACTOR
    ===================================================== */

    const orbitFactor = useTransform(
        distance,
        (value) =>
            Math.min(
                value / STEP,
                1
            )
    );


    /* =====================================================
       X POSITION
    ===================================================== */

    const x = useTransform(
        [angle, orbitFactor],
        ([currentAngle, factor]) =>
            Math.cos(currentAngle) *
            430 *
            factor
    );


    /* =====================================================
       Y POSITION
    ===================================================== */

    const y = useTransform(
        [angle, orbitFactor],
        ([currentAngle, factor]) =>
            Math.sin(currentAngle) *
            190 *
            factor
    );


    /* =====================================================
       SCALE
    ===================================================== */

    const scale = useTransform(
        distance,
        [
            0,
            STEP,
            Math.PI / 2,
            Math.PI,
        ],
        [
            1,
            0.72,
            0.52,
            0.38,
        ]
    );


    /* =====================================================
       OVERALL OPACITY
    ===================================================== */

    const opacity = useTransform(
        distance,
        [
            0,
            STEP,
            Math.PI / 2,
            Math.PI,
        ],
        [
            1,
            0.92,
            0.42,
            0.08,
        ]
    );


    /* =====================================================
       FULL CARD OPACITY
    ===================================================== */

    const fullOpacity = useTransform(
        distance,
        [
            0,
            STEP * 0.42,
            STEP * 0.75,
        ],
        [
            1,
            0.8,
            0,
        ]
    );


    /* =====================================================
       MINI CARD OPACITY
    ===================================================== */

    const miniOpacity = useTransform(
        distance,
        [
            0,
            STEP * 0.35,
            STEP * 0.75,
        ],
        [
            0,
            0.15,
            1,
        ]
    );


    /* =====================================================
       ROTATION
    ===================================================== */

    const rotate = useTransform(
        angle,
        (currentAngle) => {

            const degrees =
                (
                    normalizeAngle(
                        currentAngle
                    ) /
                    Math.PI
                ) *
                180;

            return Math.max(
                -20,
                Math.min(
                    20,
                    degrees * 0.16
                )
            );
        }
    );


    /* =====================================================
       Z INDEX
    ===================================================== */

    const zIndex = useTransform(
        distance,
        (value) =>
            Math.round(
                1000 -
                value * 100
            )
    );


    return (
        <motion.article
            className="solutions-desktop-orbit-card"
            style={{
                x,
                y,
                scale,
                opacity,
                rotate,
                zIndex,
            }}
        >

            {/* =================================================
                MINI CARD
            ================================================= */}

            <motion.div
                className="solutions-desktop-orbit-card__mini"
                style={{
                    opacity:
                        miniOpacity,
                }}
            >

                <span className="solutions-desktop-orbit-card__mini-number">
                    {item.number}
                </span>


                <div className="solutions-desktop-orbit-card__mini-icon">
                    <Icon />
                </div>


                <span className="solutions-desktop-orbit-card__mini-title">
                    {item.title}
                </span>

            </motion.div>


            {/* =================================================
                FULL ACTIVE CARD
            ================================================= */}

            <motion.div
                className="solutions-desktop-orbit-card__full"
                style={{
                    opacity:
                        fullOpacity,
                }}
            >

                <div className="solutions-desktop-orbit-card__top">

                    <span className="solutions-desktop-orbit-card__number">
                        {item.number}
                    </span>


                    <span className="solutions-desktop-orbit-card__count">
                        {item.number} / {TOTAL}
                    </span>

                </div>


                <div className="solutions-desktop-orbit-card__body">

                    <div className="solutions-desktop-orbit-card__icon">
                        <Icon />
                    </div>


                    <div className="solutions-desktop-orbit-card__content">

                        <span className="solutions-desktop-orbit-card__eyebrow">
                            INDUSTRIAL SOLUTION
                        </span>


                        <h3>
                            {item.title}
                        </h3>


                        <div className="solutions-desktop-orbit-card__tags">

                            {item.tags.map(
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


                <div className="solutions-desktop-orbit-card__bottom">

                    <span>
                        BITSOL AUTOMATION
                    </span>

                </div>

            </motion.div>

        </motion.article>
    );
};


/* =========================================================
   DESKTOP SOLUTIONS
   ========================================================= */

const SolutionsDesktop = () => {

    const sectionRef =
        useRef(null);


    /* =====================================================
       CURRENT SERVICE
    ===================================================== */

    const targetIndex =
        useRef(0);


    /* =====================================================
       INTERACTION LOCK
    ===================================================== */

    const interactionLock =
        useRef(false);


    /* =====================================================
       CURRENT SCROLL DESTINATION
    ===================================================== */

    const destinationRef =
        useRef(null);


    /* =====================================================
       ANIMATION FRAME
    ===================================================== */

    const animationFrameRef =
        useRef(null);


    /* =====================================================
       SAFETY TIMEOUT
    ===================================================== */

    const safetyTimeoutRef =
        useRef(null);


    const [activeIndex, setActiveIndex] =
        useState(0);


    /* =====================================================
       SCROLL PROGRESS
    ===================================================== */

    const {
        scrollYProgress,
    } = useScroll({
        target: sectionRef,
        offset: [
            "start start",
            "end end",
        ],
    });


    /* =====================================================
       SERVICE PROGRESS

       The final 8% of the scroll range
       is reserved for Card 12.
    ===================================================== */

    const serviceProgress =
        useTransform(
            scrollYProgress,
            [0, 1 - FINAL_HOLD],
            [0, 1],
            {
                clamp: true,
            }
        );


    /* =====================================================
       CLAMP INDEX
    ===================================================== */

    const clampIndex = (index) => {

        return Math.max(
            0,
            Math.min(
                TOTAL - 1,
                index
            )
        );

    };


    /* =====================================================
       SECTION VISIBILITY
    ===================================================== */

    const isSectionActive = () => {

        const section =
            sectionRef.current;

        if (!section) {
            return false;
        }

        const rect =
            section.getBoundingClientRect();

        return (
            rect.top <= 5 &&
            rect.bottom >=
                window.innerHeight - 5
        );

    };


    /* =====================================================
       GET DESTINATION
    ===================================================== */

    const getDestination = (index) => {

        const section =
            sectionRef.current;

        if (!section) {
            return null;
        }

        const rect =
            section.getBoundingClientRect();

        const sectionTop =
            rect.top +
            window.scrollY;

        const maxScroll =
            Math.max(
                0,
                section.offsetHeight -
                    window.innerHeight
            );


        const stepDistance =
            (
                maxScroll *
                (1 - FINAL_HOLD)
            ) /
            (TOTAL - 1);


        return (
            sectionTop +
            stepDistance * index
        );

    };


    /* =====================================================
       WAIT FOR ARRIVAL
    ===================================================== */

    const waitForArrival = () => {

        const destination =
            destinationRef.current;

        if (
            destination === null
        ) {

            interactionLock.current =
                false;

            return;
        }


        const check = () => {

            const distance =
                Math.abs(
                    window.scrollY -
                        destination
                );


            if (distance <= 2) {

                interactionLock.current =
                    false;

                destinationRef.current =
                    null;

                animationFrameRef.current =
                    null;

                return;
            }


            animationFrameRef.current =
                requestAnimationFrame(
                    check
                );

        };


        animationFrameRef.current =
            requestAnimationFrame(
                check
            );


        /* =================================================
           SAFETY FALLBACK
        ================================================= */

        safetyTimeoutRef.current =
            window.setTimeout(
                () => {

                    interactionLock.current =
                        false;

                    destinationRef.current =
                        null;


                    if (
                        animationFrameRef.current
                    ) {

                        cancelAnimationFrame(
                            animationFrameRef.current
                        );

                        animationFrameRef.current =
                            null;
                    }

                },
                1400
            );

    };


    /* =====================================================
       MOVE TO SERVICE
    ===================================================== */

    const moveToService = (
        direction
    ) => {

        /*
         * Prevent multiple wheel
         * transitions at once.
         */

        if (
            interactionLock.current
        ) {
            return;
        }


        const current =
            targetIndex.current;


        const next =
            clampIndex(
                current +
                    direction
            );


        /*
         * At boundaries,
         * allow normal page scrolling.
         */

        if (
            next === current
        ) {
            return;
        }


        const destination =
            getDestination(next);


        if (
            destination === null
        ) {
            return;
        }


        /*
         * Lock before smooth scrolling.
         */

        interactionLock.current =
            true;


        targetIndex.current =
            next;


        setActiveIndex(
            next
        );


        destinationRef.current =
            destination;


        window.scrollTo({
            top: destination,
            behavior: "smooth",
        });


        waitForArrival();

    };


    /* =====================================================
       DESKTOP WHEEL CONTROL
    ===================================================== */

    useEffect(() => {

        const handleWheel = (
            event
        ) => {

            if (
                !isSectionActive()
            ) {
                return;
            }


            const delta =
                event.deltaY;


            if (
                Math.abs(delta) < 1
            ) {
                return;
            }


            const direction =
                delta > 0
                    ? 1
                    : -1;


            const current =
                targetIndex.current;


            /*
             * At first card:
             * allow normal page scrolling upward.
             */

            if (
                direction < 0 &&
                current === 0
            ) {
                return;
            }


            /*
             * At last card:
             * allow normal page scrolling downward.
             */

            if (
                direction > 0 &&
                current === TOTAL - 1
            ) {
                return;
            }


            /*
             * Consume the wheel event
             * while changing services.
             */

            event.preventDefault();


            if (
                interactionLock.current
            ) {
                return;
            }


            moveToService(
                direction
            );

        };


        window.addEventListener(
            "wheel",
            handleWheel,
            {
                passive: false,
            }
        );


        return () => {

            window.removeEventListener(
                "wheel",
                handleWheel
            );

        };

    }, []);


    /* =====================================================
       KEEP INDEX SYNCHRONIZED
    ===================================================== */

    useEffect(() => {

        const handleScroll = () => {

            /*
             * Do not calculate another
             * logical index while a controlled
             * smooth scroll is running.
             */

            if (
                interactionLock.current
            ) {
                return;
            }


            const section =
                sectionRef.current;

            if (!section) {
                return;
            }


            const rect =
                section.getBoundingClientRect();


            /*
             * Only synchronize while the
             * sticky section is active.
             */

            if (
                rect.top > 10 ||
                rect.bottom <
                    window.innerHeight - 10
            ) {
                return;
            }


            const maxScroll =
                section.offsetHeight -
                window.innerHeight;


            if (
                maxScroll <= 0
            ) {
                return;
            }


            const travelled =
                Math.max(
                    0,
                    Math.min(
                        maxScroll,
                        -rect.top
                    )
                );


            const stepDistance =
                (
                    maxScroll *
                    (1 - FINAL_HOLD)
                ) /
                (TOTAL - 1);


            const index =
                Math.round(
                    travelled /
                        stepDistance
                );


            const safeIndex =
                clampIndex(index);


            targetIndex.current =
                safeIndex;


            setActiveIndex(
                safeIndex
            );

        };


        window.addEventListener(
            "scroll",
            handleScroll,
            {
                passive: true,
            }
        );


        return () => {

            window.removeEventListener(
                "scroll",
                handleScroll
            );

        };

    }, []);


    /* =====================================================
       CLEANUP
    ===================================================== */

    useEffect(() => {

        return () => {

            if (
                animationFrameRef.current
            ) {

                cancelAnimationFrame(
                    animationFrameRef.current
                );

            }


            if (
                safetyTimeoutRef.current
            ) {

                clearTimeout(
                    safetyTimeoutRef.current
                );

            }

        };

    }, []);


    /* =====================================================
       DISPLAY
    ===================================================== */

    const currentNumber =
        String(
            activeIndex + 1
        ).padStart(
            2,
            "0"
        );


    /* =====================================================
       PROGRESS BAR
    ===================================================== */

    const progressScale =
        useTransform(
            serviceProgress,
            [0, 1],
            [0, 1]
        );


    /* =====================================================
       RENDER
    ===================================================== */

    return (

        <section
            ref={sectionRef}
            className="solutions-desktop"
            id="solutions"
        >

            <div className="solutions-desktop__sticky">

                <div className="container solutions-desktop__container">

                    {/* =================================================
                        HEADER
                    ================================================= */}

                    <header className="solutions-desktop__header">

                        <div
                            className="solutions-desktop__label"
                            data-aos="fade-down"
                        >

                            <span className="solutions-desktop__label-line" />

                            <span>
                                AUTOMATION SOLUTIONS
                            </span>

                        </div>


                        <div className="solutions-desktop__heading-row">

                            <div>

                                <h2 data-aos="fade-up">

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
                        ORBIT VIEWPORT
                    ================================================= */}

                    <div className="solutions-desktop__viewport">

                        <div className="solutions-desktop__orbit">

                            {/* OUTER ELLIPSE */}

                            <div
                                className="
                                    solutions-desktop__ellipse
                                    solutions-desktop__ellipse--outer
                                "
                            />


                            {/* INNER ELLIPSE */}

                            <div
                                className="
                                    solutions-desktop__ellipse
                                    solutions-desktop__ellipse--inner
                                "
                            />


                            {/* =================================================
                                CARDS
                            ================================================= */}

                            <div className="solutions-desktop__cards">

                                {solutions.map(
                                    (
                                        item,
                                        index
                                    ) => (

                                        <OrbitCard
                                            key={
                                                item.number
                                            }
                                            item={
                                                item
                                            }
                                            index={
                                                index
                                            }
                                            progress={
                                                serviceProgress
                                            }
                                        />

                                    )
                                )}

                            </div>

                        </div>


                        {/* =================================================
                            DESKTOP PROGRESS
                        ================================================= */}

                        <aside className="solutions-desktop__progress">

                            <div className="solutions-desktop__progress-current">

                                <span>
                                    {currentNumber}
                                </span>

                                <small>
                                    / {TOTAL}
                                </small>

                            </div>


                            <div className="solutions-desktop__progress-track">

                                <motion.div
                                    className="
                                        solutions-desktop__progress-fill
                                    "
                                    style={{
                                        scaleY:
                                            progressScale,
                                    }}
                                />

                            </div>


                            <div className="solutions-desktop__progress-label">
                                SERVICES
                            </div>

                        </aside>

                    </div>

                </div>

            </div>

        </section>

    );

};


export default SolutionsDesktop;