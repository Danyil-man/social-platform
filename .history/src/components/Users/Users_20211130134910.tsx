import React, { FC } from "react";
import Paginator from "../../redux/selectors/Paginator";
import User from "./User";

interface PaginatorPropsType {
  totalUsers: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
  portionSize?: number;
}

let Users: FC<PaginatorPropsType> = ({
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
        {users.map((u) => (
          <User
            user={u}
            followingInProgress={props.followingInProgress}
            key={u.id}
            unfollow={props.unfollow}
            follow={props.follow}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
