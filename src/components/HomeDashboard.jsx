
import '../App.css';
import ClientTestimonials from './ClientTestmonials';
import Footer from './Footer';
import HomeHero from './HomeHero';
import HomeHero1 from './HomeHero1';
import Navbar from './Navbar';
import TractorAnimation from './Tracktor';


function HomeDashboard() {

    return (
        <>
            <div>
                <Navbar />
                <TractorAnimation />
                <HomeHero />
                <HomeHero1 />
                <ClientTestimonials />
                <Footer />
            </div>
        </>
    )
}

export default HomeDashboard;
