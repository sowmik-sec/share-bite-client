import { useState } from "react";
import FoodCard from "../FoodCard/FoodCard";

function ShowFoods({ curFoods }) {
  // Store the original list of foods
  const [originalFoods, setOriginalFoods] = useState(curFoods);
  const [foods, setFoods] = useState(curFoods);
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelected = (e) => {
    const value = e.target.value;
    setSelectedValue(value);

    let sortedFoods = [...foods]; // Create a copy of the foods array

    if (value === "ascending") {
      sortedFoods = sortedFoods.sort(
        (a, b) => new Date(a.expiredDate) - new Date(b.expiredDate)
      );
    } else if (value === "descending") {
      sortedFoods = sortedFoods.sort(
        (a, b) => new Date(b.expiredDate) - new Date(a.expiredDate)
      );
    } else if (value === "person1") {
      sortedFoods = sortedFoods.sort(
        (a, b) => Number(a.foodQuantity) - Number(b.foodQuantity)
      );
    } else {
      sortedFoods = sortedFoods.sort(
        (a, b) => Number(b.foodQuantity) - Number(a.foodQuantity)
      );
    }

    setFoods(sortedFoods); // Set the sorted array to foods state
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();

    if (!searchValue) {
      setFoods(originalFoods); // Reset to original foods if the search is cleared
    } else {
      const matchedFoods = originalFoods.filter((food) =>
        food.foodName.toLowerCase().includes(searchValue)
      );
      setFoods(matchedFoods); // Update foods state with matched results
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center my-5">
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search Food"
          className=" px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-lime-500 dark:bg-gray-700 dark:text-white"
        />
      </div>
      <div className="flex justify-center mb-5">
        <h3 className="text-3xl mr-2">Sort by:</h3>
        <select onChange={handleSelected} value={selectedValue}>
          <option value="">Select an option</option>
          <option value="ascending">Expires in short time</option>
          <option value="descending">Expires in long time</option>
          <option value="person1">Food Quantity (low to high)</option>
          <option value="person2">Food Quantity (high to low)</option>
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
