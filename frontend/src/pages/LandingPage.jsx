import Navbar from '@components/common/Navbar.jsx';
import Hero from '@components/landing/Hero.jsx';
import Features from '@components/landing/Features.jsx';
import Footer from '@components/common/Footer.jsx';

export default function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col items-center bg-white text-gray-900 gap-15 ">
            <Navbar />
            <Hero />
            <Features />
            <Footer />
        </div>
    );
}
