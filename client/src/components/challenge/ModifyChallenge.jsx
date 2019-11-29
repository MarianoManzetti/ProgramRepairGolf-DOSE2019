import React , {Component} from 'react'
import {Button, ButtonGroup} from 'reactstrap'
import { connect } from 'react-redux'
import { fetchUnsolvedCompilationChallenge} from '../../actions/compilationChallengeActions'
import { fetchUnsolvedTestChallenge} from '../../actions/testChallengeActions'
import TableCompilationChallengeModify from'./TableCompilationChallengeModify'
import TableTestChallengeModify from './TableTestChallengeModify'

class ModifyChallenge extends Component {

  state = {
    opc: ""
  }

  componentDidMount() {
    this.props.fetchUnsolvedCompilationChallenge();
    this.props.fetchUnsolvedTestChallenge();
  }

  show(){
    if (this.state.opc === "unsolvedCompilation"){
      return (
        <div className="container">
          <p>unsolved compilation challenge</p>
          <TableCompilationChallengeModify
            listCompilationChallenge={this.props.unsolvedCompilationChallenge}
          />
        </div>
      );
    }
    else if (this.state.opc==="unsolvedTest"){
        return (
            <div className="container">
            <p>unsolved test challenge</p>
          <TableTestChallengeModify
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

const mapStateToProps = (state) => {
  return {
    unsolvedCompilationChallenge: state.unsolvedCompilationChallenge.data,
    unsolvedTestChallenge: state.unsolvedTestChallenge.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
    fetchUnsolvedCompilationChallenge: () => {
      dispatch(fetchUnsolvedCompilationChallenge())
    },
    fetchUnsolvedTestChallenge: () => {
      dispatch(fetchUnsolvedTestChallenge())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModifyChallenge)