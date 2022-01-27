import * as axios from "axios";


export const getUsersAPI = (currentPage = 1, pageSize = 10) =>{ 
    axios.get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, 
        {
          withCredentials: true
        }
      )

      return{
          
      }
}