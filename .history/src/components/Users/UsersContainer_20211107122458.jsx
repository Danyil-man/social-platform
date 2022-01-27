import React from "react";
import { connect } from "react-redux";
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsers, setIsFetching } from "../../redux/usersreducer";
import * as axios from "axios";
import Users from "./Users";
import PreLoader from "../common/Preloader/Preloader";
import { getUsers } from "../../api/api";

class UsersContanier extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true);
        getUsers().then((response) => {
          this.props.setIsFetching(false);
          this.props.setUsers(response.data.items);
          this.props.setTotalUsers(response.data.totalCount)
        });
    }
  
    onPageChange = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      this.props.setIsFetching(true);
      axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
          withCredentials: true
        }
      )
      .then((response) => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.data.items);
      });
    }
  
    render() {
  
      return <>
      {this.props.isFetching ? <PreLoader /> : null }
        <Users 
      totalUsers= {this.props.totalUsers}
      pageSize = {this.props.pageSize}
      currentPage = {this.props.currentPage}
      onPageChange = {this.onPageChange}
      users = {this.props.users}
      follow = {this.props.follow}
      unfollow = {this.props.unfollow}
      
      />
      </>
    }
  }

  const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers, 
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
  }
  
  export default  connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsers,
  setIsFetching,
  })(UsersContanier);
 
