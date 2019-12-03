import React , {Component} from 'react'
import {Button, ButtonGroup} from 'reactstrap'
import ListCompilationChallengeModify from'./ListCompilationChallengeModify'
import ListTestChallengeModify from './ListTestChallengeModify'

class ModifyChallenge extends Component {

  constructor() {
    super();

    this.state = {
        opc: ""
    }
  }

  show(){
    if (this.state.opc === "unsolvedCompilation"){
      return (
        <div className="container">
          <ListCompilationChallengeModify
            listCompilationChallenge={this.props.unsolvedCompilationChallenge}
          />
        </div>
      );
    }
    else if (this.state.opc==="unsolvedTest"){
        return (
            <div className="container">
              <ListTestChallengeModify
                listTestChallenge={this.props.unsolvedTestChallenge}
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
        
      <div className="block-button"> <h1> Modify challenge </h1>
      <div className="Block-buttonGroup">
          <ButtonGroup>
            <Button className="button-group" onClick={() => this.setState({opc:"unsolvedCompilation"})}>compilation challenge</Button>
            <Button className="button-group" onClick={() => this.setState({opc:"unsolvedTest"})}>test challenge</Button>
          </ButtonGroup>
        </div>
        <div>
            {this.show()}
        </div>
      </div>
    )
  }
}

export default ModifyChallenge