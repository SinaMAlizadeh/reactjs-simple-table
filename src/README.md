# React Simple Table

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

## User guide

| Prop name        | Description                                                                                                                                                  | Default value | Example values         |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------- | ---------------------- |
| total            | Total of list                                                                                                                                                | list.length() | 100                    |
| numberPerPage    | number of row in each page                                                                                                                                   | 10            | 5 , 10 , 20 , 50 , 100 |
| isRtl            | for support rtl language                                                                                                                                     | false         | true or false          |
| numberPageOfText | for change 'of' text in pagation                                                                                                                             | 'of'          | 'from' or 'از'         |
| tableClassName   | you can use your own class for table style , in this case you can add boostrap or other css file in your app and use table class name and change table style | 'myTable'     | 'table table-bordered' |

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
