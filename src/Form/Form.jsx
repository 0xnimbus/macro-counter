// components/Form/Form.jsx
import { Component } from 'react';

export default class Form extends Component {
  state = {
    content: ""
  };

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