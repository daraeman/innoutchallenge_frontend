export default function reducer(
	state = {
		users: [{
			name: null,
			totals: {
				receipts: {
					unique: null,
				}
			}
		}],
		fetching: false,
		fetched: false,
		error: null,
		hasPreviousPage: false,
		hasNextPage: false,
		currentPage: 1,
	},
	action
) {
	console.log( "action >> ", action )
	switch ( action.type ) {
		case "FETCH_SEARCH_PENDING": {
			return { ...state, fetching: true }
		}
		case "FETCH_SEARCH_REJECTED": {
			return { ...state, fetching: false, error: action.payload }
		}
		case "FETCH_SEARCH_FULFILLED": {
			return {
				...state,
				fetching: false,
				fetched: true,
				users: action.payload.users,
				hasPreviousPage: action.payload.hasPreviousPage,
				hasNextPage: action.payload.hasNextPage,
				currentPage: action.payload.currentPage,
			}
		}
	}

	return state
}