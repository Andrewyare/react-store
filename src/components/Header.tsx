import React, { Dispatch, FC, SetStateAction, useMemo, useState } from 'react';
import { IoLogoPolymer } from 'react-icons/io'
import { AiOutlineSearch } from "react-icons/ai"
import { BsCart2 } from 'react-icons/bs'
import { CgProfile } from "react-icons/cg"
import './style.css'
import ProductSearchFilter from './ProductSearchFilter';

interface props {
	filterValue: string;
	setFilterValue: Dispatch<SetStateAction<string>>;
}

const Header: FC<props> = ({ filterValue, setFilterValue }) => {
	const [formActive, setFormActive] = useState(false);
	return (
		<header className="header">
			<div className="header__block">
				<div className="header__logo"><IoLogoPolymer /></div>
				<div className="header__links">
					<div className="header__item">Products</div>
					<div className="header__item">Products</div>
					<div className="header__item">Products</div>
					<div className="header__item">Products</div>
				</div>
				<div className="header__buttons">
					<button onClick={() => setFormActive(!formActive)} className="header__search"><AiOutlineSearch /></button>
					<button className="header__cart"><BsCart2 /> <div className='cart__num'>2</div></button>
					<button className="header__profile"><CgProfile /></button>
				</div>
			</div>
			<div className={formActive ? "header__form active" : "header__form"}>
				<ProductSearchFilter
					searchFilter={filterValue}
					setFilterValue={setFilterValue}
					formActive={formActive}
					setFormActive={setFormActive}
				/>
			</div>
		</header>
	);
};

export default Header;