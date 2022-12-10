import React from 'react';
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import Footer from './components/footer';
import Topbar from './components/topbar';
import './app.scss'
import About from './pages/about';
import Catalog from './pages/catalog';
import Contact from './pages/contact';
import ErrorPage from './pages/error';
import Home from './pages/home';
import Reviews from './pages/reviews';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 1500,
});



const App = () => {

    const activateTransition = (layerDir: string, destination: string) => {
        document.querySelector(".container")?.classList.toggle("active");

        setTimeout(() => {
            var layerClass = "." + layerDir + "-layer";
            var layers = document.querySelectorAll(layerClass);
    
            for (const layer of layers) {
                layer.classList.toggle("active");
            }
        }, 300);
        
        setTimeout(() => {
            document.querySelector(".container")?.classList.toggle("active");
        }, 1300);
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home activateTransition={activateTransition} />,
            errorElement: 
            <div className="page_wrapper">
                <Topbar activateTransition={activateTransition} />
                <ErrorPage />
            </div>
        },
        {
            path: "/catalog",
            element:
                <>
                    <Topbar activateTransition={activateTransition} />
                    <Catalog />
                    <Footer />
                </>,
        },
        {
            path: "/about",
            element:
                <>
                    <Topbar activateTransition={activateTransition} />
                    <About />
                    <Footer />
                </>,
        },
        {
            path: "/reviews",
            element:
                <>
                    <Topbar activateTransition={activateTransition} />
                    <Reviews />
                    <Footer />
                </>,
        },
        {
            path: "/contact",
            element:
                <>
                    <Topbar activateTransition={activateTransition} />
                    <Contact />
                    <Footer />
                </>,
        },
    ]);
    return (
        <>
            <div className="container">
                <div className="inner_container">
                    <div className="left-layer"></div>
                    <div className="left-layer left-layer--2"></div>
                    <div className="left-layer left-layer--3"></div>
                    <div className="left-layer left-layer--4"></div>

                    <div className="right-layer"></div>
                    <div className="right-layer right-layer--2"></div>
                    <div className="right-layer right-layer--3"></div>

                </div>
            </div>

            <RouterProvider router={router} />
        </>
    )
}

export default App;