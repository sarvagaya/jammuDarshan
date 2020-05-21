import React from "react";
import Navbar from "../components/NavBar";
import {LoremIpsum} from "react-lorem-ipsum";
import Footer from "../components/Footer";
function HowItWorks() {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <Navbar />
                </div>
            </div>
            <hr />
            <br />
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <img src="/images/Hotels.svg" style={{width: "100%", marginTop: "10%"}} />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" style={{color: "#635e50"}}>
                    <h1 className="text-center" style={{color: "#ffba00"}}>Hotel Bookings in seconds</h1>
                    <br />
                    <LoremIpsum p={1} />   
                </div>
            </div>
            <br />
            <br />
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" style={{color: "#635e50"}}>
                    <h1 className="text-center" style={{marginTop: "10%", color: "#ffba00"}}>Publish your Trip</h1>
                    <LoremIpsum p={2} />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <img src="/images/publish-trip.png" style={{width: "100%", marginTop: "10%"}} />
                </div>
            </div>
            <br />
            <br />
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <img src="/images/travel-expert.png" style={{width: "100%", marginTop: "10%"}} />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" style={{color: "#635e50"}}>
                    <h1 className="text-center" style={{marginTop: "10%", color: "#ffba00"}}>Become Travel Expert</h1>
                    <LoremIpsum p={1} />
                </div>
            </div>
            <br />
            <hr />
            <Footer />
        </div>
    )
}

export default HowItWorks;