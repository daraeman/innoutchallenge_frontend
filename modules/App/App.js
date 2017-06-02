import React from 'react'
import NavLink from '../NavLink/NavLink'

export default React.createClass({
	render() {
		return (

			<div>

				<header className="top">
					<nav id="main_nav">
						<div className="logo"></div>
						<ul className="dropdown">
							<li>
								<i className="fa fa-bars icon" aria-hidden="true"></i>
								<ul className="dropdown_target" role="nav">
									<li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
									<li><NavLink to="/about">About</NavLink></li>
									<li><NavLink to="/challengers">Challengers</NavLink></li>
								</ul>
							</li>
						</ul>
						<div className="text">
							Challengers
						</div>
					</nav>
				</header>

				<div className="container" id="main_content">
					{this.props.children}
				</div>

			</div>

		)
	}
})
