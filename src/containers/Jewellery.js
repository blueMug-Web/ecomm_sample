import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../containers/ProductComponent.css";
import { Card, Rating } from "semantic-ui-react";

const Jewellery = () => {
	const products = useSelector((state) => state.allProducts.products);

	const jewelleryList = products
		.filter((product) => product.category.startsWith("je"))
		.map((product) => {
			const { id, title, image, price, category, rating } = product;

			const JewelleryCard = () => {
				return (
					<Link to={`/jewellery/product/${id}`} className="cardLinkStyle">
						<Card link children className="cardStyle">
							<span className="mx-auto p-2">
								<img src={image} height="200px" width="180px" alt="product" />
							</span>
							<Card.Content
								content
								className="d-flex flex-column justify-content-evenly align-items-center"
							>
								<Card.Header className="title text-wrap">{title}</Card.Header>
								<span>
									<Card.Meta>
										<span price>$ {price}</span>
									</Card.Meta>
									<Card.Meta>
										<span>{category}</span>
									</Card.Meta>
								</span>
								{/* <Card.Description>{title}</Card.Description> */}
							</Card.Content>
							<Card.Content extra className="extra">
								<Rating icon="star" maxRating={5} rating={rating.rate} />
								ratings: {rating.count}
							</Card.Content>
						</Card>
					</Link>
				);
			};
			return (
				<div className="all-products">
					<Card.Group itemsPerRow={4}>{JewelleryCard()}</Card.Group>
				</div>
			);
		});
	return <>{jewelleryList}</>;
};

export default Jewellery;
