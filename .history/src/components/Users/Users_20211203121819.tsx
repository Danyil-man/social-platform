import React, { FC } from "react";
import Paginator from "../../redux/selectors/Paginator";
import { UserType } from "../../redux/types/types";
import User from "./User";

interface PaginatorPropsType {
  totalUsers: number;
  pageSize: number;
  currentPage: number;
  portionSize?: number;
  users: Array<UserType>;
  followingInProgress: Array<number>;
  onPageChange: (pageNumber: number) => void;
  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
}

const Users: FC<PaginatorPropsType> = ({
  totalUsers,
  pageSize,
  currentPage,
  onPageChange,
  users,
  ...props
}) => {
  return (
    <>
      <div>

      </div>
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
    </>
  );
};

export const UserSearchForm = () => {
  return (
    <>

    </>
  )
}

export default Users;
