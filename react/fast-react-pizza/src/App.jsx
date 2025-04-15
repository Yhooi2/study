import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Menu, { loader as loaderMenu } from "./features/menu/Menu";
import Order, { loader as loaderOrder } from "./features/order/Order";
import CreateOrder, {
  action as actionCreate,
} from "./features/order/CreateOrder";
import Cart from "./features/cart/Cart";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
        loader: loaderMenu,
        errorElement: <Error />,
      },
      { path: "/order/new", element: <CreateOrder />, action: actionCreate },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: loaderOrder,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
