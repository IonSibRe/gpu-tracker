const TrackerReducer = (state, action) => {
	switch (action.type) {
		case "SET_ALL_CARDS":
			const allCards = action.payload.map((item) => {
				return {
					...item,
					manufacturer: item.name.toUpperCase().split(" ")[0],
				};
			});

			const minPrice = Math.min(
				...[...action.payload.map((item) => item.price)]
			);
			const maxPrice = Math.max(
				...[...action.payload.map((item) => item.price)]
			);

			return {
				...state,
				allCards,
				currentCards: allCards,
				currentMinPrice: minPrice,
				currentMaxPrice: maxPrice,
			};

		case "SORT_PRICE":
			return {
				...state,
				currentCards: state.allCards.filter(
					(card) => card.price <= parseInt(action.payload)
				),
			};

		case "CALCULATE_NEW_PRICES":
			const newPrices = [
				...new Set(state.currentCards.map((card) => card.price)),
			];

			// No current products
			if (newPrices.length === 0) {
				return {
					...state,
					currentMaxPrice: 0,
					currentMinPrice: 0,
				};
			}

			return {
				...state,
				currentMaxPrice: Math.max(...newPrices),
				currentMinPrice: Math.min(...newPrices),
			};

		default:
			throw new Error("No method matched the dispatch");
	}
};

export default TrackerReducer;
