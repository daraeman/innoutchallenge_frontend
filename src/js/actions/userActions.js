import axios from "axios"

function random( min, max ) {
	min = Math.ceil( min );
	max = Math.floor( max );
	return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}

function fetchReceipts( username ) {
	var receipts = []
	for ( let i = 1; i <= 99; i++ ) {
		if ( i == 69 )
			continue;
		receipts.push( { number: i, amount: random( 0, 50 ) } )
	}
	return receipts
}

function fetchStores( username ) {
	var stores = []
	for ( let i = 1; i <= 300; i++ ) {
		stores.push( { number: i, amount: random( 0, 50 ) } )
	}
	return stores
}

function fetchDriveThru( username ) {
	var drivethru = []
	for ( let i = 4000; i <= 4999; i++ ) {
		drivethru.push( { number: i, amount: random( 0, 50 ) } )
	}
	return drivethru
}

/*
{
	type: "FETCH_USER_RECEIPTS_FULFILLED",
	payload: {
		name: String,
		totals: {
			receipts: {
				unique: Number,
				remaining: Number,
				total: Number,
			}
		},
		receipts: receipts,
	}
}
*/
export function fetchUserReceipts( dispatch, name ) {

	dispatch({ type: "FETCH_USER_RECEIPTS_PENDING" })
	return function ( dispatch ) {
		axios.post( "http://localhost:3000/api/user/receipts", { name: name } )
			.then( ( response ) => {
				dispatch({ type: "FETCH_USER_RECEIPTS_FULFILLED", payload: response.data })
			})
			.catch( ( error ) => {

				let message;
				if ( error.response )
					message = "["+ error.response.status +"] "+ error.response.data
				else
					message = error.message;

				dispatch({ type: "FETCH_USER_RECEIPTS_REJECTED", payload: { error: message } })
			});
	}
}

export function fetchUserStores( dispatch, name ) {

	dispatch({ type: "FETCH_USER_STORES_PENDING" })
	return function ( dispatch ) {
		axios.post( "http://localhost:3000/api/user/stores", { name: name } )
			.then( ( response ) => {
				dispatch({ type: "FETCH_USER_STORES_FULFILLED", payload: response.data })
			})
			.catch( ( error ) => {

				let message;
				if ( error.response )
					message = "["+ error.response.status +"] "+ error.response.data
				else
					message = error.message;

				dispatch({ type: "FETCH_USER_STORES_REJECTED", payload: { error: message } })
			});
	}
}

export function fetchUserDriveThru( dispatch, name ) {

	dispatch({ type: "FETCH_USER_DRIVETHRU_PENDING" })
	return function ( dispatch ) {
		axios.post( "http://localhost:3000/api/user/drivethru", { name: name } )
			.then( ( response ) => {
				dispatch({ type: "FETCH_USER_DRIVETHRU_FULFILLED", payload: response.data })
			})
			.catch( ( error ) => {

				let message;
				if ( error.response )
					message = "["+ error.response.status +"] "+ error.response.data
				else
					message = error.message;

				dispatch({ type: "FETCH_USER_DRIVETHRU_REJECTED", payload: { error: message } })
			});
	}
}