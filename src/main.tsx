import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/reset.css"

import { AppContextProvider } from "./provides/contexts/index.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
