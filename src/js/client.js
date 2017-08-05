import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import { BrowserRouter as Router, Route, browserHistory, Switch, Redirect } from "react-router-dom"

import AuthCheck from "./components/AuthCheck"

import Splash from "./components/Splash"
import Account from "./components/Account"
import AccountReceipts from "./components/AccountReceipts"
import Users from "./components/Users"
import SearchUsers from "./components/SearchUsers"
import UserReceipts from "./components/UserReceipts"
import UserStores from "./components/UserStores"
import UserDriveThru from "./components/UserDriveThru"
import PageNotFound from "./components/PageNotFound"
import store from "./store"

process.env.REACT_APP_BACKEND_URL = "http://127.0.0.1:3000";
process.env.REACT_APP_FRONTEND_URL = "http://127.0.0.1:8080";
process.env.REACT_APP_FRONTEND_PORT = "8080";
process.env.REACT_APP_BACKEND_PORT = "3000";

require( "./less/main.less" )

const app = document.getElementById( "app" );

ReactDOM.render(
	<div>
		<Provider store={ store }>
			<Router history={ browserHistory }>
				<div>
					<AuthCheck></AuthCheck>
					<Switch>
						<Route path="/@:user(\w+)/stores" exact component={ UserStores } />
						<Route path="/@:user(\w+)/receipts" exact component={ UserReceipts } />
						<Route path="/@:user(\w+)/drivethru" exact component={ UserDriveThru } />
						<Redirect from="/@:user(\w+)" to={ document.location.pathname + "/receipts" } exact />
						<Route path="/account/settings" component={ Account } exact />
						<Route path="/account/receipts" component={ AccountReceipts } exact />
						<Redirect from="/account" to="/account/settings" exact />
						<Route path="/" component={ Splash } exact />
						<Route path="/search" component={ SearchUsers } exact />
						<Redirect from="/challengers/0" to="/challengers" exact />
						<Redirect from="/challengers/1" to="/challengers" exact />
						<Route path="/challengers/:page(\d+)" exact component={ Users } />
						<Route path="/challengers" component={ Users } exact />
						<Route path="/404" exact component={ PageNotFound } />
						<Redirect path="/*" to="/404" />
					</Switch>
				</div>
			</Router>
		</Provider>
	</div>
, app )