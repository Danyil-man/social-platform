import React from "react";
import Paginator from "../../redux/selectors/Paginator";
import User from "./Users copy";

const Users = ({
  totalUsers,
  pageSize,
  currentPage,
  onPageChange,
  users,
  ...props
}) => {
  return (
    <div>
      <Paginator
        totalUsers={totalUsers}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
      <div>
        {props.users.map((u) => (
          <User
            user={u}
            key={u.id}
            followingInProgress={props.followingInProgress}
            unfollow={props.unfollow}
            follow={props.follow}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
