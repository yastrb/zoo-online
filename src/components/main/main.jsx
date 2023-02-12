import React from "react";
import Home from "./Home/home";
import About from "./About/about";
import Work from "./Work/work";
import Pets from "./Pets/pets";
import PayFeed from "./PayAndFeed/payfeed";
import Testimonials from "./Testimonials/testimonials";
import Map from "./Map/map";
// import Footer from "./Footer/footer";


function Main() {
    return (
        <div className="main">
            <Home/>
            <Work/>
            <About/>
            <Pets/>
            <PayFeed/>
            <Testimonials/>
            <Map/>
            {/* <Footer/> */}
        </div>
    );
}

export default Main;