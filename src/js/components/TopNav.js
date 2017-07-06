import React from "react"
import { NavLink } from "react-router-dom";

require( "../less/TopNav.less" )

export default class TopNav extends React.Component {

	render() {

		const title = this.props.title

		return	(
			<div class="top">
				<nav id="top_nav">
					<div class="logo"></div>
					<ul class="dropdown">
						<li>
							<i class="fa fa-bars icon" aria-hidden="true"></i>
							<ul class="dropdown_target">
								<li><NavLink to="/challengers" activeClassName="active">Challengers</NavLink></li>
								<li><NavLink to="/map" activeClassName="active">Map</NavLink></li>
								<li><NavLink to="/about" activeClassName="active">About</NavLink></li>
								<li><NavLink to="/account" activeClassName="active">Account</NavLink></li>
							</ul>
						</li>
					</ul>
					<div class="text">
						{ title }
					</div>
				</nav>
			</div>
		)
	}
}