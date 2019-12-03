import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
} from '../../constants/ActionTypesChallenges'

const initChallengeState = {
    data: null,
    loading: false,
    error: ''
}

const challengeReducer = (state = initChallengeState, action) => {

    switch(action.type) {
        
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action,
                error: ''
            }

        case FETCH_DATA_FAILURE:
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

export default challengeReducer;
