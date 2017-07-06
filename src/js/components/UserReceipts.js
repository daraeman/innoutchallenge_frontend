import React from "react"
import { connect } from "react-redux"

import { fetchUserReceipts } from "../actions/userActions"
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
		this.props.dispatch( fetchUserReceipts( this.props.match.params.name ) )
	}

	render() {

		const { user } = this.props;

		const mappedReceipts = user.receipts.map( ( receipt, index ) => (
			<li className="number receipt single" key={ index }>{ receipt.number }</li>
		))

		return	(
			<div>
				<TopNav title={ user.name } />
				<SubNav url={ this.props.match.url } />
				<div class="container" id="main_content">
					<div class="section totals">
						<div class="item left">
							<div class="title">
								left
							</div>
							<div class="number">
								{ user.totals.receipts.remaining }
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
								total
							</div>
							<div class="number">
								{ user.totals.receipts.total }
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