// components/Form/Form.jsx
import { Component } from 'react';

export default class Form extends Component {
  state = {
    content: ""
  };

  handleChange = (e) => {
    this.setState({content: e.target.value})
  }

  handleSubmit = async() => {
    //build the body of request
    let body = {content: this.state.content}
    //build an options object
    let options = {
      method: "POST",
      headers: {
        'Content-Type': 'applications/json'
      },
      body: JSON.stringify(body) 
    }
    await fetch("/api", options)
    .then(res => res.json())
    .then(data => {
      this.props.getFoods()
      this.setState({content: ''})
    })
  }

  render() {
    return(
      <div>
        <textarea 
          name="content"
          onChange={this.handleChange}
          value={this.state.content}></textarea>
        <br/>
        <button onClick={this.handleSubmit}>Submit!</button>
      </div>
    )
  }
}