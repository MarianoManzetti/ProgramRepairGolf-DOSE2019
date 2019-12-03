import {
    FETCH_TOPCHALLENGESTATS_REQUEST,
    FETCH_TOPCHALLENGESTATS_SUCCESS,
    FETCH_TOPCHALLENGESTATS_FAILURE
} from '../../constants/challengeStatConstants/ActionTypes'

const initChallengeStatState = {
    data: [],
    loading: false,
    error: ''
}

const topChallengeStatsReducer = (state = initChallengeStatState, action) => {
    switch(action.type) {
        case FETCH_TOPCHALLENGESTATS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_TOPCHALLENGESTATS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }

        case FETCH_TOPCHALLENGESTATS_FAILURE:
            return {
                ...state,
                loading: false,
                data: {},
                error: action.payload,
            }

        default:
            return state
    }
}

export default topChallengeStatsReducer;
