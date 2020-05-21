import React from "react";
import Navbar from "../components/NavBar";
import {LoremIpsum} from "react-lorem-ipsum";
import Footer2 from "../components/Footer2";

function PrivacyPolicy() {
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
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <h1>Jammu Darshan Privacy Policy</h1>
                        <hr />
                        <h3>Effective: May 1, 2020</h3>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <LoremIpsum p={3} />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <h2>Personal Data Collected</h2>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <LoremIpsum p={3} />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <h2>Connecting Your Email and Reward Accounts</h2>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <LoremIpsum p={2} />
                    </div>
                </div>
                <br />
                <br />
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <h1>Choices You Have Regarding Your Personal Data</h1>
                        <hr />
                        <h3>Profile and Transaction Information </h3>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <LoremIpsum p={3} />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <h2>Location Data</h2>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <LoremIpsum p={4} />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <h2>Email and Marketing Choices</h2>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <LoremIpsum p={2} />
                    </div>
                </div>
            </div>
            <br />
            <hr />
            <Footer2 />
        </div>
    )
}

export default PrivacyPolicy;