import React , {Component} from 'react'
import {Button, ButtonGroup} from 'reactstrap'
import { connect } from 'react-redux'
import { 
  fetchAllCompilationChallenge,
  fetchResolvedCompilationChallenge,
  fetchUnsolvedCompilationChallenge
} from '../../actions/compilationChallengeActions'
import { 
  fetchAllTestChallenge,
  fetchResolvedTestChallenge,
  fetchUnsolvedTestChallenge
} from '../../actions/testChallengeActions'
import TableCompilationChallenge from './TableCompilationChallenge'
import TableTestChallenge from './TableTestChallenge'

class ViewChallenge extends Component {

  state = {
    opc: ""
  }

  componentDidMount() {
    this.props.fetchAllCompilationChallenge();
    this.props.fetchResolvedCompilationChallenge();
    this.props.fetchUnsolvedCompilationChallenge();
    this.props.fetchAllTestChallenge();
    this.props.fetchResolvedTestChallenge();
    this.props.fetchUnsolvedTestChallenge();
  }

  show(){
    if (this.state.opc === "allCompilation") {
      return (
        <div className="container">
            <p>all compilation challenge</p>
            <TableCompilationChallenge
                listCompilationChallenge={this.props.allCompilationChallenge}
            />
        </div>
      );
    }
    else if (this.state.opc === "unsolvedCompilation"){
      return (
        <div className="container">
          <p>unsolved compilation challenge</p>
          <TableCompilationChallenge
            listCompilationChallenge={this.props.unsolvedCompilationChallenge}
          />
        </div>
      );
    }
    else if (this.state.opc==="resolvedCompilation"){
      return (
        <div className="container">
         <p>resolved compilation challenge</p>
          <TableCompilationChallenge
            listCompilationChallenge={this.props.resolvedCompilationChallenge}
          />
        </div>
      );
    }
    else if (this.state.opc==="allTest"){
      return (
        <div className="container">
          <p>all test challenge</p>
          <TableTestChallenge
            listTestChallenge={this.props.allTestChallenge}
          />
        </div>
      );
    }
    else if (this.state.opc==="unsolvedTest"){
        return (
            <div className="container">
            <p>unsolved test challenge</p>
          <TableTestChallenge
            listTestChallenge={this.props.unsolvedTestChallenge}
          />
          </div>
        );
      }
    else if (this.state.opc==="resolvedTest"){
        return (
            <div className="container">
            <p>resolved test challenge</p>
          <TableTestChallenge
            listTestChallenge={this.props.resolvedTestChallenge}
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
    allCompilationChallenge: state.allCompilationChallenge.data,
    resolvedCompilationChallenge: state.resolvedCompilationChallenge.data,
    unsolvedCompilationChallenge: state.unsolvedCompilationChallenge.data,
    allTestChallenge: state.allTestChallenge.data,
    resolvedTestChallenge: state.resolvedTestChallenge.data,
    unsolvedTestChallenge: state.unsolvedTestChallenge.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCompilationChallenge: () => {
      dispatch(fetchAllCompilationChallenge())
    },
    fetchResolvedCompilationChallenge: () => {
      dispatch(fetchResolvedCompilationChallenge())
    },
    fetchUnsolvedCompilationChallenge: () => {
      dispatch(fetchUnsolvedCompilationChallenge())
    },
    fetchAllTestChallenge: () => {
      dispatch(fetchAllTestChallenge())
    },
    fetchResolvedTestChallenge: () => {
      dispatch(fetchResolvedTestChallenge())
    },
    fetchUnsolvedTestChallenge: () => {
      dispatch(fetchUnsolvedTestChallenge())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewChallenge)