import "./App.css";
import { Route, Routes, Outlet, useLocation } from "react-router-dom";
import HeaderBar from "./containers/HeaderBar";
import ProductDetail from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing";

import MensClothing from "./containers/MensClothing";
import WomensClothing from "./containers/WomensClothing";
import Jewellery from "./containers/Jewellery";
import Electronics from "./containers/Electronics";
import Cart from "./containers/Cart";
import Checkout from "./containers/Checkout";

function App() {
	const location = useLocation();
	return (
		<div className="App">
			<HeaderBar />
			<div className="ui product-container">
				<Routes key={location.pathname} location={location}>
					<Route path="/" exact element={<Layout />} />\
					<Route
						index
						element={
							<div className="products-container">
								<ProductListing />
							</div>
						}
					/>
					<Route path="/product/:productId" exact element={<ProductDetail />} />
					<Route
						path="/mens-clothing/product/"
						exact
						element={
							<div className="ui stackable grid ">
								<MensClothing />
							</div>
						}
					/>
					<Route
						path="/womens-clothing/product/"
						exact
						element={
							<div className="ui stackable grid ">
								<WomensClothing />
							</div>
						}
					/>
					<Route
						path="/jewellery/product/"
						exact
						element={
							<div className="ui stackable grid">
								<Jewellery />
							</div>
						}
					/>
					<Route
						path="/electronics/product/"
						exact
						element={
							<div className="ui stackable grid ">
								<Electronics />
							</div>
						}
					/>
					<Route path="/cart" exact element={<Cart />} />
					<Route path="/checkout" exact element={<Checkout />} />
					<Route
						path="/mens-clothing/product/:productId"
						exact
						element={<ProductDetail />}
					/>
					<Route
						path="/womens-clothing/product/:productId"
						exact
						element={<ProductDetail />}
					/>
					<Route
						path="/jewellery/product/:productId"
						exact
						element={<ProductDetail />}
					/>
					<Route
						path="/electronics/product/:productId"
						exact
						element={<ProductDetail />}
					/>
					<Route> 404 Not Found!</Route>
				</Routes>
			</div>
		</div>
	);
}
const Layout = () => {
	return (
		<>
			<Outlet />
		</>
	);
};
export default App;
