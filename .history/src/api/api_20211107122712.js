import * as axios from "axios";


export const getUsers = () =>{ 
    axios.get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${this.props.pageSize}`, {
          withCredentials: true
        }
      )
}