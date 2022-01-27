import React from "react";
import ucss from "./Users.module.css";
import unPhoto from "../img/withoutphoto.png";
import { Link } from "react-router-dom";


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsers / props.pageSize);

    let pagesArray = [];

    for (let i = 1; i <= pagesCount; i++) {
      pagesArray.push(i);
    }

    return(
        <div>
        <div>
          {pagesArray.map(p => {
            return(
                <span
                className={props.currentPage === p && ucss.activePage}
                onClick={()=>{props.onPageChange(p)}}>
                {p}, 
              </span>
            ) 
          })}
        </div>
        {props.users.map((u) => (
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
                    disabled={props.followingInProgress.some(id => id === u.id)}
                    onClick={() => {
                      props.(u.id)
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                  disabled={props.followingInProgress.some(id => id === u.id)}
                    onClick={() => {
                      props.follow(u.id)
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
        ))}
      </div>
    )
}

export default Users;