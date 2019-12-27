import React from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import "./movement.css";

const Movement = ({ date, value, key }) => (
  <div className="movement" key={key}>
    <Typography>{date}</Typography>
    <div className="movement-value">
      <Typography>$</Typography>
      <Typography>{value}</Typography>
    </div>
  </div>
);

Movement.propTypes = {
  date: PropTypes.string,
  value: PropTypes.number,
  key: PropTypes.number
};

export default Movement;
