const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200 my-32">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img
            src={`https://www.investopedia.com/thmb/hvCs7nGRZ539vKETw1KIHvk2HzM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1173117669-baa23a3889054f828aebc58f9de136b6.jpg`}
            className="w-3/4 rounded-lg shadow-2xl"
          />
          <img
            src={`https://media.istockphoto.com/id/1224414210/pt/vetorial/food-donation-and-charity.jpg?s=612x612&w=0&k=20&c=boIFHxdh0DAtCidYO74Qta8RpPlYckBve9qhedtOD6U=`}
            className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 space-y-5 p-4">
          <h3 className="text-3xl text-orange-500 font-bold">About Us</h3>
          <h1 className="text-5xl font-bold">
            Feed Communities, Save the Planet
          </h1>
          <p className="py-6">
            At ShareBite, we believe that no one should go hungry while food
            goes to waste. Our platform connects those with surplus food to
            people in need, creating a community where generosity and
            sustainability go hand in hand. By reducing food waste and
            redistributing excess, we are making a real difference in the lives
            of individuals and families across our communities.
          </p>
          <p className="py-6">
            Every meal shared through ShareBite is a step towards a world where
            food is valued, not wasted, and where every person has access to
            nutritious meals. Whether you are a donor or a recipient, you are
            part of something bigger—a movement to feed the hungry, protect the
            environment, and build a more compassionate society.
          </p>
          <button className="btn btn-warning">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
