import axios from 'axios'
import {
  FETCH_PROPOSITIONS_REQUEST,
  FETCH_PROPOSITIONS_SUCCESS,
  FETCH_PROPOSITIONS_FAILURE,
} from '../../constants/ActionTypes'


const fetchPropositionsRequest = () => {
  return {
    type: FETCH_PROPOSITIONS_REQUEST
  }
}

const fetchPropositionsSucess = propositions => {
    return {
        type: FETCH_PROPOSITIONS_SUCCESS,
        payload: propositions.data
    }
}

const fetchPropositionsFailure = error => {
    return {
        type: FETCH_PROPOSITIONS_FAILURE,
        payload: error
    }
}

export const fetchPropositionsGame = (idUsr, idChallenge) => {
  return async function(dispatch, getState) {
    if (getState().propositions.data.length === 0) {
      dispatch(fetchPropositionsRequest())
      let base64 = require("base-64");
      let username = getState().user.currentUser.username;
      axios.post('http://localhost:55555/users/'+idUsr+'/challenge/'+idChallenge+'/propsitions', null, {
        headers: {
          Authorization: "Basic" + base64.encode(username + ":" +localStorage.getItem("password"))
        }
      })
        .then(res => {
          dispatch(fetchPropositionsSucess(res))
        })
        .catch(error => {
          console.log(error)
          dispatch(fetchPropositionsFailure(error.message))
        })
    }
  }
}


