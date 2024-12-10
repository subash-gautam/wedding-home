import React from "react";
import Navbar from "./components/Navbar";
import RecentBlog from "./components/RecentBlog";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import HeroSection from "./components/HeroSection";
import ContactUs from "./components/ContactUs";
import ImageGallery from "./components/ImageGallery";
import FeedbackSection from "./components/FeedbackSection";
import OurTeam from "./components/OurTeam";

const App = () => {
    return (
        <>
            <Navbar />
            <HeroSection />

            <ImageGallery />
            <Pricing />
            <FeedbackSection />
            <OurTeam />
            <RecentBlog />
            <ContactUs />
            <Footer />
        </>
    );
};

export default App;
