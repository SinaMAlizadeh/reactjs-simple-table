import React, { useState, useEffect } from "react";
import "./simple-table.styles.css";
import BodyTableComponent from "./table-body";
import FooterTableComponent from "./table-footer";
import HeaderTableComponent from "./table-header";

const ServerSimpleTableComponent = ({
  columns,
  list,
  total,
  numberPerPage: numberPerPageTable,
  isRtl = false,
  numberPageOfText,
  tableClassName,
  onGetData,
}) => {
  const [data, setData] = useState([]);
  const [columnsData, setColumnsData] = useState([]);
  const [orderby, setOrderBy] = useState("");
  const [order, setOrder] = useState("");
  const [totalTable, setTotalTable] = useState(1);
  const [page, setPage] = useState(1);
  const [numberPerPage, setNumberPerPage] = useState(10);
  const [numberOfPage, setNumberOfPage] = useState(0);

  useEffect(() => {
    debugger;
    setColumnsData(columns);
    setTotalTable(total);
  }, []);

  useEffect(() => {
    debugger;
    setNumberPerPage(numberPerPageTable ? numberPerPageTable : 10);
    setNumberOfPage(Math.ceil(totalTable / numberPerPage));
  }, [totalTable]);

  useEffect(() => {
    debugger;
    setNumberPerPage(numberPerPage ? numberPerPage : 10);
    setNumberOfPage(Math.ceil(totalTable / numberPerPage));
  }, [numberPerPage]);

  useEffect(() => {
    setData(list);
  }, [list]);

  useEffect(() => {
    onGetData({
      page: page - 1,
      numberPerPage: numberPerPage,
      order: order == "descending" ? "ascending" : "descending",
      orderby: orderby,
      data: data,
    });
  }, [page, numberPerPage]);

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
    setNumberPerPage(e.target.value);
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

export default ServerSimpleTableComponent;
