import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartFlatbed, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, handleClearCart }) => {
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
			<button onClick={handleClearCart} className='btn-clear-cart'>
				<span> Clear Cart</span> <FontAwesomeIcon icon={faTrashCan} />
			</button>

			<Link to='/checkout'>
				<button className='btn-clear-cart'>
					<span>Proceed Check Out</span>
					<FontAwesomeIcon icon={faCartFlatbed} />
				</button>
			</Link>
		</div>
	);
};

export default Cart;
