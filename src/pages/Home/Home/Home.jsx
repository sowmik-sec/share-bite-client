import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import FeaturedFood from "../FeaturedFood/FeaturedFood";
import Testimonial from "../Testimonial/Testimonial";

function Home() {
  return (
    <div className="container mx-auto">
      <Banner />
      <FeaturedFood />
      <About />
      <Contact />
      <Testimonial />
    </div>
  );
}

export default Home;
