import axios from 'axios';
import base64 from 'base-64'
import {
    ADD_CHALLENGESTAT,
    DELETE_CHALLENGESTAT,
    UPDATE_CHALLENGESTAT,
    FETCH_CHALLENGESTAT_REQUEST,
    FETCH_CHALLENGESTAT_SUCCESS,
    FETCH_CHALLENGESTAT_FAILURE,
    FETCH_TOPCHALLENGESTATS_REQUEST,
    FETCH_TOPCHALLENGESTATS_SUCCESS,
    FETCH_TOPCHALLENGESTATS_FAILURE
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

const fetchTopChallengeStatsRequest = () => {
  return {
    type: FETCH_TOPCHALLENGESTATS_REQUEST
  }
}

const fetchTopChallengeStatsSucess = topChallengeStats => {
    return {
        type: FETCH_TOPCHALLENGESTATS_SUCCESS,
        payload: topChallengeStats
    }
}

const fetchTopChallengeStatsFailure = error => {
    return {
        type: FETCH_TOPCHALLENGESTATS_FAILURE,
        payload: error
    }
}

export const fetchTopChallengeStats = () => {
    return function(dispatch, getState) {
        dispatch(fetchTopChallengeStatsRequest())

        axios.get('http://localhost:55555/challengestat/top', {
            headers: {
                Authorization: "Basic" + localStorage.getItem("token")
            }
        })
        .then( res =>{
            dispatch(fetchTopChallengeStatsSucess(res.data))
        })
        .catch(error => {
          dispatch(fetchTopChallengeStatsFailure(error.message))
        })
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
                Authorization: "Basic" + localStorage.getItem("token")
            }
        })
        .then( res =>{
            dispatch(fetchChallengeStatSucess(res.data))
        })
        .catch( error => {
            dispatch(fetchChallengeStatFailure(error.message))
        })
    }
}
