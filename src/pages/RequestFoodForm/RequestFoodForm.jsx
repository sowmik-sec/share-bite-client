import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const RequestFoodForm = ({ existingData = null }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: user?.displayName,
    email: user?.email,
    userPhoto: user?.photoURL,
    phone: "",
    foodName: "",
    quantity: "",
    location: "",
    pickupTime: "",
    specialInstructions: "",
    agreeToTerms: false,
  });

  useEffect(() => {
    if (existingData) {
      setFormData(existingData);
    }
  }, [existingData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (existingData) {
      // Update existing food request
      axios
        .put(
          `http://localhost:5000/food-requests/${existingData._id}`,
          formData
        )
        .then((res) => {
          console.log("Request updated:", res.data);
          navigate("/requested-foods");
        })
        .catch((err) => console.error("Error updating request:", err));
    } else {
      // Create new food request
      axios
        .post("http://localhost:5000/food-requests", formData)
        .then((res) => {
          console.log("Request created:", res.data);
          toast.success("Food request sent successfully");
          if (res.data.acknowledged) {
            navigate("/requested-foods");
          }
        })
        .catch((err) => console.error("Error creating request:", err));
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg">
      <Toaster />
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-900 dark:text-white">
        {existingData ? "Edit Food Request" : "Request Food"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 dark:text-gray-300">Name</label>
          <input
            type="text"
            name="name"
            readOnly
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-lime-500 dark:bg-gray-700 dark:text-white"
            placeholder="Your Name"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            readOnly
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-lime-500 dark:bg-gray-700 dark:text-white"
            placeholder="Your Email"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300">
            Phone Number (Optional)
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-lime-500 dark:bg-gray-700 dark:text-white"
            placeholder="Your Phone Number"
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300">
            Food Name
          </label>
          <input
            type="text"
            name="foodName"
            value={formData.foodName}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-lime-500 dark:bg-gray-700 dark:text-white"
            placeholder="e.g., Fruits, Vegetables"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300">
            Quantity
          </label>
          <input
            type="text"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-lime-500 dark:bg-gray-700 dark:text-white"
            placeholder="e.g., 2 person"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300">
            Preferred Pickup/Delivery Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-lime-500 dark:bg-gray-700 dark:text-white"
            placeholder="Your Location"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300">
            Preferred Pickup/Delivery Time
          </label>
          <input
            type="datetime-local"
            name="pickupTime"
            value={formData.pickupTime}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-lime-500 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300">
            Special Instructions (Optional)
          </label>
          <textarea
            name="specialInstructions"
            value={formData.specialInstructions}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-lime-500 dark:bg-gray-700 dark:text-white"
            placeholder="Any special instructions?"
          ></textarea>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            className="h-4 w-4 text-lime-600 focus:ring-lime-500 border-gray-300 rounded dark:bg-gray-700"
            required
          />
          <label className="ml-2 text-gray-700 dark:text-gray-300">
            I agree to the{" "}
            <a href="#" className="text-lime-600">
              terms and conditions
            </a>
            .
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-lime-600 text-white py-2 px-4 rounded-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
        >
          {existingData ? "Update Request" : "Submit Request"}
        </button>
      </form>
    </div>
  );
};

export default RequestFoodForm;
