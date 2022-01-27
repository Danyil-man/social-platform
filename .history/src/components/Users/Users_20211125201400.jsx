import React from "react";
import ucss from "./Users.module.css";
import unPhoto from "../img/withoutphoto.png";
import { Link } from "react-router-dom";
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

      {users.map((u) => <User user={u} key={u.id} followingInProgress={followingInProgress} 
      unfollow={unfollow}  follow={follow}
      />) 
  }
  );
  </div>
};

export default Users;
