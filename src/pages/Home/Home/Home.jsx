import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import FeaturedFood from "../FeaturedFood/FeaturedFood";

function Home() {
  return (
    <div className="container mx-auto">
      <Banner />
      <FeaturedFood />
      <About />
      <Contact />
    </div>
  );
}

export default Home;
