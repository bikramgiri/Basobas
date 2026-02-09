import HeroSection from "./components/HeroSection";
import RecentHostels from "./components/RecentHostels";
import Testimonials from "./components/Testimonials";
import OwnerCTA from "./components/OwnerCTA";
import HowItWork from "./components/HowItWork";

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <HeroSection />
            <RecentHostels />
            <HowItWork />
            <Testimonials />
            {/* <OwnerCTA /> */}
        </div>
    );
}
