import React from "react"
import { connect } from "react-redux"

import { fetchUserStores } from "../actions/userActions"
import TopNav from "./TopNav"
import SubNav from "./SubNav"

require( "../less/User.less" )

@connect( ( store ) => {
	console.log( "store >> ", store )
	return {
		user: store.userStores.user,
		user_fetched: store.userStores.fetched,
	}
})

export default class UserStores extends React.Component {

	componentWillMount() {
		this.props.dispatch( fetchUserStores() )
	}

	render() {

		const { user } = this.props;

		const mappedStores = user.stores.map( ( store, index ) => (
			<li className="number store" key={ index }>{ store.number }</li>
		))

		return	(
			<div>
				<TopNav title={ user.name } />
				<SubNav url={ this.props.match.url } />
				<div class="container" id="main_content">
					<div class="section totals">
						<div class="item left">
							<div class="title">
								unique
							</div>
							<div class="number">
								{ user.totals.stores.unique }
							</div>
						</div>
						<div class="item middle">
							<div class="title">
								total
							</div>
							<div class="number">
								{ user.totals.stores.total }
							</div>
						</div>
						<div class="item right">
							<div class="title">
								remaining
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