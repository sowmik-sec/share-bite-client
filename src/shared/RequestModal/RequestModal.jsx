import useAuth from "../../hooks/useAuth";

function RequestModal({ food, setWillClaim }) {
  const { user } = useAuth();
  const {
    foodName,
    foodImage,
    foodQuantity,
    pickupLocation,
    expiredDate,
    additionalNotes,
  } = food;
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <dialog id="request-modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">
              Food Name
            </label>
            <input
              readOnly
              type="text"
              name="foodName"
              value={foodName}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">
              Food Image URL
            </label>
            <input
              readOnly
              type="text"
              name="foodImage"
              value={foodImage}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">
              Food Quantity
            </label>
            <input
              readOnly
              type="text"
              name="foodQuantity"
              value={foodQuantity}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">
              Pickup Location
            </label>
            <input
              readOnly
              type="text"
              name="pickupLocation"
              value={pickupLocation}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">
              Expired Date
            </label>
            <input
              readOnly
              type="date"
              name="expiredDate"
              value={expiredDate}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">
              Additional Notes
            </label>
            <textarea
              name="additionalNotes"
              value={additionalNotes}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">
              Donator Image URL
            </label>
            <input
              readOnly
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
              readOnly
              type="text"
              name="donatorName"
              defaultValue={user?.displayName}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">
              Donator Email
            </label>
            <input
              readOnly
              type="email"
              name="donatorEmail"
              defaultValue={user?.email}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
            />
          </div>
        </form>
        <div className="modal-action">
          <form method="dialog flex">
            {/* if there is a button in form, it will close the modal */}
            <button
              onClick={() => setWillClaim(true)}
              className="w-1/2 bg-blue-500 dark:bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-400 dark:hover:bg-blue-600 transition-colors"
            >
              Claim this food
            </button>
            <button
              className="w-1/2 bg-red-500 dark:bg-red-700 text-white py-2 px-4 rounded-lg hover:bg-red-400 dark:hover:bg-red-600 transition-colors"
              onClick={() => setWillClaim(false)}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default RequestModal;
