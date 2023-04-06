import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import OrderDetail from '../OrderDetail/OrderDetail';
import './OrderPage.css';

const OrderPage = () => {
	const savedProducts = useLoaderData();
	// const [products, setProducts] = useState(savedProducts);

	return (
		<div>
			<div className='shop-container'>
				{/* shop  */}
				<div className='order-container'>
					{savedProducts.map((savedProduct) => (
						<OrderDetail key={savedProduct.id} savedProduct={savedProduct}></OrderDetail>
					))}
				</div>

				{/* cart */}
				<div className='cart-container'>
					<Cart cartItems={savedProducts}></Cart>
				</div>
			</div>
		</div>
	);
};

export default OrderPage;
