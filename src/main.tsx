import ReactDOM from "react-dom/client";
import "./assets/reset.css"
import { AppContextProvider } from "./provides/contexts/index.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppContextProvider>
    <RouterProvider router={router} />
  </AppContextProvider>
);
