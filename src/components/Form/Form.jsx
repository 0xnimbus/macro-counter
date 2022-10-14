import { Component } from 'react';

export default class Form extends Component {
  state = {
    foods: "",
    calories: ""
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
}

handleSubmit = async () => {
  // build the body of our request
  let body = { 
    foods: this.state.foods,
    calories: this.state.calories
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

  render() {
    return(
      <div>
        <div className='form-div'>
        <textarea 
          placeholder='Insert Food Name'
          name="foods"
          className='input-text'
          onChange={this.handleChange}
          value={this.state.foods}></textarea>
        <br/> 
        <textarea 
          placeholder='Insert Calorie Amount'
          name="calories"
          className='input-text'
          onChange={this.handleChange}
          value={this.state.calories}></textarea>
        <br/>
        </div>
        <button className='submit-button' onClick={this.handleSubmit}>Submit!</button>
      </div>
    )
  }
}