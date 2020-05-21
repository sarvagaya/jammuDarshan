import React from "react";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";
import { BsChevronDoubleRight, BsFillInfoCircleFill } from "react-icons/bs";
import Footer from "../components/Footer";

class LandingPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            DestinationArray: [],
        }
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Navbar />
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <img src="/images/LandingPage.jpg" style={{ width: "100%" }} />
                        <h1 style={{ position: "absolute", top: "20%", left: "25%", color: "white", fontFamily: "Vidaloka", fontSize: "350%" }}>A Destination</h1>
                        <p style={{ position: "absolute", top: "27%", left: "25%", color: "white", fontFamily: "Vidaloka", fontSize: "150%", letterSpacing: "2px" }}>for the new millennium.</p>
                    </div>
                </div>
                <br />
                <hr />
                <br />
                <br />
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                        <p style={{ fontFamily: "Tangerine", fontSize: "400%", fontWeight: "bolder", textShadow: "4px 2px gray", letterSpacing: "5px" }}>Destinations</p>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 text-center">
                        <div className="card" style={{ width: "100%" }}>
                            <img src="https://ezeedigi.com/images/app422/landingpage.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 text-center">
                        <div className="card" style={{ width: "100%" }}>
                            <img src="https://ezeedigi.com/images/app422/landingpage.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 text-center">
                        <div className="card" style={{ width: "100%" }}>
                            <img src="https://ezeedigi.com/images/app422/landingpage.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                        <Link to="/choose-region"><button type="submit" className="btn btn-lg btn-danger text-center rounded-pill">View More <BsChevronDoubleRight /></button></Link>
                    </div>
                </div>
                <br />
                <hr />
                <br />
                <br />
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                        <h1 style={{ fontFamily: "Tangerine", fontSize: "400%", fontWeight: "bolder", textShadow: "4px 2px gray", letterSpacing: "5px" }}>About Us</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center">
                        <img src="/images/about1.png" style={{ width: "100%" }} />
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center">
                        <h1 style={{ marginTop: "25%", fontFamily: "Fjalla One" }}>An easier trip everytime.</h1>
                        <p style={{ marginTop: "5%" }}>Imagine checking one place for all your travel details and getting a heads up as things happen throughout your trip. See why life without TripIt is a distant memory for millions of travelers.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center">
                        <h1 style={{ marginTop: "25%", fontFamily: "Fjalla One" }}>You handle the booking, we'll take it from there</h1>
                        <p>Unlike other travel apps, TripIt can organize your travel plans no matter where you book. Simply forward your confirmation emails to plans@tripit.com and in a matter of seconds, TripIt will create a master itinerary for every trip.</p>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <img src="/images/about2.png" style={{ width: "100%" }} />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                        <Link to="/about-us"><button type="submit" className="btn btn-lg btn-danger text-center rounded-pill">About Us <BsFillInfoCircleFill /></button></Link>
                    </div>
                </div>
                <br />
                <hr />
                <br />
                <br />
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                        <p style={{ fontWeight: "bold", fontSize: "250%" }}>Read our story on</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <a href="https://timesofindia.indiatimes.com/" target="_blank"><img src="https://www.videofactory.in/wp-content/uploads/2019/04/The-Times-Of-India-1.jpg" style={{ width: "100%", margin: "5%" }} /></a>
                        </div>
                        <div className="col">
                            <a href="https://www.forbesindia.com/" target="_blank"><img src="https://opinary.com/wp-content/uploads/2019/06/forbes-logo-1-1030x290.png" style={{ width: "100%", margin: "5%" }} /></a>
                        </div>
                        <div className="col">
                            <a href="https://yourstory.com/" target="_blank"><img src="https://yourstory.com/logos/logo_yourstory.svg" style={{ width: "100%", margin: "5%", paddingTop: "5%" }} /></a>
                        </div>
                        <div className="col">
                            <a href="https://www.indiatoday.in/" target="_blank"><img src="https://akm-img-a-in.tosshub.com/sites/all/themes/itg/logo.png?v=1.3" style={{ width: "100%" }} /></a>
                        </div>
                        <div className="col">
                            <a href="https://entrackr.com/" target="_blank"><img src="https://entrackr.com/wp-content/uploads/2019/04/new-logo.png" style={{width: "100%", margin: "5%", paddingTop: "5%"}} /></a>
                        </div>
                    </div>
                </div>
                <br />
                <hr />
                <br />
                <br />
                <Footer />
            </div>
        )
    }
}

export default LandingPage;