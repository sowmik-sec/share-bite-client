import { useLoaderData } from "react-router-dom";
import ShowFoods from "../ShowFoods/ShowFoods";
import Spinner from "../../shared/Spinner/Spinner";

function AvailableFoods() {
  const curFoods = useLoaderData();
  console.log(curFoods);
  if (curFoods.length === 0) {
    return <Spinner />;
  }
  return <ShowFoods curFoods={curFoods} />;
}

export default AvailableFoods;
