import React, { useReducer } from "react";
import TrackerReducer from "../reducers/TrackerReducer";

const TrackerContext = React.createContext();

const initialState = {
	allCards: [],
	currentCards: [],
	isLoading: false,
	currentMinPrice: 0,
	currentMaxPrice: 0,
	storesChecked: ["all"],
	manufacturersChecked: ["all"],
};

const TrackerProvider = ({ children }) => {
	const [state, dispatch] = useReducer(TrackerReducer, initialState);

	const formatter = new Intl.NumberFormat("cz-CZ", {
		style: "currency",
		currency: "CZK",
	});

	const setAllCards = (data) => {
		dispatch({ type: "SET_ALL_CARDS", payload: data });
	};

	// Sort Price
	const sortPrice = (price) => {
		dispatch({ type: "SORT_PRICE", payload: price });
	};

	// Sort Store
	const sortStore = (store) => {
		dispatch({
			type: "SORT_CHECKBOXES",
			payload: { value: store, type: "sortStore" },
		});
		dispatch({ type: "CALCULATE_NEW_PRICES" });
	};

	const sortManufacturer = (manufacturer) => {
		dispatch({
			type: "SORT_CHECKBOXES",
			payload: { value: manufacturer, type: "sortManufacturer" },
		});
		dispatch({ type: "CALCULATE_NEW_PRICES" });
	};

	return (
		<TrackerContext.Provider
			value={{
				...state,
				formatter,
				setAllCards,
				sortPrice,
				sortStore,
				sortManufacturer,
			}}
		>
			{children}
		</TrackerContext.Provider>
	);
};

export { TrackerContext, TrackerProvider };
