import React, { useEffect, useState } from 'react';
import CartList from './components/CartList';
import Header from './components/Header';
import ProductList from './components/ProductList';
import { useActions } from './hooks/useAction';


function App() {
	const { fetchProducts, fetchUsers } = useActions()
	useEffect(() => {
		fetchProducts()
		fetchUsers()
	}, [])
	const [filterValue, setFilterValue] = useState('');
	return (
		<div>
			<Header filterValue={filterValue} setFilterValue={setFilterValue} />
			<ProductList filterValue={filterValue} />
			<CartList />
		</div>
	);
}

export default App;
