import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";
const SET_USER_DATA = "SET_USER_DATA";
const GET_CAPTCHA = "samurai-network/auth/GET_CAPTCHA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };

    case GET_CAPTCHA: {
      return {};
    }

    default:
      return state;
  }
};

export const setUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  data: { userId, email, login, isAuth },
});

export const getCaptcha = (captchaUrl) => ({
  type: GET_CAPTCHA,
  data: { captchaUrl },
});

export const setAuth = () => async (dispatch) => {
  let response = await authAPI.me();
  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setUserData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe);
  if (response.data.resultCode === 0) {
    dispatch(setAuth());
  } else {
    let message =
      response.data.messages.length > 0 ? response.data.messages[0] : "ERROR";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const getCaptchaURL = () => async (dispatch) => {
  const response = await securityAPI.getCapchURL();
  const captchURL = response.data.url;
  dispatch(captchURL);
};

export const logout = () => (dispatch) => {
  authAPI.logout().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setUserData(null, null, null, false));
    }
  });
};

export default authReducer;
