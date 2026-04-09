import Header from "../components/Header.tsx";
import HeroSection from "../components/HeroSection.tsx";
import AboutSection from "../components/AboutSection.tsx";
import ContactSection from "../components/ContactSection.tsx";
import Footer from "../components/Footer.tsx";
import Carousel from "../components/Carousel.tsx";

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <HeroSection />
            <Carousel />
            <AboutSection />
            <ContactSection />
            <Footer />
            </div>
    );
};

export default Index;
