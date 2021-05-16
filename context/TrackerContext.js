import React, { useEffect, useReducer } from "react";
import TrackerReducer from "../reducers/TrackerReducer";

const TrackerContext = React.createContext();

const initialState = {
	allCards: {},
};

const TrackerProvider = ({ children }) => {
	const [state, dispatch] = useReducer(TrackerReducer, initialState);

	const setAllCards = (data) => {
		dispatch({ type: "SET_ALL_CARDS", payload: data });
	};

	return (
		<TrackerContext.Provider value={{ ...state, setAllCards }}>
			{children}
		</TrackerContext.Provider>
	);
};

export { TrackerContext, TrackerProvider };
