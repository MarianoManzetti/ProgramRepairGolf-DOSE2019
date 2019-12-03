import React, { Component } from 'react'

class AddComment extends Component {

state = {
  title: null,
  description: null,
  user_id: this.props.user_id.toString(),
  challenge_id:this.props.challenge_id.toString(),
}

handleChange = (e) => {
  this.setState({
    [e.target.id]: e.target.value
  });
}

handleSubmit = (e) => {
  e.preventDefault();
  this.props.addComment(this.state);
}

render() {
  return(
    <div>
        <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" placeholder="Title" id="title" onChange={this.handleChange} />
        </label>
        <label>
          <input type="text" placeholder="Description" id="description"  onChange={this.handleChange} />
        </label>
          <button className= "button-submit">Publicar Comentario</button>
        </form>
    </div>
  );
}

}

export default AddComment
