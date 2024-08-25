import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import ShowFoods from "../ShowFoods/ShowFoods";
import Spinner from "../../shared/Spinner/Spinner";

function MyClaimedFoods() {
  const [myClaimed, setMyClaimed] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/my-claimed-foods?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyClaimed(data))
      .catch((err) => console.error(err));
  }, [user]);
  if (myClaimed.length === 0) {
    return <Spinner />;
  }
  return <ShowFoods curFoods={myClaimed} />;
}

export default MyClaimedFoods;
