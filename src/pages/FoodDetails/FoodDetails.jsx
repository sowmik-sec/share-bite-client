import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Modal from "../../shared/Modal/Modal";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import RequestModal from "../../shared/RequestModal/RequestModal";

function FoodDetails() {
  const curFood = useLoaderData();
  const [food, setFood] = useState(curFood);
  const navigate = useNavigate();
  const { user } = useAuth(); // Fetching the current user from context
  const [willDelete, setWillDelete] = useState(false);
  const [willClaim, setWillClaim] = useState(false);
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
    navigate(`/edit-food/${food._id}`);
  };

  useEffect(() => {
    if (willClaim) {
      food.foodStatus = "claimed";
      food.claimedBy = user?.email;
      axios
        .patch(`https://share-bite.vercel.app/foods/${food._id}`, food)
        .then((res) => {
          if (res.data.acknowledged) {
            setFood({ ...food, foodStatus: "claimed" });
            setWillClaim(false);
            toast.success("You successfully claimed this food");
          }
        })
        .catch((err) => console.error(err));
    }
  }, [food, willClaim, user]);
  useEffect(() => {
    if (willDelete) {
      axios
        .delete(`https://share-bite.vercel.app/foods/${food._id}`)
        .then((result) => {
          console.log(result);
          console.log(result.data);
          toast.success("Food item deleted successfully");
          navigate("/manage-my-food");
        })
        .catch((err) => console.error(err));
    }
  }, [willDelete, food._id, navigate]);

  useEffect(() => {
    // Extract only the date part for comparison
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Set time to midnight to compare only the date

    const foodExpiredDate = new Date(expiredDate);
    foodExpiredDate.setHours(0, 0, 0, 0); // Set time to midnight to compare only the date

    if (currentDate > foodExpiredDate) {
      axios
        .patch(`https://share-bite.vercel.app/foods/${food._id}`, {
          foodStatus: "expired",
        })
        .then((res) => {
          console.log(res.data);
          setFood({ ...food, foodStatus: "expired" });
        })
        .catch((err) => console.error(err));
    }
  }, [expiredDate, food, setFood]);

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden my-8">
      <Modal setWillDelete={setWillDelete} />
      <RequestModal food={food} setWillClaim={setWillClaim} />
      <Toaster />
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
        {!isDonator && (
          <button
            onClick={() => document.getElementById("request-modal").showModal()}
            disabled={
              food.foodStatus === "claimed" || food.foodStatus === "expired"
            }
            className="mt-6 w-full bg-blue-500 dark:bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-400 dark:hover:bg-blue-600 transition-colors"
          >
            Claim This Food
          </button>
        )}
        {isDonator && (
          <button
            className="mt-6 w-full bg-red-500 dark:bg-red-700 text-white py-2 px-4 rounded-lg hover:bg-red-400 dark:hover:bg-red-600 transition-colors"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Delete Food
          </button>
        )}
      </div>
    </div>
  );
}

export default FoodDetails;
