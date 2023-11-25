"use client";

import React, { useState, useEffect } from "react";
import popUpStyles from "./popUpMsg.module.css"; // Your CSS file

export interface loginResProp {
  status: string | number;
  msg: string;
}

export interface apiRes {
  loginRes: loginResProp;
  setLoginRes: any;
}

const PopUpMsg: React.FC<any> = ({ loginRes, setLoginRes }) => {
  const { status, msg } = loginRes;
  const [displayMessage, setDisplayMessage] = useState(true);

  useEffect(() => {
    // if (status === 200 || status === "success") {
    // setDisplayMessage(true);
    // console.log("the-->");
    setTimeout(() => {
      setDisplayMessage(false);
      setLoginRes(null);
    }, 1500);
    // }
  }, [status, displayMessage]);

  return (
    <div className={popUpStyles.darken_background}>
      <div
        className={`${popUpStyles.message} ${
          displayMessage ? `${popUpStyles.show}` : ""
        }`}
      >
        {(status === 200 || status === "success") && (
          <span className={popUpStyles.successText}>Successful</span>
        )}
        {status === 401 && (
          <span className={popUpStyles.errorText}>
            Provided credentials did not match try again
          </span>
        )}
        {status === 400 && msg === "Bad Request" && (
          <span className={popUpStyles.errorText}>
            Email id is already taken, try another email id
          </span>
        )}
        {status === 201 && (
          <span className={popUpStyles.successText}>Successfully Created</span>
        )}
        {status === "error" && (
          <span className={popUpStyles.errorText}>{msg}</span>
        )}
        {status === "updated" && (
          <span className={popUpStyles.successText}>{msg}</span>
        )}
      </div>
    </div>
  );
};

export default PopUpMsg;