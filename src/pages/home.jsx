import Header from "../components/header";
import Banner from "../components/banner";
import Logos from "../components/logos";
import Services from "../components/services";
import Properties from "../components/properties";
import Testimonials from "../components/testimonials";
import CTA from "../components/cta";
import Footer from "../components/footer";

function Home() {
    return (
        <>
            <Header />
            <Banner />
            <Logos />
            <Services />
            <Properties />
            <Testimonials />
            <CTA />
            <Footer />
        </>
    );
}

export default Home;
