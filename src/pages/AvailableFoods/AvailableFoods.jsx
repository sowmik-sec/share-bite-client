import { useLoaderData } from "react-router-dom";
import ShowFoods from "../ShowFoods/ShowFoods";

function AvailableFoods() {
  const curFoods = useLoaderData();
  console.log(curFoods);
  return <ShowFoods curFoods={curFoods} />;
}

export default AvailableFoods;
