const TrackerReducer = (state, action) => {
	switch (action.type) {
		case "SET_ALL_CARDS":
			return {
				...state,
				allCards: action.payload,
			};

		default:
			throw new Error("No method matched the dispatch");
	}
};

export default TrackerReducer;
