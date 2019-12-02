import {
    FETCH_RESPONSES_REQUEST,
    FETCH_RESPONSES_SUCCESS,
    FETCH_RESPONSES_FAILURE,
    ADD_RESPONSE,
    FETCH_ADD_RESPONSE_FAILURE,
    DELETE_RESPONSE,
    FETCH_DELETE_RESPONSE_FAILURE,
    FETCH_DELETE_RESPONSE_REQUEST
} from '../../constants/ActionTypes'

const initCommentState = {
      data: {},
      count:0,
      loading: false,
      error:''
}

const responsesReducer = (state = initCommentState, action) => {
    switch(action.type) {
        case FETCH_RESPONSES_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_RESPONSES_SUCCESS:
            return {
                ...state,
                loading: false,
                data: responses(state.data, action.payload),
                count: action.payload.length,
                error: ''
            }

        case FETCH_RESPONSES_FAILURE:
            return {
                ...state,
                loading: false,
                data: {},
                error: action.payload,
            }
            case ADD_RESPONSE:
              return{
                    ...state,
                    loading:false,
                    data: add_response(state.data, action.payload),
                    count:state.count + 1
            }
            case FETCH_ADD_RESPONSE_FAILURE:
              return{
                ...state,
                loading: false,
                error: action.payload,
                count:0
            }
            case DELETE_RESPONSE:
              return {
                  ...state,
                  loading:false,
                  count: state.count - 1,
                  data: delete_res(state.data,action.payload)
              }
          case FETCH_DELETE_RESPONSE_FAILURE:
              return{
                  ...state,
                  data:[],
                  loading:false,
                  count:0,
                  error: action.payload,
              }

          case FETCH_DELETE_RESPONSE_REQUEST:
              return {
                  ...state,
                  loading: true
              }

        default:
            return state
    }
}

 function add_response(responses, response) {
   const existingResponses = responses[response.comment_id];
   if(typeof existingResponses !== 'undefined') {
     existingResponses.push(response)
   } else {
     const comment_id= response.comment_id;
     let a= []
     a.push(response);
     responses[comment_id]= a;
   }
   return responses;
 }
function responses(responses, newResponse) {
    const comment_id= newResponse[0].comment_id;
  responses[comment_id]= newResponse;
  return responses;
}

function delete_res (responses, response){
    const comment_id = response.comment_id;
  const res = responses[comment_id];
  let newResponses = [];
  Object.values(res).forEach(r => {

    if(r.id !== response.id){
      newResponses= newResponses.concat(r);
    }
    }
  );
  responses[comment_id] = newResponses;
    return responses;
}

export default responsesReducer;
