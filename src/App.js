import "./App.css";
import { Route, Routes, Outlet, useLocation } from "react-router-dom";
import HeaderBar from "./containers/HeaderBar";
import ProductDetail from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing";

import MensClothing from "./containers/MensClothing";
import WomensClothing from "./containers/WomensClothing";
import Jewellery from "./containers/Jewellery";
import Electronics from "./containers/Electronics";

function App() {
	const location = useLocation();
	return (
		<div className="App">
			<HeaderBar />
			<div className="ui product-container">
				<Routes key={location.pathname} location={location}>
					<Route path="/" exact element={<Layout />} />\
					<Route index element={<ProductListing />} />
					<Route path="/product/:productId" exact element={<ProductDetail />} />
					<Route
						path="/mens-clothing/product/"
						exact
						element={
							<div className="ui stackable grid container">
								<MensClothing />
							</div>
						}
					/>
					<Route
						path="/womens-clothing/product/"
						exact
						element={
							<div className="ui stackable grid container">
								<WomensClothing />
							</div>
						}
					/>
					<Route
						path="/jewellery/product/"
						exact
						element={
							<div className="ui stackable grid container">
								<Jewellery />
							</div>
						}
					/>
					<Route
						path="/electronics/product/"
						exact
						element={
							<div className="ui stackable grid container">
								<Electronics />
							</div>
						}
					/>
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
