import React from "react";

const Pagination = ({dataPerPage, totalData, Paginate, currentPage, nextPage, previousPage}) => {
  const pageNumbers = [];
  for (let i = 0; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }
  const handleNextPage = () => {
    if (currentPage > pageNumbers.length) {
      alert("No more results to show , please go back");
    } else {
      nextPage();
    }
  };
  const handlePrevious = () => {
    if (currentPage < 0) {
      alert("No more results to show , please go back");
    } else {
      previousPage();
    }
  };
  return (
    <>
      <nav id="p-nav">
        <span id="back" onClick={() => handlePrevious()}>
          {"<<"}
        </span>
        <ul id="pagination">
          {pageNumbers.map((number, index) => (
            <li key={number}>
              <a onClick={() => Paginate(number)} href="!#">
                {number}
              </a>
            </li>
          ))}
        </ul>
        <span id="next" onClick={() => handleNextPage()}>
          {">>"}
        </span>
      </nav>
      <span id="last-text">
        Showing {currentPage} - {pageNumbers.length} of {pageNumbers.length}
      </span>
    </>
  );
};

export default Pagination;
