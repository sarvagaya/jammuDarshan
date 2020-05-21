import React from "react";
import Navbar from "../components/NavBar";

class ClientReview extends React.Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="colxs-12 col-sm-12 col-md-12 col-lg-12">
                        <Navbar />
                    </div>
                </div>
                <hr />
                <br />
                <div className="row">
                    <div className="colxs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                        <h1 style={{}}>Client Testimonials</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default ClientReview;