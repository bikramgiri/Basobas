import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWork from "../auth/components/HowItWork";
import CTASection from "./components/CTASection";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Hero />
            <Features />
            <HowItWork/>
            <CTASection/>
        </div>
    );
}
