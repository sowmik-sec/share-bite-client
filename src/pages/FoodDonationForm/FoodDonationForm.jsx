import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

function FoodDonationForm({ initialData = {}, isEditing = false }) {
  const { user } = useAuth(); // Assuming useAuth provides a `user` object with donator info
  const [formData, setFormData] = useState({
    foodName: initialData.foodName || "",
    foodImage: initialData.foodImage || "",
    foodQuantity: initialData.foodQuantity || "",
    pickupLocation: initialData.pickupLocation || "",
    expiredDate: initialData.expiredDate || "",
    additionalNotes: initialData.additionalNotes || "",
    donatorImage: user.photoURL || initialData.donatorImage || "",
    donatorName: user.displayName || initialData.donatorName || "",
    donatorEmail: user.email || initialData.donatorEmail || "",
    foodStatus: initialData.foodStatus || "available",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (isEditing) {
      setFormData(initialData);
    }
  }, [initialData, isEditing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEditing) {
        await axios.put(
          `http://localhost:5000/foods/${initialData._id}`,
          formData
        );
        toast.success("Food details updated successfully!");
      } else {
        await axios.post("http://localhost:5000/foods", formData);
        toast.success("Food donation created successfully!");
      }

      navigate("/available-foods"); // Redirect to an appropriate page after saving
    } catch (error) {
      console.error("Error saving food donation:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
    >
      <Toaster />
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        {isEditing ? "Edit Food Donation" : "Create Food Donation"}
      </h2>

      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Food Name
        </label>
        <input
          type="text"
          name="foodName"
          value={formData.foodName}
          onChange={handleChange}
          className="w-full p-3 border rounded dark:bg-gray-700 dark:text-gray-200"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Food Image URL
        </label>
        <input
          type="text"
          name="foodImage"
          value={formData.foodImage}
          onChange={handleChange}
          className="w-full p-3 border rounded dark:bg-gray-700 dark:text-gray-200"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Food Quantity
        </label>
        <input
          type="number"
          name="foodQuantity"
          value={formData.foodQuantity}
          onChange={handleChange}
          className="w-full p-3 border rounded dark:bg-gray-700 dark:text-gray-200"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Pickup Location
        </label>
        <input
          type="text"
          name="pickupLocation"
          value={formData.pickupLocation}
          onChange={handleChange}
          className="w-full p-3 border rounded dark:bg-gray-700 dark:text-gray-200"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Expired Date
        </label>
        <input
          type="date"
          name="expiredDate"
          value={formData.expiredDate}
          onChange={handleChange}
          className="w-full p-3 border rounded dark:bg-gray-700 dark:text-gray-200"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Additional Notes
        </label>
        <textarea
          name="additionalNotes"
          value={formData.additionalNotes}
          onChange={handleChange}
          className="w-full p-3 border rounded dark:bg-gray-700 dark:text-gray-200"
        />
      </div>

      {/* Donator fields are automatically filled */}
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Donator Image URL
        </label>
        <input
          type="text"
          name="donatorImage"
          value={formData.donatorImage}
          readOnly
          className="w-full p-3 border rounded dark:bg-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-600"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Donator Name
        </label>
        <input
          type="text"
          name="donatorName"
          value={formData.donatorName}
          readOnly
          className="w-full p-3 border rounded dark:bg-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-600"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Donator Email
        </label>
        <input
          type="email"
          name="donatorEmail"
          value={formData.donatorEmail}
          readOnly
          className="w-full p-3 border rounded dark:bg-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-600"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Food Status
        </label>
        <select
          name="foodStatus"
          value={formData.foodStatus}
          onChange={handleChange}
          className="w-full p-3 border rounded dark:bg-gray-700 dark:text-gray-200"
        >
          <option value="available">Available</option>
          <option value="claimed">Claimed</option>
          <option value="expired">Expired</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-lime-500 text-white py-3 px-4 rounded-lg hover:bg-lime-600 transition-colors"
      >
        {isEditing ? "Update Food Donation" : "Create Food Donation"}
      </button>
    </form>
  );
}

export default FoodDonationForm;
