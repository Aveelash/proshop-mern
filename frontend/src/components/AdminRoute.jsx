import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const location = useLocation();

  return userInfo && userInfo.isAdmin ? (
    <Outlet />
  ) : (
    <Navigate to={`/login?redirect=${location.pathname}`} replace />
  );
};

export default AdminRoute;
