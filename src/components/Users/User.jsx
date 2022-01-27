import React from "react";
import ucss from "./Users.module.css";
import unPhoto from "../img/withoutphoto.png";
import { Link } from "react-router-dom";

const User = ({ user, followingInProgress, follow, unfollow }) => {
  return (
    <div>
      <div>
        <Link to={"/profile/" + user.id}>
          <img
            className={ucss.ava}
            width={100}
            src={user.photos.small != null ? user.photos.small : unPhoto}
            alt="ava"
          />
        </Link>
      </div>
      <div>
        {user.followed ? (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              unfollow(user.id);
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              follow(user.id);
            }}
          >
            Follow
          </button>
        )}
      </div>

      <div>
        <div>
          <p>{user.name}</p>
          <p>{user.status}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
