import React, { useState, useEffect } from "react";
import "./simple-table.styles.css";
import BodyTableComponent from "./table-body";
import FooterTableComponent from "./table-footer";
import HeaderTableComponent from "./table-header";

const SimpleTableComponent = ({
  columns,
  list,
  total,
  numberPerPage: numberPerPageTable,
  isRtl = false,
  numberPageOfText,
  tableClassName,
}) => {
  const [data, setData] = useState([]);
  const [columnsData, setColumnsData] = useState([]);
  const [orderby, setOrderBy] = useState("");
  const [order, setOrder] = useState("descending");
  const [totalTable, setTotalTable] = useState(1);
  const [page, setPage] = useState(1);
  const [numberPerPage, setNumberPerPage] = useState(10);
  const [numberOfPage, setNumberOfPage] = useState(0);

  useEffect(() => {
    setColumnsData(columns);
  }, [columns]);

  useEffect(() => {
    debugger;
    const x = list?.length;
    setTotalTable(total ? total : list?.length);
    setNumberPerPage(numberPerPageTable ? numberPerPageTable : 10);
  }, [list, numberPerPageTable, total]);

  useEffect(() => {
    debugger;
    setNumberOfPage(Math.ceil(totalTable / numberPerPage));
    setData(list?.slice((page - 1) * numberPerPage, page * numberPerPage));
  }, [totalTable, numberPerPage, page, list]);

  const sort = (item) => {
    setOrderBy(item);
    let orderTemp = "descending";
    if (item === orderby && order === "descending") {
      orderTemp = "ascending";
    }

    if (orderTemp === "descending") {
      setData(
        list
          .sort((a, b) => (a[item] > b[item] ? 1 : -1))
          .slice((page - 1) * numberPerPage, page * numberPerPage)
      );
    } else {
      setData(
        list
          .sort((a, b) => (a[item] < b[item] ? 1 : -1))
          .slice((page - 1) * numberPerPage, page * numberPerPage)
      );
    }

    setOrder(orderTemp);
  };

  const nextPage = () => {
    if (page + 1 <= numberOfPage) {
      setPage(page + 1);
    }
  };

  const previousPage = () => {
    if (page - 1 >= 1) {
      setPage(page - 1);
    }
  };

  const handleChange = (e) => {
    debugger;
    let x = e.target.value;
    setNumberPerPage(x);
    setPage(1);
  };

  return (
    <div className={isRtl ? "rtl" : "ltr"}>
      <div className="">
        <table className={tableClassName ? tableClassName : "mytable"}>
          <HeaderTableComponent
            columns={columns}
            orderby={orderby}
            order={order}
            sort={sort}
          />
          <BodyTableComponent data={data} columnsData={columnsData} />
        </table>
      </div>
      <FooterTableComponent
        previousPage={previousPage}
        nextPage={nextPage}
        isRtl={isRtl}
        page={page}
        numberOfPage={numberOfPage}
        numberPerPage={numberPerPage}
        handleChange={handleChange}
        numberPageOfText={numberPageOfText}
      />
    </div>
  );
};

export default SimpleTableComponent;
