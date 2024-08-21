import { useLoaderData } from "react-router-dom";
import FoodCard from "../FoodCard/FoodCard";
import { useState } from "react";

function AvailableFoods() {
  const curFoods = useLoaderData();
  const [foods, setFoods] = useState(curFoods);
  const [selectedValue, setSelectedValue] = useState("");
  const handleSelected = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
    console.log(selectedValue);
    if (value === "ascending") {
      setFoods(
        foods.sort((a, b) => new Date(a.expiredDate) - new Date(b.expiredDate))
      );
    } else {
      setFoods(
        foods.sort((a, b) => new Date(b.expiredDate) - new Date(a.expiredDate))
      );
    }
  };
  // console.log(foods);
  return (
    <div className="container mx-auto">
      <div className="flex justify-center mb-5">
        <h3 className="text-3xl mr-2">Sort by:</h3>
        <select onChange={handleSelected} value={selectedValue}>
          <option value="">Select a option</option>
          <option value="ascending">Expires in sort time</option>
          <option value="descending">Expires in long time</option>
        </select>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {foods.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
}

export default AvailableFoods;
