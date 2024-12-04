import { Navigate } from "react-router-dom";
import { dashboardRoutes } from "../../modules/dashboard/dashboard.routes";
import { authRoutes } from "../../modules/login/auth.routes";
import { projectsRoutes } from "../../modules/project/projects.routes";

export const appRoutes = [
    ...dashboardRoutes.routes,
    ...authRoutes.routes,
    ...projectsRoutes.routes,
    {
      path: "",
      element: <Navigate to="auth/sign-in" />,
    },
    {
      path: "*",
      element: <Navigate to="auth/sign-in" />,
    },
  ];
  