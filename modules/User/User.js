import React from 'react'
import NavLink from '../NavLink/NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Users</h2>
        <ul>
          <li><NavLink to="/users/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/users/facebook/react">React</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
