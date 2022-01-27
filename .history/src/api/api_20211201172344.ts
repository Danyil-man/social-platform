import axios from "axios";
import { PhotosType, ProfileType, UserType } from "../redux/types/types";

//baseURl

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "177ec334-a4ef-4c03-a9b8-ec3f7a86fcc5",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

//                               Main Response

type ResponseType<D={}> ={
  data: D
  messages: Array<string>
  resultCode: ResultCodeEnum
}


//                                    usersAPI Typification

interface UserAPIType {
  items: Array<UserType>;
  totalCount: number;
  error: string | null;
}


export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get<UserAPIType>(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },

  follow(userId:number) {
    return instance.post<ResponseType>(`follow/${userId}`);
  },

  unfollow(userId:number) {
    return instance.delete(`follow/${userId}`);
  },
};



//                                    profileAPI Typification


export const profileAPI = {
  getProfile(userId:number) {
    return instance.get<ProfileType>(`profile/${userId}`);
  },

  getStatus(userId:number) {
    return instance.get<string>(`profile/status/` + userId);
  },
  updateStatus(status:string) {
    return instance.put<ResponseType>(`profile/status`, { status: status });
  },
  savePhoto(photoFile:any) {
    let formData = new FormData();
    formData.append("image", photoFile);
    return instance.put<ResponseType<ProfileType>>(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  saveProfile(profile:ProfileType) {
    return instance.put<ResponseType>(`profile`, profile);
  },
};



//                                     AuthAPI Typification

export enum ResultCodeEnum {
  Success = 0,
  Error = 1,
  RequireCaptcha = 10,
}

interface MeType {

    id:number,
    email:string, 
    login:string,
  
}


interface LoginType {
    userId:number,
}

export const authAPI = {
  me() {
    return instance.get<ResponseType<MeType>>(`auth/me`);  //.then( res => res.data)
  },
  login(email:string, password:string, rememberMe = false, captcha:null | string = null ) {
    return instance.post<ResponseType<LoginType>>(`auth/login`, {
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
