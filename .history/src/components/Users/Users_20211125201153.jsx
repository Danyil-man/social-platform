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

      {users.map((u) => <User user={u} key={u.id} followingInProgress={followingInProgress} unfollow={unfollow}  follow={follow/> 
        <div className={ucss.usersContent} key={u.id}>
          <div>
            <div>
              <Link to={"/profile/" + u.id}>
                <img
                  className={ucss.ava}
                  width={100}
                  src={u.photos.small != null ? u.photos.small : unPhoto}
                  alt="ava"
                />
              </Link>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>

          <div>
            <div>
              <p>{u.name}</p>
              <p>{u.status}</p>
            </div>
          </div>

          <div>
            <p>{"u.location.country"}</p>
            <p>{"u.location.city"}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
