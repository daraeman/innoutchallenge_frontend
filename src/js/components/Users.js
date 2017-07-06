import React from "react"
import { connect } from "react-redux"

import { Link } from "react-router-dom"

import { fetchUsers } from "../actions/usersActions"

import Error from "./Error"
import TopNav from "./TopNav"
import UsersNav from "./UsersNav"

require( "../less/Users.less" )

@connect( ( store ) => {
	return {
		users: store.users.users,
		error: store.users.error,
		user_fetched: store.users.fetched,
	}
})

export default class Users extends React.Component {

	componentWillMount() {
		this.setState({
			users_per_page: 9
		}, () => {
			this.props.dispatch( fetchUsers( this.props.dispatch, null, this.state.users_per_page, 0 ) )
		})
	}

	render() {

		const { users, error } = this.props;

		let content
		let errorMessages = []

		if ( error ) {
			errorMessages = error
		}
		else {
			content = users.map( ( user ) => {
				return (
					<Link className="item challenger" key={ user.name } to={ "@" + user.name }>
						<div className="number">{ user.totals.receipts.unique }</div>
						<div className="name">{ user.name }</div>
					</Link>
				)
			})
		}

		return	(
			<div>
				<Error messages={ errorMessages } />
				<TopNav title="Challengers" />
				<div className="container" id="main_content">
					<div className="challengers">
						{ content }
					</div>
					<UsersNav />
				</div>
			</div>
		)
	}
}