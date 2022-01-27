import React from "react";
import style from "./paginator.module.css";

const Paginator = ({ totalUsers, pageSize, currentPage, onPageChange }) => {
  let pagesCount = Math.ceil(totalUsers / pageSize);

  let pagesArray = [];

  for (let i = 1; i <= pagesCount; i++) {
    pagesArray.push(i);
  }

  return (
    <div>
      {pagesArray.map((p) => {
        return (
          <span
            className={currentPage === p && style.currentPage}
            onClick={() => {
              onPageChange(p);
            }}
          >
            {p},
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
