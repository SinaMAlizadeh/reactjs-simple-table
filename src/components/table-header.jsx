import React from "react";
import Caret from "../assets/images/caret.png";

const HeaderTableComponent = ({ columns, orderby, order, sort }) => {
  return (
    <thead>
      <tr>
        {columns?.map((item, i) => (
          <th
            key={i}
            onClick={() => (item.field !== "" ? sort(item.field) : "")}
          >
            {orderby === item.field ? (
              order === "descending" ? (
                <img
                  src={Caret}
                  className="down-caret"
                  alt="up-reactjs-simple-table-caret"
                />
              ) : (
                <img
                  src={Caret}
                  className="up-caret"
                  alt="down-reactjs-simple-table-caret"
                />
              )
            ) : (
              ""
            )}
            {item.headerName}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default HeaderTableComponent;
