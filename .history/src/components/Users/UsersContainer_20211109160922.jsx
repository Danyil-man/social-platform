import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, setCurrentPage, setIsFollowing, getUsersThunk,} from "../../redux/usersreducer";
import Users from "./Users";
import PreLoader from "../common/Preloader/Preloader";


class UsersContanier extends React.Component {
    componentDidMount() {
      this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
    }
  
    onPageChange = (pageNumber) => {  
      this.props.getUsersThunk(pageNumber, this.props.pageSize);
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
  setCurrentPage,
  setIsFollowing,
  getUsersThunk,
  follow,
  unfollow,
  })(UsersContanier);
 
