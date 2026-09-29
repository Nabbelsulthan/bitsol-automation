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

import {
    FaIndustry,
    FaFireFlameSimple,
    FaScrewdriverWrench,
    FaTruckRampBox,
    FaGears,
    FaBolt,
    FaChartPie,
    FaComments,
    FaRobot,
    FaPenRuler,
    FaFaucet,
    FaBuilding,
} from "react-icons/fa6";

import "./Solutions.css";


/* =========================================================
   SOLUTIONS DATA
   ========================================================= */

const solutions = [

    {
        number: "01",
        title: "PLC Based Automation",
        icon: FaIndustry,
        tags: [
            "PLC",
            "CONTROL",
            "AUTOMATION",
        ],
    },

    {
        number: "02",
        title: "Furnace Automation",
        icon: FaFireFlameSimple,
        tags: [
            "FURNACE",
            "CONTROL",
            "PROCESS",
        ],
    },

    {
        number: "03",
        title: "Anual Maintanance Support",
        icon: FaScrewdriverWrench,
        tags: [
            "SERVICE",
            "SUPPORT",
            "MAINTENANCE",
        ],
    },

    {
        number: "04",
        title: "Conveying & Batching System",
        icon: FaTruckRampBox,
        tags: [
            "CONVEYING",
            "BATCHING",
            "SYSTEM",
        ],
    },

    {
        number: "05",
        title: "Process Automation",
        icon: FaGears,
        tags: [
            "PROCESS",
            "CONTROL",
            "AUTOMATION",
        ],
    },

    {
        number: "06",
        title: "DG Control System",
        icon: FaBolt,
        tags: [
            "DG",
            "CONTROL",
            "SYSTEM",
        ],
    },

    {
        number: "07",
        title: "Energy Management System",
        icon: FaChartPie,
        tags: [
            "ENERGY",
            "MANAGEMENT",
            "CONTROL",
        ],
    },

    {
        number: "08",
        title: "SMS Application",
        icon: FaComments,
        tags: [
            "SMS",
            "APPLICATION",
            "MONITORING",
        ],
    },

    {
        number: "09",
        title: "Special Purpose Machines",
        icon: FaRobot,
        tags: [
            "SPM",
            "MACHINES",
            "CUSTOM",
        ],
    },

    {
        number: "10",
        title: "Customised Automation System",
        icon: FaPenRuler,
        tags: [
            "CUSTOM",
            "AUTOMATION",
            "SYSTEM",
        ],
    },

    {
        number: "11",
        title:
            "Hydraulic Press Control System / Pneumatic Press Control System",
        icon: FaFaucet,
        tags: [
            "HYDRAULIC",
            "PNEUMATIC",
            "PRESS",
        ],
    },

    {
        number: "12",
        title: "Cement / Steel Plant Automation",
        icon: FaBuilding,
        tags: [
            "CEMENT",
            "STEEL",
            "PLANT",
        ],
    },

];


const TOTAL = solutions.length;

const STEP = (Math.PI * 2) / TOTAL;


/* =========================================================
   ANGLE HELPERS
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
            className="solutions-orbit-card"
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
                className="solutions-orbit-card__mini"
                style={{
                    opacity:
                        miniOpacity,
                }}
            >

                <span className="solutions-orbit-card__mini-number">
                    {item.number}
                </span>


                <div className="solutions-orbit-card__mini-icon">
                    <Icon />
                </div>


                <span className="solutions-orbit-card__mini-title">
                    {item.title}
                </span>

            </motion.div>


            {/* =================================================
                FULL ACTIVE CARD
            ================================================= */}

            <motion.div
                className="solutions-orbit-card__full"
                style={{
                    opacity:
                        fullOpacity,
                }}
            >

                <div className="solutions-orbit-card__top">

                    <span className="solutions-orbit-card__number">
                        {item.number}
                    </span>


                    <span className="solutions-orbit-card__count">
                        {item.number} / 12
                    </span>

                </div>


                <div className="solutions-orbit-card__body">

                    <div className="solutions-orbit-card__icon">
                        <Icon />
                    </div>


                    <div className="solutions-orbit-card__content">

                        <span className="solutions-orbit-card__eyebrow">
                            INDUSTRIAL SOLUTION
                        </span>


                        <h3>
                            {item.title}
                        </h3>


                        <div className="solutions-orbit-card__tags">

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


                <div className="solutions-orbit-card__bottom">

                    <span>
                        BITSOL AUTOMATION
                    </span>


                    {/* <span className="solutions-orbit-card__arrow">
                        ↗
                    </span> */}

                </div>

            </motion.div>

        </motion.article>

    );

};


/* =========================================================
   SOLUTIONS COMPONENT
   ========================================================= */

const Solutions = () => {

    const sectionRef =
        useRef(null);


    /* =====================================================
       CURRENT LOGICAL SERVICE
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


    /* =====================================================
       TOUCH START POSITION
       ===================================================== */

    const touchStartY =
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
       FINAL HOLD
       
       The last 8% of the Solutions scroll range
       is reserved so Card 12 stays visible before
       the next section starts entering.
       ===================================================== */

    const FINAL_HOLD = 0.08;


    /* =====================================================
       SERVICE PROGRESS
       
       Converts:
       
       0%  -> Card 01
       92% -> Card 12
       100% -> Card 12 still held
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


        /*
         * Reserve the final 8% of the section
         * for Card 12 to remain visible.
         */

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
       RELEASE LOCK WHEN DESTINATION IS REACHED
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


            /*
             * Smooth scroll has reached
             * the requested card.
             */

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


        /*
         * Safety fallback.
         */

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
       MOVE TO ONE SERVICE
       ===================================================== */

    const moveToService = (
        direction
    ) => {

        /*
         * Never allow another movement
         * while the previous one is travelling.
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
         * Already at boundary.
         * Native page scrolling can continue.
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
         * Lock BEFORE starting smooth scroll.
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
            top:
                destination,
            behavior:
                "smooth",
        });


        waitForArrival();

    };


    /* =====================================================
       WHEEL CONTROL
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
             * Consume wheel input while
             * controlling the card transition.
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
       TOUCH CONTROL
       ===================================================== */

    // useEffect(() => {

    //     const handleTouchStart = (
    //         event
    //     ) => {

    //         if (
    //             !isSectionActive()
    //         ) {

    //             touchStartY.current =
    //                 null;

    //             return;
    //         }


    //         touchStartY.current =
    //             event.touches[0].clientY;

    //     };


    //     const handleTouchMove = (
    //         event
    //     ) => {

    //         if (
    //             touchStartY.current ===
    //             null
    //         ) {
    //             return;
    //         }


    //         const currentY =
    //             event.touches[0].clientY;


    //         const delta =
    //             touchStartY.current -
    //             currentY;


    //         /*
    //          * Ignore tiny movement.
    //          */

    //         if (
    //             Math.abs(delta) < 8
    //         ) {
    //             return;
    //         }


    //         const direction =
    //             delta > 0
    //                 ? 1
    //                 : -1;


    //         const current =
    //             targetIndex.current;


    //         /*
    //          * At first card:
    //          * allow native page movement upward.
    //          */

    //         if (
    //             direction < 0 &&
    //             current === 0
    //         ) {
    //             return;
    //         }


    //         /*
    //          * At last card:
    //          * allow native page movement downward.
    //          */

    //         if (
    //             direction > 0 &&
    //             current === TOTAL - 1
    //         ) {
    //             return;
    //         }


    //         event.preventDefault();

    //     };


    //     const handleTouchEnd = (
    //         event
    //     ) => {

    //         if (
    //             touchStartY.current ===
    //             null
    //         ) {
    //             return;
    //         }


    //         const endY =
    //             event.changedTouches[0].clientY;


    //         const delta =
    //             touchStartY.current -
    //             endY;


    //         touchStartY.current =
    //             null;


    //         /*
    //          * Ignore tiny finger movements.
    //          */

    //         if (
    //             Math.abs(delta) < 45
    //         ) {
    //             return;
    //         }


    //         const direction =
    //             delta > 0
    //                 ? 1
    //                 : -1;


    //         const current =
    //             targetIndex.current;


    //         /*
    //          * Allow normal page movement
    //          * at the boundaries.
    //          */

    //         if (
    //             direction < 0 &&
    //             current === 0
    //         ) {
    //             return;
    //         }


    //         if (
    //             direction > 0 &&
    //             current === TOTAL - 1
    //         ) {
    //             return;
    //         }


    //         moveToService(
    //             direction
    //         );

    //     };


    //     window.addEventListener(
    //         "touchstart",
    //         handleTouchStart,
    //         {
    //             passive: true,
    //         }
    //     );


    //     window.addEventListener(
    //         "touchmove",
    //         handleTouchMove,
    //         {
    //             passive: false,
    //         }
    //     );


    //     window.addEventListener(
    //         "touchend",
    //         handleTouchEnd,
    //         {
    //             passive: true,
    //         }
    //     );


    //     return () => {

    //         window.removeEventListener(
    //             "touchstart",
    //             handleTouchStart
    //         );


    //         window.removeEventListener(
    //             "touchmove",
    //             handleTouchMove
    //         );


    //         window.removeEventListener(
    //             "touchend",
    //             handleTouchEnd
    //         );

    //     };

    // }, []);




    /* =====================================================
   TOUCH CONTROL
   MOBILE
   Let the browser handle native scrolling.
   Snap to the next service after the swipe ends.
   ===================================================== */

    useEffect(() => {

        const handleTouchStart = (event) => {

            if (!isSectionActive()) {
                touchStartY.current = null;
                return;
            }

            touchStartY.current =
                event.touches[0].clientY;

        };


        const handleTouchEnd = (event) => {

            if (
                touchStartY.current === null
            ) {
                return;
            }

            const endY =
                event.changedTouches[0].clientY;

            const delta =
                touchStartY.current -
                endY;

            touchStartY.current = null;


            /* Ignore small movements */

            if (
                Math.abs(delta) < 45
            ) {
                return;
            }


            const direction =
                delta > 0
                    ? 1
                    : -1;


            const current =
                targetIndex.current;


            /* Allow normal page movement
               at the boundaries */

            if (
                direction < 0 &&
                current === 0
            ) {
                return;
            }


            if (
                direction > 0 &&
                current === TOTAL - 1
            ) {
                return;
            }


            moveToService(direction);

        };


        window.addEventListener(
            "touchstart",
            handleTouchStart,
            {
                passive: true,
            }
        );


        window.addEventListener(
            "touchend",
            handleTouchEnd,
            {
                passive: true,
            }
        );


        return () => {

            window.removeEventListener(
                "touchstart",
                handleTouchStart
            );

            window.removeEventListener(
                "touchend",
                handleTouchEnd
            );

        };

    }, []);
    /* =====================================================
       KEEP INDEX SYNCHRONIZED
       ===================================================== */

    useEffect(() => {

        const handleScroll = () => {

            /*
             * Do not calculate a new logical index
             * while controlled smooth scrolling is running.
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


            /*
             * Same final-hold calculation
             * used by getDestination().
             */

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
            className="solutions"
            id="solutions"
        >

            <div className="solutions__sticky">

                <div className="container solutions__container">

                    {/* =================================================
                        HEADER
                    ================================================= */}

                    <header className="solutions__header">

                        <div
                            className="solutions__label"
                            data-aos="fade-down"
                        >

                            <span className="solutions__label-line" />

                            <span>
                                AUTOMATION SOLUTIONS
                            </span>

                        </div>


                        <div className="solutions__heading-row">

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
                        ORBIT
                    ================================================= */}

                    <div className="solutions__viewport">

                        <div className="solutions__orbit">

                            <div
                                className="
                                    solutions__ellipse
                                    solutions__ellipse--outer
                                "
                            />

                            <div
                                className="
                                    solutions__ellipse
                                    solutions__ellipse--inner
                                "
                            />


                            <div className="solutions__cards">

                                {solutions.map(
                                    (item, index) => (

                                        <OrbitCard
                                            key={item.number}
                                            item={item}
                                            index={index}
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

                        <aside className="solutions__progress">

                            <div className="solutions__progress-current">

                                <span>
                                    {currentNumber}
                                </span>

                                <small>
                                    / 12
                                </small>

                            </div>


                            <div className="solutions__progress-track">

                                <motion.div
                                    className="
                                        solutions__progress-fill
                                    "
                                    style={{
                                        scaleY:
                                            progressScale,
                                    }}
                                />

                            </div>


                            <div className="solutions__progress-label">
                                SERVICES
                            </div>

                        </aside>


                        {/* =================================================
                            MOBILE PROGRESS
                        ================================================= */}

                        <div className="solutions__mobile-progress">

                            <div>

                                <strong>
                                    {currentNumber}
                                </strong>

                                <span>
                                    / 12
                                </span>

                            </div>


                            <div className="solutions__mobile-track">

                                <motion.div
                                    style={{
                                        scaleX:
                                            progressScale,
                                    }}
                                />

                            </div>


                            <span>
                                SWIPE
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

};


export default Solutions;