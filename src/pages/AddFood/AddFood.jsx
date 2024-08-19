import axios from "axios";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";

const AddFood = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    foodName: "",
    foodImage: "",
    foodQuantity: "",
    pickupLocation: "",
    expiredDate: "",
    additionalNotes: "",
    donatorImage: "",
    donatorName: "",
    donatorEmail: "",
    foodStatus: "available",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    const theDate = {
      ...formData,
      donatorImage: user?.photoURL,
      donatorName: user?.displayName,
      donatorEmail: user?.email,
    };
    axios
      .post("http://localhost:5000/add-food", theDate)
      .then((res) => {
        if (res.data.acknowledged) {
          toast.success("Food added successfully");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">
        Donate Food
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">
            Food Name
          </label>
          <input
            type="text"
            name="foodName"
            value={formData.foodName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">
            Food Image URL
          </label>
          <input
            type="text"
            name="foodImage"
            value={formData.foodImage}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">
            Food Quantity
          </label>
          <input
            type="text"
            name="foodQuantity"
            value={formData.foodQuantity}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">
            Pickup Location
          </label>
          <input
            type="text"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">
            Expired Date
          </label>
          <input
            type="date"
            name="expiredDate"
            value={formData.expiredDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">
            Additional Notes
          </label>
          <textarea
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">
            Donator Image URL
          </label>
          <input
            type="text"
            name="donatorImage"
            defaultValue={user?.photoURL}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">
            Donator Name
          </label>
          <input
            type="text"
            name="donatorName"
            defaultValue={user?.displayName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">
            Donator Email
          </label>
          <input
            type="email"
            name="donatorEmail"
            defaultValue={user?.email}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">
            Food Status
          </label>
          <select
            name="foodStatus"
            value={formData.foodStatus}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
          >
            <option value="available">Available</option>
            <option value="claimed">Claimed</option>
            <option value="expired">Expired</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 dark:bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-400 dark:hover:bg-blue-600 transition-colors"
        >
          Add Food
        </button>
      </form>
    </div>
  );
};

export default AddFood;
