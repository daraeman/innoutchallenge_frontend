import React from "react"
import { NavLink } from "react-router-dom"

require( "../less/SubNav.less" )

export default class SubNav extends React.Component {

	render() {

		const paths = [
			{ url: "receipts", text: "receipts" },
			{ url: "stores", text: "stores" },
			{ url: "drivethru", text: "drive-thru" },
		]

		let path = this.props.url.replace( /(\/receipts|\/stores|\/drivethru)$/, "" )

		const mappedLinks = paths.map( ( link, index ) => (
			<li key={ index }>
				<NavLink to={ path + "/" + link.url } activeClassName="active">{ link.text }</NavLink>
			</li>
		))

		return	(
			<nav id="sub_nav">
				<ul>
					{ mappedLinks }
				</ul>
			</nav>
		)
	}
}