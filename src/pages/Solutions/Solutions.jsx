import SolutionsDesktop from "./SolutionsDesktop";
import SolutionsTablet from "./SolutionsTablet";
import SolutionsMobile from "./SolutionsMobile";

import "./Solutions.css";


const Solutions = () => {

    return (
        <section className="solutions">

            {/* =================================================
                DESKTOP
                1101px and above
            ================================================= */}

            <div className="solutions__desktop">
                <SolutionsDesktop />
            </div>


            {/* =================================================
                TABLET
                769px - 1100px
            ================================================= */}

            <div className="solutions__tablet">
                <SolutionsTablet />
            </div>


            {/* =================================================
                MOBILE
                768px and below
            ================================================= */}

            <div className="solutions__mobile">
                <SolutionsMobile />
            </div>

        </section>
    );

};


export default Solutions;