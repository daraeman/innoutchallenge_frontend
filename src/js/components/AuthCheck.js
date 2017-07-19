import React from "react"
import { connect } from "react-redux"

import { fetchAuthState } from "../actions/authCheckActions"

@connect( ( store ) => {
	console.log( "store", store )
	return {
		authenticated: store.authCheck.authenticated,
		error: store.authCheck.error,
		statusCode: store.authCheck.statusCode,
	}
})

export default class AuthCheck extends React.Component {

	componentWillMount() {
		console.log( "this.props", this.props )
		this.props.dispatch( fetchAuthState( this.props.dispatch ) )
	}

	render() {

		console.log( "this.props", this.props )

		return (
			<div></div>
		)
	}

}