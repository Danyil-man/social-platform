import { stopSubmit } from "redux-form";
import { ThunkAction } from "redux-thunk";
import { profileAPI } from "../api/api";
import { AppStateType, InferActionType } from "./reduxStore";
import { PhotosType, PostDataType, ProfileType } from "./types/types";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTOS_SUCCESS = "SAVE_PHOTOS_SUCCESS";


export interface InitialStateType {
  postdata: Array<PostDataType>;
  profile: ProfileType | null;
  status: string;
}

let initialState:InitialStateType = {
  postdata: [
    { id: 1, user: "Danila", mess: "Hi, how are u?", like: 18 },
    { id: 2, user: "Vova", mess: "Its my first postI", like: 44 },
    { id: 3, user: "Vlad", mess: "I won 1m$", like: 21 },
  ],
  profile: null,
  status: "",
};


const profileReducer = (state = initialState, action:ActionCreatorTypes):InitialStateType => {
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
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };
    }

    default:
      return state;
  }
};

type ActionCreatorTypes = InferActionType<typeof actions>

export const actions = {
  addPostActionCreator: (newPostText:string) => {
    return {
      type: ADD_POST,
      newPostText,
    } as const
  },
  setUserProfile: (profile:ProfileType) => {
    return {
      type: SET_USER_PROFILE,
      profile: profile,
    } as const
  },
  setStatus: (status:string) => {
    return {
      type: SET_STATUS,
      status,
    } as const
  },
  deletePost: (postId:number) => {
    return {
      type: DELETE_POST,
      postId,
    } as const
  },
  savePhotoSuccess: (photos:PhotosType) => {
    return {
      type: SAVE_PHOTOS_SUCCESS,
      photos,
    } as const
  }
}


//Thunk

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatorTypes | ReturnType<typeof  stopSubmit>>

export const getUserProfile = (userId:number):ThunkType => async (dispatch) => {
  let response = await profileAPI.getProfile(userId);
  dispatch(actions.setUserProfile(response.data));
};

export const getStatus = (userId:number):ThunkType =>  async (dispatch) => {
  let response = await profileAPI.getStatus(userId)
   dispatch(actions.setStatus(response.data));
};

export const updateStatus = (status:string):ThunkType => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) 
    dispatch(actions.setStatus(status));
};

export const savePhoto = (file:any):ThunkType => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);

  if (response.data.resultCode === 0) {
    dispatch(actions.savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profile:ProfileType):ThunkType => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  let response = await profileAPI.saveProfile(profile);

  if (response.data.resultCode === 0) {
    if(userId !== null){
      dispatch(getUserProfile(userId));
    } else{
      throw new Error("userId cant be null")
    }
    
  } else {
    dispatch(stopSubmit("editProfile", {_error: response.data.messages[0],})
    );
    return Promise.reject(response.data.messages[0]);
  }
};

export default profileReducer;
