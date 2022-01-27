import axios from "axios";


 axios.get(
   `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
     withCredentials: true
   }
 )
 .then((response) => {
   this.props.setIsFetching(false);
   this.props.setUsers(response.data.items);
   this.props.setTotalUsers(response.data.totalCount)
 });