import React from "react"
import { connect } from "react-redux"

import { fetchUserStores } from "../actions/userActions"

import Error from "./Error"
import TopNav from "./TopNav"
import SubNav from "./SubNav"
import PageNotFound from "./PageNotFound"
import PageNotAuthorized from "./PageNotAuthorized"

require( "../less/User.less" )

@connect( ( store ) => {
	return {
		user: store.userStores.user,
		error: store.userStores.error,
	}
})

export default class UserStores extends React.Component {

	componentWillMount() {
		this.props.dispatch( fetchUserStores( this.props.dispatch, this.props.match.params.user ) )
	}

	render() {

		const { user, error } = this.props;

		let mappedStores = []

		if ( error ) {
			console.log( "error", error )
			if ( error.status === 404 ) {
				console.log( "404" )
				return (
					<PageNotFound error="Page was not found yo!" />
				)
			}
			else if ( error.status === 403 ) {
				console.log( "403" )
				return (
					<PageNotAuthorized returnUrl={ this.props.location.pathname } />
				)
			}
		}

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


		return	(
			<div>
				<Error error={ [ error ] } />
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