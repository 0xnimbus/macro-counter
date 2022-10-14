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
        <h3> Insert Food Name</h3> 
        <textarea 
          name="foods"
          onChange={this.handleChange}
          value={this.state.foods}></textarea>
        <br/> 
        <h3>Insert Calorie Amount</h3>
        <textarea 
          name="calories"
          onChange={this.handleChange}
          value={this.state.calories}></textarea>
        <br/>
        <button onClick={this.handleSubmit}>Submit!</button>
      </div>
    )
  }
}