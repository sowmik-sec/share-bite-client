import { FaQuoteRight } from "react-icons/fa";

function Testimonial() {
  return (
    <div className="mb-28">
      <div className="text-center w-1/2 mx-auto space-y-5 mb-5">
        <p className="text-xl font-bold text-orange-600">Testimonial</p>
        <h1 className="text-5xl font-bold">
          Voices of Impact: Real Stories from Our Community
        </h1>
      </div>
      <div className="relative">
        <div className="md:flex md:justify-between">
          <div className="p-10 border-2 md:w-1/2 h-auto">
            <div className="flex justify-between">
              <div className="flex">
                <img
                  className="w-14 h-14 rounded-full"
                  src="https://static.vecteezy.com/system/resources/previews/018/991/627/non_2x/people-giving-a-donation-box-with-food-for-charity-and-solidarity-vector.jpg"
                  alt=""
                />
                <div className="ml-2">
                  <h3>Sundar Pichai</h3>
                  <p>CEO Google</p>
                </div>
              </div>
              <div>
                <FaQuoteRight className="w-14 h-14 text-red-200" />
              </div>
            </div>
            <p>
              ShareBite has been a game-changer for our community. As a local
              restaurant, we often had surplus food at the end of the day, and
              it was heartbreaking to see it go to waste. Thanks to ShareBite,
              we are now able to share this food with families in need. It is
              incredibly rewarding to know that what used to be wasted is now
              nourishing others. This platform truly brings people together for
              a great cause!
            </p>
          </div>
          <div className="p-10 border-2 md:w-1/2 h-auto">
            <div className="flex justify-between">
              <div className="flex">
                <img
                  className="w-14 h-14 rounded-full"
                  src="https://static.vecteezy.com/system/resources/previews/018/991/627/non_2x/people-giving-a-donation-box-with-food-for-charity-and-solidarity-vector.jpg"
                  alt=""
                />
                <div className="ml-2">
                  <h3>Sundar Pichai</h3>
                  <p>CEO Google</p>
                </div>
              </div>
              <div>
                <FaQuoteRight className="w-14 h-14 text-red-200" />
              </div>
            </div>
            <p>
              I never realized how much of a difference a platform like
              ShareBite could make until I needed help. After losing my job,
              putting food on the table became a challenge. ShareBite connected
              me with generous donors in my area, and the support I received was
              overwhelming. It is more than just food; it is the kindness and
              community that ShareBite fosters. I am so grateful for this
              lifeline when I needed it most.
            </p>
          </div>
        </div>
        <div className="hidden md:absolute md:flex md:justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
          <a href={`#`} className="btn btn-circle mr-5">
            ❮
          </a>
          <a href={`#`} className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
