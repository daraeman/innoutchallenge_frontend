import axios from "axios"

/*
{
	type: "FETCH_USERS_FULFILLED",
	payload: [{
		name: String,
		totals: {
			receipts: {
				unique: Number,
			}
		}
	}]
}
*/
export function fetchUsers( dispatch, search, amount, page ) {

	dispatch({ type: "FETCH_USERS_PENDING" })
	return function ( dispatch ) {
		axios.post( "http://localhost:3000/api/users/list", { search: search, amount: amount, page: page } )
			.then( ( response ) => {
				dispatch({ type: "FETCH_USERS_FULFILLED", payload: response.data })
			})
			.catch( ( error ) => {

				let message;
				if ( error.response )
					message = "["+ error.response.status +"] "+ error.response.data
				else
					message = error.message;

				dispatch({ type: "FETCH_USERS_REJECTED", payload: { error: message } })
			});
	}
}