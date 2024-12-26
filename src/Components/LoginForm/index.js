import { Component } from "react";
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import "./index.css";

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    redirectToHome: false, // Added to handle redirection
    showpass:"password",
  };

  onShowPass = ()=>{
    const {showpass} = this.state 
    if(showpass === "text"){
        this.setState({showpass:"password"})
    }else{
        this.setState({showpass:"text"})
    }
  }

  onChangeUsername = event => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    });
    this.setState({ redirectToHome: true }); // Set redirection flag
  };

  onSubmitFailure = errorMsg => {
    this.setState({ showSubmitError: true, errorMsg });
  };

  submitForm = async event => {
    event.preventDefault();
    const { username, password } = this.state;
    const userDetails = { username, password };
    const url = 'https://apis.ccbp.in/login';
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token);
    } else {
      this.onSubmitFailure(data.error_msg);
    }
  };

  renderPasswordField = () => {
    const { password,showpass } = this.state;

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type={showpass}
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    );
  };

  renderUsernameField = () => {
    const { username } = this.state;

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    );
  };

  render() {
    const { showSubmitError, errorMsg, redirectToHome } = this.state;
    const jwtToken = Cookies.get('jwt_token');

    // Redirect if logged in or after successful login
    if (jwtToken !== undefined || redirectToHome) {
      return <Navigate to="/" replace />;
    }

    return (
      <div className="login-form-container">
        <img
          src="https://coderthemes.com/wb/greencart/assets/hero-2-7f8a8963.png"
          className="login-website-logo-mobile-img"
          alt="website logo"
        />
        <img
          src="https://coderthemes.com/wb/greencart/assets/hero-2-7f8a8963.png"
          className="login-img"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <div className="showPass">
          <input type="checkbox" onClick={this.onShowPass}/>
          <label className="lb">Show Password</label>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
          <div className="fl1">
            <p className="pp">Not a Member: <span className="sp">SignUp</span></p>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
