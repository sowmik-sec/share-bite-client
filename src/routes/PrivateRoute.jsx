import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Spinner from "../shared/Spinner/Spinner";

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <Spinner />;
  }
  if (!user) {
    return <Navigate to={"/login"} state={location.pathname} replace />;
  }
  return children;
}

export default PrivateRoute;
