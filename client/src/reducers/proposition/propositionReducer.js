import {
    FETCH_PROPOSITIONS_REQUEST,
    FETCH_PROPOSITIONS_SUCCESS,
    FETCH_PROPOSITIONS_FAILURE,
} from '../../constants/ActionTypes'

const initPropositionsState = {
    data: [],
    count: 0,
    loading: false,
    error: ''
}

const propositionsReducer = (state = initPropositionsState, action) => {
    switch(action.type) {
        case FETCH_PROPOSITIONS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_PROPOSITIONS_SUCCESS:
            // aumentating propositions adding 'id'
            const propositions = action.payload
            //const propositions = action.payload.map((proposition) => ({
                //...proposition,
                //id: proposition.id
            //}))
            return {
                loading: false,
                data: propositions,
                count: propositions.length,
                error: ''
            }

        case FETCH_PROPOSITIONS_FAILURE:
            return {
                ...state,
                loading: false,
                data: [],
                count: 0,
                error: action.payload,
            }

        default:
            return state
    }
}

export default propositionsReducer;