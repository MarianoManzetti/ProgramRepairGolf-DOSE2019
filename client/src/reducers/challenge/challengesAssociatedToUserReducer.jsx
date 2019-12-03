import {
    FETCH_CHALLENGES_ASSOCIATED_TO_USER_REQUEST,
    FETCH_CHALLENGES_ASSOCIATED_TO_USER_SUCCESS,
    FETCH_CHALLENGES_ASSOCIATED_TO_USER_FAILURE,
    DELETE_CHALLENGE
} from '../../constants/ActionTypesChallenges'

const initChallengeState = {
    data: [],
    loading: false,
    error: ''
}


const challengesAssociatedToUserReducer = (state = initChallengeState, action) => {
    
    switch(action.type) {

        case FETCH_CHALLENGES_ASSOCIATED_TO_USER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_CHALLENGES_ASSOCIATED_TO_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }

        case FETCH_CHALLENGES_ASSOCIATED_TO_USER_FAILURE:
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

export default challengesAssociatedToUserReducer;
