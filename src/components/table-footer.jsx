import React from "react";

const numberInPages = [5, 10, 20, 50, 100];

const FooterTableComponent = ({
  previousPage,
  nextPage,
  isRtl,
  page,
  numberOfPage,
  numberPerPage,
  handleChange,
  numberPageOfText,
}) => {
  return (
    <span className="footer-item">
      <span className="" onClick={() => previousPage()}>
        <i className="chevron">&#x3c;</i>
      </span>
      <span className="" onClick={() => nextPage()}>
        <i className="chevron">&#x3e;</i>
      </span>
      {isRtl ? (
        <div className="number-of-page-text">
          <span> {page}</span>
          <span> {numberPageOfText ? numberPageOfText : "of"} </span>
          <span> {numberOfPage} </span>
        </div>
      ) : (
        <div className="number-of-page-text">
          <span> {page}</span>
          <span> {numberPageOfText ? numberPageOfText : "of"} </span>
          <span> {numberOfPage} </span>
        </div>
      )}

      <span className="">
        <select value={numberPerPage} onChange={(event) => handleChange(event)}>
          {numberInPages.map((option, i) => (
            <option key={i}>{option}</option>
          ))}
        </select>
      </span>
    </span>
  );
};

export default FooterTableComponent;
