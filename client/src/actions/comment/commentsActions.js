import axios from 'axios';
import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  ADD_COMMENT,
  FETCH_ADD_COMMENT_FAILURE,
  FETCH_DELETE_COMMENT_REQUEST,
  DELETE_COMMENT,
  FETCH_DELETE_COMMENT_FAILURE
} from '../../constants/ActionTypes'


const fetchCommentsRequest = () => {
  return {
    type: FETCH_COMMENTS_REQUEST
  }
}

const fetchCommentsSucess = comments => {
    return {
        type: FETCH_COMMENTS_SUCCESS,
        payload: comments
    }
}
const fetchAddCommentsSucess = comments => {
  return {
      type: ADD_COMMENT,
      payload: comments
  }
}


const fetchCommentsFailure = error => {
    return {
        type: FETCH_COMMENTS_FAILURE,
        payload: error
    }
}

const fetchAddCommentFailure = error => {
  return {
      type: FETCH_ADD_COMMENT_FAILURE,
      payload: error
  }
}

const fetchDeleteCommentRequest = () => {
  return {
    type: FETCH_DELETE_COMMENT_REQUEST,
  }
}

const fetchDeleteCommentSuccess = (id) => {
  return {
    type: DELETE_COMMENT,
    payload:id
  }
}
const fetchDeleteFailure = error => {
  return {
      type: FETCH_DELETE_COMMENT_FAILURE,
      payload: error
  }
}

export const fetchDeleteComment = (id) =>{
  return function(dispatch) {
    dispatch(fetchDeleteCommentRequest())
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
        dispatch(fetchDeleteCommentSuccess(res.data))
      })
      .catch(error => {
        console.log(error)
        alert('Error: could not delete comment');
        dispatch(fetchDeleteFailure(error))
      })
  }
}


//
export const fetchCommentsUsers = (id) => {
  return function(dispatch, getState) {
      dispatch(fetchCommentsRequest())
      let base64 = require('base-64');
      const username = localStorage.getItem("username");
      const password = localStorage.getItem("password");
      const token= base64.encode(username+":"+password);
       axios.get(process.env.REACT_APP_API_HOST+'/comments/users/'+id, {
        headers: {'Authorization' : 'Basic '+ token},
      })
        .then( res =>{
          let result = [];

          Object.values(res.data).forEach(item => {
              result = result.concat(item);
          });
          dispatch(fetchCommentsSucess(result))
        })
        .catch(error => {
          console.log(error)
          dispatch(fetchCommentsFailure(error))
        })
    }
}
//
export const fetchAddComment = (state) => {
  return function(dispatch, getState) {
      dispatch(fetchCommentsRequest())
      let base64 = require('base-64');
      const username = localStorage.getItem("username");
      const password = localStorage.getItem("password");
      const token= base64.encode(username+":"+password);
       axios.post(process.env.REACT_APP_API_HOST+'/comments/createComment',{
         title: state.title,
         description: state.description,
         userId: state.user_id,
         challengeId: state.challenge_id},{
        headers: {'Authorization' : 'Basic '+ token},
      })
        .then( res =>{

          console.log(res.data);
          dispatch(fetchAddCommentsSucess(res.data))
        })
        .catch(error => {
          console.log(error)
          dispatch(fetchAddCommentFailure(error))
        })
    }
}
//
export const fetchCommentsChallenge = (id) => {
  return function(dispatch, getState) {
      dispatch(fetchCommentsRequest())
      let base64 = require('base-64');
      const username = localStorage.getItem("username");
      const password = localStorage.getItem("password");
      const token= base64.encode(username+":"+password);
       axios.get(process.env.REACT_APP_API_HOST+'/comments/challenges/'+id, {
         headers: {'Authorization' : 'Basic '+ token},
      })
        .then( res =>{
          let result = [];

          Object.values(res.data).forEach(item => {
              result = result.concat(item);
          });
          console.log(result);
          dispatch(fetchCommentsSucess(result))
        })
        .catch(error => {
          console.log(error)
          dispatch(fetchCommentsFailure(error))
        })
    }

}
