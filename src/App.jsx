import { Component } from 'react';
import './App.css';

import Page from './Components/Page.jsx'
// import Home from './Components/Home.jsx'
// import Meals from './Components/Meals.jsx'
// import Food from './Components/Food.jsx'

export default class App extends Component {

  state = {
    page: 'Home',
    content: '',
  }

  homeButton = () => {
    this.setState({page: 'Home'})
  }

  mealsButton = () => {
    this.setState({page: 'Meals'})
  }

  foodsButton = () => {
    this.setState({page: 'Foods'})
  }

  getFoods = async() => {
    await fetch('/api').then((res) => res.json()).then(data => this.setState({foods: data}))
  }

  componentDidMount() {
    this.getFoods()
  }

  render() {
    return (
      <main className="App">
        <nav className='Main-Nav'> 
          <button onClick={this.homeButton} className='Nav-Button'> Home </button>
          <button onClick={this.mealsButton} className='Nav-Button'> Meals </button>
          <button onClick={this.foodsButton} className='Nav-Button'> Foods </button>
        </nav>

        <nav >
        <Page page={this.state.page} getFoods={this.getFoods}/> 
        {/* {this.state.foods.length ?
            this.state.foods.map(p => (
              <Page
              page={this.state.page}
              food={p}
              getFoods={this.getFoods}
              /> 
            ))
            :
            <Page page={this.state.page}/> 
            }  */}
        </nav> 

        <nav>
        
        </nav>
      </main>
    )
  }
}
