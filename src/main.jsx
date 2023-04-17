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
import Login from './Login/Login';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './components/Provider/AuthProvider';
import CheckOut from './components/CheckOut/CheckOut';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

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
			},
			{
				path: '/login',
				element: <Login />
			},
			{
				path: '/signUp',
				element: <SignUp />
			},
			{
				path: '/checkout',
				element: (
					<PrivateRoute>
						<CheckOut />
					</PrivateRoute>
				)
			}
		]
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<AuthProvider>
		<RouterProvider router={router} />
	</AuthProvider>
);
