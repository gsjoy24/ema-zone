import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const OrderPage = () => {
	const products = useLoaderData();

	return (
		<div>
			<div className='shop-container'>
				{/* shop  */}
				<div className='product-containe'>
					<h1>Order page: {products.length}</h1>
				</div>

				{/* cart */}
				<div className='cart-container'>
					<Cart cartItems={[]}></Cart>
				</div>
			</div>
		</div>
	);
};

export default OrderPage;
