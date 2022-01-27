import { stopSubmit } from "redux-form";
import { ThunkAction } from "redux-thunk";
import { authAPI, ResultCodeEnum, securityAPI } from "../api/api";
import { AppStateType, InferActionType } from "./reduxStore";
const SET_USER_DATA = "SET_USER_DATA";
const GET_CAPTCHA = "samurai-network/auth/GET_CAPTCHA";

export interface InitialStateType {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
  captchaUrl: string | null;
}

let initialState: InitialStateType = {
  userId: null,
  email: null,
  login: null ,
  isAuth: false,
  captchaUrl: null,
};


const authReducer = (state = initialState, action: ActionCreatorTypes): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };

    case GET_CAPTCHA: {
      return {
        ...state,
        ...action.data,
      };
    }

    default:
      return state;
  }
};


type ActionCreatorTypes = InferActionType<typeof actions>

export const actions = {
  setUserData: (userId:number | null, email:string | null, login:string | null, isAuth:boolean) => ({
    type: SET_USER_DATA,
    data: { userId, email, login, isAuth },
  } as const),

  getCaptcha: (captchaUrl:string) => ({
    type: GET_CAPTCHA,
    data: { captchaUrl },
  } as const)

}


//                                             USER


// THUNK

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatorTypes | ReturnType<typeof stopSubmit>> 

export const getCaptchaURL = ():ThunkType => async (dispatch) => {
  const response = await securityAPI.getCapchURL();
  const captchURL = response.data.url;
  dispatch(actions.getCaptcha(captchURL));
};


//                                            AUTH



export const setAuth = ():ThunkType => async (dispatch) => {
  let response = await authAPI.me();
  if (response.data.resultCode === ResultCodeEnum.Success) { //Result Code from API S=0,E=1
    let { id, email, login } = response.data.data ;
    dispatch(actions.setUserData(id, email, login, true));
  }
};

export const login =
  (email:string, password:string, rememberMe:boolean, captcha:any):ThunkType => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === ResultCodeEnum.Success) {
      dispatch(setAuth());
    } else {
      if (response.data.resultCode === ResultCodeEnum.RequireCaptcha) {
        dispatch(getCaptchaURL());
      }
      let message =
        response.data.messages.length > 0 ? response.data.messages[0] : "ERROR";
      dispatch(stopSubmit("login", { _error: message }));
    }
  };

export const logout = ():ThunkType => async (dispatch) => {
  let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
      dispatch(actions.setUserData(null, null, null, false));
    }
  
};

export default authReducer;
