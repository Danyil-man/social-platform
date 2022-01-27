import React from "react";
import { connect } from "react-redux";
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsers, setIsFetching, setIsFollowing, getUsersThunkCreator } from "../../redux/usersreducer";
import Users from "./Users";
import PreLoader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";


class UsersContanier extends React.Component {
    componentDidMount() {
        this.pro
    }
  
    onPageChange = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      this.props.setIsFetching(true);

      usersAPI.getUsers(pageNumber, this.props.pageSize)
      .then(data => {
        this.props.setIsFetching(false);
        this.props.setUsers(data.items);
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
      setIsFollowing = {this.props.setIsFollowing}
      followingInProgress = {this.props.followingInProgress}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }
  }
  
  export default  connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsers,
  setIsFetching,
  setIsFollowing,
  getUsersThunkCreator
  })(UsersContanier);
 
