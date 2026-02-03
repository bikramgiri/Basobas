import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWork from "../auth/components/HowItWork";
import CTASection from "./components/CTASection";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />
            <Features />
            <HowItWork/>
            <CTASection/>
            <Footer />
        </div>
    );
}
