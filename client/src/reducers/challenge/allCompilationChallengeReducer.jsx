import {
    FETCH_ALL_COMPILATION_CHALLENGE_REQUEST,
    FETCH_ALL_COMPILATION_CHALLENGE_SUCCESS,
    FETCH_ALL_COMPILATION_CHALLENGE_FAILURE,
    DELETE_CHALLENGE
} from '../../constants/ActionTypesChallenges'

const initCompilationChallengeState = {
    data: [],
    loading: false,
    error: ''
}


const allCompilationChallengeReducer = (state = initCompilationChallengeState, action) => {
    
    switch(action.type) {

        case FETCH_ALL_COMPILATION_CHALLENGE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_ALL_COMPILATION_CHALLENGE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }

        case FETCH_ALL_COMPILATION_CHALLENGE_FAILURE:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload,
            }

        case DELETE_CHALLENGE:
            return {
                ...state,
                data: state.data.filter(challenge => challenge.id !== action.id)
            }

        default:
            return state

    }

}

export default allCompilationChallengeReducer;
