import * as axios from "axios";

//baseURl

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "177ec334-a4ef-4c03-a9b8-ec3f7a86fcc5",
  },
});

export const getUsersAPI = (currentPage = 1, pageSize = 10) => {
  return instance.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
    )
    .then((response) => {
      return response.data;
    });
};
