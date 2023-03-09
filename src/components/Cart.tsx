import React, { FC } from 'react';
import { CartState } from '../types/cart';
import './style.css'

const Cart: FC<CartState> = ({ title, id, price, image, amount }) => {
	return (
		<div className='cart'>

		</div>
	);
};

export default Cart;