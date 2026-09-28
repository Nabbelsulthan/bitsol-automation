// import "./ContactCTA.css";

// function ContactCTA() {
//     return (
//         <section
//             className="contact-cta"
//             aria-labelledby="contact-cta-title"
//         >
//             <div className="contact-cta__container">

//                 <div className="contact-cta__content">

//                     <div
//                         className="contact-cta__label"
//                         data-aos="fade-right"
//                         data-aos-duration="700"
//                     >
//                         <span className="contact-cta__label-line"></span>

//                         <span>
//                             HAVE A PROJECT IN MIND?
//                         </span>
//                     </div>


//                     <h2
//                         id="contact-cta-title"
//                         data-aos="fade-up"
//                         data-aos-delay="100"
//                         data-aos-duration="900"
//                     >
//                         LET'S BUILD
//                         <br />
//                         <span>THE RIGHT SOLUTION.</span>
//                     </h2>


//                     <p
//                         data-aos="fade-up"
//                         data-aos-delay="200"
//                         data-aos-duration="800"
//                     >
//                         Tell us about your automation requirement and
//                         let's find the right approach for your application.
//                     </p>

//                 </div>


//                 <div
//                     className="contact-cta__action"
//                     data-aos="fade-left"
//                     data-aos-delay="250"
//                     data-aos-duration="900"
//                 >

//                     <a
//                         href="/contactus.html"
//                         className="contact-cta__button"
//                     >
//                         <span>
//                             TALK TO OUR TEAM
//                         </span>
//                     </a>

//                     <span className="contact-cta__note">
//                         INDUSTRIAL AUTOMATION &amp; CONTROL
//                     </span>

//                 </div>

//             </div>
//         </section>
//     );
// }

// export default ContactCTA;



import "./ContactCTA.css";

function ContactCTA() {
    return (
        <section
            className="contact-cta"
            aria-labelledby="contact-cta-title"
        >
            <div className="contact-cta__container">

                {/* LEFT CONTENT */}

                <div className="contact-cta__main">

                    <div
                        className="contact-cta__eyebrow"
                        data-aos="fade-right"
                        data-aos-duration="700"
                    >
                        <span className="contact-cta__eyebrow-dot" />
                        START A CONVERSATION
                    </div>


                    <h2
                        id="contact-cta-title"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="900"
                    >
                        HAVE AN
                        <br />
                        <span>AUTOMATION PROJECT?</span>
                    </h2>


                    <p
                        className="contact-cta__description"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="800"
                    >
                        Tell us what you are trying to automate, improve or
                        integrate. Our team will work with you to understand
                        the requirement and define the right solution.
                    </p>

                </div>


                {/* RIGHT ACTION */}

                <div
                    className="contact-cta__action"
                    data-aos="fade-left"
                    data-aos-delay="250"
                    data-aos-duration="900"
                >

                    <div className="contact-cta__action-inner">

                        <span
                            className="contact-cta__action-label"
                            data-aos="fade-up"
                            data-aos-delay="350"
                            data-aos-duration="700"
                        >
                            READY WHEN YOU ARE
                        </span>


                        <a
                            href="/contactus.html"
                            className="contact-cta__button"
                            data-aos="zoom-in"
                            data-aos-delay="450"
                            data-aos-duration="700"
                        >
                            TALK TO OUR TEAM
                        </a>


                        <p
                            className="contact-cta__action-note"
                            data-aos="fade-up"
                            data-aos-delay="550"
                            data-aos-duration="700"
                        >
                            Automation · Control · Integration
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default ContactCTA;
