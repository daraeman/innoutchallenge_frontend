import React from "react"
import { connect } from "react-redux"

import { Link } from "react-router-dom"

import { fetchUsers } from "../actions/usersActions"

import Error from "./Error"
import TopNav from "./TopNav"
import UsersNav from "./UsersNav"

require( "../less/Users.less" )
require( "../less/UsersNav.less" )

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
		console.log( "componentWillMount" )
		this.setState({
			users_per_page: 6,
			current_page: parseInt( this.props.match.params.page ) || 1,
		}, () => {
			this.props.dispatch( fetchUsers( this.props.dispatch, null, this.state.users_per_page, this.state.current_page ) )
		})
	}
/*
	componentWillReceiveProps( props ) {
		console.log( "componentWillReceiveProps" )
		console.log( "this.props.match.params.page", this.props.match.params.page )

		// to avoid a state-change loop
		if ( this.state.current_page === parseInt( this.props.match.params.page ) )
			return;

		this.setState({
			current_page: parseInt( this.props.match.params.page ) || 1,
		}, () => {
			this.props.dispatch( fetchUsers( this.props.dispatch, null, this.state.users_per_page, this.state.current_page ) )
		})

	}
*/
	changePage( number ) {
		console.log( "changePage [%s]", number )

		if ( this.state.current_page === number )
			return;

		this.setState({
			current_page: number || 1,
		}, () => {
			this.props.dispatch( fetchUsers( this.props.dispatch, null, this.state.users_per_page, this.state.current_page ) )
		})
	}

	formatNumber( number ) {
		if ( number == 69 )
			return "68½";
		return number;
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
						<div className="number">{ this.formatNumber( user.totals.receipts.unique ) }</div>
						<div className="name">{ user.name }</div>
					</Link>
				)
			})
		}

		let previousLink = ( hasPreviousPage ) ? <Link to={  "/challengers/" + ( this.state.current_page - 1 ) } class="previous" onClick={ () => this.changePage( ( this.state.current_page - 1 ) ) }></Link> : <Link to="/" class="previous disabled"></Link>
		let nextLink = ( hasNextPage ) ? <Link to={  "/challengers/" + ( this.state.current_page + 1 ) } class="next" onClick={ () => this.changePage( ( this.state.current_page + 1 ) ) }></Link> : <Link to="/" class="next disabled"></Link>

		return (
			<div>
				<Error messages={ errorMessages } />
				<TopNav title="Challengers" showBackButton={ false } />
				<div className="container" id="main_content">
					<div className="challengers">
						{ content }
					</div>
					<nav id="challengers_nav" class="footer">
						{ previousLink }
						{ nextLink }
					</nav>
				</div>
			</div>
		)
	}
}