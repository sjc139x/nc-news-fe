import React from "react";

function PageNumbers({ paginateArticles, numOfArticles }) {
  const numOfPages = Math.ceil(numOfArticles / 10);
  const pagesArray = Array.from(Array(numOfPages), (x, i) => (x = i + 1));

  return (
    <div>
      {pagesArray.map((page, i) => {
        return (
          <button
            onClick={e => paginateArticles(page)}
            className="PageNumbers-Buttons"
            key={i}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}

export default PageNumbers;
