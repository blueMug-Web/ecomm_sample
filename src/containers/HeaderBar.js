import React from "react";
import { Dropdown, Menu, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../containers/HeaderBar.css";
import CartBtn from "./CartBtn";

const HeaderBar = () => {
	return (
		<>
			<Menu compact fluid className="ui menu">
				<Dropdown item icon="bars" className="menuIcon">
					<Dropdown.Menu>
						{/* <Dropdown.Item className="dropdownMenuItems"> */}
						<Menu.Item as={Link} to="/">
							Home
						</Menu.Item>
						<Menu.Item as={Link} to="/mens-clothing/product">
							Men's Clothing
						</Menu.Item>
						<Menu.Item as={Link} to="/womens-clothing/product">
							Women's Clothing
						</Menu.Item>
						<Menu.Item as={Link} to="/jewellery/product">
							Jewellery
						</Menu.Item>
						<Menu.Item as={Link} to="/electronics/product">
							Electronics
						</Menu.Item>
						<Menu.Item>
							<Button secondary>Sign up</Button>
							<Button>Log-in</Button>
						</Menu.Item>
					</Dropdown.Menu>
				</Dropdown>
				<div className="title-container">
					<Link to="/" className="title-link">
						<h1 className="title-text">FakeMart</h1>
					</Link>
				</div>
				<div className="my-auto">
					<CartBtn />
				</div>
			</Menu>
		</>
	);
};

export default HeaderBar;
