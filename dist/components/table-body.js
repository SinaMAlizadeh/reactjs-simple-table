import React, { useEffect } from "react";

const BodyTableComponent = ({
  data,
  columnsData
}) => {
  useEffect(() => {
    debugger;
    const x = data;
  }, []);
  return /*#__PURE__*/React.createElement("tbody", null, data?.map((item, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, columnsData?.map((col, j) => {
    //if (col.type === "text") {
    return /*#__PURE__*/React.createElement("td", {
      key: j
    }, /*#__PURE__*/React.createElement("span", null, item[col.field])); // } else if (col.type === "") {
    //   return <td key={j}></td>;
    //} else {
    //  return <td key={j}></td>;
    //}
  }))));
};

export default BodyTableComponent;