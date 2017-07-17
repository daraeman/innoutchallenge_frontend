import React from "react"
import { NavLink } from "react-router-dom";

require( "../less/TopNav.less" )

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

		const title = this.props.title

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
					<li><NavLink to="/map" activeClassName="active" onClick={ this.sidebarToggle }>Map</NavLink></li>
					<li><NavLink to="/about" activeClassName="active" onClick={ this.sidebarToggle }>About</NavLink></li>
					<li><NavLink to="/account" activeClassName="active" onClick={ this.sidebarToggle }>Account</NavLink></li>
				</ul>
			</div>
		)
	}
}