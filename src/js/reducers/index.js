import { combineReducers } from "redux"

import authCheck from "./authCheckReducer"
import users from "./usersReducer"
import userReceipts from "./userReceiptsReducer"
import userStores from "./userStoresReducer"
import userDriveThru from "./userDriveThruReducer"

export default combineReducers({
	authCheck,
	users,
	userReceipts,
	userStores,
	userDriveThru,
})