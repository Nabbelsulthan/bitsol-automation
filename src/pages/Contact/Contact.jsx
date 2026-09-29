
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
    FaArrowRight,
    FaCheck,
    FaPhone,

} from "react-icons/fa6";


import image
    from "../../assets/images/contact.png";

import "./Contact.css";


const Contact = () => {

    const formRef = useRef(null);

    const [form, setForm] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        requirement: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    /* =====================================================
       FORM STEP
       ===================================================== */

    const [activeStep, setActiveStep] = useState(1);


    /* =====================================================
       CONTACT DETAILS
       ===================================================== */

    const phoneDisplay = "+91 78268 00765";
    const phoneNumber = "917826800765";
    const email = "bitsol@bitsol.in";

    const address =
        "5/14-6, Ground Floor, Rajeswari Nagar, Tamilagam Building, Bagalur Rd, Hosur, Tamil Nadu 635109, India";


    const heroImage = image;

    const googleMapsUrl =
        "https://www.google.com/maps/search/?api=1&query=Bitsol+Automation%2C+5%2F14-6%2C+Ground+Floor%2C+Rajeswari+Nagar%2C+Tamilagam+Building%2C+Bagalur+Rd%2C+Hosur%2C+Tamil+Nadu+635109";


    const directionsUrl =
        "https://www.google.com/maps/dir/?api=1&destination=Bitsol+Automation%2C+5%2F14-6%2C+Ground+Floor%2C+Rajeswari+Nagar%2C+Tamilagam+Building%2C+Bagalur+Rd%2C+Hosur%2C+Tamil+Nadu+635109";


    /* =====================================================
       REQUIREMENTS
       ===================================================== */

    const requirements = [
        "PLC & Automation",
        "SCADA / HMI",
        "Control Panels",
        "Process Automation",
        "Furnace Automation",
        "Industrial IT",
        "AMC / Maintenance",
        "Custom Automation",
    ];


    /* =====================================================
       AOS
       ===================================================== */

    useEffect(() => {

        AOS.init({
            duration: 800,
            easing: "ease-out-cubic",
            once: false,
            offset: 70,
        });

        AOS.refresh();

        return () => {
            AOS.refresh();
        };

    }, []);


    /* =====================================================
       FIELD UPDATE
       ===================================================== */

    const updateField = (field, value) => {

        setForm((previous) => ({
            ...previous,
            [field]: value,
        }));

        if (errors[field]) {

            setErrors((previous) => ({
                ...previous,
                [field]: "",
            }));

        }

        /* Keep the left-side progress indicator synced
           with the field currently being edited. */
        if (
            field === "name" ||
            field === "company" ||
            field === "email" ||
            field === "phone"
        ) {
            setActiveStep(1);
        } else if (field === "requirement") {
            setActiveStep(2);
        } else if (field === "message") {
            setActiveStep(3);
        }

        setSubmitted(false);
    };


    /* =====================================================
       PHONE INPUT
       DIGITS ONLY
       ===================================================== */

    const handlePhoneChange = (event) => {

        const value = event.target.value;

        /*
         * Remove everything except digits.
         * This prevents:
         * letters
         * spaces
         * +
         * brackets
         * hyphens
         * special characters
         */

        const digitsOnly = value.replace(/\D/g, "");

        /*
         * Keep the field within a sensible
         * international phone length.
         */

        const limitedValue = digitsOnly.slice(0, 15);

        updateField("phone", limitedValue);
    };


    /* =====================================================
       VALIDATION
       ===================================================== */

    const validateField = (field, value) => {

        const cleanValue = value.trim();

        switch (field) {

            /* -------------------------------------------------
               NAME
               ------------------------------------------------- */

            case "name":

                if (!cleanValue) {
                    return "Please enter your full name.";
                }

                if (cleanValue.length < 2) {
                    return "Name must contain at least 2 characters.";
                }

                if (cleanValue.length > 80) {
                    return "Name must be under 80 characters.";
                }

                if (!/^[a-zA-ZÀ-ÿ\s.'-]+$/.test(cleanValue)) {
                    return "Please enter a valid name.";
                }

                return "";


            /* -------------------------------------------------
               COMPANY
               ------------------------------------------------- */

            case "company":

                if (cleanValue.length > 100) {
                    return "Company name must be under 100 characters.";
                }

                return "";


            /* -------------------------------------------------
               EMAIL
               ------------------------------------------------- */

            case "email":

                if (!cleanValue) {
                    return "Please enter your email address.";
                }

                if (
                    !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(
                        cleanValue
                    )
                ) {
                    return "Please enter a valid email address.";
                }

                if (cleanValue.length > 150) {
                    return "Email address is too long.";
                }

                return "";


            /* -------------------------------------------------
               PHONE
               ------------------------------------------------- */

            case "phone": {

                if (!cleanValue) {
                    return "Please enter your phone number.";
                }

                if (!/^\d+$/.test(cleanValue)) {
                    return "Phone number can contain digits only.";
                }

                if (
                    cleanValue.length < 10 ||
                    cleanValue.length > 15
                ) {
                    return "Please enter a valid phone number.";
                }

                return "";
            }


            /* -------------------------------------------------
               REQUIREMENT
               ------------------------------------------------- */

            case "requirement":

                if (!cleanValue) {
                    return "Please select your project requirement.";
                }

                return "";


            /* -------------------------------------------------
               MESSAGE
               ------------------------------------------------- */

            case "message":

                if (!cleanValue) {
                    return "Please tell us a little about your project.";
                }

                if (cleanValue.length < 10) {
                    return "Please provide at least 10 characters.";
                }

                if (cleanValue.length > 2000) {
                    return "Please keep the message under 2000 characters.";
                }

                return "";


            default:
                return "";
        }
    };


    /* =====================================================
       BLUR VALIDATION
       ===================================================== */

    const handleBlur = (field) => {

        const error = validateField(
            field,
            form[field]
        );

        setErrors((previous) => ({
            ...previous,
            [field]: error,
        }));
    };


    /* =====================================================
       FORM VALIDATION
       ===================================================== */

    const validateForm = () => {

        const fields = [
            "name",
            "company",
            "email",
            "phone",
            "requirement",
            "message",
        ];

        const nextErrors = {};

        fields.forEach((field) => {

            const error = validateField(
                field,
                form[field]
            );

            if (error) {
                nextErrors[field] = error;
            }

        });

        return nextErrors;
    };


    /* =====================================================
       SUBMIT
       ===================================================== */

    //     const handleSubmit = async (event) => {

    //         event.preventDefault();

    //         const nextErrors = validateForm();

    //         if (Object.keys(nextErrors).length > 0) {

    //             setErrors(nextErrors);

    //             const firstErrorField =
    //                 Object.keys(nextErrors)[0];

    //             if (
    //                 firstErrorField === "name" ||
    //                 firstErrorField === "company" ||
    //                 firstErrorField === "email" ||
    //                 firstErrorField === "phone"
    //             ) {
    //                 setActiveStep(1);
    //             } else if (firstErrorField === "requirement") {
    //                 setActiveStep(2);
    //             } else if (firstErrorField === "message") {
    //                 setActiveStep(3);
    //             }

    //             const target =
    //                 formRef.current?.querySelector(
    //                     `[name="${firstErrorField}"]`
    //                 );

    //             target?.focus();

    //             return;
    //         }

    //         setIsSubmitting(true);
    //         setErrors({});

    //         const cleanName = form.name.trim();
    //         const cleanCompany = form.company.trim();
    //         const cleanEmail = form.email.trim();
    //         const cleanPhone = form.phone.trim();
    //         const cleanRequirement = form.requirement.trim();
    //         const cleanMessage = form.message.trim();

    //         try {

    //             /* =================================================
    //                1. SEND ENQUIRY THROUGH RESEND
    //                ================================================= */

    //             const response = await fetch(
    //                 "/api/send-email",
    //                 {
    //                     method: "POST",
    //                     headers: {
    //                         "Content-Type": "application/json",
    //                     },
    //                     body: JSON.stringify({
    //                         name: cleanName,
    //                         company: cleanCompany,
    //                         email: cleanEmail,
    //                         phone: cleanPhone,
    //                         requirement: cleanRequirement,
    //                         message: cleanMessage,
    //                     }),
    //                 }
    //             );

    //             const result = await response.json();

    //             if (!response.ok || !result.success) {
    //                 throw new Error(
    //                     result.message ||
    //                     "Unable to send enquiry."
    //                 );
    //             }

    //             /* =================================================
    //                2. PREPARE WHATSAPP MESSAGE
    //                ================================================= */

    //             const whatsappMessage = `Hello Bitsol Automation,

    // I would like to discuss an automation requirement.

    // Name: ${cleanName}
    // Company: ${cleanCompany || "Not provided"}
    // Email: ${cleanEmail}
    // Phone: ${cleanPhone}

    // Requirement:
    // ${cleanRequirement}

    // Project Details:
    // ${cleanMessage}`;

    //             const whatsappUrl =
    //                 `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    //                     whatsappMessage
    //                 )}`;

    //             /* =================================================
    //                3. OPEN WHATSAPP
    //                ================================================= */

    //             window.open(
    //                 whatsappUrl,
    //                 "_blank",
    //                 "noopener,noreferrer"
    //             );

    //             /* =================================================
    //                4. RESET FORM
    //                ================================================= */

    //             setSubmitted(true);

    //             setForm({
    //                 name: "",
    //                 company: "",
    //                 email: "",
    //                 phone: "",
    //                 requirement: "",
    //                 message: "",
    //             });

    //             setErrors({});
    //             setActiveStep(1);
    //             setIsSubmitting(false);

    //             /* =================================================
    //                5. GO TO THANK YOU PAGE
    //                ================================================= */

    //             window.location.href = "/thank-you.html";

    //         } catch (error) {

    //             console.error(
    //                 "Contact form submission error:",
    //                 error
    //             );

    //             setIsSubmitting(false);

    //             setErrors({
    //                 submit:
    //                     "We couldn't send your enquiry right now. Please try again or contact us directly on WhatsApp.",
    //             });
    //         }
    //     };




    /* =====================================================
       SUBMIT
       ===================================================== */

    const handleSubmit = async (event) => {
        event.preventDefault();

        const nextErrors = validateForm();

        if (Object.keys(nextErrors).length > 0) {
            setErrors(nextErrors);

            const firstErrorField =
                Object.keys(nextErrors)[0];

            if (
                firstErrorField === "name" ||
                firstErrorField === "company" ||
                firstErrorField === "email" ||
                firstErrorField === "phone"
            ) {
                setActiveStep(1);
            } else if (firstErrorField === "requirement") {
                setActiveStep(2);
            } else if (firstErrorField === "message") {
                setActiveStep(3);
            }

            const target =
                formRef.current?.querySelector(
                    `[name="${firstErrorField}"]`
                );

            target?.focus();

            return;
        }

        setIsSubmitting(true);
        setErrors({});

        const cleanName = form.name.trim();
        const cleanCompany = form.company.trim();
        const cleanEmail = form.email.trim();
        const cleanPhone = form.phone.trim();
        const cleanRequirement = form.requirement.trim();
        const cleanMessage = form.message.trim();

        try {
            /* =================================================
               SEND ENQUIRY THROUGH RESEND
    
               The API sends the enquiry to:
               1. raam@bitsol.in
               2. bitsol@bitsol.in
               ================================================= */

            const response = await fetch("/api/send-email", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    name: cleanName,
                    company: cleanCompany,
                    email: cleanEmail,
                    phone: cleanPhone,
                    requirement: cleanRequirement,
                    message: cleanMessage,
                }),
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(
                    result.message ||
                    "Unable to send enquiry."
                );
            }

            /* =================================================
               EMAIL SENT SUCCESSFULLY
    
               No WhatsApp.
               No WhatsApp window.
               ================================================= */

            setSubmitted(true);

            setForm({
                name: "",
                company: "",
                email: "",
                phone: "",
                requirement: "",
                message: "",
            });

            setErrors({});
            setActiveStep(1);
            setIsSubmitting(false);

            /* =================================================
               GO TO THANK YOU PAGE
               ================================================= */

            window.location.href = "/thank-you.html";

        } catch (error) {
            console.error(
                "Contact form submission error:",
                error
            );

            setIsSubmitting(false);

            setErrors({
                submit:
                    "We couldn't send your enquiry right now. Please try again.",
            });
        }
    };
    /* =====================================================
       FIELD CLASS
       ===================================================== */

    const fieldClass = (field) =>
        `premium-field ${errors[field] ? "has-error" : ""
        } ${form[field] ? "has-value" : ""
        }`;


    return (

        <main
            className="contact-page"
        >

            {/* =================================================
                HERO
            ================================================= */}

            <section
                className="contact-hero"
                style={{
                    "--contact-hero-image": `url("${heroImage}")`,
                }}
            >

                <div className="contact-hero__image" />

                <div className="contact-hero__overlay" />

                <div className="container contact-hero__inner">

                    <div
                        className="contact-hero__content"
                        data-aos="fade-up"
                    >

                        <p className="contact-hero__eyebrow">
                            CONTACT BITSOL AUTOMATION
                        </p>

                        <h1 className="contact-hero__title">
                            LET'S TALK
                            <span>ABOUT YOUR</span>
                            PROJECT.
                        </h1>

                        <p className="contact-hero__description">
                            From PLC based automation and control
                            panels to complete industrial systems,
                            tell us what you are working on.
                        </p>

                    </div>


                    <div
                        className="contact-hero__contact-row"
                        data-aos="fade-up"
                        data-aos-delay="140"
                    >

                        <a
                            href={`tel:${phoneNumber}`}
                            className="contact-hero__contact-item"
                        >

                            <span>PHONE</span>

                            <strong>
                                {phoneDisplay}
                            </strong>

                        </a>


                        <a
                            href={`mailto:${email}`}
                            className="contact-hero__contact-item"
                        >

                            <span>EMAIL</span>

                            <strong>
                                {email}
                            </strong>

                        </a>


                        <div className="contact-hero__contact-item">

                            <span>OFFICE</span>

                            <strong>
                                HOSUR, TAMIL NADU
                            </strong>

                        </div>


                        <div className="contact-hero__contact-item">

                            <span>HOURS</span>

                            <strong>
                                MON – SAT

                                <small>
                                    09:00 AM – 05:00 PM
                                </small>
                            </strong>

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                START CONVERSATION
            ================================================= */}

            <section className="contact-start section--small">

                <div className="container">

                    <div
                        className="contact-start__heading"
                        data-aos="fade-up"
                    >

                        <div>

                            <span className="contact-index">
                                01
                            </span>

                            <p className="contact-kicker">
                                START A CONVERSATION
                            </p>

                            <h2>
                                YOUR PROJECT
                                <span>STARTS HERE.</span>
                            </h2>

                        </div>


                        <p>
                            Reach the Bitsol team directly for
                            project discussions, site requirements
                            and industrial automation support.
                        </p>

                    </div>


                    <div className="contact-start__links">

                        <a
                            href={`tel:${phoneNumber}`}
                            data-aos="fade-up"
                            data-aos-delay="70"
                        >

                            <small>
                                CALL THE TEAM
                            </small>

                            <strong>
                                {phoneDisplay}
                            </strong>

                        </a>


                        <a
                            href={`mailto:${email}`}
                            data-aos="fade-up"
                            data-aos-delay="140"
                        >

                            <small>
                                SEND AN EMAIL
                            </small>

                            <strong>
                                {email}
                            </strong>

                        </a>


                        <a
                            href={`https://wa.me/${phoneNumber}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-aos="fade-up"
                            data-aos-delay="210"
                        >

                            <small>
                                WHATSAPP
                            </small>

                            <strong>
                                CHAT WITH BITSOL
                            </strong>

                        </a>

                    </div>

                </div>

            </section>


            {/* =================================================
                PREMIUM PROJECT ENQUIRY
            ================================================= */}

            <section id="contact-quote" className="contact-enquiry" >

                <div className="container">

                    <div
                        className="contact-enquiry__heading"
                        data-aos="fade-up"
                    >

                        <span className="contact-index">
                            02
                        </span>


                        <div>

                            <p className="contact-kicker">
                                PROJECT ENQUIRY
                            </p>

                            <h2>
                                TELL US
                                <span>WHAT YOU'RE BUILDING.</span>
                            </h2>

                        </div>


                        <p>
                            Give our engineering team enough
                            context to understand your requirement
                            before the first conversation.
                        </p>

                    </div>


                    <div
                        className="premium-form-shell"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >

                        {/* =========================================
                            FORM INTRO
                        ========================================= */}

                        <aside className="premium-form-intro">

                            <div className="premium-form-intro__top">

                                <span className="premium-form-intro__number">
                                    02
                                </span>

                                <span className="premium-form-intro__label">
                                    ENGINEERING ENQUIRY
                                </span>

                            </div>


                            <div className="premium-form-intro__body">

                                <p className="contact-kicker">
                                    PROJECT ENQUIRY
                                </p>

                                <h3>
                                    YOUR PROJECT
                                    <span>STARTS HERE.</span>
                                </h3>

                                <p>
                                    Tell us who you are, what you need and
                                    what you are building. Our engineering
                                    team will review the essentials and
                                    connect with you directly.
                                </p>

                            </div>


                            <div className="premium-form-intro__steps">

                                <div
                                    className={`premium-step ${activeStep === 1
                                            ? "is-active"
                                            : ""
                                        }`}
                                >

                                    <span>
                                        01
                                    </span>

                                    <div>
                                        <strong>
                                            YOUR DETAILS
                                        </strong>

                                        <small>
                                            Who should we contact?
                                        </small>
                                    </div>

                                </div>


                                <div
                                    className={`premium-step ${activeStep === 2
                                            ? "is-active"
                                            : ""
                                        }`}
                                >

                                    <span>
                                        02
                                    </span>

                                    <div>
                                        <strong>
                                            REQUIREMENT
                                        </strong>

                                        <small>
                                            What do you need?
                                        </small>
                                    </div>

                                </div>


                                <div
                                    className={`premium-step ${activeStep === 3
                                            ? "is-active"
                                            : ""
                                        }`}
                                >

                                    <span>
                                        03
                                    </span>

                                    <div>
                                        <strong>
                                            PROJECT BRIEF
                                        </strong>

                                        <small>
                                            Tell us about it.
                                        </small>
                                    </div>

                                </div>

                            </div>


                            <div className="premium-form-intro__note">

                                <span>
                                    RESPONSE
                                </span>

                                <p>
                                    Our team will review your
                                    enquiry and connect with you
                                    directly.
                                </p>

                            </div>

                        </aside>


                        {/* =========================================
                            FORM
                        ========================================= */}

                        <form
                            ref={formRef}
                            className="premium-form"
                            onSubmit={handleSubmit}
                            noValidate
                        >

                            {/* =====================================
                                DETAILS
                            ===================================== */}

                            <div className="premium-form__block">

                                <div className="premium-form__block-head">

                                    <div>
                                        <span>
                                            01
                                        </span>

                                        <h3>
                                            Your details
                                        </h3>
                                    </div>

                                    <p>
                                        Required fields are marked
                                        with an asterisk.
                                    </p>

                                </div>


                                <div className="premium-form__grid">

                                    {/* NAME */}

                                    <div className={fieldClass("name")}>

                                        <label htmlFor="name">
                                            FULL NAME
                                            <b>*</b>
                                        </label>

                                        <div className="premium-field__control">

                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                value={form.name}
                                                onChange={(event) =>
                                                    updateField(
                                                        "name",
                                                        event.target.value
                                                    )
                                                }
                                                onBlur={() =>
                                                    handleBlur("name")
                                                }
                                                placeholder="Enter your full name"
                                                autoComplete="name"
                                                maxLength="80"
                                                aria-invalid={
                                                    Boolean(errors.name)
                                                }
                                            />

                                            {form.name &&
                                                !errors.name && (
                                                    <span className="premium-field__valid">
                                                        <FaCheck />
                                                    </span>
                                                )}

                                        </div>

                                        {errors.name && (
                                            <span className="premium-field__error">
                                                {errors.name}
                                            </span>
                                        )}

                                    </div>


                                    {/* COMPANY */}

                                    <div className={fieldClass("company")}>

                                        <label htmlFor="company">
                                            COMPANY
                                        </label>

                                        <div className="premium-field__control">

                                            <input
                                                id="company"
                                                name="company"
                                                type="text"
                                                value={form.company}
                                                onChange={(event) =>
                                                    updateField(
                                                        "company",
                                                        event.target.value
                                                    )
                                                }
                                                onBlur={() =>
                                                    handleBlur("company")
                                                }
                                                placeholder="Your company name"
                                                autoComplete="organization"
                                                maxLength="100"
                                                aria-invalid={
                                                    Boolean(errors.company)
                                                }
                                            />

                                        </div>

                                        {errors.company && (
                                            <span className="premium-field__error">
                                                {errors.company}
                                            </span>
                                        )}

                                    </div>


                                    {/* EMAIL */}

                                    <div className={fieldClass("email")}>

                                        <label htmlFor="email">
                                            WORK EMAIL
                                            <b>*</b>
                                        </label>

                                        <div className="premium-field__control">

                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={form.email}
                                                onChange={(event) =>
                                                    updateField(
                                                        "email",
                                                        event.target.value
                                                    )
                                                }
                                                onBlur={() =>
                                                    handleBlur("email")
                                                }
                                                placeholder="name@company.com"
                                                autoComplete="email"
                                                maxLength="150"
                                                aria-invalid={
                                                    Boolean(errors.email)
                                                }
                                            />

                                            {form.email &&
                                                !errors.email && (
                                                    <span className="premium-field__valid">
                                                        <FaCheck />
                                                    </span>
                                                )}

                                        </div>

                                        {errors.email && (
                                            <span className="premium-field__error">
                                                {errors.email}
                                            </span>
                                        )}

                                    </div>


                                    {/* PHONE */}

                                    <div className={fieldClass("phone")}>

                                        <label htmlFor="phone">
                                            PHONE NUMBER
                                            <b>*</b>
                                        </label>

                                        <div className="premium-field__control">

                                            <div className="premium-phone-prefix">
                                                +91
                                            </div>

                                            <input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                inputMode="numeric"
                                                pattern="[0-9]*"
                                                value={form.phone}
                                                onChange={handlePhoneChange}
                                                onBlur={() =>
                                                    handleBlur("phone")
                                                }
                                                placeholder="Enter phone number"
                                                autoComplete="tel"
                                                maxLength="15"
                                                aria-invalid={
                                                    Boolean(errors.phone)
                                                }
                                            />

                                            {form.phone &&
                                                !errors.phone && (
                                                    <span className="premium-field__valid">
                                                        <FaCheck />
                                                    </span>
                                                )}

                                        </div>

                                        <small className="premium-field__hint">
                                            Digits only
                                        </small>

                                        {errors.phone && (
                                            <span className="premium-field__error">
                                                {errors.phone}
                                            </span>
                                        )}

                                    </div>

                                </div>

                            </div>


                            {/* =====================================
                                REQUIREMENT
                            ===================================== */}

                            <fieldset
                                className={`premium-form__block premium-requirement ${errors.requirement
                                        ? "has-error"
                                        : ""
                                    }`}
                            >

                                <div className="premium-form__block-head">

                                    <div>
                                        <span>
                                            02
                                        </span>

                                        <legend>
                                            What do you need?
                                        </legend>
                                    </div>

                                    <p>
                                        Select the closest match.
                                    </p>

                                </div>


                                <div className="premium-requirement__grid">

                                    {requirements.map(
                                        (requirement, index) => (

                                            <label
                                                key={requirement}
                                                className={
                                                    form.requirement ===
                                                        requirement
                                                        ? "premium-requirement-card is-selected"
                                                        : "premium-requirement-card"
                                                }
                                            >

                                                <input
                                                    type="radio"
                                                    name="requirement"
                                                    value={requirement}
                                                    checked={
                                                        form.requirement ===
                                                        requirement
                                                    }
                                                    onChange={(event) =>
                                                        updateField(
                                                            "requirement",
                                                            event.target.value
                                                        )
                                                    }
                                                />

                                                <span className="premium-requirement-card__number">
                                                    {String(index + 1).padStart(
                                                        2,
                                                        "0"
                                                    )}
                                                </span>

                                                <span className="premium-requirement-card__content">

                                                    <strong>
                                                        {requirement}
                                                    </strong>

                                                    <span>
                                                        Select
                                                    </span>

                                                </span>

                                                <span className="premium-requirement-card__check">
                                                    <FaCheck />
                                                </span>

                                            </label>

                                        )
                                    )}

                                </div>


                                {errors.requirement && (
                                    <span className="premium-field__error">
                                        {errors.requirement}
                                    </span>
                                )}

                            </fieldset>


                            {/* =====================================
                                PROJECT BRIEF
                            ===================================== */}

                            <div
                                className={`premium-form__block premium-message ${errors.message
                                        ? "has-error"
                                        : ""
                                    }`}
                            >

                                <div className="premium-form__block-head">

                                    <div>
                                        <span>
                                            03
                                        </span>

                                        <h3>
                                            Project brief
                                        </h3>
                                    </div>

                                    <p>
                                        A little context helps our
                                        engineers prepare.
                                    </p>

                                </div>


                                <div className={fieldClass("message")}>

                                    <div className="premium-message__label-row">

                                        <label htmlFor="message">
                                            TELL US ABOUT THE PROJECT
                                            <b>*</b>
                                        </label>

                                        <span>
                                            {form.message.length}
                                            {" / "}
                                            2000
                                        </span>

                                    </div>


                                    <div className="premium-textarea-wrap">

                                        <textarea
                                            id="message"
                                            name="message"
                                            value={form.message}
                                            onChange={(event) => {

                                                if (
                                                    event.target.value
                                                        .length <= 2000
                                                ) {

                                                    updateField(
                                                        "message",
                                                        event.target.value
                                                    );

                                                }

                                            }}
                                            onBlur={() =>
                                                handleBlur("message")
                                            }
                                            placeholder="Tell us what you are automating, existing PLC/HMI system, machine or process, required control, project scope, or anything else our engineering team should know."
                                            rows="7"
                                            maxLength="2000"
                                            aria-invalid={
                                                Boolean(errors.message)
                                            }
                                        />

                                    </div>


                                    {errors.message && (
                                        <span className="premium-field__error">
                                            {errors.message}
                                        </span>
                                    )}

                                </div>

                            </div>


                            {/* =====================================
                                SUBMIT
                            ===================================== */}

                            <div className="premium-form__footer">

                                {errors.submit && (
                                    <div
                                        className="premium-field__error"
                                        role="alert"
                                        style={{
                                            marginBottom: "16px",
                                        }}
                                    >
                                        {errors.submit}
                                    </div>
                                )}

                                <div className="premium-form__privacy">

                                    <span className="premium-form__privacy-icon">
                                        <FaCheck />
                                    </span>

                                    <div>

                                        <strong>
                                            READY TO DISCUSS?
                                        </strong>

                                        <p>
                                            Your enquiry will open in
                                            WhatsApp with your project
                                            details already prepared.
                                        </p>

                                    </div>

                                </div>


                                <button
                                    type="submit"
                                    className="premium-submit"
                                    disabled={isSubmitting}
                                >

                                    {isSubmitting ? (

                                        <span>
                                            PREPARING ENQUIRY...
                                        </span>

                                    ) : (

                                        <>
                                            <span>
                                                SEND ENQUIRY
                                            </span>

                                            <span className="premium-submit__icon">
                                                <FaArrowRight />
                                            </span>
                                        </>

                                    )}

                                </button>

                            </div>


                            {/* =====================================
                                SUCCESS
                            ===================================== */}

                            {submitted && (

                                <div
                                    className="premium-success"
                                    role="status"
                                >

                                    <span>
                                        <FaCheck />
                                    </span>

                                    <div>

                                        <strong>
                                            ENQUIRY PREPARED
                                        </strong>

                                        <p>
                                            Your project details have
                                            been opened in WhatsApp.
                                        </p>

                                    </div>

                                </div>

                            )}

                        </form>

                    </div>

                </div>

            </section>


            {/* =================================================
                LOCATION
            ================================================= */}

            <section className="contact-location">

                <div className="container">

                    <div
                        className="contact-location__heading"
                        data-aos="fade-up"
                    >

                        <span className="contact-index">
                            03
                        </span>

                        <div>

                            <p className="contact-kicker">
                                VISIT BITSOL
                            </p>

                            <h2>
                                FIND US IN
                                <span>
                                    HOSUR.
                                </span>
                            </h2>

                        </div>

                    </div>


                    <div
                        className="contact-location__meta"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >

                        <div className="contact-location__address">

                            <small>
                                OFFICE ADDRESS
                            </small>

                            <p>
                                {address}
                            </p>

                        </div>


                        <div className="contact-location__actions">

                            <a
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                OPEN GOOGLE MAPS
                            </a>

                            <a
                                href={directionsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GET DIRECTIONS
                            </a>

                        </div>

                    </div>

                </div>


                <div
                    className="contact-map"
                    data-aos="fade-up"
                    data-aos-delay="160"
                >

                    <iframe
                        title="Bitsol Automation Location"
                        src="https://www.google.com/maps?q=Bitsol+Automation,+5/14-6,+Ground+Floor,+Rajeswari+Nagar,+Tamilagam+Building,+Bagalur+Rd,+Hosur,+Tamil+Nadu+635109&z=15&output=embed"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                </div>

            </section>


            {/* =================================================
                FINAL DIRECT CALL
            ================================================= */}

            <section className="contact-final section--small">

                <div
                    className="container contact-final__inner"
                    data-aos="fade-up"
                >

                    <div className="contact-final__copy">

                        <p>
                            NEED TO TALK NOW?
                        </p>

                        <h2>
                            SPEAK DIRECTLY
                            <span>
                                WITH BITSOL.
                            </span>
                        </h2>

                    </div>


                    <a
                        href={`tel:${phoneNumber}`}
                        className="contact-final__button"
                    >

                        <FaPhone />

                        <div>

                            <span>
                                CALL BITSOL AUTOMATION
                            </span>

                            <strong>
                                {phoneDisplay}
                            </strong>

                        </div>

                    </a>

                </div>

            </section>

        </main>
    );
};


export default Contact;