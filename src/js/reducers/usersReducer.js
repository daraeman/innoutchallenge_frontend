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
	},
	action
) {
	console.log( "action >> ", action )
	switch ( action.type ) {
		case "FETCH_USERS_PENDING": {
			return { ...state, fetching: true }
		}
		case "FETCH_USERS_REJECTED": {
			return { ...state, fetching: false, error: action.payload }
		}
		case "FETCH_USERS_FULFILLED": {
			return { ...state, fetching: false, fetched: true, users: action.payload }
		}
		case "SET_USERS_NAME": {
			return { ...state, user: { ...state.user, name: action.payload } }
		}
		case "SET_USERS_AGE": {
			return { ...state, user: { ...state.user, name: action.payload } }
		}
	}

	return state
}