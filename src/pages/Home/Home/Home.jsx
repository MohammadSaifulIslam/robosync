import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutUs/>
            <Services/>
            <Testimonials/>
        </div>
    );
};

export default Home;