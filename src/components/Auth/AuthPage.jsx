import React from 'react'
import LoginForm from '../../components/Auth/LoginForm';
import SignUpForm from '../../components/Auth/SignupForm';


export default class AuthPage extends React.Component {
  state = {
    showLogin: true,
  }

  render() {
    return (
      <main className="AuthPage">
        <div className='signup-div'>
          <h3 className='signup'onClick={() => this.setState({ showLogin: !this.state.showLogin })}>
            {this.state.showLogin ? 'SIGN UP (Click me to switch)' : 'LOG IN (Click me to switch)'}
          </h3>
        </div>
        {/* Another ternary operator! */}
        {/* If showLogin is true, show the login form. If false, show the signup form */}
        {this.state.showLogin ? 
        <LoginForm setUserInState={this.props.setUserInState}/> : 
        <SignUpForm setUserInState={this.props.setUserInState} />}
      </main>
    );
  }
}