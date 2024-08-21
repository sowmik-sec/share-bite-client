import { useState } from "react";
import FoodCard from "../FoodCard/FoodCard";

function ShowFoods({ curFoods }) {
  const [foods, setFoods] = useState(curFoods);
  console.log(foods);
  const [selectedValue, setSelectedValue] = useState("");
  const handleSelected = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
    console.log(selectedValue);
    if (value === "ascending") {
      setFoods(
        foods.sort((a, b) => new Date(a.expiredDate) - new Date(b.expiredDate))
      );
    } else if (value === "descending") {
      setFoods(
        foods.sort((a, b) => new Date(b.expiredDate) - new Date(a.expiredDate))
      );
    } else if (value === "person1") {
      setFoods(
        foods.sort((a, b) => Number(a.foodQuantity) - Number(b.foodQuantity))
      );
    } else {
      setFoods(
        foods.sort((a, b) => Number(b.foodQuantity) - Number(a.foodQuantity))
      );
    }
  };
  return (
    <div className="container mx-auto">
      <div className="flex justify-center mb-5">
        <h3 className="text-3xl mr-2">Sort by:</h3>
        <select onChange={handleSelected} value={selectedValue}>
          <option value="">Select a option</option>
          <option value="ascending">Expires in sort time</option>
          <option value="descending">Expires in long time</option>
          <option value="person1">Food Quantity(low to high)</option>
          <option value="person2">Food Quantity(high to low)</option>
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

export default ShowFoods;
