import React from "react"

require( "../less/UsersNav.less" )

export default class UsersNav extends React.Component {

	render() {

		return	(
			<nav id="challengers_nav" class="footer">
				<div class="pages">
					<a class="page active">1</a>
					<a class="page">2</a>
					<a class="page">3</a>
					<a class="page">4</a>
				</div>
				<div class="previous"></div>
				<div class="next"></div>
			</nav>
		)
	}
}