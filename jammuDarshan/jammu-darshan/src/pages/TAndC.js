import React from "react";
import Navbar from "../components/NavBar";
import { LoremIpsum } from "react-lorem-ipsum";
import Footer from "../components/Footer";

function TAndC() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <Navbar />
                </div>
            </div>
            <br />
            <hr />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                        <h2>Jammu Darshan</h2>
                        <h5 style={{ fontWeight: "bolder" }}>Terms of Use</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <LoremIpsum p={20} />
                    </div>
                </div>
            </div>
            <br />
            <hr />
            <Footer />
        </div>
    )
}

export default TAndC;