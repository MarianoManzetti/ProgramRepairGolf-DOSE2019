import React, { Component } from 'react';
import Comment from './Comment';
import { Link } from 'react-router-dom';
import AddResponse from './AddResponse';
import { connect } from 'react-redux';
import {fetchAddResponse} from '../../actions/comment/responsesActions';

class Comments extends Component{
  state={
    comment_id: null,
  }


  handleDeleteClick = id => (e)=>{
    this.props.deleteComment(id);
  }

    commentList(){
      const id = this.state.comment_id;
      const comments= this.props.comments;

      const currentuser_id = this.props.user_id;
      const responses= this.props.responses;
      return comments.map(comment =>
          <div className="comment card" key={comment.id}>
              <Comment comment={comment}/>

              <Link to={"/responses/"+comment.id}> Reply </Link>
              {currentuser_id === comment.user_id ?(
                <div>
                  <button onClick={this.handleDeleteClick(comment.id)}> Delete </button>
                </div>
              ):(
                <div>
                </div>
              )}
             { comment.responses ?(
                <div>
                  <Link to={{pathname:'/responses/'+ comment.id, state:{c:comment}}}> Show responses </Link>
                </div>
              ):(
                <div>
                </div>
              )}
          </div>

        )

    }

    render(){

    return (
      <div className="post">
        <div className="comment-list">
          { this.commentList() }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    responses: state.responses,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addResponse: (res) => {
      dispatch(fetchAddResponse(res))
    },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
