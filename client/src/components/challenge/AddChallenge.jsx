import React, { Component } from 'react';
import Select from 'react-select';
import './Style.css';
import { connect } from 'react-redux';
import {
  addCompilationChallenge,
  addTestChallenge
}  from '../../actions/challengeActions';

class AddChallenge extends Component {
  
 state = {
      title: "",
      class_name: "",
      description: "",
      source: "",
      point: "",
      owner_solution_id: 1,
      test: "",
      typeChallenge: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleChange2 = (e) => {
    this.setState({
      typeChallenge: e.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleSubmit1 = (e) => {
    e.preventDefault();
    this.props.addCompilationChallenge(this.state);
  }
  
  handleSubmit2 = (e) => {
    e.preventDefault();
    this.props.addTestChallenge(this.state);
  }

  formTest(){
      return (
        <div className="block-margin">
            <label htmlFor="test">test:</label>
            <textarea className="input-text2" rows="100" cols="100" type="text" id="test" onChange={this.handleChange} />
        </div>
      );
  }

  formCompilation(){
    return (
      <div>
        <div className="block-margin">
          <label htmlFor="title">title:</label>
          <input className="input-text" type="text" id="title" onChange={this.handleChange} />
        </div>
        <div className="block-margin">
          <label htmlFor="class_name">class name:</label>
          <input className="input-text" type="text" id="class_name" onChange={this.handleChange} />
        </div>
        <div className="block-margin">
          <label htmlFor="description">description:</label>
          <input className="input-text" type="text" id="description" onChange={this.handleChange} />
        </div>
        <div className="block-margin">
          <label htmlFor="source">source:</label>
          <textarea className="input-text2" rows="100" cols="100" type="text" id="source" onChange={this.handleChange} />
        </div>
        <div className="block-margin">
          <label htmlFor="point">points:</label>
          <input className="input-text" type="text" id="point" onChange={this.handleChange} />
        </div>
    </div>
    );
  }

  show(){
    if (this.state.typeChallenge === "Compilation Challenge"){
      return (
        <div>
          {this.formCompilation()}
          <div className="block-button"> 
            <button 
              className="button-submit" 
              onClick = {this.handleSubmit1}
              > Submit 
            </button>
          </div>
        </div>
      );
    }
    else if (this.state.typeChallenge === "Test Challenge"){
      return (
        <div>
          {this.formCompilation()}
          {this.formTest()}
          <div className="block-button"> 
            <button 
              className="button-submit" 
              onClick = {this.handleSubmit2}
            > Submit 
            </button>
          </div>
        </div>
      );
    }
    else{
      return (
        <div></div>
      );
    }
  }

  render() {  
   
    const options = [
      { value: 'Compilation Challenge', label: 'Compilation Challenge' },
      { value: 'Test Challenge', label: 'Test Challenge' }
    ]
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} >
          <div className="block-button"> <h1> Load the challenge </h1> </div>
          <p> Select of the type challenge </p>
          <Select 
            placeholder = {this.state.typeChallenge}        
            value={this.state.typeChallenge}
            onChange={this.handleChange2}
            options={options}
          />
          {this.show()}
        </form>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    challenge: state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCompilationChallenge: (state) => {
      dispatch(addCompilationChallenge(state))
    },
    addTestChallenge: (state) => {
      dispatch(addTestChallenge(state))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddChallenge)