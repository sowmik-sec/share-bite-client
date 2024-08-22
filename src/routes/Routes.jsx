import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import PrivateRoute from "./PrivateRoute";
import AvailableFoods from "../pages/AvailableFoods/AvailableFoods";
import ManageMyFood from "../pages/ManageMyFood/ManageMyFood";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import CreateFoodDonation from "../pages/CreateFoodDonation/CreateFoodDonation";
import EditFoodDonation from "../pages/EditFoodDonation/EditFoodDonation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "add-food",
        element: (
          <PrivateRoute>
            <CreateFoodDonation />
          </PrivateRoute>
        ),
      },
      {
        path: "available-foods",
        element: (
          <PrivateRoute>
            <AvailableFoods />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/food"),
      },
      {
        path: "manage-my-food",
        element: (
          <PrivateRoute>
            <ManageMyFood />
          </PrivateRoute>
        ),
      },
      {
        path: "details/:id",
        element: (
          <PrivateRoute>
            <FoodDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/foods/${params.id}`),
      },
      {
        path: "edit-food/:id",
        element: (
          <PrivateRoute>
            <EditFoodDonation />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/foods/${params.id}`),
      },
    ],
  },
]);

export default router;
