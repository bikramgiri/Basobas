import HeroSection from "./sections/HeroSection";
import FeaturesSection from "./sections/FeaturesSection";
import FeaturedHostelsSection from "./sections/FeaturedHostelsSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import CTASection from "./sections/CTASection";

export default function Home() {
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <FeaturedHostelsSection />
            <HowItWorksSection />
            <CTASection />
        </>
    );
}
