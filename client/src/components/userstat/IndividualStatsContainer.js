import React, { Component } from 'react'
import { connect } from 'react-redux';
import IndividualStats from './IndividualStats';
import ReactLoading from 'react-loading';
import { fetchRanking } from '../../actions/UserStatActions';
import { fetchIndividualUserStats } from '../../actions/UserStatActions';


class IndividualStatsContainer extends Component {
	componentDidMount() {
		this.props.fetchIndividualUserStats()
	}

	render() {
		return this.props.loading ? (
			<div>
      	<center><ReactLoading type="bars" color="#e83737" height={50} width={200}  /></center>
			</div>
		) : (
			<IndividualStats
				stats={this.props.individual_stats}
			/>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    individual_stats: state.individual_stats.data,
    loading: state.individual_stats.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchIndividualUserStats: (id) => {
      dispatch(fetchIndividualUserStats(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndividualStatsContainer)
