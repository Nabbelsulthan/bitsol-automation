import {
    useEffect,
    useState
} from "react";

import {
    AnimatePresence,
    motion
} from "framer-motion";

import {
    useLocation,
    useNavigate
} from "react-router-dom";

import logo from "../../assets/icons/logo.png";

import "./Navbar.css";


const navigation = [
    {
        label: "HOME",
        path: "/index.html"
    },
    {
        label: "SERVICES",
        path: "/services.html"
    },
    {
        label: "PRODUCTS",
        path: "/products.html"
    },
    {
        label: "IT SOLUTIONS",
        path: "/itsolutions.html"
    },
    // {
    //     label: "PROJECTS",
    //     path: "/projects.html"
    // },
    {
        label: "CONTACT",
        path: "/contactus.html"
    }
];


const Navbar = () => {

    const navigate = useNavigate();

    const location = useLocation();


    const [menuOpen, setMenuOpen] =
        useState(false);

    const [scrolled, setScrolled] =
        useState(false);


    /* =====================================================
       ACTIVE PAGE
       ===================================================== */

    const currentPath =
        location.pathname === "/"
            ? "/index.html"
            : location.pathname;


    /* =====================================================
       SCROLL STATE
       ===================================================== */

    useEffect(() => {

        const handleScroll = () => {

            setScrolled(
                window.scrollY > 30
            );

        };

        handleScroll();

        window.addEventListener(
            "scroll",
            handleScroll,
            {
                passive: true
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
       CLOSE MOBILE MENU ON PAGE CHANGE
       ===================================================== */

    useEffect(() => {

        setMenuOpen(false);

    }, [location.pathname]);


    /* =====================================================
       BODY SCROLL LOCK
       ===================================================== */

    useEffect(() => {

        if (!menuOpen) {

            document.body.style.overflow =
                "";

            return;

        }

        document.body.style.overflow =
            "hidden";


        return () => {

            document.body.style.overflow =
                "";

        };

    }, [menuOpen]);


    /* =====================================================
       CLOSE MOBILE MENU ON DESKTOP
       ===================================================== */

    useEffect(() => {

        const handleResize = () => {

            if (window.innerWidth > 768) {

                setMenuOpen(false);

            }

        };


        handleResize();


        window.addEventListener(
            "resize",
            handleResize
        );


        return () => {

            window.removeEventListener(
                "resize",
                handleResize
            );

        };

    }, []);


    /* =====================================================
       NAVIGATION
       ===================================================== */

    const navigateTo = (path) => {

        setMenuOpen(false);

        navigate(path);

    };


    /* =====================================================
       MENU TOGGLE
       ===================================================== */

    const toggleMenu = () => {

        setMenuOpen(
            (previous) =>
                !previous
        );

    };


    return (
        <header
            className={`
                navbar
                ${scrolled
                    ? "navbar--scrolled"
                    : ""}
                ${menuOpen
                    ? "navbar--menu-open"
                    : ""}
            `}
        >

            {/* =================================================
                MAIN NAVBAR
                ================================================= */}

            <div className="navbar__inner">


                {/* =================================================
                    LOGO
                    ================================================= */}

                <button
                    type="button"
                    className="navbar__brand"
                    onClick={() =>
                        navigateTo(
                            "/index.html"
                        )
                    }
                    aria-label="Bitsol Automation Home"
                >

                    {/* <img
                        src={logo}
                        alt="Bitsol Automation"
                        className="navbar__logo"
                        
                      
                    /> */}

                    <a href="/index.html" aria-label="Bitsol Automation Home">
                        <img
                            src={logo}
                            alt="Bitsol Automation"
                            className="navbar__logo"
                        />
                    </a>

                </button>


                {/* =================================================
                    DESKTOP NAVIGATION
                    ================================================= */}

                <nav
                    className="navbar__navigation"
                    aria-label="Main navigation"
                >

                    {navigation.map((item) => {

                        const isActive =
                            currentPath ===
                            item.path;


                        return (
                            <button
                                key={item.path}
                                type="button"
                                className={`
                                    navbar__link
                                    ${isActive
                                        ? "navbar__link--active"
                                        : ""}
                                `}
                                onClick={() =>
                                    navigateTo(
                                        item.path
                                    )
                                }
                            >

                                <span className="navbar__link-label">
                                    {item.label}
                                </span>

                                <span className="navbar__link-line" />

                            </button>
                        );

                    })}

                </nav>


                {/* =================================================
                    DESKTOP CTA
                    ================================================= */}

                <button
                    type="button"
                    className="navbar__cta"
                    onClick={() =>
                        navigateTo(
                            "/contactus.html"
                        )
                    }
                >

                    <span>
                        REQUEST A QUOTE
                    </span>

                </button>


                {/* =================================================
                    MOBILE MENU BUTTON
                    ================================================= */}

                <button
                    type="button"
                    className={`
                        navbar__menu-button
                        ${menuOpen
                            ? "navbar__menu-button--open"
                            : ""}
                    `}
                    onClick={toggleMenu}
                    aria-label={
                        menuOpen
                            ? "Close navigation"
                            : "Open navigation"
                    }
                    aria-expanded={
                        menuOpen
                    }
                >

                    <span className="navbar__menu-icon">

                        <span />
                        <span />
                        <span />

                    </span>

                </button>

            </div>


            {/* =====================================================
                MOBILE NAVIGATION
                ===================================================== */}

            <AnimatePresence mode="wait">

                {menuOpen && (

                    <motion.div
                        className="navbar__drawer"

                        initial={{
                            opacity: 0,
                            y: 35,
                            scale: 0.985
                        }}

                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1
                        }}

                        exit={{
                            opacity: 0,
                            y: 25,
                            scale: 0.985
                        }}

                        transition={{
                            duration: 0.5,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1
                            ]
                        }}
                    >

                        <nav
                            className="navbar__drawer-navigation"
                            aria-label="Mobile navigation"
                        >

                            {navigation.map(
                                (item, index) => {

                                    const isActive =
                                        currentPath ===
                                        item.path;


                                    return (
                                        <motion.button
                                            key={item.path}
                                            type="button"
                                            className={`
                                                navbar__drawer-item
                                                ${isActive
                                                    ? "navbar__drawer-item--active"
                                                    : ""}
                                            `}
                                            onClick={() =>
                                                navigateTo(
                                                    item.path
                                                )
                                            }

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
                                                y: 18
                                            }}

                                            transition={{
                                                delay:
                                                    0.08 +
                                                    index * 0.055,

                                                duration:
                                                    0.5,

                                                ease: [
                                                    0.22,
                                                    1,
                                                    0.36,
                                                    1
                                                ]
                                            }}
                                        >

                                            <span className="navbar__drawer-name">
                                                {item.label}
                                            </span>

                                            <span className="navbar__drawer-line" />

                                        </motion.button>
                                    );

                                }
                            )}

                        </nav>


                        {/* =================================================
                            MOBILE CTA
                            ================================================= */}

                        <motion.div
                            className="navbar__drawer-footer"

                            initial={{
                                opacity: 0,
                                y: 25
                            }}

                            animate={{
                                opacity: 1,
                                y: 0
                            }}

                            exit={{
                                opacity: 0,
                                y: 20
                            }}

                            transition={{
                                delay: 0.42,
                                duration: 0.5,
                                ease: [
                                    0.22,
                                    1,
                                    0.36,
                                    1
                                ]
                            }}
                        >

                            <button
                                type="button"
                                onClick={() =>
                                    navigateTo(
                                        "/contactus.html"
                                    )
                                }
                            >
                                REQUEST A QUOTE
                            </button>

                        </motion.div>

                    </motion.div>

                )}

            </AnimatePresence>

        </header>
    );
};


export default Navbar;