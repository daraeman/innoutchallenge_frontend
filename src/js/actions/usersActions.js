import axios from "axios"

export function fetchUsers( dispatch, search, amount, page ) {

	dispatch({ type: "FETCH_USERS_PENDING" })
	return function ( dispatch ) {
		axios.post( "http://localhost:3000/api/users/list", { search: search, amount: amount, page: page } )
			.then( ( response ) => {
				dispatch({ type: "FETCH_USERS_FULFILLED", payload: response.data })
			})
			.catch( ( error ) => {
				let message;
				if ( error.response ) {
					message = "["+ error.response.status +"] "+ error.response.data
				} else {
					message = error.message;
				}
				dispatch({ type: "FETCH_USERS_REJECTED", payload: { error: message } })
			});
	}
/*
	return {
		type: "FETCH_USERS_FULFILLED",
		payload: [{
			name: "@stuballew",
			totals: {
				receipts: {
					unique: 35,
				}
			}
		},{
			name: "@stuballew2",
			totals: {
				receipts: {
					unique: 35,
				}
			}
		},{
			name: "@stuballew3",
			totals: {
				receipts: {
					unique: 35,
				}
			}
		}]
	}
*/
}