import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './ReviewItem.css';

const ReviewItem = ({ savedProduct, handleRemoveCartItem }) => {
	const {id, name, img, price, quantity, shipping } = savedProduct;

	return (
		<div className='review-item'>
			<img src={img} alt='' />
			<div className='review-info'>
				<h5 className='product-name'>{name}</h5>
				<p>
					Quantity: <span className='orange-text'> {quantity}</span>
				</p>
				<p>
					Price: <span className='orange-text'> ${price}</span>
				</p>
				<p>
					Shipping Charge :<span className='orange-text'>${shipping}</span>{' '}
				</p>
			</div>
			<button onClick={()=> handleRemoveCartItem(id)} className='btn-delete'>
				<FontAwesomeIcon icon={faTrashCan} />
			</button>
		</div>
	);
};

export default ReviewItem;
