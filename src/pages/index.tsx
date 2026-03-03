import Header from "../components/Header.tsx";
import HeroSection from "../components/HeroSection.tsx";
import AboutSection from "../components/AboutSection.tsx";
import ContactSection from "../components/ContactSection.tsx";
import Footer from "../components/Footer.tsx";

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <HeroSection />
            <AboutSection />
            <ContactSection />
            <Footer />
            </div>
    );
};

export default Index;
