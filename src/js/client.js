import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import { BrowserRouter as Router, Route, browserHistory, Switch } from "react-router-dom"

import Users from "./components/Users"
import UserReceipts from "./components/UserReceipts"
import UserStores from "./components/UserStores"
import UserDriveThru from "./components/UserDriveThru"
import store from "./store"

require( "./less/main.less" )

const app = document.getElementById( "app" );

ReactDOM.render(
	<Provider store={ store }>
		<Router history={ browserHistory }>
			<div>
				<Switch>
					<Route path="/@:user(\w+)/stores" component={ UserStores } />
					<Route path="/@:user(\w+)/receipts" component={ UserReceipts } />
					<Route path="/@:user(\w+)/drivethru" component={ UserDriveThru } />
					<Route path="/" exact component={ Users } />
					<Route path="/challengers" component={ Users } />
					<Route path="/@:user(\w+)" component={ UserReceipts } />
				</Switch>
			</div>
		</Router>
	</Provider>
, app )