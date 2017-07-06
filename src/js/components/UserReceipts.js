import React from "react"
import { connect } from "react-redux"

import { fetchUserReceipts } from "../actions/userActions"

import Error from "./Error"
import TopNav from "./TopNav"
import SubNav from "./SubNav"

require( "../less/User.less" )

@connect( ( store ) => {
	return {
		user: store.userReceipts.user,
		user_fetched: store.userReceipts.fetched,
	}
})

export default class UserReceipts extends React.Component {

	componentWillMount() {
		this.props.dispatch( fetchUserReceipts( this.props.dispatch, this.props.match.params.user ) )
	}

	render() {

		console.log( "this.props.user >> ", this.props.user )

		const { user, error } = this.props;

		let mappedReceipts = []
		let errorMessages = []

		if ( error ) {
			errorMessages = error
		}
		else {
			const receipt_keys = Object.keys( user.receipts ).sort( ( a, b ) => { return a - b });
			receipt_keys.forEach( ( number ) => {
				let receipt = user.receipts[ number ];
				mappedReceipts.push( ( <li className="number receipt single" key={ number }>{ number }</li> ) )
			} )
		}

		return	(
			<div>
				<TopNav title={ "@" + user.name } />
				<SubNav url={ this.props.match.url } />
				<div class="container" id="main_content">
					<div class="section totals">
						<div class="item left">
							<div class="title">
								total
							</div>
							<div class="number">
								{ user.totals.receipts.total }
							</div>
						</div>
						<div class="item middle">
							<div class="title">
								unique
							</div>
							<div class="number">
								{ user.totals.receipts.unique }
							</div>
						</div>
						<div class="item right">
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