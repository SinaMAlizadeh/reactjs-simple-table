import React from "react";

const BodyTableComponent = ({ data, columnsData }) => {
  return (
    <tbody>
      {data?.map((item, i) => (
        <tr key={i}>
          {columnsData?.map((col, j) => {
            //if (col.type === "text") {
            return (
              <td key={j}>
                <span>{item[col.field]}</span>
              </td>
            );
            // } else if (col.type === "") {
            //   return <td key={j}></td>;
            //} else {
            //  return <td key={j}></td>;
            //}
          })}
        </tr>
      ))}
    </tbody>
  );
};

export default BodyTableComponent;
