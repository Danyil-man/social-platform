import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  getUsersThunk,
} from "../../redux/usersreducer";
import Users from "./Users";
import PreLoader from "../common/Preloader/Preloader";
import { AuthRedirect } from "../hoc/AuthRedirect";
import { compose } from "redux";
import {
  getCurrentPage,
  getFollowingProgress,
  getIsFetching,
  getPageSize,
  getTotalCountUsers,
  getUsers,
} from "../../redux/selectors/userSelector";
import { UserType } from "../../redux/types/types";
import { AppStateType } from "../../redux/reduxStore";



interface UsersContanierPropsType {
  currentPage: number;
  pageSize: number;
  isFetching: boolean;
  totalUsers: number;
  users: Array<UserType>;
  followingInProgress: Array<number>;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  getUsersThunk: (currentPage: number, pageSize: number, term: string) => void;

}

interface mapStateToPropsType {
  currentPage: number;
  pageSize: number;
  isFetching: boolean;
  totalUsers: number;
  users: Array<UserType>;
  followingInProgress: Array<number>;
}

interface mapDispatchToPropsType {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  getUsersThunk: (currentPage: number, pageSize: number, term: string) => void;
}

class UsersContanier extends React.Component<UsersContanierPropsType> {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.getUsersThunk(currentPage, pageSize, "");
  }

  onPageChange = (pageNumber: number) => {
    const { pageSize } = this.props;
    this.props.getUsersThunk(pageNumber, pageSize, "");
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <PreLoader /> : null}
        <Users
          totalUsers={this.props.totalUsers}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChange={this.onPageChange}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsers: getTotalCountUsers(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingProgress(state),
  };
};

export default compose(
  connect<mapStateToPropsType, mapDispatchToPropsType, UsersContanierPropsType, AppStateType>(mapStateToProps, {
    getUsersThunk,
    follow,
    unfollow,
  }),
  AuthRedirect
)(UsersContanier);
