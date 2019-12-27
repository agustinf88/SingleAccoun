import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";
import classnames from "classnames";
import PropTypes from "prop-types";
import "./movement.css";

const Movement = ({ date, value, key }) => {
  const classnameValue = classnames(
    "movement-value",
    { positive: value >= 0 },
    { negative: value < 0 }
  );
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <React.Fragment>
      <div className="movement" key={key} onClick={handleClick}>
        <Typography>{date}</Typography>
        <div className={classnameValue}>
          <Typography>$</Typography>
          <Typography>{value}</Typography>
        </div>
      </div>
      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
        onClick={handleClick}
        className="movement__details"
      >
        <div className="movement__date">
          <Typography>Date</Typography>
          <Typography>{date}</Typography>
        </div>
        <div className="movement__amount">
          <Typography>Amount</Typography>
          <div className={classnameValue}>
            <Typography>$</Typography>
            <Typography>{value}</Typography>
          </div>
        </div>
      </Collapse>
    </React.Fragment>
  );
};

Movement.propTypes = {
  date: PropTypes.string,
  value: PropTypes.number,
  key: PropTypes.number
};

export default Movement;
