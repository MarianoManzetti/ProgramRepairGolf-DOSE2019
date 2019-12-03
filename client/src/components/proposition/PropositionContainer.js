import React, { Component } from "react";
import { connect } from "react-redux";
import Propositions from "./Propositions";
import ReactLoading from 'react-loading';
import { fetchPropositionsGame } from "../../actions/proposition/propositionsActions";

class PropositionContainer extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchPropositionsGame(this.props.userId, this.props.challengeId);
  }

  render() {
    return this.props.loading ? (
      <div>
      	<center><ReactLoading type="bars" color="#e83737" height={50} width={200}  /></center>
			</div>
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
