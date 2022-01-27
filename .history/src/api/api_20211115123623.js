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
    return instance.post(`follow/${userId}`)
  },

  unfollow(userId){
    return instance.delete(`follow/${userId}`)
  },

  getProfile(userId){
    console.warn('Obsolute method (profile API)')
    return profileAPI.getProfile(userId)
  },

};

export const profileAPI = {
  getProfile(userId){
    return instance.get(`profile/${userId}`)
  },

  getStatus(userId){
    return instance.get(`status/`+userId) 
  },
  updareStatus(status){
    return instance.put(`status`{status:status});
  }
};



export const authAPI = {
  me(){
    return instance.get(`auth/me`)
  }
}
