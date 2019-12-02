import axios from 'axios'
import {
    FETCH_ALL_TEST_CHALLENGE_REQUEST,
    FETCH_ALL_TEST_CHALLENGE_SUCCESS,
    FETCH_ALL_TEST_CHALLENGE_FAILURE,
    FETCH_RESOLVED_TEST_CHALLENGE_REQUEST,
    FETCH_RESOLVED_TEST_CHALLENGE_SUCCESS,
    FETCH_RESOLVED_TEST_CHALLENGE_FAILURE,
    FETCH_UNSOLVED_TEST_CHALLENGE_REQUEST,
    FETCH_UNSOLVED_TEST_CHALLENGE_SUCCESS,
    FETCH_UNSOLVED_TEST_CHALLENGE_FAILURE
} from '../constants/ActionTypesChallenges'

const fetchAllTestChallengeRequest = () => {
    return {
      type: FETCH_ALL_TEST_CHALLENGE_REQUEST
    }
}

const fetchAllTestChallengeSucess = allTestChallenge => {
    return {
        type: FETCH_ALL_TEST_CHALLENGE_SUCCESS,
        payload: allTestChallenge
    }
}

const fetchAllTestChallengeFailure = error => {
    return {
        type: FETCH_ALL_TEST_CHALLENGE_FAILURE,
        payload: error
    }
}

export const fetchAllTestChallenge = () => {
    return function(dispatch,getState) {
        dispatch(fetchAllTestChallengeRequest())
        let base64 = require('base-64');
        let username = getState().user.currentUser.username;

        axios.get('http://localhost:55555/testChallenge/all', {
            headers: {
                Authorization: "Basic" + base64.encode(username + ":" +localStorage.getItem("password"))
            }
        })
        .then( res =>{
            dispatch(fetchAllTestChallengeSucess(res.data))
        })
        .catch(error => {
            dispatch(fetchAllTestChallengeFailure(error.message))
        })
    }
}

const fetchResolvedTestChallengeRequest = () => {
    return {
      type: FETCH_RESOLVED_TEST_CHALLENGE_REQUEST
    }
}

const fetchResolvedTestChallengeSucess = resolvedTestChallenge => {
    return {
        type: FETCH_RESOLVED_TEST_CHALLENGE_SUCCESS,
        payload: resolvedTestChallenge
    }
}

const fetchResolvedTestChallengeFailure = error => {
    return {
        type: FETCH_RESOLVED_TEST_CHALLENGE_FAILURE,
        payload: error
    }
}

export const fetchResolvedTestChallenge = () => {
    return function(dispatch,getState) {
        dispatch(fetchResolvedTestChallengeRequest())
        let base64 = require('base-64');
        let username = getState().user.currentUser.username;

        axios.get('http://localhost:55555/testChallenge/resolved', {
            headers: {
                Authorization: "Basic" + base64.encode(username + ":" +localStorage.getItem("password"))
            }
        })
        .then( res =>{
            dispatch(fetchResolvedTestChallengeSucess(res.data))
        })
        .catch(error => {
            dispatch(fetchResolvedTestChallengeFailure(error.message))
        })
    }
}

const fetchUnsolvedTestChallengeRequest = () => {
    return {
      type: FETCH_UNSOLVED_TEST_CHALLENGE_REQUEST
    }
}

const fetchUnsolvedTestChallengeSucess = unsolvedTestChallenge => {
    return {
        type: FETCH_UNSOLVED_TEST_CHALLENGE_SUCCESS,
        payload: unsolvedTestChallenge
    }
}

const fetchUnsolvedTestChallengeFailure = error => {
    return {
        type: FETCH_UNSOLVED_TEST_CHALLENGE_FAILURE,
        payload: error
    }
}

export const fetchUnsolvedTestChallenge = () => {
    return function(dispatch,getState) {
        dispatch(fetchUnsolvedTestChallengeRequest())
        let base64 = require('base-64');
        let username = getState().user.currentUser.username;

        axios.get('http://localhost:55555/testChallenge/unsolved', {
            headers: {
                Authorization: "Basic" + base64.encode(username + ":" +localStorage.getItem("password"))
            }
        })
        .then( res =>{
            dispatch(fetchUnsolvedTestChallengeSucess(res.data))
        })
        .catch(error => {
            dispatch(fetchUnsolvedTestChallengeFailure(error.message))
        })
    }
}
