import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function RequestFoodRow({ reqFood }) {
  const { user } = useAuth();
  const {
    _id,
    name,
    userPhoto,
    email,
    foodName,
    quantity,
    location,
    pickupTime,
  } = reqFood;
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/edit-food-request/${_id}`);
  };
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={userPhoto} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{location}</div>
          </div>
        </div>
      </td>
      <td>{foodName}</td>
      <td>{quantity}</td>
      <td>{pickupTime}</td>
      <td>
        <button onClick={handleEdit} disabled={email !== user?.email}>
          Edit Request
        </button>
      </td>
      <th></th>
    </tr>
  );
}

export default RequestFoodRow;
