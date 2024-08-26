import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

function Contact() {
  return (
    <div className="md:flex justify-between my-32 bg-black text-white px-16 py-24 rounded-lg">
      <div className="flex items-center">
        <div>
          <FaCalendarAlt className="text-4xl mr-4" />
        </div>
        <div>
          <p>We are open EveryDay</p>
          <h4 className="text-2xl">24 hours</h4>
        </div>
      </div>
      <div className="flex items-center">
        <div>
          <MdOutlineWifiCalling3 className="text-4xl mr-4" />
        </div>
        <div>
          <p>Have a question?</p>
          <h4 className="text-2xl">+2546 251 2658</h4>
        </div>
      </div>
      <div className="flex items-center">
        <div>
          <CiLocationOn className="text-4xl mr-4" />
        </div>
        <div>
          <p>Need a repair? our address</p>
          <h4 className="text-2xl">Liza Street, New York</h4>
        </div>
      </div>
    </div>
  );
}

export default Contact;
