import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./form.css";

import { useDispatch } from "react-redux";

const Form = props => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_MOVEMENT", payload: { value: value } });
    setValue("");
  };

  const handleChange = e => setValue(e.target.value);

  return (
    <form className="form">
      <TextField
        id="standard-number"
        label="Ammount"
        type="number"
        value={value}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true
        }}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={handleSubmit}
      >
        Add
      </Button>
    </form>
  );
};

export default Form;
