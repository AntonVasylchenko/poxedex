import ReactDOM from "react-dom/client";
import "./assets/reset.css"
import { AppContextProvider } from "./provides/contexts/index.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Loyaut, MainCard, App } from "./components/index";

const router = createBrowserRouter([
  {
    path: "/PokemonTs/",
    element:  <Loyaut/>,
    children: [
      {
        path: "/PokemonTs/",
        element: <App />,
      },
      {
        path: "/PokemonTs/:name",
        element: <MainCard />,
        loader: async ({ params }) => {
          return fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
        },
      },
    ],
  }
]);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppContextProvider>
    <RouterProvider router={router} />
  </AppContextProvider>
);