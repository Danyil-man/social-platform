import React from "react";
import ucss from "./Users.module.css";
import unPhoto from "../img/withoutphoto.png";
import { Link } from "react-router-dom";
import axios from "axios";

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
                    disabled={props.followingInProgress.some( id => id  === u.id)}
                    onClick={() => {
                      props.setIsFollowing(true, u.id)
                      axios.delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "177ec334-a4ef-4c03-a9b8-ec3f7a86fcc5"
                          }
                        }
                      )
                      .then((response) => {
                        if(response.data.resultCode === 0){
                          props.unfollow(u.id)
                        } 
                        props.setIsFollowing(false, u.id)
                      });

                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                  disabled={props.followingInProgress.some( id => id === u.id)}
                    onClick={() => {
                      props.setIsFollowing(true, u.id)
                      axios.post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "177ec334-a4ef-4c03-a9b8-ec3f7a86fcc5"
                          }
                        }
                      )
                      .then((response) => {
                        if(response.data.resultCode === 0){
                          props.follow(u.id)
                        } 
                        props.setIsFollowing(false, u.id)
                      });

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