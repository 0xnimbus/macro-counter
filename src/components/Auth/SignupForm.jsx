import { Component } from 'react';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const fetchResponse = await fetch('/api/users/signup', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            name: this.state.name, 
            email: this.state.email, 
            password: this.state.password,})
      })
      
      if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')
      
      let token = await fetchResponse.json() 
      localStorage.setItem('token', token);
      
      const userDoc = JSON.parse(atob(token.split('.')[1])).user;
      this.props.setUserInState(userDoc)

    } catch (err) {
      console.log("SignupForm error", err)
      this.props.setState({ error: 'Sign Up Failed - Try Again' });
    }
  }

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" className='auth-input' value={this.state.name} onChange={this.handleChange} required />
            <br></br>
            <label>Email</label>
            <input type="email" name="email" className='auth-input' value={this.state.email} onChange={this.handleChange} required />
            <br></br>
            <label>Password</label>
            <input type="password" name="password" className='auth-input' value={this.state.password} onChange={this.handleChange} required />
            <br></br>
            <label>Confirm</label>
            <input type="password" name="confirm" className='auth-input' value={this.state.confirm} onChange={this.handleChange} required />
            <br></br>
            <button type="submit" className='login-btn' disabled={disable}>SIGN UP</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}
