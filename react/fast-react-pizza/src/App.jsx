import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AppLayout from './ui/AppLayout';
import Home from './ui/Home';
import Menu from './features/menu/Menu';
import Order from './features/order/Order';
import CreateOrder from './features/order/CreateOrder';
import { loader as loaderMenu } from './features/services/apiMenu';
import { loader as loaderOrder } from './features/services/apiOrder';
import { action as actionOrder } from './features/services/apiOrder';
import { action as actionUpdate } from './features/order/UpdateOrder';
import Cart from './features/cart/Cart';
import Error from './ui/Error';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/menu',
        element: <Menu />,
        loader: loaderMenu,
        errorElement: <Error />,
      },
      { path: '/order/new', element: <CreateOrder />, action: actionOrder },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: loaderOrder,
        action: actionUpdate,
        errorElement: <Error />,
      },
      { path: '/cart', element: <Cart /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
