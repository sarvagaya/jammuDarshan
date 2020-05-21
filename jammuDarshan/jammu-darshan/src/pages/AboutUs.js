import React from "react";
import Navbar from "../components/NavBar";

class AboutUs extends React.Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Navbar />
                    </div>
                </div>
                <hr />
                <div className="container-fluid" style={{backgroundColor: "white"}}>
                    <br />
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                            <img src="/images/logo(1).png" style={{width: "25%"}} />
                        </div>
                    </div>
                    <br />
                    <div className="container" style={{backgroundColor: "black", marginTop: "5%"}}>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                <h1 style={{paddingTop: "5%", fontSize: "300%", fontWeight: "bolder", fontFamily: "lobster"}}>About Us</h1>
                                <hr />
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                <h4 style={{fontSize: "200%", fontWeight: "bolder", fontFamily: "lobster"}}>Our Team</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs;