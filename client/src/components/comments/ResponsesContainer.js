import React, { Component } from 'react';
import { connect } from 'react-redux';
import Responses from './Responses';
import ReactLoading from 'react-loading';
import Comment from './Comment';
import { fetchResponses, fetchAddResponse } from '../../actions/comment/responsesActions';
import AddResponse from './AddResponse';
import { fetchDeleteResponse } from '../../actions/comment/responsesActions';
import { Link } from 'react-router-dom'

class ResponsesContainer extends Component {

	componentDidMount() {
      this.props.fetchResponses(this.props.match.params.id);
		}


    goBack = (e) => {
      this.props.history.goBack();
    }

	render(){
		const comment= this.props.comment;
		return this.props.loading ? (
      <div>
      	<center><ReactLoading type="bars" color="#e83737" height={50} width={200}  /></center>
			</div>
		) : (
      <div>
       <div>
       <Comment comment={this.props.comment} />
      <AddResponse addResponse={this.props.addResponse} comment_id={comment.id} challenge_id={comment.challenge_id} user_id={this.props.currentUser_id}/>
			<Responses deleteResponse={this.props.deleteResponse} user_id={this.props.currentUser_id}
				 responses={this.props.responses.data} id={this.props.match.params.id}
			  />
       </div>
       <button className= "button-submit" onClick={this.goBack}>go back</button>
      </div>
		)
	}
}

const mapStateToProps = (state,props) => {
  const comment_id=props.match.params.id;
  const c = state.comments.data.find(comment => comment.id.toString()===comment_id);
  return {
    responses: state.responses,
    loading: state.responses.loading,
    currentUser_id: state.user.currentUser.id,
    comment: state.comments.data.find(comment => comment.id.toString()===comment_id),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchResponses: (id) => {
      dispatch(fetchResponses(id))
    },
    addResponse: (res) => {
       dispatch(fetchAddResponse(res))
    },
    deleteResponse: (id)=> {
      dispatch(fetchDeleteResponse(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsesContainer)
