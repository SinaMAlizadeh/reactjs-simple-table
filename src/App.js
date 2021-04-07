import React, { useEffect, useState } from "react";
import SimpleTableComponent from "./components/simple-table";
import ServerSimpleTableComponent from "./components/server-simple-table";
const columns = [
  {
    field: "id",
    headerName: "id",
  },
  {
    field: "name",
    headerName: "name",
  },
  {
    field: "username",
    headerName: "username",
  },
  {
    field: "email",
    headerName: "email",
  },
];

function App() {
  const [list, setList] = useState([]);

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/users`)
  //     .then((response) => response.json())
  //     .then((json) => setList(json));
  // }, []);

  const tableData = (item) => {
    console.log(item);
    fetch(
      `https://jsonplaceholder.typicode.com/users?_start=${
        item.page * item.numberPerPage
      }&_limit=${item.numberPerPage}`
    )
      .then((response) => response.json())
      .then((json) => setList(json));
  };

  return (
    <div className="App">
      {/* <SimpleTableComponent columns={columns} list={list} /> */}
      <ServerSimpleTableComponent
        columns={columns}
        list={list}
        onGetData={tableData}
        total={1000}
      />
    </div>
  );
}

export default App;
