import React, {Component} from "react";
import {Link, Redirect} from 'react-router-dom';
import f  from '../Authorization';

export default class Login extends Component{
  state = {
    username: null,
    password: null,
    redirect: false
  }

  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to= "/userstats" />
    }
  }

  handleChange = (e) => {

    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    //console.log( this.state.username);
    this.props.login(this.state.username, this.state.password);
    e.preventDefault();
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
    render() {
      let setRedirect = () => {
        this.setState({
          redirect: true
        })
      }
      let ingresa = () => {
        f.authenticate(this.state.username, this.state.password);
        if(localStorage.getItem('username') != null){
            setRedirect();
        }
      }

      return (
        <div >
        {this.renderRedirect()}
          <div>
            <h3>Login</h3>
            <form onSubmit={this.handleSubmit}>
            <br/>
              <div>
              <label>
                <input placeholder="Usuario" type="text" id="username" onChange={this.handleChange}/>
              </label>
              </div>
              <div>
              <label>
                <input placeholder="Contraseña" type="password" id="password" onChange={this.handleChange}/>
              </label>
              </div>
              <button onClick={ingresa} >Iniciar sesión</button>
            </form>
          </div>
          <Link to="/resetPassword">Forgot password?</Link>
        </div>
      );
    }
  }
