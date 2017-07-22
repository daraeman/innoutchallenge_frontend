import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import TopNav from "./TopNav"

require( "../less/PageNotAuthorized.less" )

export default class PageNotAuthorized extends React.Component {

	sanitizeUrl( url ) {
		return url.replace( /[^\w\@\-\_\/]+/g, "" );
	}

	render() {

		let return_param = ( this.props.returnUrl ) ? "/return/" + encodeURIComponent( this.sanitizeUrl( this.props.returnUrl ) ) : ""
		let signin_url = process.env.REACT_APP_BACKEND_URL + "/signin" + return_param

		return (
			<div>
				<TopNav title="Not Authorized" />
				<div class="container" id="main_content">
					<div class="text">You are not authorized to view this page.</div>
					<a href={ signin_url } className="button">Sign In to continue</a>
				</div>
			</div>
		)
	}
}