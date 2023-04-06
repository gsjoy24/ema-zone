import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './OrderDetail.css';

const OrderDetail = ({ savedProduct }) => {
	const { name, img, price, shipping } = savedProduct;

	return (
		<div className='single-detail'>
			<img src={img} alt='' />
			<div className='detail-info'>
				<h5 className='product-name'>{name}</h5>
				<p>
					Price: <span className='orange-text'> ${price}</span>
				</p>
				<p>
					Shipping Charge :<span className='orange-text'>${shipping}</span>{' '}
				</p>
			</div>
			<button className='btn-delete'>
				<FontAwesomeIcon icon={faTrashCan} />
			</button>
		</div>
	);
};

export default OrderDetail;
