import { usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_TEXT = "UPDATE-NEW-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE"; 
const SET_STATUS = "SET_STATUS";

let initialState = {
  postdata: [
    { id: 1, user: "Danila", mess: "Hi, how are u?", like: 18 },
    { id: 2, user: "Antonina", mess: "Its my first postI", like: 44 },
    { id: 3, user: "Nikita", mess: "I won 1m$", like: 21 },
  ],
  newPostText: "",
  profile: null,
  status: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        user: "Ariana",
        mess: state.newPostText,
        like: 12,
      };
      return {
        ...state,
        postdata: [...state.postdata, newPost], //push
      };
    }

    case UPDATE_NEW_TEXT: {
      return {
        ...state,
        newPostText: action.text
        };
    }

    case SET_USER_PROFILE: {
      return{
        ...state,
        profile: action.profile
      };
    }

    case SET_STATUS: {
      return{
        ...state,
      }
    }

    default:
      return state;
  }
};
export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const onPostChangeActionCreator = (text) => {
  return {
    type: UPDATE_NEW_TEXT,
    text: text,
  };
};

export const setUserProfile = (profile) => {
  return{
    type: SET_USER_PROFILE,
    profile: profile,
  }
}

//Thunk

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId)
  .then(response => dispatch(setUserProfile(response.data)))
}

export default profileReducer;
