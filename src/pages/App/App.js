import { Component } from 'react';
import './App.css';
//Add the Route named import 

import {Route, Switch, Redirect} from 'react-router-dom'

import Form from '../../components/Form/Form';
import Food from '../../components/Food/Food';
import AuthPage from '../../components/Auth/AuthPage'

export default class App extends Component {
  state = {
    user: null, 
    foods: [],
    newFood: '',
    newCals: 0, 
    //Will come back and make cal counter work
    totalCals: 0,
  }

  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData})
  }

  //Will come back and make cal counter work
  calSum = async () => { 
    await this.state.foods.map(f => 
     this.setState({totalCals: f + this.state.totalCals})
      )
  }

  getFoods = async () => {
    await fetch("/api").then(res => res.json()).then(foods => this.setState({ foods }))
    .then(this.calSum())
  }

  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1])); 
      if (payload.exp < Date.now() / 1000) {  
        localStorage.removeItem('token');
        token = null;
      } else { 
        let userDoc = payload.user 
        this.setState({user: userDoc})      
      }
    }
  }

  newName = async (name, cals) => {
    var tempName 
    var tempNum
    tempName = prompt(`Please enter the new name for food ${name}`, `${name}`)
    await this.setState({newFood: tempName})
    tempNum = prompt(`Please enter the new Calorie (Previously ${cals})`, `${cals}`)
    await this.setState({newCals: tempNum})

  }

  delFood = async (id) => {
    //Build req body
    await fetch(`/api/del/${id}`)
    .then(fetch("/api"))
    .then(this.getFoods())
    
  }

  handleSubmit = async () => {
    // build the body of our request
    let body = { 
      foods: this.state.newFood,
      calories: this.state.newCals
    }
    // build an options object
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }
    await fetch("/api", options)
      .then(res => res.json())
      .then(data => {
        this.props.getFoods()
        this.setState({foods: ''})
        this.setState({calories: ''})
      })
  }


  totalCals = async (f) => {
    let num
    num = this.state.totalCals + f
    this.setState({totalCals: num})
  }


  updateFood = async (id, name, cals) => {
    // Could not get update function to work so I made a janky version 
    //Build req body
    await this.newName(name, cals)
    await this.handleSubmit()
    .then(fetch(`/api/del/${id}`))
    .then(fetch("/api"))
    .then(this.getFoods())
  }

  componentDidMount() {
    this.getFoods()
  }

  render() {
    return (
      <div className="App">
        { this.state.user ? 
      <Route>
        <div className='title-div'>
          <h1 className='title'>Meal Tracker</h1> 
        </div>
        <div className='form-div'>
        <Form
          getFoods={this.getFoods}
        />
        </div>
        {/* Will come back and make cal counter work */}
        {/* <div className='totalCals-div'> 
          {this.state.totalCals}
        </div> */}
        <table>
          <tr> 
            <th>
        {this.state.foods.length ? 
          
          this.state.foods.map(f => 
            <Food
              food={f}
              getFoods={this.getFoods}
              delFood={this.delFood}
            />
          )
          
            :
          <h1>No Foods</h1>
        } 
            </th>
        <th>
        {this.state.foods.length ? 
          
          this.state.foods.map(f => 
            <button className='del-button' onClick={() => this.delFood(f._id)}> ??? </button>          
          )
            :
          console.log('filler')
        } 
        
            </th>

            <th>
            {this.state.foods.length ? 
          
          this.state.foods.map(f => 
            <button className='del-button' onClick={() => this.updateFood(f._id, f.foods, f.calories)}> ??? </button>          
          )
          
            :
          console.log('filler')
        } 
            </th> 
          </tr>
        </table>
        </Route>
        :
        <AuthPage setUserInState={this.setUserInState}/>
        }
      </div>
    );
  }
}