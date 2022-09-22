//Combine all reducers here

import addItem from "./addItem";
import { combineReducers } from "redux";
import { productReducer, selectedProductsReducer } from "./productReducer";

const rootReducers = combineReducers({
	allProducts: productReducer,
	product: selectedProductsReducer,
	addItem,
});

export default rootReducers;

// import { combineReducers } from "redux";
// import { productReducer, selectedProductsReducer } from "./productReducer";

// const reducers = combineReducers({
//     allProducts: productReducer,
//     product: selectedProductsReducer,
// });

// export default reducers;
