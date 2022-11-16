import React from "react";
import logo from "../image/logo-trashure.svg";

export default function Logo() {
  return (
    <img
      src={logo}
      className="App-logo"
      alt="logo"
      style={{ width: "83px", aspectRatio: "1" }}
    />
  );
}
