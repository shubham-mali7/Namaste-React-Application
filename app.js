/* <div id="parent">
<div id="child1">
    <h1>I am heading-1 in child 1</h1>
    <h2>I am heading-2 in child 1</h2>
</div>
<div id="child2">
    <h1>I am heading-1 in child 2</h1>
    <h2>I am heading-2 in child 2</h2>
</div>
</div> */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am heading-1 in child-1"),
    React.createElement("h2", {}, "I am heading-2 in child-1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am heading-1 in child-2"),
    React.createElement("h2", {}, "I am heading-2 in child-2"),
  ]),
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);