import React from 'react';
import './Cart.css';

const Cart = ({ cartItems }) => {
	let totalPrice = 0;
	let totalShipping = 0;

	for (const product of cartItems) {
		product.quantity = product.quantity || 1;
		totalPrice = totalPrice + product.price * product.quantity;
		totalShipping = totalShipping + product.shipping * product.quantity;
	}
	let tax = (totalPrice * 7) / 100;
	let grandTotal = totalPrice + totalShipping + tax;

	return (
		<div className='cart'>
			<h2>Order Summary</h2>
			<p>Selected Items: {cartItems.length}</p>
			<p>Total Price: ${totalPrice} </p>
			<p>Total Shipping: ${totalShipping}</p>
			<p>Tax: ${tax}</p>
			<h3>Grand Total: {grandTotal}</h3>
		</div>
	);
};

export default Cart;
