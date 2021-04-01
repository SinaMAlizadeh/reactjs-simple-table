import React from "react";
import Caret from "../assets/images/caret.png";

const HeaderTableComponent = ({
  columns,
  orderby,
  order,
  sort
}) => {
  return /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns?.map((item, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    onClick: () => item.field !== "" ? sort(item.field) : ""
  }, orderby === item.field ? order === "descending" ? /*#__PURE__*/React.createElement("img", {
    src: Caret,
    className: "down-caret",
    alt: "up-reactjs-simple-table-caret"
  }) : /*#__PURE__*/React.createElement("img", {
    src: Caret,
    className: "up-caret",
    alt: "down-reactjs-simple-table-caret"
  }) : "", item.headerName))));
};

export default HeaderTableComponent;