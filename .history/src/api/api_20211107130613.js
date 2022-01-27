import * as axios from "axios";

const instance = axios.create(
    {
        withCredentials: true,
        headers: {
            "API-KEY": "177ec334-a4ef-4c03-a9b8-ec3f7a86fcc5"
        }
    }
)


export const getUsersAPI = (currentPage = 1, pageSize = 10) =>{ 
    return instance.get(
      ).then(response =>{
       return response.data
      })
}