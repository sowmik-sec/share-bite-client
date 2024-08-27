import { useEffect, useState } from "react";
import FoodCard from "../FoodCard/FoodCard";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Spinner from "../../shared/Spinner/Spinner";
import { Link } from "react-router-dom";

function ShowFoods({ from }) {
  // Store the original list of foods
  const [foods, setFoods] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [originalFoods, setOriginalFoods] = useState(foods);
  const [selectedValue, setSelectedValue] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const [count, setCount] = useState(0);
  const { user } = useAuth();
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  const handleItemsPerPage = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(0);
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < numberOfPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    if (from === "manageMyFood") {
      fetch(`https://share-bite.vercel.app/foodCount?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setCount(data.count));
    } else if (from === "availableFood") {
      fetch("https://share-bite.vercel.app/foodCountAll")
        .then((res) => res.json())
        .then((data) => setCount(data.count));
    } else if (from === "featuredFood") {
      setCount(3);
    } else {
      fetch(
        `https://share-bite.vercel.app/foodCount/request?email=${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => setCount(data.count));
    }
  }, [from, user]);

  useEffect(() => {
    if (from === "manageMyFood") {
      fetch(
        `https://share-bite.vercel.app/foods?email=${user?.email}&page=${currentPage}&size=${itemsPerPage}`
      )
        .then((res) => res.json())
        .then((data) => setFoods(data))
        .catch((err) => console.error(err));
    }
    if (from === "availableFood") {
      axios
        .get(
          `https://share-bite.vercel.app/foods?page=${currentPage}&size=${itemsPerPage}`
        )
        .then((res) => setFoods(res.data))
        .catch((err) => console.error(err));
    }
    if (from === "myClaimedFoods") {
      fetch(
        `https://share-bite.vercel.app/my-claimed-foods?email=${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => setFoods(data))
        .catch((err) => console.error(err));
    }
    if (from === "featuredFood") {
      fetch(`https://share-bite.vercel.app/featured-foods`)
        .then((res) => res.json())
        .then((data) => setFoods(data))
        .catch((err) => console.error(err));
    }
  }, [from, user, currentPage, itemsPerPage]);

  if (foods.length === 0) {
    return <Spinner />;
  }

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
      {from !== "featuredFood" && (
        <>
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
        </>
      )}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {foods.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
      {from !== "featuredFood" && (
        <div className="text-center my-10">
          <button className="btn mr-2" onClick={handlePreviousPage}>
            Prev
          </button>
          {pages.map((page) => (
            <button
              className={`btn mr-2 ${
                page === currentPage ? "bg-orange-400 text-white" : ""
              }`}
              key={page}
              onClick={() => setCurrentPage(page)}
            >
              {page + 1}
            </button>
          ))}
          <button className="btn mr-2" onClick={handleNextPage}>
            Next
          </button>
          <select onChange={handleItemsPerPage} name="" id="">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>
      )}
      {from === "featuredFood" && (
        <div className="my-5 flex justify-center">
          <Link className="btn" to={"/available-foods"}>
            Show All
          </Link>
        </div>
      )}
    </div>
  );
}

export default ShowFoods;
