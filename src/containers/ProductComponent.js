import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../containers/ProductComponent.css";
import { Card, Rating } from "semantic-ui-react";

const ProductComponent = () => {
	const products = useSelector((state) => state.allProducts.products);

	const renderList = products.map((product) => {
		const { id, title, image, price, category, rating } = product;
		const AllProducts = () => {
			return (
				<Link to={`/product/${id}`}>
					<Card className="link children">
						<img src={image} height={300} alt="product" />
						{/* <Image src={image} wrapped ui={false} className="image" /> */}
						<Card.Content className="content">
							<Card.Header className="title">{title}</Card.Header>
							<Card.Meta>
								<span className="price">$ {price}</span>
							</Card.Meta>
							<Card.Meta>
								<span>{category}</span>
							</Card.Meta>
							<Card.Description>{title}</Card.Description>
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
			<div className="four wide column" key={id}>
				{AllProducts()}
			</div>
		);
	});
	return <>{renderList}</>;
};

export default ProductComponent;
