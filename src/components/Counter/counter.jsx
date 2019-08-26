import React, { Component } from 'react'
import './counter.css'

class Counter extends Component {
  // State -- special property that has any data that this component needs. State is privte to the component.
  // props is the data that we give to the component. Props is read only. We cannot change props.
  //   state = {
  //     value: this.props.counter.value
  //   }

  //   handleIncrement = () => {
  //     this.setState({ value: this.state.value + 1 })
  //   }

  render () {
    console.log('Counter props->', this.props)
    return (
      <div>
        <div className='row customWidth'>
          <div className='col-3'>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          </div>
          <div className='col-3'>
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className='btn btn-secondary btn-sm m-2'
            >
              +
            </button>
          </div>
          <div className='col-3'>
            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              className='btn btn-secondary btn-sm m-2'
            >
              -
            </button>
          </div>
          <div className='col-3'>
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className='btn btn-danger btn-sm m-2'
            >
              X
            </button>
          </div>
        </div>
      </div>
    )
  }

  getBadgeClasses () {
    let classes = 'badge m-2 badge-'
    classes += this.props.counter.value === 0 ? 'warning' : 'primary'
    return classes
  }

  formatCount () {
    const { value } = this.props.counter
    return value === 0 ? <span>Zero</span> : value
  }
}

export default Counter
