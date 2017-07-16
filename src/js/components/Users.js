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
		hasPreviousPage: store.users.hasPreviousPage,
		hasNextPage: store.users.hasNextPage,
		currentPage: store.users.currentPage,
	}
})

export default class Users extends React.Component {

	componentWillMount() {
		this.setState({
			users_per_page: 9,
			current_page: parseInt( this.props.match.params.page ) || 1,
		}, () => {
			this.props.dispatch( fetchUsers( this.props.dispatch, null, this.state.users_per_page, this.state.current_page ) )
		})
	}

	componentWillReceiveProps( props ) {

		if ( this.state.current_page === parseInt( this.props.match.params.page ) )
			return;

		this.setState({
			current_page: parseInt( this.props.match.params.page ) || 1,
		}, () => {
			this.props.dispatch( fetchUsers( this.props.dispatch, null, this.state.users_per_page, this.state.current_page ) )
		})

	}

	render() {

		const { users, error, hasPreviousPage, hasNextPage } = this.props;
		console.log( "this.state.current_page [%s]", this.state.current_page )

		let content
		let errorMessages = []

		if ( error ) {
			errorMessages = error
		}
		else {
			content = users.map( ( user ) => {
				return (
					<Link className="item challenger" key={ user.name } to={ "/@" + user.name }>
						<div className="number">{ user.totals.receipts.unique }</div>
						<div className="name">{ user.name }</div>
					</Link>
				)
			})
		}

		return (
			<div>
				<Error messages={ errorMessages } />
				<TopNav title="Challengers" showBackButton={ false } />
				<div className="container" id="main_content">
					<div className="challengers">
						{ content }
					</div>
					<UsersNav hasPreviousPage={ hasPreviousPage } hasNextPage={ hasNextPage } currentPage={ this.state.current_page } />
				</div>
			</div>
		)
	}
}