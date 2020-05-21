import React from "react";
import Navbar from "../components/NavBar";
import { AiFillLinkedin } from "react-icons/ai";
import Footer from "../components/Footer";

class MeetOurTeam extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Navbar />
                    </div>
                </div>
                <div className="row" style={{ backgroundImage: "linear-gradient(to right, red, #2a63bf)" }}>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center" style={{ marginTop: "8%", marginBottom: "8%" }}>
                        <h1 style={{ color: "white", fontFamily: "Noto Sans KR", fontSize: "300%" }}>Meet the Team</h1>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center">
                        <img src="/images/DeveloperTeam.jpg" style={{ width: "25%", height: "50%", borderRadius: "100%" }} />
                        <a href="https://www.linkedin.com/in/sarvagaya-abrol-b746a9153/" target="_blank"><AiFillLinkedin style={{ marginTop: "20%" }} /></a>
                        <h1>Sarvagaya Abrol</h1>
                        <h4>Co-Founder</h4>
                        <p className="text-muted" style={{ fontSize: "120%" }}>Sarvagaya is a Fresher. After graduating with a degree in Computer Science from Shri Mata Vaishno Devi University in May 2019, he decided to learn programming and to enroll in Fullstack Academy, an immersive coding bootcamp in Bangalore City. While there, he fell in love with full-stack development.</p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center">
                        <img src="/images/DeveloperTeam.jpg" style={{ width: "25%", height: "50%", borderRadius: "100%" }} />
                        <a href="https://www.linkedin.com/in/sarvagaya-abrol-b746a9153/" target="_blank"><AiFillLinkedin style={{ marginTop: "20%" }} /></a>
                        <h1>Sarvagaya Abrol</h1>
                        <h4>Co-Founder</h4>
                        <p className="text-muted" style={{ fontSize: "120%" }}>Sarvagaya is a Fresher. After graduating with a degree in Computer Science from Shri Mata Vaishno Devi University in May 2019, he decided to learn programming and to enroll in Fullstack Academy, an immersive coding bootcamp in Bangalore City. While there, he fell in love with full-stack development.</p>
                    </div>
                </div>
                <br />
                <hr />
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center">
                        <img src="/images/DeveloperTeam.jpg" style={{ width: "25%", height: "50%", borderRadius: "100%" }} />
                        <a href="https://www.linkedin.com/in/sarvagaya-abrol-b746a9153/" target="_blank"><AiFillLinkedin style={{ marginTop: "20%" }} /></a>
                        <h1>Sarvagaya Abrol</h1>
                        <h4>Co-Founder</h4>
                        <p className="text-muted" style={{ fontSize: "120%" }}>Sarvagaya is a Fresher. After graduating with a degree in Computer Science from Shri Mata Vaishno Devi University in May 2019, he decided to learn programming and to enroll in Fullstack Academy, an immersive coding bootcamp in Bangalore City. While there, he fell in love with full-stack development.</p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center">
                        <img src="/images/DeveloperTeam.jpg" style={{ width: "25%", height: "50%", borderRadius: "100%" }} />
                        <a href="https://www.linkedin.com/in/sarvagaya-abrol-b746a9153/" target="_blank"><AiFillLinkedin style={{ marginTop: "20%" }} /></a>
                        <h1>Sarvagaya Abrol</h1>
                        <h4>Co-Founder</h4>
                        <p className="text-muted" style={{ fontSize: "120%" }}>Sarvagaya is a Fresher. After graduating with a degree in Computer Science from Shri Mata Vaishno Devi University in May 2019, he decided to learn programming and to enroll in Fullstack Academy, an immersive coding bootcamp in Bangalore City. While there, he fell in love with full-stack development.</p>
                    </div>
                </div>
                <br />
                <hr />
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center">
                        <img src="/images/DeveloperTeam.jpg" style={{ width: "25%", height: "50%", borderRadius: "100%" }} />
                        <a href="https://www.linkedin.com/in/sarvagaya-abrol-b746a9153/" target="_blank"><AiFillLinkedin style={{ marginTop: "20%" }} /></a>
                        <h1>Sarvagaya Abrol</h1>
                        <h4>Co-Founder</h4>
                        <p className="text-muted" style={{ fontSize: "120%" }}>Sarvagaya is a Fresher. After graduating with a degree in Computer Science from Shri Mata Vaishno Devi University in May 2019, he decided to learn programming and to enroll in Fullstack Academy, an immersive coding bootcamp in Bangalore City. While there, he fell in love with full-stack development.</p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center">
                        <img src="/images/DeveloperTeam.jpg" style={{ width: "25%", height: "50%", borderRadius: "100%" }} />
                        <a href="https://www.linkedin.com/in/sarvagaya-abrol-b746a9153/" target="_blank"><AiFillLinkedin style={{ marginTop: "20%" }} /></a>
                        <h1>Sarvagaya Abrol</h1>
                        <h4>Co-Founder</h4>
                        <p className="text-muted" style={{ fontSize: "120%" }}>Sarvagaya is a Fresher. After graduating with a degree in Computer Science from Shri Mata Vaishno Devi University in May 2019, he decided to learn programming and to enroll in Fullstack Academy, an immersive coding bootcamp in Bangalore City. While there, he fell in love with full-stack development.</p>
                    </div>
                </div>
                <br />
                <hr />
                <Footer />
            </div>
        )
    }
}

export default MeetOurTeam;