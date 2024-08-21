import { useLoaderData } from "react-router-dom";
import FoodCard from "../FoodCard/FoodCard";

function AvailableFoods() {
  const foods = useLoaderData();
  console.log(foods);
  return (
    <div className="container mx-auto">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {foods.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
}

export default AvailableFoods;
