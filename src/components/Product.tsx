import React, { FC } from 'react';
import { ProductState } from '../types/products';
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import './style.css'
import { useActions } from '../hooks/useAction';

const Product: FC<ProductState> = ({ title, id, description, price, image, category }) => {
	const { addCartItem } = useActions()
	const addCart = () => {
		addCartItem({ title: title, id: id, price: price, image: image, amount: 1 })
	}
	return (
		<div className='product'>
			<div className="product__img"><img src={image} /></div>
			<div className="product__rating"><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /></div>
			<div className="product__title">{title}</div>
			<div className="product__price">${price} <button onClick={() => addCart()} className="product__cart">Add to cart</button></div>
		</div>
	);
};

export default Product;