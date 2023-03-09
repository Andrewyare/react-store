import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';

const CartList = () => {
	const { carts } = useTypedSelector(state => state.carts)
	return (
		<div>
			{carts.map(
				cart =>
					<div>{cart.title} {cart.amount}</div>
			)}
		</div>
	);
};

export default CartList;