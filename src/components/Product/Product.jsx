import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
	const { name, img, price, seller, ratings } = props.product;

	const addToCart = props.addToCart;

	return (
		<div className='product'>
			<img src={img} alt='' />
			<div className='product-details'>
				<h5>{name}</h5>
				<p>Price: ${price}</p>
				<p>Manufacturer : {seller}</p>
				<p>Ratings : {ratings} Stars</p>
			</div>
			<button onClick={() => addToCart(props.product)} className='btn-cart'>
				<FontAwesomeIcon icon={faShoppingCart} /> Add to cart
			</button>
		</div>
	);
};

export default Product;
