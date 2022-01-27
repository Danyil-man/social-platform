import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const LOADING_FETCHING = "LOADING_FETCHING";
const FOLLOWING_PROGRESS = "FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 100,
  totalUsers: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS:
      return {
        ...state,
        totalUsers: action.count,
      };

    case LOADING_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userID]
          : state.followingInProgress.filter((id) => id !== action.userID),
      };

    default:
      return state;
  }
};

//ACTION CREATORS
export const followSuccess = (userID) => {
  return {
    type: FOLLOW,
    userID,
  };
};

export const unfollowSuccess = (userID) => {
  return {
    type: UNFOLLOW,
    userID,
  };
};

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};

export const setTotalUsers = (totalUsers) => {
  return {
    type: SET_TOTAL_USERS,
    count: totalUsers,
  };
};

export const setIsFetching = (isFetching) => {
  return {
    type: LOADING_FETCHING,
    isFetching,
  };
};

export const setIsFollowing = (followingInProgress, userID) => {
  return {
    type: FOLLOWING_PROGRESS,
    followingInProgress,
    userID,
  };
};

//THUNK CREATORS

export const getUsersThunk = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setIsFetching(true));

    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(setIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsers(data.totalCount));
    });
  };
};

export const getUsersThunk = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setIsFetching(true));

    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(setIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsers(data.totalCount));
    });
  };
};

export default usersReducer;
