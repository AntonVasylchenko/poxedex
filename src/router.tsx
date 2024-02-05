import { createBrowserRouter } from "react-router-dom";
import { Home, MyTeam, Pokemon, Items} from "./pages";
import { MainCard,Navigation } from "./components";
export const router = createBrowserRouter([
  {
    path: "/poxedex/",
    element: <Home />,
    children: [
      {
        path: "/poxedex/",
        element: <Navigation />,
      },
      {
        path: "pokemon/",
        element: <Pokemon />,
      },
      {
        path: "pokemon/:name",
        element: <MainCard />,
        loader: async ({ params }) => {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${params.name}`
          );
          return response.json();
        },
      },
      {
        path: "items",
        element: <Items />,
      },
      {
        path: "items/:name",
        element: <MainCard />,
        loader: async ({ params }) => {
          const response = await fetch(
            `https://pokeapi.co/api/v2/item/${params.name}`
          );
          return response.json();
        },
      },
      {
        path: "team",
        element: <MyTeam />,
      },
      {
        path: "team/:name",
        element: <MainCard />,
        loader: async ({ params }) => {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${params.name}`
          );
          return response.json();
        },
      },
    ],
  },
  {
    path: "*",
    element: <Home />,
  }
]);
