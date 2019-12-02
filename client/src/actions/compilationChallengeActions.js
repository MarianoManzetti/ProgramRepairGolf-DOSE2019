import axios from 'axios'
import {
    FETCH_ALL_COMPILATION_CHALLENGE_REQUEST,
    FETCH_ALL_COMPILATION_CHALLENGE_SUCCESS,
    FETCH_ALL_COMPILATION_CHALLENGE_FAILURE,
    FETCH_RESOLVED_COMPILATION_CHALLENGE_REQUEST,
    FETCH_RESOLVED_COMPILATION_CHALLENGE_SUCCESS,
    FETCH_RESOLVED_COMPILATION_CHALLENGE_FAILURE,
    FETCH_UNSOLVED_COMPILATION_CHALLENGE_REQUEST,
    FETCH_UNSOLVED_COMPILATION_CHALLENGE_SUCCESS,
    FETCH_UNSOLVED_COMPILATION_CHALLENGE_FAILURE
} from '../constants/ActionTypesChallenges'

const fetchAllCompilationChallengeRequest = () => {
    return {
      type: FETCH_ALL_COMPILATION_CHALLENGE_REQUEST
    }
}

const fetchAllCompilationChallengeSucess = allCompilationChallenge => {
    return {
        type: FETCH_ALL_COMPILATION_CHALLENGE_SUCCESS,
        payload: allCompilationChallenge
    }
}

const fetchAllCompilationChallengeFailure = error => {
    return {
        type: FETCH_ALL_COMPILATION_CHALLENGE_FAILURE,
        payload: error
    }
}

export const fetchAllCompilationChallenge = () => {
    return function(dispatch,getState) {
        dispatch(fetchAllCompilationChallengeRequest())
        let base64 = require('base-64');
        let username = getState().user.currentUser.username;

        axios.get('http://localhost:55555/compilationChallenge/all', {
            headers: {
                Authorization: "Basic" + base64.encode(username + ":" +localStorage.getItem("password"))
            }
        })
        .then( res =>{
            dispatch(fetchAllCompilationChallengeSucess(res.data))
        })
        .catch(error => {
            dispatch(fetchAllCompilationChallengeFailure(error.message))
        })
    }
}

const fetchResolvedCompilationChallengeRequest = () => {
    return {
      type: FETCH_RESOLVED_COMPILATION_CHALLENGE_REQUEST
    }
}

const fetchResolvedCompilationChallengeSucess = resolvedCompilationChallenge => {
    return {
        type: FETCH_RESOLVED_COMPILATION_CHALLENGE_SUCCESS,
        payload: resolvedCompilationChallenge
    }
}

const fetchResolvedCompilationChallengeFailure = error => {
    return {
        type: FETCH_RESOLVED_COMPILATION_CHALLENGE_FAILURE,
        payload: error
    }
}

export const fetchResolvedCompilationChallenge = () => {
    return function(dispatch,getState) {
        dispatch(fetchResolvedCompilationChallengeRequest())
        let base64 = require('base-64');
        let username = getState().user.currentUser.username;

        axios.get('http://localhost:55555/compilationChallenge/resolved', {
            headers: {
                Authorization: "Basic" + base64.encode(username + ":" +localStorage.getItem("password"))
            }
        })
        .then( res =>{
            dispatch(fetchResolvedCompilationChallengeSucess(res.data))
        })
        .catch(error => {
            dispatch(fetchResolvedCompilationChallengeFailure(error.message))
        })
    }
}

const fetchUnsolvedCompilationChallengeRequest = () => {
    return {
      type: FETCH_UNSOLVED_COMPILATION_CHALLENGE_REQUEST
    }
}

const fetchUnsolvedCompilationChallengeSucess = unsolvedCompilationChallenge => {
    return {
        type: FETCH_UNSOLVED_COMPILATION_CHALLENGE_SUCCESS,
        payload: unsolvedCompilationChallenge
    }
}

const fetchUnsolvedCompilationChallengeFailure = error => {
    return {
        type: FETCH_UNSOLVED_COMPILATION_CHALLENGE_FAILURE,
        payload: error
    }
}

export const fetchUnsolvedCompilationChallenge = () => {
    return function(dispatch,getState) {
        dispatch(fetchUnsolvedCompilationChallengeRequest())
        let base64 = require('base-64');
        let username = getState().user.currentUser.username;

        axios.get('http://localhost:55555/compilationChallenge/unsolved', {
            headers: {
                Authorization: "Basic" + base64.encode(username + ":" +localStorage.getItem("password"))
            }
        })
        .then( res =>{
            dispatch(fetchUnsolvedCompilationChallengeSucess(res.data))
        })
        .catch(error => {
            dispatch(fetchUnsolvedCompilationChallengeFailure(error.message))
        })
    }
}
