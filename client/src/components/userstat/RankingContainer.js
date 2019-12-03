import React, { Component } from 'react'
import { connect } from 'react-redux';
import Ranking from './Ranking';
import ReactLoading from 'react-loading';
import { fetchRanking } from '../../actions/UserStatActions';

class RankingContainer extends Component {
	componentDidMount() {
		this.props.fetchRanking()
	}

	render() {
		return this.props.loading ? (
			<div>
				<center><ReactLoading type="bars" color="#e83737" height={50} width={200}  /></center>			
			</div>
		) : (
			<Ranking
				rankingList={this.props.ranking}
			/>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    ranking: state.ranking.data,
    loading: state.ranking.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRanking: () => {
      dispatch(fetchRanking())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RankingContainer)
