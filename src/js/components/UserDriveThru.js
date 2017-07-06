import React from "react"
import { connect } from "react-redux"

import { fetchUserDriveThru } from "../actions/userActions"
import TopNav from "./TopNav"
import SubNav from "./SubNav"

require( "../less/User.less" )

@connect( ( store ) => {
	console.log( "store >>", store )
	return {
		user: store.userDriveThru.user,
		user_fetched: store.userDriveThru.fetched,
	}
})

export default class UserDriveThru extends React.Component {

	componentWillMount() {
		this.props.dispatch( fetchUserDriveThru() )
	}

	render() {

		const { user } = this.props;

		const mappedDriveThru = user.drivethru.map( ( drivethru, index ) => (
			<li className="number receipt" key={ index }>{ drivethru.number }</li>
		))

		return	(
			<div>
				<TopNav title={ user.name } />
				<SubNav url={ this.props.match.url } />
				<div class="container" id="main_content">
					<div class="section totals">
						<div class="item left">
							<div class="title">
								Unique
							</div>
							<div class="number">
								{ user.totals.drivethru.total }
							</div>
						</div>
						<div class="item middle">
							<div class="title">
								total
							</div>
							<div class="number">
								{ user.totals.drivethru.total }
							</div>
						</div>
						<div class="item right">
							<div class="title">
								remaining
							</div>
							<div class="number">
								{ user.totals.drivethru.remaining }
							</div>
						</div>
					</div>
					<div class="section individuals">
						<ul>
							{ mappedDriveThru }
						</ul>
					</div>
				</div>
			</div>
		)
	}
}