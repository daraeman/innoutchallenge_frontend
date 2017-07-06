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

export function fetchUserReceipts( username ) {

	const receipts = fetchReceipts( username )

	return {
		type: "FETCH_USER_RECEIPTS_FULFILLED",
		payload: {
			name: "@stuballew",
			totals: {
				receipts: {
					unique: 79,
					remaining: 20,
					total: 500,
				}
			},
			receipts: receipts,
		}
	}
}

export function fetchUserStores( username ) {

	const stores = fetchStores( username )

	return {
		type: "FETCH_USER_STORES_FULFILLED",
		payload: {
			name: "@stuballew",
			totals: {
				stores: {
					unique: 34,
					total: 500,
					remaining: 20,
				}
			},
			stores: stores,
		}
	}
}

export function fetchUserDriveThru( username ) {

	const drivethru = fetchDriveThru( username )

	return {
		type: "FETCH_USER_DRIVETHRU_FULFILLED",
		payload: {
			name: "@stuballew",
			totals: {
				drivethru: {
					unique: 13,
					total: 25,
					remaining: 100,
				}
			},
			drivethru: drivethru,
		}
	}
}