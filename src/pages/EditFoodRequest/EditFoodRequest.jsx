import { useLoaderData } from "react-router-dom";
import Spinner from "../../shared/Spinner/Spinner";
import RequestFoodForm from "../RequestFoodForm/RequestFoodForm";

function EditFoodRequest() {
  const foodRequest = useLoaderData();
  if (!foodRequest) {
    return <Spinner />;
  }
  return <RequestFoodForm existingData={foodRequest} />;
}

export default EditFoodRequest;
