import { useEffect, useRef } from "react";

import enclosure
    from "../../assets/images/explode/enclosure.png";

import mountingPlate
    from "../../assets/images/explode/mounting-plate.png";

import gasket
    from "../../assets/images/explode/gasket.png";

import rearPanel
    from "../../assets/images/explode/rear-panel.png";

import sidePanel
    from "../../assets/images/explode/side-panel.png";

import door
    from "../../assets/images/explode/door.png";

import plc
    from "../../assets/images/explode/plc.png";

import controlDevices
    from "../../assets/images/explode/control-devices.png";

import busbar
    from "../../assets/images/explode/busbar.png";

import terminalBlocks
    from "../../assets/images/explode/terminal-blocks.png";

import wiring
    from "../../assets/images/explode/wiring.png";

import coolingFan
    from "../../assets/images/explode/cooling-fan.png";

import "./ExplodedPanel.css";


const clamp = (value, min = 0, max = 1) =>
    Math.min(Math.max(value, min), max);


const smoothstep = (value) => {

    value = clamp(value);

    return value * value * (3 - 2 * value);

};


const phase = (
    progress,
    start,
    end
) => {

    if (progress <= start) {
        return 0;
    }

    if (progress >= end) {
        return 1;
    }

    return smoothstep(
        (progress - start) /
        (end - start)
    );

};


const lerp = (
    start,
    end,
    progress
) => {

    return start +
        ((end - start) * progress);

};


const ExplodedPanel = () => {

    const sectionRef =
        useRef(null);

    const sceneRef =
        useRef(null);

    const layersRef =
        useRef({});

    const uiRef =
        useRef({});


    useEffect(() => {

        const section =
            sectionRef.current;

        const scene =
            sceneRef.current;

        if (!section || !scene) {
            return;
        }


        let raf = null;


        const setLayer = (
            name,
            {
                x = 0,
                y = 0,
                scale = 1,
                rotate = 0,
                opacity = 1,
            }
        ) => {

            const element =
                layersRef.current[name];

            if (!element) {
                return;
            }


            element.style.transform = `
                translate3d(
                    ${x}px,
                    ${y}px,
                    0
                )
                scale(${scale})
                rotate(${rotate}deg)
            `;

            element.style.opacity =
                opacity;

        };


        const update = () => {

            raf = null;


            const rect =
                section.getBoundingClientRect();


            /*
             * -----------------------------------------
             * REAL ANIMATION DISTANCE
             * -----------------------------------------
             *
             * Section = 260vh
             *
             * Viewport = 100vh
             *
             * Actual animation runway = 160vh
             *
             * The scene stays pinned for that entire
             * distance.
             */

            const distance =
                Math.max(
                    1,
                    section.offsetHeight -
                    window.innerHeight
                );


            const progress =
                clamp(
                    (-rect.top) /
                    distance
                );


            /*
             * -----------------------------------------
             * PHASES
             * -----------------------------------------
             */

            const structure =
                phase(
                    progress,
                    0.00,
                    0.42
                );


            const internals =
                phase(
                    progress,
                    0.10,
                    0.62
                );


            const connections =
                phase(
                    progress,
                    0.28,
                    0.76
                );


            const assembled =
                phase(
                    progress,
                    0.58,
                    0.86
                );


            const final =
                phase(
                    progress,
                    0.78,
                    0.94
                );


            /*
             * =========================================
             * EXPLODED STRUCTURE
             * =========================================
             */


            setLayer(
                "rear",
                {
                    x: lerp(
                        -190,
                        0,
                        structure
                    ),

                    y: lerp(
                        80,
                        0,
                        structure
                    ),

                    scale: lerp(
                        0.86,
                        1,
                        structure
                    ),

                    rotate: lerp(
                        -3,
                        0,
                        structure
                    ),

                    opacity: 1,
                }
            );


            setLayer(
                "mounting",
                {
                    x: lerp(
                        -230,
                        0,
                        structure
                    ),

                    y: lerp(
                        20,
                        0,
                        structure
                    ),

                    scale: lerp(
                        0.82,
                        1,
                        structure
                    ),

                    rotate: lerp(
                        -4,
                        0,
                        structure
                    ),

                    opacity: 1,
                }
            );


            setLayer(
                "gasket",
                {
                    x: lerp(
                        190,
                        0,
                        structure
                    ),

                    y: lerp(
                        -25,
                        0,
                        structure
                    ),

                    scale: lerp(
                        0.84,
                        1,
                        structure
                    ),

                    rotate: lerp(
                        3,
                        0,
                        structure
                    ),

                    opacity: 1,
                }
            );


            setLayer(
                "side",
                {
                    x: lerp(
                        230,
                        0,
                        structure
                    ),

                    y: lerp(
                        35,
                        0,
                        structure
                    ),

                    scale: lerp(
                        0.82,
                        1,
                        structure
                    ),

                    rotate: lerp(
                        4,
                        0,
                        structure
                    ),

                    opacity: 1,
                }
            );


            setLayer(
                "enclosure",
                {
                    x: lerp(
                        140,
                        0,
                        structure
                    ),

                    y: lerp(
                        -70,
                        0,
                        structure
                    ),

                    scale: lerp(
                        0.88,
                        1,
                        structure
                    ),

                    rotate: lerp(
                        3,
                        0,
                        structure
                    ),

                    opacity: 1,
                }
            );


            /*
             * =========================================
             * ELECTRICAL COMPONENTS
             * =========================================
             */

            setLayer(
                "busbar",
                {
                    x: lerp(
                        -260,
                        0,
                        internals
                    ),

                    y: lerp(
                        -150,
                        0,
                        internals
                    ),

                    scale: lerp(
                        0.72,
                        1,
                        internals
                    ),

                    rotate: lerp(
                        -7,
                        0,
                        internals
                    ),

                    opacity: 1,
                }
            );


            setLayer(
                "controls",
                {
                    x: lerp(
                        -280,
                        0,
                        internals
                    ),

                    y: lerp(
                        25,
                        0,
                        internals
                    ),

                    scale: lerp(
                        0.70,
                        1,
                        internals
                    ),

                    rotate: lerp(
                        -5,
                        0,
                        internals
                    ),

                    opacity: 1,
                }
            );


            setLayer(
                "plc",
                {
                    x: lerp(
                        290,
                        0,
                        internals
                    ),

                    y: lerp(
                        -125,
                        0,
                        internals
                    ),

                    scale: lerp(
                        0.70,
                        1,
                        internals
                    ),

                    rotate: lerp(
                        5,
                        0,
                        internals
                    ),

                    opacity: 1,
                }
            );


            setLayer(
                "terminal",
                {
                    x: lerp(
                        270,
                        0,
                        connections
                    ),

                    y: lerp(
                        110,
                        0,
                        connections
                    ),

                    scale: lerp(
                        0.70,
                        1,
                        connections
                    ),

                    rotate: lerp(
                        4,
                        0,
                        connections
                    ),

                    opacity: 1,
                }
            );


            setLayer(
                "fan",
                {
                    x: lerp(
                        290,
                        0,
                        connections
                    ),

                    y: lerp(
                        -160,
                        0,
                        connections
                    ),

                    scale: lerp(
                        0.68,
                        1,
                        connections
                    ),

                    rotate: lerp(
                        8,
                        0,
                        connections
                    ),

                    opacity: 1,
                }
            );


            /*
             * =========================================
             * WIRING
             * =========================================
             *
             * Your wiring PNG is already a finished
             * cabinet interior.
             *
             * It becomes the "assembled" visual.
             */

            const wiringElement =
                layersRef.current.wiring;


            if (wiringElement) {

                wiringElement.style.opacity =
                    assembled;

                wiringElement.style.transform = `
                    translate3d(
                        0,
                        0,
                        0
                    )
                    scale(
                        ${lerp(
                            0.90,
                            1,
                            assembled
                        )}
                    )
                `;

            }


            /*
             * =========================================
             * DOOR
             * =========================================
             *
             * Door stays offset to the right,
             * matching the visual language in
             * your recording.
             */

            setLayer(
                "door",
                {
                    x: lerp(
                        390,
                        210,
                        final
                    ),

                    y: lerp(
                        0,
                        0,
                        final
                    ),

                    scale: lerp(
                        0.84,
                        0.94,
                        final
                    ),

                    rotate: lerp(
                        7,
                        3,
                        final
                    ),

                    opacity: 1,
                }
            );


            /*
             * =========================================
             * EXPLODED COMPONENT FADE
             * =========================================
             *
             * Once the real assembled wiring view
             * arrives, the loose component imagery
             * gently recedes behind it.
             */

            const componentFade =
                1 -
                phase(
                    progress,
                    0.70,
                    0.90
                );


            [
                "rear",
                "mounting",
                "gasket",
                "side",
                "enclosure",
                "busbar",
                "controls",
                "plc",
                "terminal",
                "fan",
            ].forEach(
                (name) => {

                    const element =
                        layersRef.current[
                            name
                        ];

                    if (element) {

                        element.style.opacity =
                            componentFade;

                    }

                }
            );


            /*
             * =========================================
             * INTRO TEXT
             * =========================================
             */

            const intro =
                uiRef.current.intro;

            if (intro) {

                const introProgress =
                    phase(
                        progress,
                        0.08,
                        0.32
                    );

                intro.style.opacity =
                    1 -
                    introProgress;

                intro.style.transform = `
                    translate3d(
                        0,
                        ${lerp(
                            0,
                            -35,
                            introProgress
                        )}px,
                        0
                    )
                `;

            }


            /*
             * =========================================
             * FINAL TEXT
             * =========================================
             */

            const finalText =
                uiRef.current.final;

            if (finalText) {

                finalText.style.opacity =
                    final;

                finalText.style.transform = `
                    translate3d(
                        0,
                        ${lerp(
                            35,
                            0,
                            final
                        )}px,
                        0
                    )
                `;

            }


            /*
             * =========================================
             * PROGRESS
             * =========================================
             */

            const progressBar =
                uiRef.current.progress;

            if (progressBar) {

                progressBar.style.transform =
                    `scaleX(${progress})`;

            }


            /*
             * =========================================
             * STAGE SCALE
             * =========================================
             *
             * Tiny cinematic zoom during assembly.
             */

            const sceneScale =
                lerp(
                    0.94,
                    1,
                    assembled
                );

            scene.style.transform = `
                scale(${sceneScale})
            `;

        };


        const requestUpdate = () => {

            if (!raf) {

                raf =
                    requestAnimationFrame(
                        update
                    );

            }

        };


        window.addEventListener(
            "scroll",
            requestUpdate,
            {
                passive: true,
            }
        );


        window.addEventListener(
            "resize",
            requestUpdate
        );


        update();


        return () => {

            window.removeEventListener(
                "scroll",
                requestUpdate
            );

            window.removeEventListener(
                "resize",
                requestUpdate
            );

            if (raf) {

                cancelAnimationFrame(
                    raf
                );

            }

        };

    }, []);


    const registerLayer = (
        name
    ) => {

        return (element) => {

            if (element) {

                layersRef.current[
                    name
                ] = element;

            }

        };

    };


    return (

        <section
            ref={sectionRef}
            className="exploded-panel"
        >

            <div className="exploded-pin">

                <div className="exploded-grid" />

                <div className="exploded-glow" />


                {/* =================================
                    INTRO
                ================================= */}

                <div
                    ref={(element) => {
                        uiRef.current.intro =
                            element;
                    }}
                    className="exploded-intro"
                >

                    <span>
                        ENGINEERED BY BITSOL
                    </span>

                    <h2>
                        Built from
                        <br />
                        within.
                    </h2>

                    <p>
                        Every component.
                        Every connection.
                        Engineered as one system.
                    </p>

                </div>


                {/* =================================
                    PRODUCT STAGE
                ================================= */}

                <div
                    ref={sceneRef}
                    className="exploded-stage"
                >

                    {/* BACK STRUCTURE */}

                    <img
                        ref={registerLayer("rear")}
                        src={rearPanel}
                        alt=""
                        className="
                            exploded-layer
                            layer-rear
                        "
                    />

                    <img
                        ref={registerLayer("mounting")}
                        src={mountingPlate}
                        alt=""
                        className="
                            exploded-layer
                            layer-mounting
                        "
                    />

                    <img
                        ref={registerLayer("gasket")}
                        src={gasket}
                        alt=""
                        className="
                            exploded-layer
                            layer-gasket
                        "
                    />

                    <img
                        ref={registerLayer("side")}
                        src={sidePanel}
                        alt=""
                        className="
                            exploded-layer
                            layer-side
                        "
                    />


                    {/* INTERNALS */}

                    <img
                        ref={registerLayer("busbar")}
                        src={busbar}
                        alt=""
                        className="
                            exploded-layer
                            layer-busbar
                        "
                    />

                    <img
                        ref={registerLayer("controls")}
                        src={controlDevices}
                        alt=""
                        className="
                            exploded-layer
                            layer-controls
                        "
                    />

                    <img
                        ref={registerLayer("plc")}
                        src={plc}
                        alt=""
                        className="
                            exploded-layer
                            layer-plc
                        "
                    />

                    <img
                        ref={registerLayer("terminal")}
                        src={terminalBlocks}
                        alt=""
                        className="
                            exploded-layer
                            layer-terminal
                        "
                    />

                    <img
                        ref={registerLayer("fan")}
                        src={coolingFan}
                        alt=""
                        className="
                            exploded-layer
                            layer-fan
                        "
                    />


                    {/* ENCLOSURE */}

                    <img
                        ref={registerLayer("enclosure")}
                        src={enclosure}
                        alt=""
                        className="
                            exploded-layer
                            layer-enclosure
                        "
                    />


                    {/* ASSEMBLED INTERIOR */}

                    <img
                        ref={registerLayer("wiring")}
                        src={wiring}
                        alt=""
                        className="
                            exploded-layer
                            layer-wiring
                        "
                    />


                    {/* DOOR */}

                    <img
                        ref={registerLayer("door")}
                        src={door}
                        alt=""
                        className="
                            exploded-layer
                            layer-door
                        "
                    />

                </div>


                {/* =================================
                    FINAL MESSAGE
                ================================= */}

                <div
                    ref={(element) => {
                        uiRef.current.final =
                            element;
                    }}
                    className="exploded-final"
                >

                    <span>
                        SYSTEM ASSEMBLED
                    </span>

                    <h2>
                        Every component.
                        <br />

                        <strong>
                            One system.
                        </strong>
                    </h2>

                </div>


                {/* =================================
                    PROGRESS
                ================================= */}

                <div className="exploded-progress">

                    <span>
                        SCROLL TO EXPLORE
                    </span>

                    <div className="exploded-progress-track">

                        <div
                            ref={(element) => {
                                uiRef.current.progress =
                                    element;
                            }}
                            className="
                                exploded-progress-fill
                            "
                        />

                    </div>

                </div>

            </div>

        </section>

    );

};


export default ExplodedPanel;