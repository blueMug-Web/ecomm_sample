import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsFillCartFill } from "react-icons/bs";

const CartBtn = () => {
	const state = useSelector((state) => state.addItem);
	return (
		<>
			<div className="">
				<NavLink to="/cart" className="btn btn-primary btn-lg text-white">
					<span>
						<BsFillCartFill />
					</span>{" "}
					({state.length})
				</NavLink>
			</div>
		</>
	);
};

export default CartBtn;

{
	/* <span className="fa fa-shopping-cart me-1"></span> */
}
