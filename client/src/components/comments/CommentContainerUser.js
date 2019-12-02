import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comments from './Comments';
import logo from '../../logo.svg';
import { fetchCommentsUsers } from '../../actions/comment/commentsActions';
import { fetchDeleteComment } from '../../actions/comment/commentsActions';

class CommentContainerUser extends Component {

	componentDidMount() {
		this.props.fetchCommentsUsers(this.props.user)
  }
  

	render(){
		return this.props.loading ? (
      <img src={logo} className="App-logo" alt="logo" />
		) : (
      <div>
       <div>
			  <Comments
        deleteComment={this.props.deleteComment} user_id={this.props.currentUser_id} 
				 comments={this.props.comments}
			  />
       </div>
      </div>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments.data,
    loading: state.comments.loading,
    currentUser_id: state.user.currentUser.id,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCommentsUsers: (id) => {
      dispatch(fetchCommentsUsers(id))
    },
    deleteComment: (id)=> {
      dispatch(fetchDeleteComment(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainerUser)
