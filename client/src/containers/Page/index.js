import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";
import Movements from "../Movements";
import Snackbar from "../Snackbar";
import Balance from "../Balance";
import "./page.css";

import Form from "../Form";

const Page = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_ACCOUNT" });
  }, [props]);

  const name = useSelector(state => state.account.name);

  return (
    <React.Fragment>
      <AppBar>
        <Typography>{name}</Typography>
      </AppBar>
      <div className="body">
        <div className="form-container">
          <Form />
        </div>
        <div className="movements-container">
          <Balance />
          <Movements />
        </div>
      </div>
      <Snackbar />
    </React.Fragment>
  );
};

export default Page;
