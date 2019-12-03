import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChallengeStats from './ChallengeStats';
import ReactLoading from 'react-loading';
import { fetchChallengeStats }  from '../../actions/challengeStatActions/challengeStatActions';

class ChallengeStatsContainer extends Component {
	componentDidMount() {
		this.props.fetchChallengeStats()
	}

	render() {
		return this.props.loading ? (
			<div>
				<center><ReactLoading type="bars" color="#e83737" height={50} width={200}  /></center>
			</div>
		) : (
			<ChallengeStats
				challengeStats={this.props.challengeStats}
			/>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    challengeStats: state.challengeStats.data,
    loading: state.challengeStats.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChallengeStats: () => {
      dispatch(fetchChallengeStats())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeStatsContainer)
