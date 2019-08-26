import React, { Component } from 'react'
import Counter from './counter'

class Counters extends Component {
  render () {
    console.log(this.props)
    const { onDecrement, onReset, counters, onDelete, onIncrement } = this.props
    return (
      <div>
        <button onClick={onReset} className='btn btn-primary btn-sm m-2'>
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    )
  }
}

export default Counters
