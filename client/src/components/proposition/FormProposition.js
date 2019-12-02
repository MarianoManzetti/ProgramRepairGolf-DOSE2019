import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import { Button } from "reactstrap";
import { Redirect } from "react-router-dom";
import axios from "axios";

class FormProposition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      idProp: "",
      redirect: false
    };
  }

  componentDidMount() {
    this.setState({
      code: this.props.code,
      idProp: this.props.idProp
    });
  }

  handleChange = event => {
    this.setState({ code: event.target.value });
  };

  onClickCompile = event => {
    const idProp = this.state.idProp;
    const source = this.state.code;

    let base64 = require("base-64");
    let username = this.props.currentUser.username;
    axios
      .get("http://localhost:55555/proposition/" + idProp + "/compile", {
        params: {
          source: source
        },
        headers: {
          Authorization:
            "Basic" +
            base64.encode(username + ":" + localStorage.getItem("password"))
        }
      })
      .then(res => {
        if (res.data) {
          alert("Compile!!!");
        } else {
          alert("Not compile!!!");
        }
      })
      .catch(error => {
        console.log(error);
      });
    event.preventDefault();
  };

  onClickSolution = event => {
    const idProp = this.state.idProp;
    const source2 = this.state.code;

    let base64 = require("base-64");
    let username = this.props.currentUser.username;
    axios
      .get("http://localhost:55555/proposition/" + idProp + "/submit", {
        params: {
          source: source2
        },
        headers: {
          Authorization:
            "Basic" +
            base64.encode(username + ":" + localStorage.getItem("password"))
        }
      })
      .then(res => {
        if (res.data) {
          this.setState({
            redirect: true
          });
          alert("Solution save");
        } else {
          alert("The solution not compile");
        }
      })
      .catch(error => {
        console.log(error);
      });  
    event.preventDefault();
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/propositions" />;
    }
  };

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <form onSubmit={this.handleSubmit}>
          <label>Code:</label>
          <TextField
            defaultValue={this.state.code}
            onChange={this.handleChange}
            fullWidth={true}
            rows="30"
            variant="filled"
            multiline={true}
          />
        </form>
        <Button className="button-group" onClick={this.onClickCompile}>
          Compile
        </Button>
        <Button className="button-group" onClick={this.onClickSolution}>
          Submit
        </Button>
      </div>
    );
  }
}

export default FormProposition;
