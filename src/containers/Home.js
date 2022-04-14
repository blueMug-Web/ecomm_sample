import React from "react";
import { Container, Image, Card } from "semantic-ui-react";
import homeImage from "../assets/springBg.jpg";
import "./Home.css";

const Home = () => {
	return (
		<Container className="container">
			<div className="landing-image">
				<div className="text-section-overlay">
					<h5 className="title">NEW Spring Clothing Line!</h5>
					<p className="text">
						Check out our new line of Spring fashion for the coming season
					</p>
				</div>
			</div>
		</Container>
	);
};

export default Home;

// <Card className="children centered">
// 				{/* <img src={homeImage} alt="home screen" /> */}

// 				<Card.Content className="content">
// 					<Card.Header className="title">Card Title</Card.Header>
// 					<Card.Meta>
// 						<span className="price">Price Info</span>
// 					</Card.Meta>
// 					<Card.Meta>
// 						<span>Category</span>
// 					</Card.Meta>
// 					{/* <Card.Description>{title}</Card.Description> */}
// 				</Card.Content>
// 				<Card.Content extra className="extra">
// 					Last updated 7 minutes ago
// 				</Card.Content>
// 			</Card>
