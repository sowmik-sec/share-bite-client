import { Link } from "react-router-dom";

function FoodCard({ food }) {
  const {
    _id,
    foodName,
    foodImage,
    foodQuantity,
    pickupLocation,
    expiredDate,
    additionalNotes,
    donatorImage,
    donatorName,
  } = food;
  return (
    <div className="card bg-base-100 w-96 shadow-xl mx-auto">
      <figure>
        <img className="h-64 w-full" src={foodImage} alt="food" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {foodName}
          <div className="badge badge-secondary">{foodQuantity} person</div>
        </h2>
        <p>{additionalNotes.slice(0, 30)}...</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{pickupLocation}</div>
          <div className="badge badge-outline">Expires: {expiredDate}</div>
        </div>
        <div className="flex justify-between mt-12">
          <img
            src={donatorImage}
            title={`Donator: ${donatorName}`}
            className="w-14 h-14 rounded-full"
            alt=""
          />
          <Link to={`/details/${_id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
