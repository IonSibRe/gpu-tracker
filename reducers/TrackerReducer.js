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

		case "SORT_SEARCH":
			console.log(action.payload);

			let filteredCards = [...state.allCards];

			filteredCards = filteredCards.filter((card) => {
				if (!card.name.includes(action.payload)) {
					return;
				}

				if (
					state.manufacturersChecked.includes(card.manufacturer) ||
					state.manufacturersChecked.includes("all")
				) {
					if (
						state.storesChecked.includes(card.store) ||
						state.storesChecked.includes("all")
					) {
						return card;
					}
				}
			});

			return {
				...state,
				currentCards: filteredCards,
				currentSearch: action.payload,
			};

		case "SORT_PRICE":
			let newCards = [...state.allCards];

			newCards = newCards.filter((card) => {
				if (!card.name.includes(state.currentSearch)) {
					return;
				}

				if (
					state.manufacturersChecked.includes(card.manufacturer) ||
					state.manufacturersChecked.includes("all")
				) {
					if (
						state.storesChecked.includes(card.store) ||
						state.storesChecked.includes("all")
					) {
						return card;
					}
				}
			});

			return {
				...state,
				currentCards: newCards.filter(
					(card) => card.price <= parseInt(action.payload)
				),
			};

		case "SORT_CHECKBOXES":
			let currentIndex;
			let newChecked;
			let updatedCards = [];

			// Sort Store
			if (action.payload.type === "sortStore") {
				currentIndex = state.storesChecked.indexOf(
					action.payload.value
				);
				newChecked = [...state.storesChecked];

				currentIndex === -1
					? newChecked.push(action.payload.value)
					: newChecked.splice(currentIndex, 1);

				state.allCards.forEach((card) => {
					if (!card.name.includes(state.currentSearch)) {
						return;
					}

					if (
						newChecked.includes(card.store) ||
						newChecked.includes("all")
					) {
						if (
							state.manufacturersChecked.includes(
								card.manufacturer
							) ||
							state.manufacturersChecked.includes("all")
						) {
							updatedCards.push(card);
						}
					}
				});

				return {
					...state,
					storesChecked: newChecked,
					currentCards: updatedCards,
				};
			}

			// Sort Manufacturer
			if (action.payload.type === "sortManufacturer") {
				currentIndex = state.manufacturersChecked.indexOf(
					action.payload.value
				);
				newChecked = [...state.manufacturersChecked];

				currentIndex === -1
					? newChecked.push(action.payload.value)
					: newChecked.splice(currentIndex, 1);

				state.allCards.forEach((card) => {
					if (!card.name.includes(state.currentSearch)) {
						return;
					}

					if (
						newChecked.includes(card.manufacturer) ||
						newChecked.includes("all")
					) {
						if (
							state.storesChecked.includes(card.store) ||
							state.storesChecked.includes("all")
						) {
							updatedCards.push(card);
						}
					}
				});

				return {
					...state,
					manufacturersChecked: newChecked,
					currentCards: updatedCards,
				};
			}

			return {
				...state,
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
