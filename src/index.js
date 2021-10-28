import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import Card from "./Card";
import { eskaters } from "./eskaters";

ReactDOM.render(
  <div>
    <Card
      id={eskaters[0].id}
      name={eskaters[0].name}
      email={eskaters[0].email}
    />
    <Card
      id={eskaters[1].id}
      name={eskaters[1].name}
      email={eskaters[1].email}
    />
    <Card
      id={eskaters[2].id}
      name={eskaters[2].name}
      email={eskaters[2].email}
    />
    <Card
      id={eskaters[3].id}
      name={eskaters[3].name}
      email={eskaters[3].email}
    />
    <Card
      id={eskaters[4].id}
      name={eskaters[4].name}
      email={eskaters[4].email}
    />
  </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
