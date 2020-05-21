import React from "react";
import LandingPage from "./pages/LandingPage";
import {Route} from "react-router-dom";
import RegisterUser from "./pages/RegisterUser";
import UserLogin from "./pages/UserLogin";
import ExploreJammu from "./pages/ExploreJammu";
import ChooseRegion from "./pages/ChooseRegion";
import AboutUs from "./pages/AboutUs";
import MeetOurTeam from "./pages/MeetOurTeam";
import UserBlog from "./pages/UserBlog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import HowItWorks from "./pages/HowItWorks";
import FAQ from "./pages/FAQ";
import TAndC from "./pages/TAndC";
import ContactUs from "./pages/ContactUs";
import UserAgreement from "./pages/UserAgreement";
import Destinations from "./pages/Destinations";
import ClientReview from "./pages/ClientReview";

class App extends React.Component {
    render() {
        return (
            <>
                <Route path="/" exact component={LandingPage} />
                <Route path="/user/register" component={RegisterUser} />
                <Route path="/user/login" component={UserLogin} />
                <Route path="/explore/jammu" component={ExploreJammu} />
                <Route path="/choose-region" component={ChooseRegion} />
                <Route path="/about-us" component={AboutUs} />
                <Route path="/meet-our-team" component={MeetOurTeam} />
                <Route path="/user-blog" component={UserBlog} />
                <Route path="/client-review" component={ClientReview} />
                <Route path="/user-agreement" component={UserAgreement} />
                <Route path="/user-privacy-policy" component={PrivacyPolicy} />
                <Route path="/how-it-works" component={HowItWorks} />
                <Route path="/frequently-asked-questions" component={FAQ} />
                <Route path="/terms-and-conditions" component={TAndC} />
                <Route path="/contact-us" component={ContactUs} />
                <Route path="/destinations" component={Destinations} />
            </>
        )
    }
}

export default App;