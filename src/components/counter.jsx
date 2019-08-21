import React, { Component } from 'react'

class Counter extends Component {
  state = {
    // special property that has any data that this component needs. State is privte to the component.
    value: this.props.counter.value // props is the data that we give to the component. Props is read only. We cannot change props.
  }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 })
  }

  render () {
    return (
      <div>
        {/* <h4>{this.props.id}</h4> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className='btn btn-danger btn-sm m-2'
        >
          Delete
        </button>
      </div>
    )
  }

  getBadgeClasses () {
    let classes = 'badge m-2 badge-'
    classes += this.state.value === 0 ? 'warning' : 'primary'
    return classes
  }

  formatCount () {
    const { value } = this.state
    return value === 0 ? <h1>Zero</h1> : value
  }
}

export default Counter
