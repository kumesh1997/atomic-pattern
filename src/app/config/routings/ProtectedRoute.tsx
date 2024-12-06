import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { RootState } from "../../store/store";


const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useSelector((state: RootState) => state.users);

  const location = useLocation();
  const isIgnoreUrl = location.pathname.includes("/auth");

  if (!isIgnoreUrl && !user.isLoggedIn) {
    return <Navigate to="/auth/sign-in" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
