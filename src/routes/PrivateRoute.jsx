import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-success"></span>
      </div>
    );
  }
  if (!user) {
    return <Navigate to={"/login"} state={location.pathname} replace />;
  }
  return children;
}

export default PrivateRoute;
