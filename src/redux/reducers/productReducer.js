import { ActionTypes } from "../constants/action-types";

const initialState = {
	products: [],
};

//Cart
const initialCart = {
	cartItems: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.SET_PRODUCTS:
			return { ...state, products: payload };
		default:
			return state;
	}
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
	console.log(type);
	switch (type) {
		case ActionTypes.SELECTED_PRODUCT:
			return { ...state, ...payload };
		case ActionTypes.REMOVE_SELECTED_PRODUCT:
			return {};
		default:
			return state;
	}
};

export const addItemsReducer = (state = initialCart, { type, payload }) => {
	switch (type) {
		case ActionTypes.ADD_PRODUCT:
			return { ...state, ...payload };
		default:
			return state;
	}
};

export const subtractItemsReducer = (state = {}, { type, payload }) => {
	switch (type) {
		case ActionTypes.SUBTRACT_PRODUCT:
			return { ...state };
		default:
			return state;
	}
};

export const cartCounterReducer = (state = initialCart, { type, payload }) => {
	switch (type) {
		case ActionTypes.ADD_TO_CART:
			return { ...state, cartItems: payload };
		default:
			return state;
	}
};
