import { createSelector } from "reselect";
import { AppStateType } from "../reduxStore";

const getUsersSelector = (state: AppStateType) => {
  return state.usersPage.users;
};

export const getUsers = createSelector(getUsersSelector, (users) => {
  return users;
});

export const getPageSize = (state:AppStateType) => {
  return state.usersPage.pageSize;
};

export const getTotalCountUsers = (state:AppStateType) => {
  return state.usersPage.totalUsers;
};

export const getCurrentPage = (state:AppStateType) => {
  return state.usersPage.currentPage;
};

export const getIsFetching = (state:AppStateType) => {
  return state.usersPage.isFetching;
};

export const getFollowingProgress = (state:AppStateType) => {
  return state.usersPage.followingInProgress;
};

export const getUsersFilter = (state:AppStateType) => {
  return state.usersPage.filter
};
