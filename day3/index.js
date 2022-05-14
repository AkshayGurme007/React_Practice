import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Navbar = (props) => {};

const Time = () => {
  const time = new Date().toLocaleTimeStrin();
  return <h1>Time:{time}</h1>;
};

setInterval(() => {
  root.render(
    <>
      <Time />
    </>
  ),
    1000;
});
