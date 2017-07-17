import React from "react"

require( "../less/Error.less" )

export default class Error extends React.Component {

	render() {

		let messages
		if ( typeof this.props.messages === "string" )
			messages = [ this.props.messages ]
		else if ( typeof this.props.messages === "object" )
			messages = [ this.props.messages.error ]
		else
			messages = this.props.messages

		const content = messages.map( ( message, index ) => (
			<div class="error" key={ index }>
				{ message }
			</div>
		))

		return	(
			<div class="errors">
				{ content }
			</div>
		)
	}
}