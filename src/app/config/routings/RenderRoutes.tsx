import { Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";


const renderRoutes = (routes: any[]) => {
    return routes.map((route, index) => {
      // Check if the route is protected
    const isProtected = route.protected;
      if (route.children) {
        // If the route has children, recursively render them
        return (
          <Route key={index} path={route.path} element={ isProtected? <ProtectedRoute>{route.element}</ProtectedRoute> : route.element}>
            {renderRoutes(route.children)}
          </Route>
        );
      }
      // Render a single route
      return <Route key={index} path={route.path} element={isProtected ? <ProtectedRoute>{route.element}</ProtectedRoute> : route.element} />;
    });
  };

  export default renderRoutes;