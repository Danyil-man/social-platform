import React, { useState } from "react";
import style from "./paginator.module.css";

const Paginator = ({ totalUsers, pageSize, currentPage, onPageChange }) => {
  let pagesCount = Math.ceil(totalUsers / pageSize);

  let pagesArray = [];

  for (let i = 1; i <= pagesCount; i++) {
    pagesArray.push(i);
  }

  let portionCount = Math.ceil(portionCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPage = (portionNumber - 1) * portionSize + 1;
  let rightPortionPage = portionNumber * portionSize;

  return (
    <div>
      {pagesArray.map((p) => {
        return (
          <span
            className={currentPage === p && style.activePage}
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
