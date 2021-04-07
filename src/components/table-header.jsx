import React from "react";

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
                <i className="up-caret"> &#9650;</i>
              ) : (
                <i className="down-caret">&#9660;</i>
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
