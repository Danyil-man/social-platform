import * as axios from "axios";


export const getUsersAPI = (currentPage, pageSize ) =>{ 
    axios.get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
          withCredentials: true
        }
      )
}