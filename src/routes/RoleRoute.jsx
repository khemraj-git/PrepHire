import { Navigate, Outlet } from "react-router-dom";
import { FullScreenLoader } from "../components/common/loading";
import useAuth from "../hooks/useAuth";

const RoleRoute = ({ allowedRoles = [] }) => {
  const { user, isAuthenticated } = useAuth();

  const loading = false;

  if (loading) {
    return (
      <FullScreenLoader
        title="Loading"
        description="Checking permissions..."
      />
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (
    allowedRoles.length > 0 &&
    !allowedRoles.includes(user?.role)
  ) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

export default RoleRoute;