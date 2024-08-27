import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../../shared/Spinner/Spinner";
import RequestFoodRow from "./RequestFoodRow";

function RequestedFood() {
  const [requestedFoods, setRequestedFoods] = useState([]);
  useEffect(() => {
    axios
      .get("https://share-bite.vercel.app/food-requests")
      .then((res) => setRequestedFoods(res.data))
      .catch((err) => console.error(err));
  }, []);
  if (requestedFoods.length === 0) {
    return <Spinner />;
  }
  return (
    <div className="overflow-x-auto container mx-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Requester</th>
            <th>Food</th>
            <th>Quantity</th>
            <th>Pickup Time</th>
            <th>Edit Request</th>
          </tr>
        </thead>
        <tbody>
          {requestedFoods.map((reqFood) => (
            <RequestFoodRow key={reqFood._id} reqFood={reqFood} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RequestedFood;
