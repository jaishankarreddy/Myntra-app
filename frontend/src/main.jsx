import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./routes/App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bag from "./components/bag.jsx";
import Home from "./routes/Home.jsx";
import {Provider} from 'react-redux'
import Store from "./store/index.js";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home />},
      { path: "/bag", element: <Bag />},
    ],
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
