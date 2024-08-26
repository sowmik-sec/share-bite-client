import { Link } from "react-router-dom";

const AboutComponent = () => {
  return (
    <section className="bg-gradient-to-r from-lime-400 to-orange-500 text-white py-16 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">About ShareBite</h2>
        <p className="text-lg leading-relaxed mb-8">
          At ShareBite, we believe that no one should go hungry while food goes
          to waste. Our platform connects those with surplus food to people in
          need, creating a community where generosity and sustainability go hand
          in hand. By reducing food waste and redistributing excess, we are
          making a real difference in the lives of individuals and families
          across our communities.
        </p>
        <p className="text-lg leading-relaxed mb-8">
          Every meal shared through ShareBite is a step towards a world where
          food is valued, not wasted, and where every person has access to
          nutritious meals. Whether you're a donor or a recipient, you're part
          of something bigger—a movement to feed the hungry, protect the
          environment, and build a more compassionate society.
        </p>
        <div className="mt-10">
          <Link
            to={"/signup"}
            className="inline-block bg-white text-lime-500 font-semibold py-3 px-8 rounded-md shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Join Us in Making a Difference
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
