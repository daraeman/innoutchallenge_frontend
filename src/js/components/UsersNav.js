import React from "react"
import { NavLink } from "react-router-dom"

require( "../less/UsersNav.less" )

export default class UsersNav extends React.Component {

	render() {

		const { hasPreviousPage, hasNextPage } = this.props
		const currentPage = parseInt( this.props.currentPage )

		console.log( "UsersNav currentPage [%s]", currentPage )
/*
		const max_pages_shown = 4
		const min_page = 1
		
		console.log( "this.props >> ", this.props )

		let pages = []
		const start_page = ( ( currentPage - max_pages_shown ) < min_page ) ? min_page : ( currentPage - max_pages_shown )

		for ( let page = start_page; page < ( start_page + max_pages_shown ); page++ ) {
			pages.push((
				<NavLink to={ "/challengers/" + page } class="page" activeClassName="active" key={ page }>{ page }</NavLink>
			))
		}
*/
		let previousLink = ( hasPreviousPage ) ? <NavLink to={  "/challengers/" + ( currentPage - 1 ) } class="previous"></NavLink> : <NavLink to="/" class="previous disabled"></NavLink>
		let nextLink = ( hasNextPage ) ? <NavLink to={  "/challengers/" + ( currentPage + 1 ) } class="next"></NavLink> : <NavLink to="/" class="next disabled"></NavLink>

		/*
				<div class="pages">
					{ pages }
				</div>
		*/

		return (
			<nav id="challengers_nav" class="footer">
				
				{ previousLink }
				{ nextLink }
			</nav>
		)
	}
}