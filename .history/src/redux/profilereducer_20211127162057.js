import { profileAPI, usersAPI } from "../api/api";

//import { profileAPI, usersAPI } from "../api/api";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTOS_SUCCESS = "SAVE_PHOTOS_SUCCESS";

let initialState = {
  postdata: [
    { id: 1, user: "Danila", mess: "Hi, how are u?", like: 18 },
    { id: 2, user: "Antonina", mess: "Its my first postI", like: 44 },
    { id: 3, user: "Nikita", mess: "I won 1m$", like: 21 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 4,
        user: "Ariana",
        mess: action.newPostText,
        like: 0,
      };
      return {
        ...state,
        postdata: [...state.postdata, newPost], //push
      };
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }

    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }

    case DELETE_POST: {
      return {
        ...state,
        postdata: state.postdata.filter((p) => p.id !== action.postId),
      };
    }

    case SAVE_PHOTOS_SUCCESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
      debugger;
    }

    default:
      return state;
  }
};
export const addPostActionCreator = (newPostText) => {
  return {
    type: ADD_POST,
    newPostText,
  };
};

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile: profile,
  };
};

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};

export const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    postId,
  };
};

export const savePhotoSuccess = (photos) => {
  return {
    type: SAVE_PHOTOS_SUCCESS,
    photos,
  };
};

//Thunk

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI
    .getProfile(userId)
    .then((response) => dispatch(setUserProfile(response.data)));
};

export const getStatus = (userId) => (dispatch) => {
  profileAPI
    .getStatus(userId)
    .then((response) => dispatch(setStatus(response.data)));
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) dispatch(setStatus(status));
  });
};

export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);

  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export default profileReducer;
