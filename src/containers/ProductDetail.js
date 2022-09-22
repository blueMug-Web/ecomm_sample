import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	selectedProduct,
	removeSelectedProduct,
} from "../redux/actions/productActions";
import { addItem, delItem } from "../redux/actions/index";
import "./Loading.css";
const ProductDetail = () => {
	const [cartBtn, setCartBtn] = useState("Add to Cart");

	const { productId } = useParams();
	let product = useSelector((state) => state.product);
	const { image, title, price, category, description } = product;

	const handleCart = (product) => {
		if (cartBtn === "Add to Cart") {
			dispatch(addItem(product));
			setCartBtn("Remove from Cart");
		} else {
			dispatch(delItem(product));
			setCartBtn("Add to Cart");
		}
	};

	const dispatch = useDispatch();
	const fetchProductDetail = async (id) => {
		const response = await axios
			.get(`https://fakestoreapi.com/products/${id}`)
			.catch((err) => {
				console.log("Err: ", err);
			});
		dispatch(selectedProduct(response.data));
	};

	useEffect(() => {
		if (productId && productId !== "") fetchProductDetail(productId);
		return () => {
			dispatch(removeSelectedProduct());
		};
	}, [productId]); // <-- run this useEffect every time the productId changes

	return (
		<div className="ui grid container">
			{Object.keys(product).length === 0 ? (
				<div className="loading">...Loading</div>
			) : (
				<div className="container my-5 py-3">
					<div className="row">
						<div className="col-md-6 d-flex justify-content-center mx-auto product">
							<img src={image} alt={title} height="100%" width="100%" />
						</div>
						<div className="col-md-6 d-flex flex-column justify-content-center">
							<h1 className="display-5 fw-bold">{title}</h1>
							<hr />
							<h2 className="my-4">${price}</h2>
							<h3 className="ui brown block header">{category}</h3>
							<p className="lead">{description}</p>
							<button
								onClick={() => handleCart(product)}
								className="btn btn-outline-primary my-5"
							>
								{cartBtn}
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProductDetail;

//@desc
// {Object.keys(product).length === 0 ? (
//     <div>...Loading</div>
//   ) : (...
// This checks for the product and if it hasn't loaded yet, display the '...loading' div until the data has loaded

{
	/* <div className="ui placeholder segment">
	<div className="ui two column stackable center aligned grid">
		<div className="middle aligned row">
			<div className="column lp">
				<img className="ui  image" src={image} alt="item" />
			</div>
			<div className="column rp">
				<h1>{title}</h1>
				<h2>
					<p className="ui teal tag label">${price}</p>
				</h2>
				<h3 className="ui brown block header">{category}</h3>
				<p>{description}</p>
				<button onClick={() => handleCart(product)} className="visible content">
					{cartBtn}
				</button> */
}
{
	/* <div className="ui vertical animated button" tabIndex="0">
									<div className="hidden content">
										<i className="shop icon"></i>
									</div>
									<button
										onClick={() => handleCart(product)}
										className="visible content"
									>
										{cartBtn}
									</button>
								</div> */
}
{
	/* </div>
		</div>
	</div>
</div>; */
}
