import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart, deleteShoppingCart } from '../../utilities/fakedb';

import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		fetch('products.json')
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	useEffect(() => {
		const storedCart = getShoppingCart();
		const savedCart = [];

		//! step: 1 / get id of saved product
		for (const id in storedCart) {
			//! step: 2 / get product from products state using id
			const addedProduct = products.find((product) => product.id === id);

			if (addedProduct) {
				//! step: 3 / added quantity
				const quantity = storedCart[id];
				addedProduct.quantity = quantity;
				savedCart.push(addedProduct);
			}
		}
		//! step: 4 / add the added product to the saved cart
		setCartItems(savedCart);
	}, [products]);

	const addToCart = (product) => {
		const newCart = [...cartItems, product];
		setCartItems(newCart);
		addToDb(product.id);
	};
	const handleClearCart = () => {
		setCartItems([]);
		deleteShoppingCart();
	};
	return (
		<div className='shop-container'>
			{/* shop  */}
			<div className='product-container'>
				{products.map((product) => (
					<Product key={product.id} product={product} addToCart={addToCart}></Product>
				))}
			</div>

			{/* cart */}
			<div className='cart-container'>
				<Cart cartItems={cartItems} handleClearCart={handleClearCart}></Cart>
			</div>
		</div>
	);
};

export default Shop;
