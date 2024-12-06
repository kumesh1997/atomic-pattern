import './App.css';
import { BrowserRouter, Routes } from "react-router-dom";
import renderRoutes from './app/config/routings/RenderRoutes';
import { appRoutes } from './app/config/routings/routesConfig';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <BrowserRouter>
      <Routes>{renderRoutes(appRoutes)}</Routes>
      {/* Toast container to render the toasts */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000} 
        hideProgressBar={true}
        newestOnTop={true}
        closeButton={false}
      />
    </BrowserRouter>
  );
}

export default App;
