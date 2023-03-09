import React, { FC, useMemo } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Product from './Product';
import './style.css'

interface props {
	filterValue: string;
}

const ProductList: FC<props> = ({ filterValue }) => {
	const { products } = useTypedSelector(state => state.product);
	const searchedProducts = useMemo(() => {
		if (filterValue) {
			return products.filter(product => product.title.toLowerCase().includes(filterValue.toLowerCase()))
		} else {
			return products
		}
	}, [products, filterValue])
	return (
		<div className='product__list'>
			{searchedProducts.map(product =>
				<Product
					id={product.id}
					title={product.title}
					price={product.price}
					description={product.description}
					category={product.category}
					image={product.image}
				/>
			)}
		</div>
	);
};

export default ProductList;