import React, { FC, SetStateAction, Dispatch } from 'react';
import { AiFillCloseCircle } from "react-icons/ai"

interface Props {
	searchFilter: string;
	formActive: boolean;
	setFilterValue: Dispatch<SetStateAction<string>>;
	setFormActive: Dispatch<SetStateAction<boolean>>;
}

const ProductSearchFilter: FC<Props> = ({ searchFilter, formActive, setFilterValue, setFormActive }) => {
	return (
		<div className='product__form'>
			<input
				className='product__input'
				type="text"
				value={searchFilter}
				onChange={(e) => setFilterValue(e.target.value)}
				placeholder="Search..."
			/>
		</div>
	);
};

export default ProductSearchFilter;