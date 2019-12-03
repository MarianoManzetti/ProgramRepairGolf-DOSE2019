import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comments from './Comments';
import ReactLoading from 'react-loading';
import { fetchCommentsChallenge } from '../../actions/comment/commentsActions';
import { fetchAddComment } from '../../actions/comment/commentsActions';
import AddComment from './AddComment';
import { fetchDeleteComment } from '../../actions/comment/commentsActions';


class CommentContainerChallenge extends Component {

  state = {
    press:false
  }
	componentDidMount() {
		this.props.fetchCommentsChallenge(this.props.match.params.id)
  }

  handleClick=(e)=>{
    this.setState({press:true});
  }



	render(){
    const press= this.state.press;
		return this.props.loading ? (
      <div>
      	<center><ReactLoading type="bars" color="#e83737" height={50} width={200}  /></center>
			</div>
		) : (
      <div>
      <div>
      <button onClick= {this.handleClick}>+</button>
      </div>
    {press ? (
      <div>
        <AddComment  user_id={this.props.currentUser_id} challenge_id={this.props.challenge} addComment={this.props.addComment}/>
        </div>
      ):(
        <div></div>
      )}
      <div>
			<Comments deleteComment={this.props.deleteComment} user_id={this.props.currentUser_id}
				comments={this.props.comments}
			/>
      </div>
      </div>
		)
	}
}

const mapStateToProps = (state,props) => {
  return {
    comments: state.comments.data,
    loading: state.comments.loading,
    currentUser_id: state.user.currentUser.id,
    challenge: props.match.params.id,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCommentsChallenge: (id) => {
      dispatch(fetchCommentsChallenge(id))
    },
    addComment: (comment) => {
      dispatch(fetchAddComment(comment))
    },
    deleteComment: (id)=> {
      dispatch(fetchDeleteComment(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainerChallenge)
