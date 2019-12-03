import React , {Component} from 'react'
import {Button, ButtonGroup} from 'reactstrap'
import ListCompilationChallenge from './ListCompilationChallenge'
import ListTestChallenge from './ListTestChallenge'
import { withRouter } from 'react-router-dom'

class ViewChallenge extends Component {

  constructor() {
    super();

    this.state = {
        opc: ""
    }
  }

  show(){
    if (this.state.opc === "allCompilation") {
      return (
        <div className="container">

            <ListCompilationChallenge
                listCompilationChallenge={this.props.allCompilationChallenge}
                showStatsHandler = {(id) => () => {
                	this.props.history.push({
                	  pathname: '/challenges/' + id + '/stats',
                	})
                }}
            />
        </div>
      );
    }
    else if (this.state.opc === "unsolvedCompilation"){
      return (
        <div className="container">

          <ListCompilationChallenge
            listCompilationChallenge={this.props.unsolvedCompilationChallenge}
            showStatsHandler = {(id) => () => {
              this.props.history.push({
                pathname: '/challenges/' + id + '/stats',
              })
            }}
          />
        </div>
      );
    }
    else if (this.state.opc==="resolvedCompilation"){
      return (
        <div className="container">
          <ListCompilationChallenge
            listCompilationChallenge={this.props.resolvedCompilationChallenge}
            showStatsHandler = {(id) => () => {
              this.props.history.push({
                pathname: '/challenges/' + id + '/stats',
              })
            }}
          />
        </div>
      );
    }
    else if (this.state.opc==="allTest"){
      return (
        <div className="container">
          <ListTestChallenge
            listTestChallenge={this.props.allTestChallenge}
            showStatsHandler = {(id) => () => {
                this.props.history.push({
                  pathname: '/challenges/' + id + '/stats',
                })
            }}
          />
        </div>
      );
    }
    else if (this.state.opc==="unsolvedTest"){
        return (
          <div className="container">

            <ListTestChallenge
              listTestChallenge={this.props.unsolvedTestChallenge}
              showStatsHandler = {(id) => () => {
                this.props.history.push({
                  pathname: '/challenges/' + id + '/stats',
                })
              }}
            />
          </div>
        );
      }
    else if (this.state.opc==="resolvedTest"){
        return (
            <div className="container">
  
              <ListTestChallenge
                listTestChallenge={this.props.resolvedTestChallenge}
                showStatsHandler = {(id) => () => {
                  this.props.history.push({
                    pathname: '/challenges/' + id + '/stats',
                  })
                }}
              />
          </div>
        );
      }
    else if (this.state.opc==="challengesAssociatedToUser"){
      return (
          <div className="container">

            <ListCompilationChallenge
              listCompilationChallenge={this.props.challengesAssociatedToUser}
              showStatsHandler = {(id) => () => {
                this.props.history.push({
                  pathname: '/challenges/' + id + '/stats',
                })
              }}
            />
        </div>
      );
    }
    else {
      return (
        <div> </div>
      )
    }
  }


  render () {
    return (

      <div className="block-button"> <h1> View challenge </h1>
        <div className="Block-buttonGroup">
          <ButtonGroup>
            <Button className="button-group" onClick={() => this.setState({opc:"allCompilation"})}>all compilation challenge</Button>
            <Button className="button-group" onClick={() => this.setState({opc:"unsolvedCompilation"})}>unsolved compilation challenge</Button>
            <Button className="button-group" onClick={() => this.setState({opc:"resolvedCompilation"})}>resolved compilation challenge</Button> 
            <Button className="button-group" onClick={() => this.setState({opc:"allTest"})}>all test challenge</Button> 
            <Button className="button-group" onClick={() => this.setState({opc:"unsolvedTest"})}>unsolved test challenge</Button>
            <Button className="button-group" onClick={() => this.setState({opc:"resolvedTest"})}>resolved test challenge</Button>
            <Button className="button-group" onClick={() => this.setState({opc:"challengesAssociatedToUser"})}>created by you</Button>
          </ButtonGroup>
        </div>
        <div>
          {this.show()}
        </div>
      </div>
    )
  }
}

export default withRouter(ViewChallenge)
