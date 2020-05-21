import React from "react";
import Navbar from "../components/NavBar";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import {Link} from "react-router-dom";
import Footer2 from "../components/Footer2";

function UserAgreement() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-1 col-lg-12">
                    <Navbar />
                </div>
            </div>
            <hr />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <h1 style={{ fontWeight: "bolder" }}>User Agreement</h1>
                        <h3 style={{ fontWeight: "lighter", marginTop: "1%" }}>Last Updated May 10, 2020</h3>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <p>The following User Agreement (the "Agreement") governs the use of the Jammu Darshan service (the "Service"), including,
                        without limitation, the mobile application (“Mobile App”) which is under process, for the creation of travel reservations and/or
                        itineraries, the use of travel monitoring and alerts, and any additional services, whether free or provided on a
                        paid subscription basis, as provided or made available to individuals and its
                        corporate affiliates through its Jammu Darshan business ("Jammu Darshan" or "us" or "we"). Please read the terms and conditions
                        contained in this Agreement carefully. You can access this Agreement any time at
                            <a href="http://localhost:3000/user-agreement">Jammu Darshan Agreement</a>. Your use of and/or registration
                            with the Service will constitute your ongoing acceptance of this Agreement. If you cannot accept this Agreement,
                            please do not use the Service.
                        </p>
                        <p>Jammu Darshan reserves the right to modify or replace this Agreement at any time and in Jammu Darshan's sole discretion. Concur will indicate at the
                        top of this Agreement the date it was last updated. Any changes will be effective immediately upon posting the revised version
                        (or such later effective date as may be indicated at the top of the revised Agreement). It is your responsibility to regularly check
                        the Service to determine if there have been changes to this Agreement and to review such changes. Your continued use of the Service
                        following the posting or effective date of any changes to the Agreement will constitute your acceptance of any such changes.
                        If you do not agree to the changes, you must stop using the Service.
                        </p>
                        <p>Your failure to abide by this Agreement or any other terms or conditions posted anywhere within the Service may
                        result in suspension or termination of your access to the Service, without notice, in addition to Jammu Darshan's other
                        remedies.
                        </p>
                    </div>
                </div>
            </div>
            <br />
            <hr />
            <Footer2 />
        </div>
    )
}

export default UserAgreement;