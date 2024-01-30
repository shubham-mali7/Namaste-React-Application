import React from "react";
import ReactDOM from "react-dom/client"

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am learning Namaste-React"),
    React.createElement("h2", {}, "from my mentor - Akshay Saini"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am Shubham"),
    React.createElement("h2", {}, "A Front-end Developer "),
  ]),
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);