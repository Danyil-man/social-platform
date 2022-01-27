export const getUsers = (state) => {
  return state.usersPage.users;
};

export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};

export const getTotalCountUsers = (state) => {
  return state.usersPage.totalUsers;
};

export const getTotalCountUsers = (state) => {
  return state.usersPage.currentPage;
};
