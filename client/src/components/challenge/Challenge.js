import React , {Component} from 'react'
import AddChallenge from './AddChallenge'
import ViewChallenge from './ViewChallenge'
import ModifyChallenge from './ModifyChallenge'
import DeleteChallenge from './DeleteChallenge'

class Challenge extends Component {

  state = {
    opc: ""
  }

  show(){
    if (this.state.opc === "add") {
      return (
        <div>
          { <AddChallenge/> }
        </div>
      );
    }
    else if (this.state.opc==="modify"){
      return (
        <div>
          <ModifyChallenge/>
        </div>
      );
    }
    else if (this.state.opc==="delete"){
      return (
        <div>
          <DeleteChallenge/>
        </div>
      );
    }
    else if (this.state.opc==="view"){
      return (
        <div>
          <ViewChallenge/>
        </div>
      );
    }
    else {
      return (
        <div >
           <div className="block-button"> 
            <h1> Challenge </h1> 
          </div>
           <div className="block-button"> 
            <button className="button-submit" onClick={() => this.setState({opc:"add"})}>ADD CHALLENGE</button>
          </div>
          <div className="block-button"> 
            <button className="button-submit" onClick={() => this.setState({opc:"modify"})}>MODIFY CHALLENGE</button>
          </div>
          <div className="block-button"> 
            <button className="button-submit" onClick={() => this.setState({opc:"delete"})}>DELETE CHALLENGE</button>
          </div>
          <div className="block-button"> 
            <button className="button-submit" onClick={() => this.setState({opc:"view"})}>VIEW CHALLENGE</button>
          </div>
        </div>
      )
    }
  }
  
  render () {
    return (
      <div>
        {this.show()}
      </div>
    );
  }
}

export default Challenge;