import { useLoaderData } from "react-router-dom";
import FoodDonationForm from "../FoodDonationForm/FoodDonationForm";
import Spinner from "../../shared/Spinner/Spinner";

function EditFoodDonation() {
  const food = useLoaderData();
  if (!food) {
    return <Spinner />;
  }
  return <FoodDonationForm initialData={food} isEditing={true} />;
}

export default EditFoodDonation;
