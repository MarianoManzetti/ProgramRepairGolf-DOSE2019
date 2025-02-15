import {
    FETCH_UNSOLVED_COMPILATION_CHALLENGE_REQUEST,
    FETCH_UNSOLVED_COMPILATION_CHALLENGE_SUCCESS,
    FETCH_UNSOLVED_COMPILATION_CHALLENGE_FAILURE
} from '../../constants/ActionTypesChallenges'

const initCompilationChallengeState = {
    data: [],
    loading: false,
    error: ''
}

const unsolvedCompilationChallengeReducer = (state = initCompilationChallengeState, action) => {
    
    switch(action.type) {
        
        case FETCH_UNSOLVED_COMPILATION_CHALLENGE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_UNSOLVED_COMPILATION_CHALLENGE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }


        case FETCH_UNSOLVED_COMPILATION_CHALLENGE_FAILURE:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload,
            }

        default:
            return state
    }
}

export default unsolvedCompilationChallengeReducer;