import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

class ChooseRegion extends React.Component {
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
                        <h1 style={{ color: "white", paddingTop: "8%", paddingBottom: "8%" }}>Choose region</h1>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 text-center" style={{ marginBottom: "5%" }}>
                        <div className="card" style={{ width: "100%" }}>
                            <img src="https://ezeedigi.com/images/app422/landingpage.jpg" className="card-img-top" alt="..." />
                            <div className="card-body" style={{ backgroundImage: "linear-gradient(to right, #ed9993, #2a63bf)" }}>
                                <h5 className="card-title" style={{ fontWeight: "bold", fontFamily: "lobster", color: "whitesmoke" }}>Jammu</h5>
                                <p className="card-text" style={{ fontWeight: "lighter", fontFamily: "lobster", color: "whitesmoke" }}>The city of Temples.</p>
                                <Link to="/destinations"><button type="button" className="btn btn-primary">Explore</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 text-center" style={{ marginBottom: "5%" }}>
                        <div className="card" style={{ width: "100%" }}>
                            <img src="https://ezeedigi.com/images/app422/landingpage.jpg" className="card-img-top" alt="..." />
                            <div className="card-body" style={{ backgroundImage: "linear-gradient(to right, #ed9993, #2a63bf)" }}>
                                <h5 className="card-title" style={{ fontWeight: "bold", fontFamily: "lobster", color: "whitesmoke" }}>Kashmir</h5>
                                <p className="card-text" style={{ fontWeight: "lighter", fontFamily: "lobster", color: "whitesmoke" }}>Mini Switzerland.</p>
                                <a href="#" className="btn btn-primary">Explore</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 text-center" style={{ marginBottom: "5%" }}>
                        <div className="card" style={{ width: "100%" }}>
                            <img src="https://ezeedigi.com/images/app422/landingpage.jpg" className="card-img-top" alt="..." />
                            <div className="card-body" style={{ backgroundImage: "linear-gradient(to right, #ed9993, #2a63bf)" }}>
                                <h5 className="card-title" style={{ fontWeight: "bold", fontFamily: "lobster", color: "whitesmoke" }}>Ladakh</h5>
                                <p className="card-text" style={{ fontWeight: "lighter", fontFamily: "lobster", color: "whitesmoke" }}>International Tourism Spot.</p>
                                <a href="#" className="btn btn-primary">Explore</a>
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

export default ChooseRegion;