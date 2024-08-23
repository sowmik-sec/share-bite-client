import ShowFoods from "../ShowFoods/ShowFoods";
import Spinner from "../../shared/Spinner/Spinner";
import { useEffect, useState } from "react";
import axios from "axios";

function AvailableFoods() {
  const [curFoods, setCurFoods] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/foods")
      .then((res) => setCurFoods(res.data));
  }, []);
  console.log(curFoods);
  if (curFoods.length === 0) {
    return <Spinner />;
  }
  return <ShowFoods curFoods={curFoods} />;
}

export default AvailableFoods;
