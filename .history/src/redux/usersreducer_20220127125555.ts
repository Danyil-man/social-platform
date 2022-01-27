import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { usersAPI } from "../api/api";
import { AppStateType, InferActionType } from "./reduxStore";
import { PhotosType, UserType } from "./types/types";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const LOADING_FETCHING = "LOADING_FETCHING";
const FOLLOWING_PROGRESS = "FOLLOWING_PROGRESS";
const SET_FILTER = "SET_FILTER"; 

interface TermType {
  term: string
}

interface InitialStateType {
  users: Array<UserType>;
  pageSize: number;
  totalUsers:number;
  currentPage:number;
  isFetching: boolean;
  followingInProgress: Array<number>;
  filter: TermType
}

let initialState:InitialStateType = {
  users: [],
  pageSize: 100,
  totalUsers: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
  filter: {
    term: ''
  }
};


const usersReducer = (state = initialState, action: ActionCreatorTypes):InitialStateType => {
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
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userID]
          : state.followingInProgress.filter((id) => id !== action.userID),
      };

      case SET_FILTER:
        return{
          ...state,
          filter: action.filter
        }

    default:
      return state;
  }
};

//ACTION CREATORS
type ActionCreatorTypes = InferActionType<typeof actions>

export const actions = {
   followSuccess: (userID:number) => {
    return {
      type: FOLLOW,
      userID,
    } as const;
  },
   unfollowSuccess: (userID:number)=> {
    return {
      type: UNFOLLOW,
      userID,
    } as const;
  },
   setUsers: (users: Array<UserType>) => {
    return {
      type: SET_USERS,
      users,
    } as const;
  },
   setCurrentPage: (currentPage:number)=> {
    return {
      type: SET_CURRENT_PAGE,
      currentPage,
    } as const;
  },
   setTotalUsers: (totalUsers:number) => {
    return {
      type: SET_TOTAL_USERS,
      count: totalUsers,
    } as const;
  },
   setIsFetching: (isFetching:boolean)=> {
    return {
      type: LOADING_FETCHING,
      isFetching
    } as const
    },
   setIsFollowing: (isFetching:boolean, userID:number)=> {
    return {
      type: FOLLOWING_PROGRESS,
      isFetching,
      userID}as const
    },
    setFilter: (term:string)=> {
      return {
        type: SET_FILTER,
        filter: {term}
      }as const
      },
}

export type FilterType = typeof initialState.filter


//THUNK CREATORS

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatorTypes> 

export const getUsersThunk = (currentPage:number, pageSize:number, term:string):ThunkType  => {
  return async (dispatch) => {
    
    dispatch(actions.setIsFetching(true));
    dispatch(actions.setCurrentPage(currentPage));
    dispatch(actions.setFilter(term));

    let data = await usersAPI.getUsers(currentPage, pageSize, term);
    dispatch(actions.setIsFetching(false));
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalUsers(data.totalCount));
  };
};


export const follow = (userId:number):ThunkType => {
  return async (dispatch) => {
    dispatch(actions.setIsFollowing(true, userId));
    let response = await usersAPI.follow(userId);
    if (response.data.resultCode === 0) {
      dispatch(actions.followSuccess(userId));
    }
    dispatch(actions.setIsFollowing(false, userId));
  };
};


export const unfollow = (userId:number):ThunkType => {
  return async (dispatch) => {
    dispatch(actions.setIsFollowing(true, userId));
    let response = await usersAPI.unfollow(userId);
    if (response.data.resultCode === 0) {
      dispatch(actions.unfollowSuccess(userId));
    }
    dispatch(actions.setIsFollowing(false, userId));
  };
};

export default usersReducer;
