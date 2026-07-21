import { Navigate, Outlet, useLocation } from "react-router-dom";
import { FullScreenLoader } from "../components/common/loading";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  /*
   * Temporary loading state.
   *
   * Later this will come from AuthContext while
   * checking JWT, refreshing tokens, or fetching
   * the authenticated user's profile.
   */
  const loading = false;

  const location = useLocation();

  if (loading) {
    return (
      <FullScreenLoader
        title="Checking Authentication"
        description="Verifying your account..."
      />
    );
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }}
      />
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;