import { combineReducers } from "redux"

import authCheck from "./authCheckReducer"
import account from "./accountReducer"
import users from "./usersReducer"
import userReceipts from "./userReceiptsReducer"
import userStores from "./userStoresReducer"
import userDriveThru from "./userDriveThruReducer"
import search from "./searchReducer"

export default combineReducers({
	account,
	authCheck,
	users,
	userReceipts,
	userStores,
	userDriveThru,
	search,
})