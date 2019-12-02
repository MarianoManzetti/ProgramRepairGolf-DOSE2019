import React, { Component } from 'react';


class Comment extends Component{


 render(){
  const comment = this.props.comment;

  return(
   <div className="card-content">
      <p>{comment.username} :</p>
      <p>title: { comment.title } </p>
      <p>description: { comment.description }</p>

      </div>
  );
      }
}

export default  Comment
