    import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
} from '../../constants/constantsUser/ActionTypes'

const initUserState = {
    currentUser: {},
    loading: false,
    error: ''
}

const userReducer = (state = initUserState, action) => {
    switch(action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_USER_SUCCESS:
            // aumentating USER adding 'id'
            console.log(action.payload);
            return {
                ...state,
                loading: false,
                currentUser: action.payload,
                error: ''
            }

        case FETCH_USER_FAILURE:
            return {
                ...state,
                loading: false,
                currentUser: {},
                error: action.payload,
            }

        default:
            return state
    }
}

export default userReducer;
