import React, { useReducer, useEffect } from "react";
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

	const setAllCards = (data) => {
		dispatch({ type: "SET_ALL_CARDS", payload: data });
	};

	// Sort Price
	const sortPrice = (price) => {
		dispatch({ type: "SORT_PRICE", payload: price });
	};

	return (
		<TrackerContext.Provider
			value={{
				...state,
				setAllCards,
				sortPrice,
			}}
		>
			{children}
		</TrackerContext.Provider>
	);
};

export { TrackerContext, TrackerProvider };
