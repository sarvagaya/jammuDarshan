import React from "react";
import {Link} from "react-router-dom";
import Navbar from "../components/NavBar";

class UserLogin extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Navbar />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center">
                        <img src="/images/LoginIllustration.svg" style={{ width: "100%", marginTop: "20%"}} />
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center">
                        <form className="border shadow">
                            <div className="row" style={{paddingTop: "15%", paddingBottom: "10%"}}>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                    <p style={{fontSize: "150%", fontWeight: "bolder", letterSpacing: "5px", fontFamily: "Roboto Slab", textShadow: "2px 2px gray"}}>Welcome Back :)</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                    <label htmlFor="email">Email:</label>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <input type="email" placeholder="abc@gmail.com" style={{ width: "75%" }} />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                    <label htmlFor="password">Password:</label>
                                </div>
                                <div className="xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <input type="password" placeholder="12345678" style={{ width: "75%" }} />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                    <button type="submit" className="btn btn-lg btn-danger" style={{width: "25%"}}>Login</button>
                                </div>
                            </div>
                            <br />
                            <div className="row" style={{paddingBottom: "15%"}}>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                    <p>Don't have an account yet? <Link to="/user/register" style={{textDecoration: "none"}}>Register</Link></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserLogin;