import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

import logo from "../../assets/icons/logo.png";

import "./Navbar.css";

const navigation = [
    { label: "HOME", path: "/index.html" },
    { label: "SERVICES", path: "/services.html" },
    { label: "PRODUCTS", path: "/products.html" },
    { label: "IT SOLUTIONS", path: "/itsolutions.html" },
    { label: "CONTACT", path: "/contactus.html" }
];

const EASE = [0.22, 1, 0.36, 1];

const menuVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.35,
            ease: EASE,
            staggerChildren: 0.07,
            delayChildren: 0.08
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.25,
            ease: EASE
        }
    }
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 18
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            ease: EASE
        }
    }
};

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const currentPath =
        location.pathname === "/" ? "/index.html" : location.pathname;

    /* --------------------------------------------------
       SCROLL STATE
    -------------------------------------------------- */

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    /* --------------------------------------------------
       CLOSE MENU ON PAGE CHANGE
    -------------------------------------------------- */

    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    /* --------------------------------------------------
       LOCK BODY SCROLL
    -------------------------------------------------- */

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    /* --------------------------------------------------
       CLOSE MENU ON DESKTOP
    -------------------------------------------------- */

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    /* --------------------------------------------------
       ESCAPE KEY
    -------------------------------------------------- */

    useEffect(() => {
        if (!menuOpen) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setMenuOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [menuOpen]);

    /* --------------------------------------------------
       NAVIGATION
    -------------------------------------------------- */

    const navigateTo = (path) => {
        setMenuOpen(false);
        navigate(path);
    };

    const toggleMenu = () => {
        setMenuOpen((previous) => !previous);
    };

    return (
        <header
            className={`navbar ${
                scrolled ? "navbar--scrolled" : ""
            } ${menuOpen ? "navbar--menu-open" : ""}`}
        >
            {/* ==================================================
                NAVBAR
            ================================================== */}

            <div className="navbar__inner">

                {/* BRAND */}

                <button
                    type="button"
                    className="navbar__brand"
                    onClick={() => navigateTo("/index.html")}
                    aria-label="Bitsol Automation Home"
                >
                    <img
                        src={logo}
                        alt="Bitsol Automation"
                        className="navbar__logo"
                    />
                </button>

                {/* DESKTOP NAVIGATION */}

                <nav
                    className="navbar__navigation"
                    aria-label="Main navigation"
                >
                    {navigation.map((item) => {
                        const isActive =
                            currentPath === item.path;

                        return (
                            <button
                                key={item.path}
                                type="button"
                                className={`navbar__link ${
                                    isActive
                                        ? "navbar__link--active"
                                        : ""
                                }`}
                                onClick={() =>
                                    navigateTo(item.path)
                                }
                            >
                                <span className="navbar__link-label">
                                    {item.label}
                                </span>
                            </button>
                        );
                    })}
                </nav>

                {/* DESKTOP QUOTE */}

                <button
                    type="button"
                    className="navbar__cta"
                    onClick={() =>
                        navigateTo("/contactus.html")
                    }
                >
                    <span>REQUEST A QUOTE</span>
                </button>

                {/* MOBILE MENU */}

                <button
                    type="button"
                    className={`navbar__menu-button ${
                        menuOpen
                            ? "navbar__menu-button--open"
                            : ""
                    }`}
                    onClick={toggleMenu}
                    aria-label={
                        menuOpen
                            ? "Close navigation"
                            : "Open navigation"
                    }
                    aria-expanded={menuOpen}
                >
              

                    <span className="navbar__menu-icon">
                        <span />
                        <span />
                    </span>
                </button>
            </div>

            {/* ==================================================
                MOBILE OVERLAY
            ================================================== */}

            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* BACKDROP */}

                        <motion.div
                            className="navbar__backdrop"
                            onClick={() =>
                                setMenuOpen(false)
                            }
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: 0.3,
                                ease: "easeOut"
                            }}
                        />

                        {/* MENU */}

                        <motion.div
                            className="navbar__overlay"
                            initial={{
                                clipPath:
                                    "inset(0 0 100% 0)"
                            }}
                            animate={{
                                clipPath:
                                    "inset(0 0 0% 0)"
                            }}
                            exit={{
                                clipPath:
                                    "inset(0 0 100% 0)"
                            }}
                            transition={{
                                duration: 0.65,
                                ease: EASE
                            }}
                        >
                            <div className="navbar__overlay-inner">

                                {/* TOP INFORMATION */}

                                <div className="navbar__overlay-top">
                                    <span>
                                        BITSOL AUTOMATION
                                    </span>

                                    <span>
                                        NAVIGATION
                                    </span>
                                </div>

                                {/* NAVIGATION */}

                                <motion.nav
                                    className="navbar__mobile-navigation"
                                    aria-label="Mobile navigation"
                                    variants={menuVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    {navigation.map(
                                        (item, index) => {
                                            const isActive =
                                                currentPath ===
                                                item.path;

                                            return (
                                                <motion.div
                                                    key={item.path}
                                                    className={`navbar__mobile-row ${
                                                        isActive
                                                            ? "navbar__mobile-row--active"
                                                            : ""
                                                    }`}
                                                    variants={
                                                        itemVariants
                                                    }
                                                >
                                                    <button
                                                        type="button"
                                                        className="navbar__mobile-link"
                                                        onClick={() =>
                                                            navigateTo(
                                                                item.path
                                                            )
                                                        }
                                                        aria-current={
                                                            isActive
                                                                ? "page"
                                                                : undefined
                                                        }
                                                    >
                                                        <span className="navbar__mobile-number">
                                                            {String(
                                                                index + 1
                                                            ).padStart(
                                                                2,
                                                                "0"
                                                            )}
                                                        </span>

                                                        <span className="navbar__mobile-name">
                                                            {
                                                                item.label
                                                            }
                                                        </span>

                                                        <span
                                                            className={`navbar__mobile-status ${
                                                                isActive
                                                                    ? "navbar__mobile-status--active"
                                                                    : ""
                                                            }`}
                                                        />
                                                    </button>
                                                </motion.div>
                                            );
                                        }
                                    )}

                                    {/* QUOTE DIRECTLY AFTER CONTACT */}

                                    <motion.div
                                        className="navbar__mobile-quote-wrap"
                                        variants={itemVariants}
                                    >
                                        <button
                                            type="button"
                                            className="navbar__mobile-quote"
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
                                    </motion.div>
                                </motion.nav>

                                {/* BOTTOM CONTENT */}

                                <motion.div
                                    className="navbar__overlay-bottom"
                                    initial={{
                                        opacity: 0,
                                        y: 15
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: 10
                                    }}
                                    transition={{
                                        delay: 0.35,
                                        duration: 0.5,
                                        ease: EASE
                                    }}
                                >
                                    <span>
                                        INDUSTRIAL AUTOMATION
                                    </span>

                                    <span>
                                        HOSUR · TAMIL NADU
                                    </span>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;