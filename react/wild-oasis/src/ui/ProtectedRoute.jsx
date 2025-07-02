import useUser from "../features/authentication/hooks/useUser";
import Spinner from "./Spinner";
import { Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useUser();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isAuthenticated && !isLoading) {
  //     navigate("/login");
  //   }
  // }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) return <Spinner />;
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return children;
}

export default ProtectedRoute;
