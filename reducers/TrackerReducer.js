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
				sortedCards: allCards,
				renderCards: allCards,
				currentMinPrice: minPrice,
				currentMaxPrice: maxPrice,
			};

		case "SORT_DEFAULT":
			if (action.payload === "new") {
				return {
					...state,
					currentlySortedBy: action.payload,
				};
			}

			if (action.payload === "price-low") {
				return {
					...state,
					renderCards: state.sortedCards.sort(
						(a, b) => a.price - b.price
					),
					currentlySortedBy: action.payload,
				};
			}

			if (action.payload === "price-high") {
				return {
					...state,
					renderCards: state.sortedCards.sort(
						(a, b) => b.price - a.price
					),
					currentlySortedBy: action.payload,
				};
			}

		case "SORT_SEARCH":
			let filteredCards = [...state.allCards];

			filteredCards = filteredCards.filter((card) => {
				if (
					!card.name
						.toLowerCase()
						.includes(action.payload.toLowerCase())
				) {
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
				sortedCards: filteredCards,
				currentSearch: action.payload,
			};

		case "SORT_PRICE":
			let newCards = [...state.allCards];
			const [sortMinPrice, sortMaxPrice] = action.payload;

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
				sortedCards: newCards.filter(
					(card) =>
						card.price >= sortMinPrice && card.price <= sortMaxPrice
				),
			};

		case "SORT_CHECKBOXES":
			let currentIndex;
			let newChecked;
			let updatedCards = [];

			// If all is checked set only all
			// If anything else gets checked remove all
			const checkSetAll = (newChecked) => {
				if (action.payload.value === "all") {
					newChecked = ["all"];
				} else {
					const allIndex = newChecked.indexOf("all");
					if (allIndex !== -1) newChecked.splice(allIndex, 1);
				}

				return newChecked;
			};

			// Sort Store
			if (action.payload.type === "sortStore") {
				currentIndex = state.storesChecked.indexOf(
					action.payload.value
				);
				newChecked = [...state.storesChecked];

				if (currentIndex === -1) {
					newChecked.push(action.payload.value);
				} else {
					newChecked.splice(currentIndex, 1);
				}

				// Check for All Option
				newChecked = checkSetAll(newChecked);

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
					sortedCards: updatedCards,
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

				// Check for All Option
				newChecked = checkSetAll(newChecked);

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
					sortedCards: updatedCards,
				};
			}

			return {
				...state,
			};

		case "CALCULATE_NEW_PRICES":
			const newPrices = [
				...new Set(state.sortedCards.map((card) => card.price)),
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
