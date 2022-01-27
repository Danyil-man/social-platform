import * as axios from "axios";

//baseURl

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "177ec334-a4ef-4c03-a9b8-ec3f7a86fcc5",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(userId) {
    return instance.post(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
    )
  },

  unfollow(userId){
    return instance.delete(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
    )
  },

  getProfile(userId){
    return instance
    .get(`profile/${userId}`)
  },

};

export const authAPI = {
  return instance.get
}
