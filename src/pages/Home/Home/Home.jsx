import About from "../About/About";
import Banner from "../Banner/Banner";
import FeaturedFood from "../FeaturedFood/FeaturedFood";

function Home() {
  return (
    <div className="container mx-auto">
      <Banner />
      <FeaturedFood />
      <About />
    </div>
  );
}

export default Home;
