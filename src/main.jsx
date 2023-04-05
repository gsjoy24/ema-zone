import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './components/Error/Error';
import Shop from './components/Shop/Shop';
import OrderPage from './components/OrderPage/OrderPage';
import Inventory from './components/Inventory/Inventory';
import CartProductsLoader from './Loader/CartProductsLoader';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Shop />
			},
			{
				path: '/order',
				element: <OrderPage />,
				loader: () => CartProductsLoader()
			},
			{
				path: '/inventory',
				element: <Inventory />
			}
		]
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
