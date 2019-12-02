import axios from 'axios';
import {
  CREATE_ACCOUNT,
  DELETE_USER,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from '../../constants/constantsUser/ActionTypes'

export const createAccount = (user) => {
  return {
    type: CREATE_ACCOUNT,
    user
  }
}

export const deleteuser = (id) => {
  return {
    type: DELETE_USER,
    id
  }
}

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

const fetchUsersSucess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
  return function(dispatch, getState) {
    if (getState().users.data.length === 0) {
      dispatch(fetchUsersRequest())

      axios.get('http://localhost:55555/user/users')
        .then( res =>{
          console.log(res.data);
          dispatch(fetchUsersSucess(res.data))
        })
        .catch(error => {
          dispatch(fetchUsersFailure(error.message))
        })
    }
  }
}

const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  }
}

const fetchUserSucess = user => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: user
    }
}

const fetchUserFailure = error => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

export const newAccount = (user, pass, email) =>{
  return function(dispatch) {
    dispatch(fetchUserRequest())

     fetch('http://localhost:55555/user/signUp', {
      method: 'POST',
       body:JSON.stringify({'username': user, 'password':pass, 'email_address':email})
      })
      .then(function(response) {
        if(response.ok) {
        dispatch(fetchUserSucess(response.data));
        alert('Usuario creado exitosamente.')
      } else {
        dispatch(fetchUserFailure("error"));
        alert('El nombre de usuario o el email ya estan siendo utilizados. Cargue otros.');
      }
     })
     .catch( error => {
        dispatch(fetchUserFailure(error.message));
        alert('El nombre de usuario o el email ya se encuentran utilizados. Cargue otros. ');
     })
  }
}
export const login = (user, pass) =>{
  return function(dispatch) {
    dispatch(fetchUserRequest())
    let base64 = require('base-64');
    const h = new Headers();
    h.append('Accept', 'application/json');
    h.set('Authorization', 'Basic '+ base64.encode(user+":"+pass));
     fetch('http://localhost:55555/user/login', {
      method: 'POST',
      headers:h ,
      body:JSON.stringify({'username': user, 'password':pass}),
      mode:'cors',
      cache:'default',
      })
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        dispatch(fetchUserSucess(myJson));
     })
     .catch( error => {
       dispatch(fetchUserFailure(error.message));
       alert('Nombre de usuario o password incorrecto');
     })
   }
 }


 export const resPass = (email) =>{
   return function(dispatch) {
     dispatch(fetchUserRequest())
      fetch('http://localhost:55555/user/resetPassword', {
       method: 'PUT',
       body:JSON.stringify({'email_address': email}),
       mode:'cors',
       cache:'default',
       })
       .then(function(response) {
         if(response.ok) {
         dispatch(fetchUserSucess(response.data));
         alert('Email enviado exitosamente.')
       } else {
         dispatch(fetchUserFailure("error"));
         alert('No existe ningun usuario asociado al mail cargado.');
       }
       })
       .catch(error => {
         dispatch(fetchUserFailure(error.message));
         alert('No existe ningun usuario asociado al mail cargado.');

       })
    }
  }


export const fetchUser = (user_id) => {
  return function(dispatch) {
    dispatch(fetchUserRequest())

    axios.get('https://swapi.co/api/people/' + user_id)
      .then( res =>{
        dispatch(fetchUserSucess(res.data))
      })
      .catch(error => {
        dispatch(fetchUserFailure(error.message))
      })
  }
}
