import { getShoppingCart } from '../utilities/fakedb';

const CartProductsLoader = async () => {
	const loadedProducts = await fetch('products.json');
	const products = await loadedProducts.json();
	const storedCart = getShoppingCart();
	let savedProducts = [];

	for (const id in storedCart) {
		const addedProduct = products.find((product) => product.id === id);

		if (addedProduct) {
			const quantity = storedCart[id];
			addedProduct.quantity = quantity;
			savedProducts.push(addedProduct);
		}
	}

	return savedProducts;
};

export default CartProductsLoader;
