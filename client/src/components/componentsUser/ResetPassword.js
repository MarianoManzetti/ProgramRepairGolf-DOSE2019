import React, {Component} from "react";

export default class ResetPassword extends Component{
  state = {
    email: null,

  }

  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {

    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    console.log( this.state.email);
    this.props.resPass(this.state.email);
    e.preventDefault();
  }

    render() {
      return (
        <div >
          <div>
            <h2>Escriba la direccion de mail</h2>
            <form onSubmit={this.handleSubmit}>
            <br/>
              <div>
              <label>
                <input placeholder="Email" type="text" id="email" onChange={this.handleChange}/>
              </label>
              </div>
              <button type="submit" >Enviar Email</button>
            </form>
            <h3>Presione el boton de Home, para iniciar sesion con la nueva contraseña</h3>
          </div>
        </div>
      );
    }
  }
