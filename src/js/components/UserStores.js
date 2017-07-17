import React from "react"
import { connect } from "react-redux"

import { fetchUserStores } from "../actions/userActions"

import Error from "./Error"
import TopNav from "./TopNav"
import SubNav from "./SubNav"
import PageNotFound from "./PageNotFound"

require( "../less/User.less" )

@connect( ( store ) => {
	console.log( store )
	return {
		user: store.userStores.user,
		error: store.userDriveThru.error,
		statusCode: store.userDriveThru.statusCode,
	}
})

export default class UserStores extends React.Component {

	componentWillMount() {
		this.props.dispatch( fetchUserStores( this.props.dispatch, this.props.match.params.user ) )
	}

	render() {

		const { user, error, statusCode } = this.props;

		let mappedStores = []
		let errorMessages = []

		if ( error ) {
			if ( statusCode === 404 ) {
				return (
					<PageNotFound error="Page was not found yo!" />
				)
			}
			errorMessages = error
		}
		else {
			const store_keys = Object.keys( user.stores ).sort( ( a, b ) => { return a - b });
			store_keys.forEach( ( number ) => {
				let store = user.stores[ number ];
				let classes = [ "number", "store" ];
				if ( store.amount > 0 ) {
					console.log( "amount: ", store.amount )
					classes.push( "has" );
				}
				if ( store.amount > 1 )
					classes.push( "multiple" );
				mappedStores.push( ( <li className={ classes.join( " " ) } key={ number }>{ number }</li> ) )
			} )
		}

		return	(
			<div>
				<TopNav title={ "@" + user.name } showBackButton={ true } />
				<SubNav url={ this.props.match.url } />
				<div class="container" id="main_content">
					<div class="section totals">
						<div class="item circle middle">
							<div class="title">
								unique
							</div>
							<div class="number">
								{ user.totals.stores.unique }
							</div>
						</div>
						<div class="item circle right">
							<div class="title">
								left
							</div>
							<div class="number">
								{ user.totals.stores.remaining }
							</div>
						</div>
					</div>
					<div class="section individuals">
						<ul>
							{ mappedStores }
						</ul>
					</div>
				</div>
			</div>
		)
	}
}