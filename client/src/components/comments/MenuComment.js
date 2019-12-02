import React, { Component } from 'react';
import CommentContainerChallenge from './CommentContainerChallenge';
import CommentContainerUser from './CommentContainerUser';

class MenuComment extends Component{

  state = {
    notChoose:true,
    user_id: null,
    challenge_id: null,
    user:null,
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmitUser = (e) => {
    e.preventDefault();
    this.setState({notChoose:false, user:true});
  }

  handleSubmitChallenge = (e) => {
    e.preventDefault();
    this.setState({notChoose:false, user:false});
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({notChoose:true});
  }

  render(){
    return this.state.notChoose ? (
      <div>
      <form onSubmit={this.handleSubmitUser}>
       <label name="User's comments">User's comments:
        <input type="text" placeholder="Id" id="user_id" onChange={this.handleChange} />
       </label>
       <button>Ver</button>
      </form>
      </div>
      ): (
        <div>
          <button onClick= {this.handleClick}>Go back</button>
        {this.state.user ? (
          <CommentContainerUser user={this.state.user_id}/>
        ):(
          <div></div>
        )}
        </div>
    )
  }
}
export default MenuComment
