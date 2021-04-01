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
  numberPageOfText
}) => {
  return /*#__PURE__*/React.createElement("span", {
    className: "footer-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "",
    onClick: () => previousPage()
  }, /*#__PURE__*/React.createElement("i", {
    className: "chevron"
  }, "<")), /*#__PURE__*/React.createElement("span", {
    className: "",
    onClick: () => nextPage()
  }, /*#__PURE__*/React.createElement("i", {
    className: "chevron"
  }, ">")), isRtl ? /*#__PURE__*/React.createElement("div", {
    className: "number-of-page-text"
  }, /*#__PURE__*/React.createElement("span", null, " ", page), /*#__PURE__*/React.createElement("span", null, " ", numberPageOfText ? numberPageOfText : "of", " "), /*#__PURE__*/React.createElement("span", null, " ", numberOfPage, " ")) : /*#__PURE__*/React.createElement("div", {
    className: "number-of-page-text"
  }, /*#__PURE__*/React.createElement("span", null, " ", page), /*#__PURE__*/React.createElement("span", null, " ", numberPageOfText ? numberPageOfText : "of", " "), /*#__PURE__*/React.createElement("span", null, " ", numberOfPage, " ")), /*#__PURE__*/React.createElement("span", {
    className: ""
  }, /*#__PURE__*/React.createElement("select", {
    value: numberPerPage,
    onChange: event => handleChange(event)
  }, numberInPages.map((option, i) => /*#__PURE__*/React.createElement("option", {
    key: i
  }, option)))));
};

export default FooterTableComponent;