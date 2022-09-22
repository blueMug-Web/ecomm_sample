import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../containers/ProductComponent.css";
import { Card, Rating } from "semantic-ui-react";

const ProductComponent = () => {
	const products = useSelector((state) => state.allProducts.products);

	const renderList = products.map((product, index) => {
		const { id, title, image, price, category, rating } = product;
		const AllProducts = () => {
			return (
				<Link to={`/product/${id}`} className="cardLinkStyle" key={index}>
					{/* <div className="cardStyle"> */}
					<Card link children className="cardStyle">
						<span className="mx-auto p-2 cardImageStyle">
							<img src={image} className="cardImage" alt="product" />
						</span>
						{/* <Image src={image} wrapped ui={false} className="image" /> */}
						<Card.Content
							content
							className="d-flex flex-column justify-content-evenly align-items-center"
						>
							<Card.Header title>{title}</Card.Header>

							<Card.Meta>
								<span price className="cardPrice">
									$ {price}
								</span>
							</Card.Meta>
							<Card.Meta>
								<span className="cardCategory">{category}</span>
							</Card.Meta>

							{/* <Card.Description>{title}</Card.Description> */}
						</Card.Content>
						<Card.Content extra>
							<Rating icon="star" maxRating={5} rating={rating.rate} />
							ratings: {rating.count}
						</Card.Content>
					</Card>
					{/* </div> */}
				</Link>
			);
		};

		return (
			<div className="all-products">
				<Card.Group itemsPerRow={4}>{AllProducts()}</Card.Group>
			</div>
		);
	});
	return <>{renderList}</>;
};

export default ProductComponent;

{
	/* <div className="four wide column fluid" key={id}>
</div> */
}
