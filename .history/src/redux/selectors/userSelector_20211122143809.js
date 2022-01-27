import { createSelector } from "reselect";

export const getUsers = (state) => {
  return state.usersPage.users;
};

export const getUsersSelector = createSelector(getUsers, (users) => {
  return users;
});

export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};

export const getTotalCountUsers = (state) => {
  return state.usersPage.totalUsers;
};

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};

export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};

export const getFollowingProgress = (state) => {
  return state.usersPage.followingInProgress;
};
