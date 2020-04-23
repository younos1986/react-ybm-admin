import * as types from "../actions/actionTypes";

import initialState from "./initialState";

export default function postReducer(state = initialState.posts, action) {
  switch (action.type) {
    case types.LOAD_POST_SUCCESS:
      return action.posts.data;
    case types.SAVE_POST_SUCCESS:
      return  [action.posts.data , ...state ];
    case types.Delete_POST_SUCCESS:
      debugger;
      return state.filter(item => item.id !== action.posts);
    default:
      return state;
  }
}
