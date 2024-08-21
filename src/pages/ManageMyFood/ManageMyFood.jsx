import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import ShowFoods from "../ShowFoods/ShowFoods";

function ManageMyFood() {
  const [foods, setFoods] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/foods?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, [user?.email]);
  console.log(foods);
  if (foods.length === 0) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-success"></span>
      </div>
    );
  }
  return <ShowFoods curFoods={foods} />;
}

export default ManageMyFood;
