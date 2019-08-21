import React, { Component } from 'react'
import Counters from './components/Counter/counters'
import Navbar from './components/NavBar/navbar'

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  }

  handleDelete = counterId => {
    console.log('Delete from counterS', counterId)
    const counters = this.state.counters.filter(c => c.id != counterId)
    this.setState({ counters })
  }

  handleReset = () => {
    console.log('Reset called')
    const counters = this.state.counters.map(c => {
      c.value = 0
      return c
    })
    this.setState({ counters })
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters] // "..." operater is cloning the counters from this state
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].value++
    console.log(this.state.counters[index])
    this.setState({ counters })
  }
  render () {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className='container'>
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    )
  }
}

export default App
