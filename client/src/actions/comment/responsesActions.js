import axios from 'axios';
import {
  FETCH_RESPONSES_REQUEST,
  FETCH_RESPONSES_SUCCESS,
  FETCH_RESPONSES_FAILURE,
  ADD_RESPONSE,
  FETCH_ADD_RESPONSE_FAILURE,
  DELETE_RESPONSE,
  FETCH_DELETE_RESPONSE_FAILURE,
  FETCH_DELETE_RESPONSE_REQUEST,
} from '../../constants/ActionTypes'


const fetchResponsesRequest = () => {
  return {
    type: FETCH_RESPONSES_REQUEST
  }
}

const fetchResponsesSucess = responses => {
    return {
        type: FETCH_RESPONSES_SUCCESS,
        payload: responses
    }
}

const fetchResponsesFailure = error => {
    return {
        type: FETCH_RESPONSES_FAILURE,
        payload: error
    }
}
const fetchAddResponseSucess = responses => {
  return {
      type: ADD_RESPONSE,
      payload: responses
  }
}

const fetchAddResponseFailure = error => {
  return {
      type: FETCH_ADD_RESPONSE_FAILURE,
      payload: error
  }
}

const fetchDeleteResponseRequest = () => {
  return {
    type: FETCH_DELETE_RESPONSE_REQUEST,
  }
}

const fetchDeleteResponseSuccess = (id) => {
  return {
    type: DELETE_RESPONSE,
    payload:id
  }
}
const fetchDeleteFailure = error => {
  return {
      type: FETCH_DELETE_RESPONSE_FAILURE,
      payload: error
  }
}

export const fetchResponses = (id) => {
  return function(dispatch, getState) {
      dispatch(fetchResponsesRequest())
      let base64 = require('base-64');
      const username = localStorage.getItem("username");
      const password = localStorage.getItem("password");
      const token= base64.encode(username+":"+password);
       axios.get(process.env.REACT_APP_API_HOST+'/comments/responses/'+id, {
        headers: {'Authorization' : 'Basic '+ token},
      })
        .then( res =>{
          let result = [];

          Object.values(res.data).forEach(item => {
              result = result.concat(item);
          });
          dispatch(fetchResponsesSucess(result))
        })
        .catch(error => {
          console.log(error)
          dispatch(fetchResponsesFailure(error))
        })
    }
}
//
export const fetchAddResponse = (state) => {
  return function(dispatch, getState) {
      dispatch(fetchResponsesRequest())
      let base64 = require('base-64');
      const username = localStorage.getItem("username");
      const password = localStorage.getItem("password");
      const token= base64.encode(username+":"+password);
       axios.post(process.env.REACT_APP_API_HOST+'/comments/createResponse',{
         description: state.description,
         userId: state.user_id,
         challengeId: state.challenge_id,
         commentId: state.comment_id},{
        headers: {'Authorization' : 'Basic '+ token},
      })
        .then( res =>{
          console.log(res.data);
          alert('Reply send');
          dispatch(fetchAddResponseSucess(res.data))
        })
        .catch(error => {
          console.log(error)
          alert('Error: No se puede enviar una respuesta vacia');
          dispatch(fetchAddResponseFailure(error))
        })
    }
}
//
export const fetchDeleteResponse = (id) =>{
  return function(dispatch) {
    dispatch(fetchDeleteResponseRequest())
    let base64 = require('base-64');
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    const token= base64.encode(username+":"+password);
     axios.delete(process.env.REACT_APP_API_HOST+'/comments/deleteComment/'+id,{
        headers: {'Authorization' : 'Basic '+ token},
        data:{
          id:id
        }
    })
      .then( res =>{
        console.log(res.data);
        alert('comment deleted');
        dispatch(fetchDeleteResponseSuccess(res.data))
      })
      .catch(error => {
        console.log(error)
        alert('Error: could not delete comment');
        dispatch(fetchDeleteFailure(error))
      })
  }
}
