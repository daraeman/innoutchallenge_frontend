import React from "react"
import { connect } from "react-redux"

import { fetchUserReceipts } from "../actions/userActions"

import Error from "./Error"
import TopNav from "./TopNav"
import SubNav from "./SubNav"
import PageNotFound from "./PageNotFound"

require( "../less/User.less" )

@connect( ( store ) => {
	return {
		user: store.userReceipts.user,
		error: store.userDriveThru.error,
		statusCode: store.userDriveThru.statusCode,
	}
})

export default class UserReceipts extends React.Component {

	componentWillMount() {
		this.props.dispatch( fetchUserReceipts( this.props.dispatch, this.props.match.params.user ) )
	}

	render() {

		console.log( "this.props.user >> ", this.props.user )

		const { user, error, statusCode } = this.props;

		let mappedReceipts = []
		let errorMessages = []

		console.log( "statusCode >> ", statusCode )
		console.log( "error >> ", error )

		if ( error ) {
			if ( statusCode === 404 ) {
				return (
					<PageNotFound error="Page was not found yo!" />
				)
			}
			errorMessages = error
		}
		else {
			const receipt_keys = Object.keys( user.receipts ).sort( ( a, b ) => { return a - b });
			receipt_keys.forEach( ( number ) => {
				let receipt = user.receipts[ number ];
				let classes = [ "number", "receipt", "single" ];
				if ( receipt.amount > 0 )
					classes.push( "has" );
				if ( receipt.amount > 1 )
					classes.push( "multiple" );
				mappedReceipts.push( ( <li className={ classes.join( " " ) } key={ number }>{ number }</li> ) )
			} )
		}

		return	(
			<div>
				<TopNav title={ "@" + user.name } />
				<SubNav url={ this.props.match.url } />
				<div class="container" id="main_content">
					<div class="section totals">
						<div class="item circle left small">
							<div class="title">
								total
							</div>
							<div class="number">
								{ user.totals.receipts.total }
							</div>
						</div>
						<div class="item circle middle">
							<div class="title">
								unique
							</div>
							<div class="number">
								{ user.totals.receipts.unique }
							</div>
						</div>
						<div class="item circle right small">
							<div class="title">
								left
							</div>
							<div class="number">
								{ user.totals.receipts.remaining }
							</div>
						</div>
					</div>
					<div class="section individuals">
						<ul>
							{ mappedReceipts }
						</ul>
					</div>
				</div>
			</div>
		)
	}
}