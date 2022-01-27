import * as axios from "axios";

const instance = axios.create(
    {
        withCredentials: true
      }
)


export const getUsersAPI = (currentPage = 1, pageSize = 10) =>{ 
    return axios.get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, 
        {
          withCredentials: true
        }
      ).then(response => response.data)
}