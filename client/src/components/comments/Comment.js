import React, { Component } from 'react';


class Comment extends Component{


 render(){
  const comment = this.props.comment;

  return(
   <div className="card-content">
      <h4>{comment.username} :</h4>
      <h5>title: { comment.title } </h5>
      <h5>description: { comment.description }</h5>
      </div>
  );
      }
}

export default  Comment
