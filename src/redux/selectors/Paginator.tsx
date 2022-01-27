import React, { FC, useState } from "react";

import style from "./paginator.module.css";

interface PaginatorPropsType {
  totalUsers: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
  portionSize?: number;
}

const Paginator: FC<PaginatorPropsType> = ({
  totalUsers,
  pageSize,
  currentPage,
  onPageChange,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalUsers / pageSize);

  let pagesArray: Array<number> = [];

  for (let i = 1; i <= pagesCount; i++) {
    pagesArray.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPage = (portionNumber - 1) * portionSize + 1;
  let rightPortionPage = portionNumber * portionSize;

  return (
    <div className={style.paginator__wrapper}>
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
            <div className={style.pageitem}>
              <span
                className={`${currentPage === p} && ${style.activePage}`}
                onClick={() => {
                  onPageChange(p);
                }}
              >
                {p}
              </span>
            </div>
          );
        })}
      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Paginator;
