import {
    ADD_COMPILATION_CHALLENGE,
    MODIFY_COMPILATION_CHALLENGE,
    ADD_TEST_CHALLENGE,
    MODIFY_TEST_CHALLENGE,
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    DELETE_CHALLENGE
} from '../../constants/ActionTypesChallenges'

const initChallengeState = {
    data: null,
    loading: false,
    error: ''
}

const challengeReducer = (state = initChallengeState, action) => {
    switch(action.type) {

        case ADD_COMPILATION_CHALLENGE:
            return {
                ...state,
                data: [...state.data, action.payload],
            }

        case MODIFY_COMPILATION_CHALLENGE:
            return {
                ...state,
                data: [...state.data, action.payload],
            }
    
        case ADD_TEST_CHALLENGE:
            return {
                ...state,
                data: [...state.data, action.payload],
            }
        
        case MODIFY_TEST_CHALLENGE:
            return {
                ...state,
                data: [...state.data, action.payload],
            }
        
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }

        case FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                data: {},
                error: action.payload,
            }
        // case DELETE_CHALLENGE:
        //     return {
        //         ...state,
        //         data: state.data.filter(challenge => challenge.id !== action.id)
        //     }

        default:
            return state
    }
}

export default challengeReducer;
