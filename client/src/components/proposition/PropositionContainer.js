import React, { Component } from "react";
import { connect } from "react-redux";
import Propositions from "./Propositions";
import logo from "../../logo.svg";
import { fetchPropositionsGame } from "../../actions/proposition/propositionsActions";

class PropositionContainer extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchPropositionsGame(this.props.userId, this.props.challengeId);
  }

  render() {
    return this.props.loading ? (
      <img src={logo} className="App-logo" alt="logo" />
    ) : (
      <Propositions
        propositions={this.props.propositions}
        description={this.props.description}
        currentUser={this.props.currentUser}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    propositions: state.propositions.data,
    currentUser: state.user.currentUser,
    loading: state.propositions.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPropositionsGame: (userId, challengeId) => {
      dispatch(fetchPropositionsGame(userId, challengeId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PropositionContainer);
