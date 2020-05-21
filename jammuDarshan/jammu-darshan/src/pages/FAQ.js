import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

function FAQ() {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <Navbar />
                </div>
            </div>
            <hr />
            <br />
            <div className="row" style={{backgroundImage: "linear-gradient(to right, red, #2a63bf)"}}>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h1 className="text-center" style={{color: "white", paddingTop: "8%", paddingBottom: "8%"}}>Frequently Asked Questions</h1>
                </div>
            </div>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" style={{ marginBottom: "3%", padding: "3%"}}>
                        <h5 className="text-center" style={{color: "red"}}>Can I book a hotel room on phone?</h5>
                        <p className="text-center" style={{color: "#0595f5"}}>Yes, you can call us on 1234567890. Standard Charges apply.</p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" style={{ marginBottom: "3%", padding: "3%"}}>
                        <h5 className="text-center" style={{color: "red"}}>Can I book a hotel room on phone?</h5>
                        <p className="text-center" style={{color: "#0595f5"}}>Yes, you can call us on 1234567890. Standard Charges apply.</p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" style={{ marginBottom: "3%", padding: "3%"}}>
                        <h5 className="text-center" style={{color: "red"}}>Can I book a hotel room on phone?</h5>
                        <p className="text-center" style={{color: "#0595f5"}}>Yes, you can call us on 1234567890. Standard Charges apply.</p>
                    </div>
                </div>
                {/* <br /> */}
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" style={{ marginBottom: "3%", padding: "3%"}}>
                        <h5 className="text-center" style={{color: "red"}}>Can I book a hotel room on phone?</h5>
                        <p className="text-center" style={{color: "#0595f5"}}>Yes, you can call us on 1234567890. Standard Charges apply.</p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" style={{ marginBottom: "3%", padding: "3%"}}>
                        <h5 className="text-center" style={{color: "red"}}>Can I book a hotel room on phone?</h5>
                        <p className="text-center" style={{color: "#0595f5"}}>Yes, you can call us on 1234567890. Standard Charges apply.</p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" style={{ marginBottom: "3%", padding: "3%"}}>
                        <h5 className="text-center" style={{color: "red"}}>Can I book a hotel room on phone?</h5>
                        <p className="text-center" style={{color: "#0595f5"}}>Yes, you can call us on 1234567890. Standard Charges apply.</p>
                    </div>
                </div>
                {/* <br /> */}
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" style={{ marginBottom: "3%", padding: "3%"}}>
                        <h5 className="text-center" style={{color: "red"}}>Can I book a hotel room on phone?</h5>
                        <p className="text-center" style={{color: "#0595f5"}}>Yes, you can call us on 1234567890. Standard Charges apply.</p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" style={{ marginBottom: "3%", padding: "3%"}}>
                        <h5 className="text-center" style={{color: "red"}}>Can I book a hotel room on phone?</h5>
                        <p className="text-center" style={{color: "#0595f5"}}>Yes, you can call us on 1234567890. Standard Charges apply.</p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" style={{ marginBottom: "3%", padding: "3%"}}>
                        <h5 className="text-center" style={{color: "red"}}>Can I book a hotel room on phone?</h5>
                        <p className="text-center" style={{color: "#0595f5"}}>Yes, you can call us on 1234567890. Standard Charges apply.</p>
                    </div>
                </div>
            </div>
            <hr />
            <Footer />
        </div>
    )
}

export default FAQ;