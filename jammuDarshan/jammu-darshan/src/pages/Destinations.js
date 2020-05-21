import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

class Destinations extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Navbar />
                    </div>
                </div>
                <hr />
                <br />
                <div className="row" style={{ backgroundImage: "linear-gradient(to right, red, #2a63bf)" }}>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                        <h1 style={{ paddingTop: "8%", paddingBottom: "8%", color: "white", fontFamily: "lobster" }}>Popular Destinations</h1>
                    </div>
                </div>
                <br /><br/>
                <div className="row" style={{marginBottom: "5%"}}>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 text-center">
                        <div className="card" style={{ width: "100%" }}>
                            <img src="https://ezeedigi.com/images/app422/landingpage.jpg" className="card-img-top" alt="..." />
                            <div className="card-body" style={{ backgroundImage: "linear-gradient(to right, #ed9993, #2a63bf)" }}>
                                <h5 className="card-title" style={{ fontWeight: "bold", fontFamily: "lobster", color: "whitesmoke" }}>Jammu</h5>
                                <p className="card-text" style={{ fontWeight: "lighter", fontFamily: "lobster", color: "whitesmoke" }}>The city of Temples.</p>
                                <button type="button" className="btn btn-primary">Explore</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 text-center">
                        <div className="card" style={{ width: "100%" }}>
                            <img src="https://ezeedigi.com/images/app422/landingpage.jpg" className="card-img-top" alt="..." />
                            <div className="card-body" style={{ backgroundImage: "linear-gradient(to right, #ed9993, #2a63bf)" }}>
                                <h5 className="card-title" style={{ fontWeight: "bold", fontFamily: "lobster", color: "whitesmoke" }}>Jammu</h5>
                                <p className="card-text" style={{ fontWeight: "lighter", fontFamily: "lobster", color: "whitesmoke" }}>The city of Temples.</p>
                                <button type="button" className="btn btn-primary">Explore</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 text-center">
                        <div className="card" style={{ width: "100%" }}>
                            <img src="https://ezeedigi.com/images/app422/landingpage.jpg" className="card-img-top" alt="..." />
                            <div className="card-body" style={{ backgroundImage: "linear-gradient(to right, #ed9993, #2a63bf)" }}>
                                <h5 className="card-title" style={{ fontWeight: "bold", fontFamily: "lobster", color: "whitesmoke" }}>Jammu</h5>
                                <p className="card-text" style={{ fontWeight: "lighter", fontFamily: "lobster", color: "whitesmoke" }}>The city of Temples.</p>
                                <button type="button" className="btn btn-primary">Explore</button>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 text-center">
                        <div className="card" style={{ width: "100%" }}>
                            <img src="https://ezeedigi.com/images/app422/landingpage.jpg" className="card-img-top" alt="..." />
                            <div className="card-body" style={{ backgroundImage: "linear-gradient(to right, #ed9993, #2a63bf)" }}>
                                <h5 className="card-title" style={{ fontWeight: "bold", fontFamily: "lobster", color: "whitesmoke" }}>Jammu</h5>
                                <p className="card-text" style={{ fontWeight: "lighter", fontFamily: "lobster", color: "whitesmoke" }}>The city of Temples.</p>
                                <button type="button" className="btn btn-primary">Explore</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 text-center">
                        <div className="card" style={{ width: "100%" }}>
                            <img src="https://ezeedigi.com/images/app422/landingpage.jpg" className="card-img-top" alt="..." />
                            <div className="card-body" style={{ backgroundImage: "linear-gradient(to right, #ed9993, #2a63bf)" }}>
                                <h5 className="card-title" style={{ fontWeight: "bold", fontFamily: "lobster", color: "whitesmoke" }}>Jammu</h5>
                                <p className="card-text" style={{ fontWeight: "lighter", fontFamily: "lobster", color: "whitesmoke" }}>The city of Temples.</p>
                                <button type="button" className="btn btn-primary">Explore</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 text-center">
                        <div className="card" style={{ width: "100%" }}>
                            <img src="https://ezeedigi.com/images/app422/landingpage.jpg" className="card-img-top" alt="..." />
                            <div className="card-body" style={{ backgroundImage: "linear-gradient(to right, #ed9993, #2a63bf)" }}>
                                <h5 className="card-title" style={{ fontWeight: "bold", fontFamily: "lobster", color: "whitesmoke" }}>Jammu</h5>
                                <p className="card-text" style={{ fontWeight: "lighter", fontFamily: "lobster", color: "whitesmoke" }}>The city of Temples.</p>
                                <button type="button" className="btn btn-primary">Explore</button>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <hr />
                <Footer />
            </div>
        )
    }
}

export default Destinations;