import React from "react";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import "./balance.css";

const Balance = props => {
  const balance = useSelector(state => state.account.balance);

  return (
    <div className={"balance"}>
      <Typography>{`Balance: $ ${balance}`}</Typography>
    </div>
  );
};


export default Balance;
