import React, { Component } from 'react'

class AddResponse extends Component {

state = {
  description: null,
  user_id: this.props.user_id.toString(),
  challenge_id:this.props.challenge_id.toString(),
  comment_id:this.props.comment_id.toString(),
}

handleChange = (e) => {
  this.setState({
    [e.target.id]: e.target.value
  });
}

handleSubmit = (e) => {
  e.preventDefault();
  this.props.addResponse(this.state);
}

render() {
  return(
    <div>
        <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" placeholder="Description" id="description"  onChange={this.handleChange} />
        </label>
          <button>Send Response</button>
        </form>
    </div>
  );
}

}

export default AddResponse
