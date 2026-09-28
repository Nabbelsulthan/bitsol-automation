import {
    useEffect,
    useLayoutEffect,
    useState
} from "react";

import {
    AnimatePresence,
    motion
} from "framer-motion";

import {
    useNavigate
} from "react-router-dom";



import heroImage
    from "../../assets/images/bitsol-hero5.jpg";


import heroImageTwo
    from "../../assets/images/bitsol-hero2.png";

import heroImageThree
    from "../../assets/images/bitsol-hero4.png";

import heroImageSystemOne
    from "../../assets/images/bitsol-hero.png";

import heroImageSystemTwo
    from "../../assets/images/bitsol-hero1.png";

import heroImageSystemThree
    from "../../assets/images/bitsol-hero3.png";


import BrandsWeDeal
    from "../BrandsWeDeal/BrandsWeDeal";

import About
    from "../About/About";

import Solutions
    from "../Solutions/Solutions";

import WhyChooseUs
    from "../WhyChooseUs/WhyChooseUs";

import Stats
    from "../Stats/Stats";

import Customers
    from "../Customers/Customers";

import ContactCTA
    from "../ContactCTA/ContactCTA";

import "./Home.css";



/* =========================================================
   HERO SCENES
   ========================================================= */

const heroScenes = [

    {
        id: 1,

        image: heroImageSystemOne,

        isSystemVisual: true,

        eyebrow:
            "SCADA & HMI SYSTEMS",

        titleLine1:
            "WE VISUALIZE",

        titleLine2:
            "THE PROCESS",

        titleAccent:
            "IN REAL TIME.",

        description:
            "Operator HMI and SCADA interfaces designed to make complex industrial processes easier to monitor and control.",

        sideLabels: [
            "HMI",
            "SCADA",
            "PROCESS CONTROL"
        ]
    },


    {
        id: 2,

        image: heroImageSystemTwo,

        isSystemVisual: true,

        eyebrow:
            "PLC & SCADA INTEGRATION",

        titleLine1:
            "WE CONNECT",

        titleLine2:
            "THE PLANT",

        titleAccent:
            "FROM CONTROL TO SCADA.",

        description:
            "PLC, field devices, networks and supervisory systems brought together into one clear industrial control environment.",

        sideLabels: [
            "PLC",
            "NETWORKS",
            "SCADA"
        ]
    },


    {
        id: 3,

        image: heroImageSystemThree,

        isSystemVisual: true,

        eyebrow:
            "INDUSTRIAL PROCESS CONTROL",

        titleLine1:
            "WE MAKE",

        titleLine2:
            "COMPLEX PROCESSES",

        titleAccent:
            "EASIER TO CONTROL.",

        description:
            "Process visualization that gives operators a clear view of equipment, operating conditions and production status.",

        sideLabels: [
            "MIMIC",
            "PROCESS",
            "MONITORING"
        ]
    },


    {
        id: 4,

        image: heroImage,

        eyebrow:
            "INDUSTRIAL AUTOMATION",

        titleLine1:
            "WE ENGINEER",

        titleLine2:
            "HOW INDUSTRY",

        titleAccent:
            "MOVES.",

        description:
            "Automation, control and industrial technology solutions engineered for modern production.",

        sideLabels: [
            "AUTOMATION",
            "CONTROL",
            "ENGINEERING"
        ]
    },


    {
        id: 5,

        image: heroImageTwo,

        eyebrow:
            "CONTROL & ELECTRICAL SYSTEMS",

        titleLine1:
            "WE BUILD",

        titleLine2:
            "THE SYSTEMS",

        titleAccent:
            "BEHIND PRODUCTION.",

        description:
            "Control panels, PLC systems and machine automation engineered around the way your plant actually works.",

        sideLabels: [
            "PLC",
            "CONTROL PANELS",
            "MACHINES"
        ]
    },


    {
        id: 6,

        image: heroImageThree,

        eyebrow:
            "SMART INDUSTRIAL TECHNOLOGY",

        titleLine1:
            "WE CONNECT",

        titleLine2:
            "INDUSTRY",

        titleAccent:
            "TO INTELLIGENCE.",

        description:
            "Connected industrial systems that bring machines, control and operational data together.",

        sideLabels: [
            "DATA",
            "DIGITAL",
            "INTELLIGENCE"
        ]
    }

];



/* =========================================================
   HERO TIMING
   ========================================================= */

/*
 * The hero deliberately moves slowly.
 *
 * 6 seconds gives the visitor enough time to actually
 * read the slide instead of feeling like a slideshow.
 */

const HERO_INTERVAL =
    6000;


/*
 * Image transition is shorter than the slide duration,
 * creating a controlled cinematic crossfade.
 */

const HERO_TRANSITION_DURATION =
    1.35;



/* =========================================================
   HOME
   ========================================================= */

const Home = () => {

    const navigate =
        useNavigate();



    /* =====================================================
       ALWAYS START HOMEPAGE FROM TOP
       ===================================================== */

    useLayoutEffect(() => {

        if (
            "scrollRestoration"
            in window.history
        ) {

            window.history.scrollRestoration =
                "manual";

        }


        window.scrollTo({

            top: 0,

            left: 0,

            behavior: "instant"

        });

    }, []);



    /* =====================================================
       INTRO STATE

       Intro plays only once per browser session.
       ===================================================== */

    // const [introVisible, setIntroVisible] =
    //     useState(() => {

    //         return (
    //             sessionStorage.getItem(
    //                 "bitsol-intro-seen"
    //             ) !== "true"
    //         );

    //     });



    /* =====================================================
       ACTIVE HERO SLIDE
       ===================================================== */

    const [activeSlide, setActiveSlide] =
        useState(0);



    /* =====================================================
       HERO ANIMATION TIMING
       ===================================================== */

    // const animationDelay =
    //     introVisible
    //         ? 3
    //         : 0;



    /* =====================================================
       CURRENT SCENE
       ===================================================== */

    const currentScene =
        heroScenes[activeSlide];



    /* =====================================================
       INTRO TIMER
       ===================================================== */

    // useEffect(() => {

    //     if (!introVisible) {
    //         return;
    //     }


    //     const timer =
    //         window.setTimeout(() => {

    //             sessionStorage.setItem(
    //                 "bitsol-intro-seen",
    //                 "true"
    //             );


    //             setIntroVisible(false);

    //         }, 3000);


    //     return () => {

    //         window.clearTimeout(timer);

    //     };

    // }, [introVisible]);




    /* =====================================================
   HERO CAROUSEL

   The timer resets after every slide change.
   This means:
   - Automatic change → 6 seconds
   - Manual arrow click → fresh 6 seconds
   - Dot click → fresh 6 seconds

   The visitor always gets the full 6 seconds
   to view the newly selected slide.
   ===================================================== */

    // useEffect(() => {
    //     if (introVisible) {
    //         return;
    //     }

    //     const timer = window.setTimeout(() => {
    //         setActiveSlide(previous =>
    //             (previous + 1) % heroScenes.length
    //         );
    //     }, HERO_INTERVAL);

    //     return () => {
    //         window.clearTimeout(timer);
    //     };

    // }, [activeSlide, introVisible]);


    useEffect(() => {
        const timer = window.setTimeout(() => {
            setActiveSlide(previous =>
                (previous + 1) % heroScenes.length
            );
        }, HERO_INTERVAL);

        return () => {
            window.clearTimeout(timer);
        };

    }, [activeSlide]);



    /* =====================================================
       MANUAL SLIDE CONTROL
       ===================================================== */

    const goToSlide =
        (index) => {

            setActiveSlide(
                index
            );

        };


    const goToPreviousSlide =
        () => {

            setActiveSlide(
                previous =>
                    (
                        previous - 1 + heroScenes.length
                    ) %
                    heroScenes.length
            );

        };


    const goToNextSlide =
        () => {

            setActiveSlide(
                previous =>
                    (
                        previous + 1
                    ) %
                    heroScenes.length
            );

        };



    /* =====================================================
       CINEMATIC TRANSITION
       ===================================================== */

    const cinematicEase = [
        0.22,
        1,
        0.36,
        1
    ];



    return (

        <main className="home">


            {/* =====================================================
                OPENING CINEMATIC SEQUENCE
                ===================================================== */}

            {/* <AnimatePresence>

                {introVisible && (

                    <motion.section
                        className="home-intro"

                        initial={{
                            opacity: 1
                        }}

                        exit={{
                            opacity: 0
                        }}

                        transition={{
                            duration: 0.8,
                            ease:
                                cinematicEase
                        }}
                    >


                        <div className="home-intro__content">


                    

                            <motion.div
                                className="home-intro__brand"

                                initial={{
                                    opacity: 0,
                                    y: 24
                                }}

                                animate={{
                                    opacity: 1,
                                    y: 0
                                }}

                                transition={{
                                    duration: 0.8,
                                    delay: 0.25,
                                    ease:
                                        cinematicEase
                                }}
                            >

                                BITSOL

                            </motion.div>



              

                            <motion.div
                                className="home-intro__line"

                                initial={{
                                    scaleX: 0,
                                    opacity: 0
                                }}

                                animate={{
                                    scaleX: 1,
                                    opacity: 1
                                }}

                                transition={{
                                    duration: 0.8,
                                    delay: 0.45,
                                    ease:
                                        cinematicEase
                                }}
                            />



             

                            <motion.div
                                className="home-intro__statement"

                                initial={{
                                    opacity: 0,
                                    y: 30
                                }}

                                animate={{
                                    opacity: 1,
                                    y: 0
                                }}

                                transition={{
                                    duration: 0.9,
                                    delay: 0.7,
                                    ease:
                                        cinematicEase
                                }}
                            >

                                INDUSTRIAL
                                <br />
                                AUTOMATION

                            </motion.div>



      

                            <motion.div
                                className="home-intro__bar"

                                initial={{
                                    scaleX: 0
                                }}

                                animate={{
                                    scaleX: 1
                                }}

                                transition={{
                                    duration: 1,
                                    delay: 1.15,
                                    ease:
                                        cinematicEase
                                }}
                            />

                        </div>



       

                        <motion.div
                            className="home-intro__background"

                            initial={{
                                scale: 1.08,
                                opacity: 0
                            }}

                            animate={{
                                scale: 1,
                                opacity: 0.16
                            }}

                            transition={{
                                duration: 2.2,
                                ease:
                                    cinematicEase
                            }}
                        >

                            <img
                                src={heroImage}
                                alt=""
                                aria-hidden="true"
                            />

                        </motion.div>

                    </motion.section>

                )}

            </AnimatePresence> */}



            {/* =====================================================
                HERO
                ===================================================== */}

            <section
                id="home"
                className={`
                    home-hero
                    ${currentScene.isSystemVisual
                        ? "home-hero--system"
                        : ""
                    }
                `}
            >


                {/* =================================================
                    HERO IMAGE FRAME

                    IMPORTANT:

                    This frame never changes dimensions.

                    Every image is:
                    absolute
                    inset: 0
                    width: 100%
                    height: 100%
                    object-fit: cover

                    Therefore image dimensions cannot affect
                    document height or scroll behaviour.
                    ================================================= */}

                <div
                    className="home-hero__visual"
                >

                    <AnimatePresence
                        initial={false}
                    >

                        <motion.div
                            key={
                                currentScene.id
                            }

                            className="home-hero__slide"

                            initial={{
                                opacity: 0
                            }}

                            animate={{
                                opacity: 1
                            }}

                            exit={{
                                opacity: 0
                            }}

                            transition={{
                                duration:
                                    HERO_TRANSITION_DURATION,

                                ease:
                                    cinematicEase
                            }}
                        >

                            <img
                                src={
                                    currentScene.image
                                }

                                alt={
                                    `${currentScene.eyebrow} - Bitsol Automation`
                                }

                                className={`
                                    home-hero__image
                                    kenburns-right
                                    ${currentScene.isSystemVisual
                                        ? "home-hero__image--system"
                                        : ""
                                    }
                                `}
                            />

                        </motion.div>

                    </AnimatePresence>

                </div>



                {/* =================================================
                    IMAGE OVERLAY
                    ================================================= */}

                <div
                    className="home-hero__overlay"
                />



                {/* =================================================
                    LIGHT SWEEP

                    Kept from the original animation.
                    ================================================= */}

                <motion.div
                    key={
                        `light-${currentScene.id}`
                    }

                    className="home-hero__light"

                    initial={{
                        x: "-100%"
                    }}

                    animate={{
                        x: "100%"
                    }}

                    transition={{
                        duration: 1.8,

                        ease:
                            cinematicEase
                    }}
                />



                {/* =================================================
                    HERO CONTENT
                    ================================================= */}

                <div
                    className="home-hero__container"
                >

                    <AnimatePresence
                        mode="wait"
                    >

                        <motion.div
                            key={
                                `content-${currentScene.id}`
                            }

                            className="home-hero__content"

                            initial={{
                                opacity: 0,
                                y: 28
                            }}

                            animate={{
                                opacity: 1,
                                y: 0
                            }}

                            exit={{
                                opacity: 0,
                                y: -18
                            }}

                            transition={{
                                duration: 0.9,
                                ease:
                                    cinematicEase
                            }}
                        >


                            {/* =================================================
                                EYEBROW
                                ================================================= */}

                            <motion.div
                                className="home-hero__eyebrow"

                                initial={{
                                    opacity: 0,
                                    x: -24
                                }}

                                animate={{
                                    opacity: 1,
                                    x: 0
                                }}

                                transition={{
                                    duration: 0.7,
                                    delay: 0.12,
                                    ease:
                                        cinematicEase
                                }}
                            >

                                <span />

                                {
                                    currentScene.eyebrow
                                }

                            </motion.div>



                            {/* =================================================
                                TITLE
                                ================================================= */}

                            <h1
                                className="home-hero__title"
                            >


                                {/* LINE 1 */}

                                <span
                                    className="
                                        home-hero__title-line
                                    "
                                >

                                    <motion.span
                                        initial={{
                                            y: "110%"
                                        }}

                                        animate={{
                                            y: 0
                                        }}

                                        transition={{
                                            duration: 0.9,
                                            delay: 0.18,
                                            ease:
                                                cinematicEase
                                        }}
                                    >

                                        {
                                            currentScene.titleLine1
                                        }

                                    </motion.span>

                                </span>



                                {/* LINE 2 */}

                                <span
                                    className="
                                        home-hero__title-line
                                    "
                                >

                                    <motion.span
                                        initial={{
                                            y: "110%"
                                        }}

                                        animate={{
                                            y: 0
                                        }}

                                        transition={{
                                            duration: 0.9,
                                            delay: 0.27,
                                            ease:
                                                cinematicEase
                                        }}
                                    >

                                        {
                                            currentScene.titleLine2
                                        }

                                    </motion.span>

                                </span>



                                {/* LINE 3 */}

                                <span
                                    className="
                                        home-hero__title-line
                                    "
                                >

                                    <motion.span
                                        className="
                                            home-hero__title-accent
                                        "

                                        initial={{
                                            y: "110%"
                                        }}

                                        animate={{
                                            y: 0
                                        }}

                                        transition={{
                                            duration: 0.9,
                                            delay: 0.36,
                                            ease:
                                                cinematicEase
                                        }}
                                    >

                                        {
                                            currentScene.titleAccent
                                        }

                                    </motion.span>

                                </span>

                            </h1>



                            {/* =================================================
                                DESCRIPTION
                                ================================================= */}

                            <motion.p
                                className="
                                    home-hero__description
                                "

                                initial={{
                                    opacity: 0,
                                    y: 18
                                }}

                                animate={{
                                    opacity: 1,
                                    y: 0
                                }}

                                transition={{
                                    duration: 0.75,
                                    delay: 0.5,
                                    ease:
                                        cinematicEase
                                }}
                            >

                                {
                                    currentScene.description
                                }

                            </motion.p>



                            {/* =================================================
                                ACTIONS
                                ================================================= */}

                            <motion.div
                                className="
                                    home-hero__actions
                                "

                                initial={{
                                    opacity: 0,
                                    y: 18
                                }}

                                animate={{
                                    opacity: 1,
                                    y: 0
                                }}

                                transition={{
                                    duration: 0.75,
                                    delay: 0.62,
                                    ease:
                                        cinematicEase
                                }}
                            >


                                <button
                                    type="button"
                                    className="
                                        home-hero__button
                                    "

                                    onClick={() =>
                                        navigate(
                                            "/services.html"
                                        )
                                    }
                                >

                                    <span>
                                        EXPLORE SOLUTIONS
                                    </span>

                                </button>



                                <button
                                    type="button"
                                    className="
                                        home-hero__link
                                    "

                                    onClick={() =>
                                        navigate(
                                            "/contactus.html"
                                        )
                                    }
                                >

                                    TALK TO BITSOL

                                </button>

                            </motion.div>

                        </motion.div>

                    </AnimatePresence>



                    {/* =================================================
                        SIDE TEXT
                        ================================================= */}

                    <AnimatePresence
                        mode="wait"
                    >

                        <motion.div
                            key={
                                `side-${currentScene.id}`
                            }

                            className="
                                home-hero__side
                            "

                            initial={{
                                opacity: 0
                            }}

                            animate={{
                                opacity: 1
                            }}

                            exit={{
                                opacity: 0
                            }}

                            transition={{
                                duration: 0.7,
                                ease:
                                    cinematicEase
                            }}
                        >

                            {
                                currentScene
                                    .sideLabels
                                    .map(
                                        label => (

                                            <span
                                                key={
                                                    label
                                                }
                                            >
                                                {label}
                                            </span>

                                        )
                                    )
                            }

                        </motion.div>

                    </AnimatePresence>

                </div>



                {/* =================================================
                    CAROUSEL INDICATOR
                    ================================================= */}

                <div
                    className="
                        home-hero__carousel
                    "
                >

                    <button
                        type="button"
                        className="home-hero__carousel-arrow home-hero__carousel-arrow--prev"
                        aria-label="Previous hero slide"
                        onClick={goToPreviousSlide}
                    >
                        <span aria-hidden="true">‹</span>
                    </button>


                    <div
                        className="
                            home-hero__carousel-count
                        "
                    >

                        <span
                            className="
                                home-hero__carousel-current
                            "
                        >
                            {String(
                                activeSlide + 1
                            ).padStart(
                                2,
                                "0"
                            )}
                        </span>

                        <span
                            className="
                                home-hero__carousel-divider
                            "
                        >
                            /
                        </span>

                        <span
                            className="
                                home-hero__carousel-total
                            "
                        >
                            {String(
                                heroScenes.length
                            ).padStart(
                                2,
                                "0"
                            )}
                        </span>

                    </div>



                    <div
                        className="
                            home-hero__carousel-dots
                        "
                    >

                        {
                            heroScenes.map(
                                (
                                    scene,
                                    index
                                ) => (

                                    <button
                                        key={
                                            scene.id
                                        }

                                        type="button"

                                        aria-label={
                                            `Show hero slide ${index + 1
                                            }`
                                        }

                                        className={`
                                            home-hero__carousel-dot
                                            ${activeSlide === index
                                                ? "is-active"
                                                : ""
                                            }
                                        `}

                                        onClick={() =>
                                            goToSlide(
                                                index
                                            )
                                        }
                                    >

                                        <span />

                                    </button>

                                )
                            )
                        }

                    </div>


                    <button
                        type="button"
                        className="home-hero__carousel-arrow home-hero__carousel-arrow--next"
                        aria-label="Next hero slide"
                        onClick={goToNextSlide}
                    >
                        <span aria-hidden="true">›</span>
                    </button>

                </div>



                {/* =================================================
                    HERO FOOT
                    ================================================= */}

                <motion.div
                    className="
                        home-hero__foot
                    "

                    initial={{
                        opacity: 0
                    }}

                    animate={{
                        opacity: 1
                    }}

                    transition={{
                        duration: 0.8,
                        delay: 1.5,
                        // delay:
                        //     animationDelay + 1.5,
                        ease:
                            cinematicEase
                    }}
                >

                    <span>
                        SCROLL TO EXPLORE
                    </span>

                    {/* <span
                        className="
                            home-hero__foot-line
                        "
                    /> */}

                </motion.div>


            </section>



            {/* =====================================================
                REST OF HOMEPAGE
                ===================================================== */}

            <BrandsWeDeal />

            <About />

            <Solutions />

            <WhyChooseUs />

            <Stats />

            <Customers />

            <ContactCTA />


        </main>

    );

};


export default Home;