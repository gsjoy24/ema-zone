import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../OrderDetail/ReviewItem';
import { removeFromDb, deleteShoppingCart } from '../../../src/utilities/fakedb.js';
import './OrderPage.css';

const OrderPage = () => {
	const savedCart = useLoaderData();
	const [cart, setCart] = useState(savedCart);

	const handleRemoveCartItem = (id) => {
		const remaining = cart.filter((product) => product.id !== id);
		setCart(remaining);
		removeFromDb(id);
	};

	const handleClearCart = () => {
		setCart([]);
		deleteShoppingCart();
	};

	return (
		<div>
			<div className='shop-container'>
				{/* shop  */}
				<div className='order-container'>
					{cart.map((savedProduct) => (
						<ReviewItem
							key={savedProduct.id}
							savedProduct={savedProduct}
							handleRemoveCartItem={handleRemoveCartItem}></ReviewItem>
					))}
				</div>

				{/* cart */}
				<div className='cart-container'>
					<Cart cartItems={cart} handleClearCart={handleClearCart}></Cart>
				</div>
			</div>
		</div>
	);
};

export default OrderPage;
