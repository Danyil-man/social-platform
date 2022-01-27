import React from "react";

const Paginator = {
  totalUsers,
  pageSize,
  currentPage,
  onPageChange,
};

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
          className={currentPage === p && ucss.activePage}
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

export default Paginator;
