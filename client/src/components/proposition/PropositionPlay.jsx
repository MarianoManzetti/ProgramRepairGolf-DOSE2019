import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";
import { connect } from "react-redux";
import { fetchAllCompilationChallenge } from "../../actions/compilationChallengeActions";
import { fetchAllTestChallenge } from "../../actions/testChallengeActions";

import TableCompilationChallenge from "./TableCompilationChallenge";
import TableTestChallenge from "./TableTestChallenge";
import PropositionContainer from "./PropositionContainer";

class PropositionPlay extends Component {
  state = {
    opc: "",
    challengeId: ""
  };

  componentDidMount() {
    this.props.fetchAllCompilationChallenge();
    this.props.fetchAllTestChallenge();
  }

  onClickChangeStateHandler = (idChall, description) => () => {
    this.setState({
      opc: "proposition",
      challengeId: idChall,
      description: description
    });
  };

  show() {
    if (this.state.opc === "allCompilation") {
      return (
        <div className="container">
          <p>All compilation challenge</p>
          <TableCompilationChallenge
            listCompilationChallenge={this.props.allCompilationChallenge}
            onClickChangeState={this.onClickChangeStateHandler}
          />
        </div>
      );
    }
    if (this.state.opc === "allTest") {
      return (
        <div className="container">
          <p>All test challenge</p>
          <TableTestChallenge
            listTestChallenge={this.props.allTestChallenge}
            onClickChangeState={this.onClickChangeStateHandler}
          />
        </div>
      );
    }
    if (this.state.opc === "proposition") {
      return (
        <div>
          <PropositionContainer
            userId={this.props.user.id}
            challengeId={this.state.challengeId}
            description={this.state.description}
          />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="block-button">
        {" "}
        <h1> Challenges </h1>
        <div className="Block-buttonGroup">
          <ButtonGroup>
            <Button
              className="button-group"
              onClick={() => this.setState({ opc: "allCompilation" })}
            >
              {" "}
              compilation challenge
            </Button>
            <Button
              className="button-group"
              onClick={() => this.setState({ opc: "allTest" })}
            >
              {" "}
              test challenge
            </Button>
          </ButtonGroup>
        </div>
        <div>{this.show()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allCompilationChallenge: state.allCompilationChallenge.data,
    allTestChallenge: state.allTestChallenge.data,
    user: state.user.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllCompilationChallenge: () => {
      dispatch(fetchAllCompilationChallenge());
    },
    fetchAllTestChallenge: () => {
      dispatch(fetchAllTestChallenge());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PropositionPlay);
