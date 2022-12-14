import { Component } from 'react';

export default class SignUpForm extends Component {
  state = {
    email: '',
    password: '',
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
      const fetchResponse = await fetch('/api/users/login', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
            email: this.state.email, 
            password: this.state.password, })
      })

      if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')

      let token = await fetchResponse.json()
      localStorage.setItem('token', token); 

      const userDoc = JSON.parse(atob(token.split('.')[1])).user; 
      this.props.setUserInState(userDoc)

    } catch (err) {
      console.log("SignupForm error", err)
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  }

  render() {
    return (
      <div>
        <div className="form-container" onSubmit={this.handleSubmit}>
          <form autoComplete="off" >
            <label>Email</label>
            <input type="text" name="email" className='auth-input' value={this.state.email} onChange={this.handleChange} required />
            <br></br>
            <label>Password</label>
            <input type="password" name="password" className='auth-input' value={this.state.password} onChange={this.handleChange} required />
            <br></br>
            <button className='login-btn' type="submit">LOG IN</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}