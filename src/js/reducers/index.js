import { combineReducers } from "redux"

import users from "./usersReducer"
import userReceipts from "./userReceiptsReducer"
import userStores from "./userStoresReducer"
import userDriveThru from "./userDriveThruReducer"

export default combineReducers({
	users,
	userReceipts,
	userStores,
	userDriveThru,
})