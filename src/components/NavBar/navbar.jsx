import React, { Component } from 'react'
import './navbar.css'

class Navbar extends Component {
  render () {
    return (
      <nav className='navbar navbar-light bg-light custom'>
        <span>Total Counters</span>
        <span className='badge badge-pill badge-secondary'>
          {this.props.totalCounters}
        </span>
      </nav>
    )
  }
}

export default Navbar
