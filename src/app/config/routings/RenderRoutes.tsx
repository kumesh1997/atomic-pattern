import { Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";


const renderRoutes = (routes: any[]) => {

    return routes.map((route, index) => {

    const isProtected = route.protected;
      if (route.children) {

        return (
          <Route key={index} path={route.path} element={ isProtected? <ProtectedRoute>{route.element}</ProtectedRoute> : route.element}>
            {renderRoutes(route.children)}
          </Route>
        );
      }

      return <Route key={index} path={route.path} element={isProtected ? <ProtectedRoute>{route.element}</ProtectedRoute> : route.element} />;
    });
  };

  export default renderRoutes;