import { Component } from 'react';
import './App.css';

import Page from './Components/Page.jsx'

export default class App extends Component {

  state = {
    page: 'home',

  }

  homeButton = () => {
    this.setState({page: 'home'})
  }

  mealsButton = () => {
    this.setState({page: 'meals'})
  }

  foodsButton = () => {
    this.setState({page: 'foods'})
  }

  render() {
    return (
      <main className="App">
        <nav className='Main-Nav'> 
          <button onClick={this.homeButton} className='Nav-Button'> Home </button>
          <button onClick={this.mealsButton} className='Nav-Button'> Meals </button>
          <button onClick={this.foodsButton} className='Nav-Button'> Foods </button>
        </nav>
        <Page page= {this.state.page} /> 
      </main>
    )
  }
}
