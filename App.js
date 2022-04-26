import React, { useState } from "react";
import styles from "./App.module.css";

const Info = () => {
  const [data, setData] = useState(1);
  const increment = () => {
    setData(data + 1);
  };
  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center" }}>{data}</h1>
        <button onClick={increment}>COUNTER</button>
      </div>
      <h1 className={styles.main}>Virtual DOM</h1>
      <p>
        DOM is a document object model, created by converting HTML CSS and JS
        Real DOM, which is an object which gets created whenever any React
        application gets loaded on the screen for the first time., whenever
        React components gets mounted on the screen for the first time. Now when
        any user makes any changes on the screen like button click because of
        which the state variable will get updated so in this case the changes
        will not directly go to Real DOM , instead in react we have concept
        known Virtual DOM. So we are having two virtual doms, one virtual dom
        gets created at the time of mounting of react component so it is a copy
        of your real dom. Another virtual dom is the dom which contains the new
        changes, updated state variables values. Now these two virtual doms will
        get compared with each other and will check for the new changes. this
        complete procedure is known as diffing algorithm. Now the new changes
        will be updated in your Real dom. this procedure is known as
        Recoinciliation.
      </p>
      <button>Click Here</button>
    </div>
  );
};
export default Info;
