import { Route } from "react-router-dom";


const renderRoutes = (routes: any[]) => {
    return routes.map((route, index) => {
      if (route.children) {
        // If the route has children, recursively render them
        return (
          <Route key={index} path={route.path} element={route.element}>
            {renderRoutes(route.children)}
          </Route>
        );
      }
      // Render a single route
      return <Route key={index} path={route.path} element={route.element} />;
    });
  };

  export default renderRoutes;