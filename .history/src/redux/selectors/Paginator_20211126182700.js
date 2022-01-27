import React, { useState } from "react";
import style from "./paginator.module.css";

const Paginator = ({
  totalUsers,
  pageSize,
  currentPage,
  onPageChange,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalUsers / pageSize);

  let pagesArray = [];

  for (let i = 1; i <= pagesCount; i++) {
    pagesArray.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPage = (portionNumber - 1) * portionSize + 1;
  let rightPortionPage = portionNumber * portionSize;

  return (
    <div>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          Prev
        </button>
      )}
      {pagesArray
        .filter((p) => p >= leftPortionPage && p <= rightPortionPage)
        .map((p) => {
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
