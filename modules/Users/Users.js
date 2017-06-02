import React from 'react'
import NavLink from '../NavLink/NavLink'

export default React.createClass({
	render() {
		return (

			<div className="challengers">

				<div className="item challenger">
					<div className="number">
						19
					</div>
					<div className="name">
						<NavLink to="/challengers/stuballew">@stuballew</NavLink>
					</div>
				</div>

				<div className="item challenger">
					<div className="number">
						19
					</div>
					<div className="name">
						<NavLink to="/challengers/stuballew">@stuballew</NavLink>
					</div>
				</div>

				{this.props.children}

			</div>
		)
	}
})
