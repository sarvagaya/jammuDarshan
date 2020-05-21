import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import {Link} from "react-router-dom";

function Footer2() {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <a href="/" className="text-muted" style={{ textDecoration: "none" }}><p className="text-muted"><AiOutlineCopyrightCircle />2020-2020 Jammu Darshan</p></a>
                </div>
                <div className="col text-center">
                    <a href="http://localhost:3000/user-agreement" target="_blank" style={{ textDecoration: "none" }}><p className="text-muted">User Agreement</p></a>
                </div>
                <div className="col text-center">
                    <Link to="/user-privacy-policy" className="text-muted" style={{ textDecoration: "none" }}><p>Privacy Policy</p></Link>
                </div>
                <div className="col text-center">
                    <Link to="contact-us" className="text-muted" style={{ textDecoration: "none" }}><p>Contact Us</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer2;