import React , {Component} from 'react'
import AddChallenge from './AddChallenge'
import ViewChallenge from './ViewChallenge'
import ModifyChallenge from './ModifyChallenge'
import DeleteChallenge from './DeleteChallenge'
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
import { 
  fetchChallengesAssociatedToUser
} from '../../actions/challengeActions'

class Challenge extends Component {

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
    this.props.fetchChallengesAssociatedToUser();
  }

  show(){
    if (this.state.opc === "add") {
      return (
        <div>
          <AddChallenge/>
        </div>
      );
    }
    else if (this.state.opc==="modify"){
      return (
        <div>
          <ModifyChallenge
            unsolvedCompilationChallenge = {this.props.unsolvedCompilationChallenge}
            unsolvedTestChallenge = {this.props.unsolvedTestChallenge}
          />
        </div>
      );
    }
    else if (this.state.opc==="delete"){
      return (
        <div>
          <DeleteChallenge
            allCompilationChallenge = {this.props.allCompilationChallenge}
            allTestChallenge = {this.props.allTestChallenge}
          />
        </div>
      );
    }
    else if (this.state.opc==="view"){
      return (
        <div>
          <ViewChallenge
            allCompilationChallenge = {this.props.allCompilationChallenge}
            resolvedCompilationChallenge = {this.props.resolvedCompilationChallenge}
            unsolvedCompilationChallenge = {this.props.unsolvedCompilationChallenge}
            allTestChallenge = {this.props.allTestChallenge}
            resolvedTestChallenge = {this.props.resolvedTestChallenge}
            unsolvedTestChallenge = {this.props.unsolvedTestChallenge}
            challengesAssociatedToUser = {this.props.challengesAssociatedToUser}
          />
        </div>
      );
    }
    else {
      return (
        <div >
           <div className="block-button"> 
            <h1> Challenge </h1> 
          </div>
           <div className="block-button"> 
            <button className="button-submit" onClick={() => this.setState({opc:"add"})}>ADD CHALLENGE</button>
          </div>
          <div className="block-button"> 
            <button className="button-submit" onClick={() => this.setState({opc:"modify"})}>MODIFY CHALLENGE</button>
          </div>
          <div className="block-button"> 
            <button className="button-submit" onClick={() => this.setState({opc:"delete"})}>DELETE CHALLENGE</button>
          </div>
          <div className="block-button"> 
            <button className="button-submit" onClick={() => this.setState({opc:"view"})}>VIEW CHALLENGE</button>
          </div>
        </div>
      )
    }
  }
  
  render () {
    return (
      <div>
        {this.show()}
      </div>
    );
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
    challengesAssociatedToUser: state.challengesAssociatedToUser.data,
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
    },
    fetchChallengesAssociatedToUser: () => {
      dispatch(fetchChallengesAssociatedToUser())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Challenge)