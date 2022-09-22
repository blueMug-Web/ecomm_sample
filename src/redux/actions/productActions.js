import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
	return {
		type: ActionTypes.SET_PRODUCTS,
		payload: products,
	};
};

export const selectedProduct = (product) => {
	return {
		type: ActionTypes.SELECTED_PRODUCT,
		payload: product,
	};
};

export const removeSelectedProduct = () => {
	return {
		type: ActionTypes.REMOVE_SELECTED_PRODUCT,
	};
};

export const addProduct = (product) => {
	return {
		type: ActionTypes.ADD_PRODUCT,
		payload: product,
	};
};

export const subtractProduct = () => {
	return {
		type: ActionTypes.SUBTRACT_PRODUCT,
	};
};

export const addToCartCount = (product) => {
	return {
		type: ActionTypes.ADD_TO_CART,
		payload: product,
	};
};

export const subtractFromCartCount = (product) => {
	return {
		type: ActionTypes.SUBTRACT_FROM_CART,
	};
};
