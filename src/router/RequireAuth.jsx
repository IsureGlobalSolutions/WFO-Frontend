import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
  const { auth } = useAuth();
  console.log("🚀 ~ RequireAuth ~ auth:", auth)
  const location = useLocation(); // Uncomment if needed

  return (
    auth?.accessToken ? (
      <Outlet />
    ) : (
      <Navigate to="/signin" state={{from: location}} replace />
    )
  );
};

export default RequireAuth;
