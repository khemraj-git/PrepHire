import { Navigate, Outlet } from "react-router-dom";
import { FullScreenLoader } from "../components/common/loading";
import useAuth from "../hooks/useAuth";

const PublicRoute = () => {
  const { isAuthenticated } = useAuth();

  const loading = false;

  if (loading) {
    return (
      <FullScreenLoader
        title="Loading"
        description="Preparing your experience..."
      />
    );
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;