import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                    <a href="/"><img src="/images/logo(1).png" style={{ width: "75%" }} /></a>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                    <p style={{ fontSize: "120%", fontWeight: "bold", marginTop: "4%" }}>Holidays</p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                    <p style={{ fontSize: "120%", fontWeight: "bold", marginTop: "4%" }}>Hotels</p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                    <p style={{ fontSize: "120%", fontWeight: "bold", marginTop: "4%" }}>Publish Trip</p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                    <p style={{ fontSize: "120%", fontWeight: "bold", marginTop: "4%" }}><Link to="/how-it-works" style={{ textDecoration: "none", color: "black" }}>How It Works</Link></p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                    <p style={{ fontSize: "120%", fontWeight: "bold", marginTop: "4%" }}><Link to="/user/login" style={{ textDecoration: "none", color: "black" }}>Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Navbar;