import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../containers/ProductComponent.css";
import { Card, Rating } from "semantic-ui-react";

const WomensClothing = () => {
	const products = useSelector((state) => state.allProducts.products);

	const womensClothingList = products
		.filter((product) => product.category.startsWith("women's clothing"))
		.map((product) => {
			const { id, title, image, price, category, rating } = product;

			const WomensClothingCard = () => {
				return (
					<Link to={`/womens-clothing/product/${id}`} className="cardLinkStyle">
						<div className="card">
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
						</div>
					</Link>
				);
			};
			return (
				<div className="all-products">
					<Card.Group itemsPerRow={4}>{WomensClothingCard()}</Card.Group>
				</div>
			);
		});
	return <>{womensClothingList}</>;
};

export default WomensClothing;
