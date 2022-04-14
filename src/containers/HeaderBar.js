import React from "react";
import { Icon, Menu, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const HeaderBar = () => {
	return (
		<>
			<Menu>
				<h1>FakeMart</h1>

				<Menu className="ui hidden section right aligned">
					<Button animated>
						<Button.Content className="small" visible>
							Login
						</Button.Content>
						<Button.Content hidden>
							<Icon name="arrow right" />
						</Button.Content>
					</Button>
					<Button animated="vertical">
						<Button.Content hidden>Cart</Button.Content>
						<Button.Content visible>
							<Icon name="shop" />
						</Button.Content>
					</Button>
					<Button animated="fade">
						<Button.Content visible>Not Registered?</Button.Content>
						<Button.Content hidden>Sign Up Now!</Button.Content>
					</Button>

					<Menu.Item as={Link} to="/">
						All Products
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
				</Menu>
			</Menu>
		</>
	);
};

export default HeaderBar;
