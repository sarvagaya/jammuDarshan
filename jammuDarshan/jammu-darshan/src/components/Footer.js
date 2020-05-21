import React from "react";
import { Link } from "react-router-dom";
import { RiInstagramLine, RiFacebookCircleLine, RiTwitterLine, RiLinkedinBoxLine, RiYoutubeLine, RiCopyrightLine } from "react-icons/ri";

function Footer() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <a href="/"><img src="/images/logo(1).png" style={{ width: "75%", marginTop: "20%" }} /></a>
                </div>
                <div className="col">
                    <p style={{ fontWeight: "bold", fontSize: "150%", marginTop: "5%" }}>News and Resources</p>
                    <Link to="/user-blog" style={{ color: "black", textDecoration: "none" }}><p>Blog</p></Link>
                    <Link to="/client-review" style={{ color: "black", textDecoration: "none" }}><p>Client Reviews</p></Link>
                    <Link to="/user-agreement" style={{ color: "black", textDecoration: "none" }}><p>User Agreement</p></Link>
                    <Link to="/user-privacy-policy" style={{ color: "black", textDecoration: "none" }}><p>Privacy Policy</p></Link>
                </div>
                <div className="col">
                    <p style={{ fontWeight: "bold", fontSize: "150%", marginTop: "5%" }}>About US</p>
                    <Link to="/meet-our-team" style={{ color: "black", textDecoration: "none" }}><p>Meet our Team</p></Link>
                    <Link to="/how-it-works" style={{ color: "black", textDecoration: "none" }}><p>How it Works</p></Link>
                    <Link to="/frequently-asked-questions" style={{ color: "black", textDecoration: "none" }}><p>FAQ's</p></Link>
                    <Link to="/terms-and-conditions" style={{ color: "black", textDecoration: "none" }}><p>Terms and Conditions</p></Link>
                    <Link to="/contact-us" style={{ color: "black", textDecoration: "none" }}><p>Contact Us</p></Link>
                </div>
            </div>
            <br />
            <div className="container" style={{ width: "30%" }}>
                <div className="row text-center">
                    <div className="col">
                        <a href="https://www.instagram.com" target="_blank"><RiInstagramLine style={{ color: "#db6085", width: "100%", height: "50%" }} /></a>
                    </div>
                    <div className="col text-center">
                        <a href="https://www.facebook.com/" target="_blank"><RiFacebookCircleLine style={{ color: "blue", width: "100%", height: "50%" }} /></a>
                    </div>
                    <div className="col text-center">
                        <a href="https://twitter.com" target="_blank"><RiTwitterLine style={{ color: "#24b0e3", width: "100%", height: "50%" }} /></a>
                    </div>
                    <div className="col">
                        <a href="https://www.linkedin.com/" target="_blank"><RiLinkedinBoxLine style={{ color: "#0006b5", width: "100%", height: "50%" }} /></a>
                    </div>
                    <div className="col">
                        <a href="https://www.youtube.com/" target="_blank"><RiYoutubeLine style={{ color: "red", width: "100%", height: "50%" }} /></a>
                    </div>
                </div>
            </div>
            <br />
            <hr />
            <br />
            <div className="row">
                <div className="colxs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                    <p style={{fontWeight: "bold"}}><RiCopyrightLine /> All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;