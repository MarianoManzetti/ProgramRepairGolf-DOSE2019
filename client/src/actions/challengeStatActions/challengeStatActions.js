import axios from 'axios';
import {
    ADD_CHALLENGESTAT,
    DELETE_CHALLENGESTAT,
    UPDATE_CHALLENGESTAT,
    FETCH_CHALLENGESTAT_REQUEST,
    FETCH_CHALLENGESTAT_SUCCESS,
    FETCH_CHALLENGESTAT_FAILURE,
    FETCH_CHALLENGESTATS_REQUEST,
    FETCH_CHALLENGESTATS_SUCCESS,
    FETCH_CHALLENGESTATS_FAILURE
} from '../../constants/challengeStatConstants/ActionTypes'

import Authorization from '../../components/Authorization';


export const createChallengeStat = (challengeStat) => {
  return {
    type: ADD_CHALLENGESTAT,
    challengeStat
  }
}

export const deleteChallengeStat = (challenge_id) => {
  return {
    type: DELETE_CHALLENGESTAT,
    challenge_id
  }
}

const fetchChallengeStatsRequest = () => {
  return {
    type: FETCH_CHALLENGESTATS_REQUEST
  }
}

const fetchChallengeStatsSucess = challengeStats => {
    return {
        type: FETCH_CHALLENGESTATS_SUCCESS,
        payload: challengeStats
    }
}

const fetchChallengeStatsFailure = error => {
    return {
        type: FETCH_CHALLENGESTATS_FAILURE,
        payload: error
    }
}

export const fetchChallengeStats = () => {
  return function(dispatch, getState) {
    if (getState().challengeStats.data.length === 0) {
      dispatch(fetchChallengeStatsRequest())

      axios.get('http://localhost:55555/challengestat/all', {
      header: {
        Authorization: "Basic" + localStorage.getItem("token") }
      })
        .then( res =>{
          dispatch(fetchChallengeStatsSucess(res.data))
        })
        .catch(error => {
          dispatch(fetchChallengeStatsFailure(error.message))
        })
    }
  }
}


const fetchChallengeStatRequest = () => {
  return {
    type: FETCH_CHALLENGESTAT_REQUEST
  }
}

const fetchChallengeStatSucess = challengeStat => {
    return {
        type: FETCH_CHALLENGESTAT_SUCCESS,
        payload: challengeStat
    }
}

const fetchChallengeStatFailure = error => {
    return {
        type: FETCH_CHALLENGESTAT_FAILURE,
        payload: error
    }
}

export const fetchChallengeStat = (challenge_id) => {
  return function(dispatch) {
    dispatch(fetchChallengeStatRequest())

    axios.get('http://localhost:55555/challengestat/get/' + challenge_id, {
    headers: {
      Authorization: "Basic" + localStorage.getItem("token") }
    })
      .then( res =>{
        dispatch(fetchChallengeStatSucess(res.data))
      })
      .catch( error => {
        dispatch(fetchChallengeStatFailure(error.message))
      })
  }
}
