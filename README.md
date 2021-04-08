# React Simple Table

A simple and reusable table for React ([Demo](Https://Codesandbox.Io/S/Reactjs-Simple-Table-Pokzv "Demo"))

Server side table for React ([Demo](https://codesandbox.io/s/reactjs-simple-table-server-side-rul9w "Demo"))

## Installation

The package can be installed via NPM:

```
npm i reactjs-simple-table
```

## Usage

Import SimpleTableComponent for usage :

```js
import SimpleTableComponent from "reactjs-simple-table";
```

Define your column with filed variable and header name :

```js
const columns = [
  {
    field: "title",
    headerName: "Title",
  },
  {
    field: "number",
    headerName: "Amount",
  },
];
```

Get your list from Api or define your list :

```js
const list = [
  { title: "Michael", number: 1 },
  { title: "Lindsay", number: 10 },
  { title: "Tobias", number: 6 },
  { title: "Byron", number: 3 },
  { title: "George", number: 1 },
  { title: "Rachel", number: 10 },
  { title: "Lawson", number: 6 },
  { title: "Ferguson", number: 3 },
  { title: "Funke", number: 1 },
];
```

The most basic use of the simple table can be described with:

```js
<SimpleTableComponent columns={columns} list={list} />
```

```js
import SimpleTableComponent from "reactjs-simple-table";

const columns = [
  {
    field: "title",
    headerName: "Title",
  },
  {
    field: "number",
    headerName: "Amount",
  },
];

function App() {
  const list = [
    { title: "Michael", number: 1 },
    { title: "Lindsay", number: 10 },
    { title: "Tobias", number: 6 },
    { title: "Byron", number: 3 },
    { title: "George", number: 1 },
    { title: "Rachel", number: 10 },
    { title: "Lawson", number: 6 },
    { title: "Ferguson", number: 3 },
    { title: "Funke", number: 1 },
  ];
  return (
    <div className="App">
      <SimpleTableComponent columns={columns} list={list} />
    </div>
  );
}

export default App;
```

## Server Side Table

Import SimpleTableComponent for usage :

```js
import { ServerSimpleTableComponent } from "reactjs-simple-table";
```

For server side , define function for get table pagation , sorting and number of items in per page parameters then update table by new data.
each time you change any table feature like pagation,... onGetData will call and you can use table parameters :

```js
import React, { useState } from "react";
import "./styles.css";
import { ServerSimpleTableComponent } from "reactjs-simple-table";

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

export default function App() {
  const [list, setList] = useState([]);

  //function fo get table parameters
  const tableData = (item) => {
    //fetch data by filter parameters from table
    //item :
    // {
    // page : 1 ,
    // numberPerPage : 10 ,
    // order :  "ascending" or "descending",
    //orderby : "title"  *name of the field ,
    //}
    fetch(
      `https://yourServerUrl/users?page=${item.page}&pageSize=${item.numberPerPage}`
    ).then((response) => setList(json));
  };

  return (
    <div className="App">
      <ServerSimpleTableComponent
        columns={columns}
        list={list}
        onGetData={tableData}
        total={10}
        serverSideFiltering={false}
      />
    </div>
  );
}
```

## User guide

| Prop name           | Description                                                                                                                                                                                                                      | Default value | Example values         |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ---------------------- |
| total               | Total of list , for using sever side table is required                                                                                                                                                                           | list.length() | 100                    |
| numberPerPage       | number of row in each page                                                                                                                                                                                                       | 10            | 5 , 10 , 20 , 50 , 100 |
| isRtl               | for support rtl language                                                                                                                                                                                                         | false         | true or false          |
| numberPageOfText    | for change 'of' text in pagation                                                                                                                                                                                                 | 'of'          | 'from' or 'از'         |
| tableClassName      | you can use your own class for table style , in this case you can add boostrap or other css file in your app and use table class name and change table style                                                                     | 'myTable'     | 'table table-bordered' |
| serverSideFiltering | you can handle server side sorting by receive 'order' and 'orderby' parameters from changes of table features , if you want sorting one page data you can set serverSideFiltering to 'true' and sorting data without server call | false         | true or false          |

## Using Bootsrap

For using boostrap table class you can add boostrap css to Index.js or App.js , then add _tableClassName_ property in SimpleTableComponent and use your table class :

```
npm i bootstrap

```

```js
import SimpleTableComponent from "reactjs-simple-table";
import "bootstrap/dist/css/bootstrap.min.css";

const columns = [
  {
    field: "title",
    headerName: "Title",
  },
  {
    field: "number",
    headerName: "Amount",
  },
];

function App() {
  const list = [
    { title: "Michael", number: 1 },
    { title: "Lindsay", number: 10 },
    { title: "Tobias", number: 6 },
    { title: "Byron", number: 3 },
    { title: "George", number: 1 },
    { title: "Rachel", number: 10 },
    { title: "Lawson", number: 6 },
    { title: "Ferguson", number: 3 },
    { title: "Funke", number: 1 },
  ];
  return (
    <div className="App">
      <SimpleTableComponent
        columns={columns}
        list={list}
        tableClassName={"table table-bordered"}
      />
    </div>
  );
}

export default App;
```

You can use _table-responsive_ :

```js
<div class="table-responsive">
  <SimpleTableComponent
    columns={columns}
    list={list}
    tableClassName={"table table-bordered"}
  >
    ...
  </SimpleTableComponent>
</div>
```
