import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

function ContactUs() {
    return (
        <div className="container-fluid">
            <div className="row" style={{ backgroundColor: "white" }}>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <Navbar />
                </div>
            </div>
            <div className="row" style={{backgroundColor: "black", paddingTop: "5%", paddingBottom: "5%"}}>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center">
                    <h1 className="text-center" style={{ color: "white", fontFamily: "Libre Baskerville", fontSize: "300%" }}>Lets hear from you :)</h1>
                    <br />
                    <form>
                        <input type="text" className="text-center form-control" placeholder="Your Name" style={{ width: "50%", marginLeft: "25%" }} />
                        <br />
                        <input type="email" className="text-center form-control" placeholder="yourname@gmail.com" style={{width: "50%", marginLeft: "25%"}} />
                        <br />
                        <textarea className="text-center form-control" placeholder="You can give your reviews OR Any Suggestions" style={{width: "50%", marginLeft: "25%"}} />
                        <br />
                        <button type="submit" className="text-center btn btn-danger btn-lg">Submit</button>
                    </form>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <img src="/images/contact us.svg" style={{ width: "100%", marginTop: "10%" }} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactUs;