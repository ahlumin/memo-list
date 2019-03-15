import React from "react";
import classnames from "classnames/bind";
import style from "./style.scss";
const cx = classnames.bind(style);

export default function Loading() {
  return <div className={cx("loading")} />;
}
