import React from "react";
import Paginator from "../../redux/selectors/Paginator";
import User from "./User";

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
        {users.map((u) => (
          <User user={u} followingInProgress={followingInProgress} />
        ))}
      </div>
    </div>
  );
};

export default Users;
