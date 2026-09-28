// import {
//     BrowserRouter,
//     Routes,
//     Route,
//     Navigate
// } from "react-router-dom";

// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import Navbar from "./components/Navbar/Navbar";

// import Home from "./pages/Home/Home";

// import ServicesHero from "./pages/Services/ServicesHero";


// import Footer from "./components/Footer/Footer";

// const App = () => {


//     useEffect(() => {

//         AOS.init({
//             duration: 900,
//             easing: "ease-out-cubic",
//             once: false,
//             mirror: true,
//             offset: 80
//         });

//         const handleLoad = () => {
//             AOS.refreshHard();
//         };

//         window.addEventListener("load", handleLoad);

//         return () => {
//             window.removeEventListener("load", handleLoad);
//         };

//     }, []);

//     return (
//         <BrowserRouter>

//             <Navbar />

//             <Routes>

//                 {/* =================================================
//                     HOME
//                     ================================================= */}

//                 <Route
//                     path="/"
//                     element={
//                         <Navigate
//                             to="/index.html"
//                             replace
//                         />
//                     }
//                 />

//                 <Route
//                     path="/index.html"
//                     element={<Home />}
//                 />


//                 {/* =================================================
//                     FUTURE PAGES
//                     ================================================= */}

//                 <Route
//                     path="/services.html"
//                     element={
//                         <div>
//                             Services
//                         </div>
//                     }
//                 />

//                 <Route
//                     path="/products.html"
//                     element={
//                         <div>
//                             Products
//                         </div>
//                     }
//                 />

//                 <Route
//                     path="/itsolutions.html"
//                     element={
//                         <div>
//                             IT Solutions
//                         </div>
//                     }
//                 />

//                 <Route
//                     path="/projects.html"
//                     element={
//                         <div>
//                             Projects
//                         </div>
//                     }
//                 />

//                 <Route
//                     path="/about.html"
//                     element={
//                         <div>
//                             About
//                         </div>
//                     }
//                 />

//                 <Route
//                     path="/contactus.html"
//                     element={
//                         <div>
//                             Contact
//                         </div>
//                     }
//                 />

//             </Routes>


//             <Footer />

//         </BrowserRouter>
//     );
// };


// export default App;



import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home/Home";

import ServicesHero from "./pages/Services/ServicesHero";

import ProductsHero from "./pages/Products/ProductsHero";

import Contact from "./pages/Contact/Contact";

import Footer from "./components/Footer/Footer";

import ScrollToTop from "./pages/ScrollToTop";

import IoT from "./pages/IoT/IoT";


const App = () => {

    useEffect(() => {

        AOS.init({
            duration: 900,
            easing: "ease-out-cubic",
            once: false,
            mirror: true,
            offset: 80
        });

        const handleLoad = () => {
            AOS.refreshHard();
        };

        window.addEventListener("load", handleLoad);

        return () => {
            window.removeEventListener("load", handleLoad);
        };

    }, []);


    return (
        <BrowserRouter>

        <ScrollToTop />

            <Navbar />

            <Routes>

                {/* =================================================
                    HOME
                    ================================================= */}

                <Route
                    path="/"
                    element={
                        <Navigate
                            to="/index.html"
                            replace
                        />
                    }
                />

                <Route
                    path="/index.html"
                    element={<Home />}
                />


                {/* =================================================
                    SERVICES
                    ================================================= */}

                <Route
                    path="/services.html"
                    element={<ServicesHero />}
                />


                {/* =================================================
                    FUTURE PAGES
                    ================================================= */}

                <Route
                    path="/products.html"
                    element={
                        <ProductsHero />
                    }
                />

                <Route
                    path="/itsolutions.html"
                    element={
                     <IoT />
                    }
                />

                <Route
                    path="/projects.html"
                    element={
                        <div>
                            Projects
                        </div>
                    }
                />

                <Route
                    path="/about.html"
                    element={
                        <div>
                            About
                        </div>
                    }
                />

                <Route
                    path="/contactus.html"
                    element={
                       <Contact />
                    }
                />

            </Routes>

            <Footer />

        </BrowserRouter>
    );
};


export default App;