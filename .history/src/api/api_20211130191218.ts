import axios from "axios";

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
  follow(userId:number) {
    return instance.post(`follow/${userId}`);
  },

  unfollow(userId:number) {
    return instance.delete(`follow/${userId}`);
  },

  getProfile(userId:number) {
    //console.warn("Obsolute method (profile API)");
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId:number) {
    return instance.get(`profile/${userId}`);
  },

  getStatus(userId:number) {
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status:number) {
    return instance.put(`profile/status`, { status: status });
  },
  savePhoto(photoFile:any) {
    let formData = new FormData();
    formData.append("image", photoFile);
    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  saveProfile(profile) {
    return instance.put(`profile`, profile);
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email:string, password:string, rememberMe = false, captcha = null) {
    return instance.post(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};

export const securityAPI = {
  getCapchURL() {
    return instance.get("security/get-captcha-url");
  },
};
