import {
    FETCH_COMMENTS_REQUEST,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_FAILURE,
    ADD_COMMENT,
    FETCH_ADD_COMMENT_FAILURE,
    FETCH_DELETE_COMMENT_REQUEST,
    DELETE_COMMENT,
    FETCH_DELETE_COMMENT_FAILURE,

} from '../../constants/ActionTypes'

const initCommentsState = {
    data: [],
    count: 0,
    loading: false,
    error: ''
}

const commentsReducer = (state = initCommentsState, action) => {
    switch(action.type) {
        case FETCH_COMMENTS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_COMMENTS_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                count: action.payload.length,
                error: ''
            }

        case ADD_COMMENT:
              return{
                ...state,
                loading:false,
                data: [...state.data, action.payload],
                count: state.count + 1
              }

        case FETCH_COMMENTS_FAILURE:
            return {
                ...state,
                loading: false,
                data: [],
                count: 0,
                error: action.payload,
            }

        case FETCH_ADD_COMMENT_FAILURE:
            return {
                  ...state,
                  loading: false,
                  data: state.data,
                  count: state.count,
                  error: action.payload,
              }
              case DELETE_COMMENT:
                return {
                    ...state,
                    loading:false,
                    count: state.count - 1,
                    data: state.data.filter(comment => comment.id !== action.payload.id)
                }
            case FETCH_DELETE_COMMENT_FAILURE:
                return{
                    ...state,
                    data:[],
                    loading:false,
                    count:0,
                    error: action.payload,
                }

            case FETCH_DELETE_COMMENT_REQUEST:
                return {
                    ...state,
                    loading: true
                }
        default:
            return state
    }
}

export default commentsReducer;
