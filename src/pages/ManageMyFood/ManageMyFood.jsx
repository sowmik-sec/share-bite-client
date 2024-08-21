import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import ShowFoods from "../ShowFoods/ShowFoods";

function ManageMyFood() {
  const [foods, setFoods] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/foods?email=${user?.email}`)
      .then((res) => setFoods(res.data))
      .catch((err) => console.error(err));
  }, [user?.email]);
  console.log(foods);
  return <ShowFoods curFoods={foods} />;
}

export default ManageMyFood;
