import React from "react";
import ucss from "./Users.module.css";
import unPhoto from "../img/withoutphoto.png";
import { Link } from "react-router-dom";

const User = ({ user, followingInProgress, follow, unfollow }) => {
  let u = user;
  return (
    <div>
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
                disabled={followingInProgress.some((id) => id === u.id)}
                onClick={() => {
                  unfollow(u.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={followingInProgress.some((id) => id === u.id)}
                onClick={() => {
                  follow(u.id);
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
    </div>
  );
};

export default User;
