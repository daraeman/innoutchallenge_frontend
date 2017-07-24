import React from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom";

require( "../less/TopNav.less" )

@connect( ( store ) => {
	return {
		authenticated: store.authCheck.authenticated,
	}
})

export default class TopNav extends React.Component {

	constructor( props ) {
		super( props );
		this.state = {
			sidebarClass: "closed",
			backButtonClass: ( this.props.showBackButton ) ? "show" : "hide",
		};

		this.sidebarToggle = this.sidebarToggle.bind( this );
	}

	sidebarToggle() {
		let className = ( this.state.sidebarClass === "open" ) ? "closed" : "open";
		this.setState({
			sidebarClass: className
		});
	}

	render() {

		let { authenticated } = this.props

		console.log( "TopNav authenticated", authenticated )

		const title = this.props.title

		let authLinks
		if ( authenticated ) {
			authLinks = (
				<div>
					<li><a href="/account/settings" onClick={ this.sidebarToggle }>Account</a></li>
					<li><a href={ process.env.REACT_APP_BACKEND_URL + "/signout" } onClick={ this.sidebarToggle }>Sign Out</a></li>
				</div>
			)
		}
		else {
			authLinks = (
				<div>
					<li><a href={ process.env.REACT_APP_BACKEND_URL + "/signin" } onClick={ this.sidebarToggle }>Sign In</a></li>
				</div>
			)
		}


		return (
			<div class="top">
				<nav id="top_nav">
					<div class="logo">
						<NavLink to="/" class={ this.state.backButtonClass }><i class="fa fa-close" aria-hidden="true"></i></NavLink>
					</div>
					<ul class="dropdown">
						<li onClick={ this.sidebarToggle }>
							<i class="fa fa-bars icon" aria-hidden="true"></i>
						</li>
					</ul>
					<div class="text">
						{ title }
					</div>
				</nav>
				<div id="side_nav_clickfield" class={ this.state.sidebarClass } onClick={ this.sidebarToggle }></div>
				<ul id="side_nav" class={ this.state.sidebarClass }>
					<li><NavLink to="/challengers" activeClassName="active" onClick={ this.sidebarToggle }>Challengers</NavLink></li>
					{ authLinks }
				</ul>
			</div>
		)
	}
}