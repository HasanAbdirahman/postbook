import React from "react";

export default function Backdrop({ sidebar, closeSideBar }) {
  return (
    <div
      className={sidebar ? "Backdrop backdrop--open " : "Backdrop"}
      onClick={closeSideBar}
    ></div>
  );
}
