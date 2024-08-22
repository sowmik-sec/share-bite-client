import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function FoodDetails() {
  const food = useLoaderData();
  const navigate = useNavigate();
  const { user } = useAuth(); // Fetching the current user from context

  const {
    foodName,
    foodImage,
    foodQuantity,
    pickupLocation,
    expiredDate,
    additionalNotes,
    donatorImage,
    donatorName,
    donatorEmail,
    foodStatus,
  } = food;

  const isDonator = user?.email === donatorEmail;

  const handleEdit = () => {
    navigate(`/edit-food/${food.id}`);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden my-8">
      <img
        src={foodImage}
        alt={foodName}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          {foodName}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Quantity: {foodQuantity}
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Pickup Location: {pickupLocation}
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Expired Date: {new Date(expiredDate).toLocaleDateString()}
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Status:{" "}
          <span
            className={`px-2 py-1 rounded ${
              foodStatus === "available"
                ? "bg-green-500 text-white"
                : foodStatus === "claimed"
                ? "bg-yellow-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {foodStatus.charAt(0).toUpperCase() + foodStatus.slice(1)}
          </span>
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Additional Notes: {additionalNotes || "N/A"}
        </p>
        <div className="flex items-center mt-6">
          <img
            src={donatorImage}
            alt={donatorName}
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <p className="text-gray-900 dark:text-gray-100 font-semibold">
              Donated by: {donatorName}
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              {donatorEmail}
            </p>
          </div>
        </div>

        {/* Edit Button */}
        {isDonator && (
          <button
            onClick={handleEdit}
            className="mt-6 w-full bg-blue-500 dark:bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-400 dark:hover:bg-blue-600 transition-colors"
          >
            Edit Food Details
          </button>
        )}
      </div>
    </div>
  );
}

export default FoodDetails;
