export interface PostDataType {
    id: number;
    user: string;
    mess: string;
    like: number;
  }
  
export  interface ProfileType {
    userId: number;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    contacts: ContactsType;
    photos: PhotosType;
  }
  
export interface ContactsType {
    github: string;
    vk: string;
    facebbok: string;
    instagram: string;
    twitter: string;
    website: string;
    youtube: string;
    mainLink: string;
  }
  
  export type PhotosType = {
    small: string | null;
    large: string | null;
  }

  export interface UserType {
    id: number;
    name: string;
    status: string;
    photos: PhotosType;
  }