import './App.css';
import { BrowserRouter, Routes } from "react-router-dom";
import renderRoutes from './app/config/routings/RenderRoutes';
import { appRoutes } from './app/config/routings/routesConfig';

function App() {

  return (
    <BrowserRouter>
      <Routes>{renderRoutes(appRoutes)}</Routes>
    </BrowserRouter>
  );
}

export default App;
