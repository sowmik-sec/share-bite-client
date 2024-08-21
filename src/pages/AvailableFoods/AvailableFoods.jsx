import { useLoaderData } from "react-router-dom";
import ShowFoods from "../ShowFoods/ShowFoods";

function AvailableFoods() {
  const curFoods = useLoaderData();
  console.log(curFoods);
  if (curFoods.length === 0) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-success"></span>
      </div>
    );
  }
  return <ShowFoods curFoods={curFoods} />;
}

export default AvailableFoods;
